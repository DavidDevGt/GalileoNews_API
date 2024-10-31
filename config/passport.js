const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { Usuario } = require("../src/models/Usuario");
const authService = require("../src/services/AuthService");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      callbackURL: "/auth/google/callback",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    async (accessToken, refreshToken, profile, done) => {
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
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((usuario, done) => {
    done(null, usuario.id);
})

passport.deserializeUser(async (id, done) => {
  try {
    const usuario = await Usuario.findByPk(id);
    done(null, usuario);
  } catch (error) {
    done(error, null);
  }
});
