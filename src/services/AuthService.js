const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const AuthService = {
  get secretKey() {
    return process.env.SECRET_JWT;
  },
  expiresIn: "1h",
  get algorithm() {
    return process.env.ALGORITHM;
  },

  generateToken: function (payload) {
    if (!this.secretKey) {
      throw new Error(
        "SECRET_KEY no está definida en las variables de entorno",
      );
    }
    if (!this.algorithm) {
      throw new Error("ALGORITHM no está definida en las variables de entorno");
    }
    return jwt.sign(payload, this.secretKey, {
      expiresIn: this.expiresIn,
      algorithm: this.algorithm,
    });
  },

  verifyToken: function (token) {
    if (!token) {
      throw new Error("No se proporcionó un token de autenticación");
    }
    return jwt.verify(token, this.secretKey);
  },
};

module.exports = AuthService;
