const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const Usuario = require("../src/models/Usuario");
const authService = require("../src/services/AuthService");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google/callback",
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;
        let usuario = await Usuario.findOne({ where: { email } });

        if (!usuario) {
          usuario = await Usuario.create({
            email,
            username: profile.displayName,
            googleId: profile.id,
          });
        } else if (!usuario.googleId) {
          usuario.googleId = profile.id;
          await usuario.save();
        }

        return done(null, usuario);
      } catch (error) {
        console.error("Error en la autenticación de Google:", error);
        return done(error, null);
      }
    }
  )
);

module.exports = passport;
