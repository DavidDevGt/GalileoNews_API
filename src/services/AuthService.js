const dotenv = require("dotenv");
dotenv.config(); // Carga las variables de entorno

const jwt = require("jsonwebtoken");

const AuthService = {
  secretKey: process.env.SECRET_KEY || "defaultSecret", // Añade un valor por defecto en caso de que no se cargue
  expiresIn: process.env.JWT_EXPIRATION || "1h", // Usa la variable de entorno JWT_EXPIRATION o un valor por defecto
  algorithm: process.env.JWT_ALGORITHM || "HS256", // Usa la variable de entorno JWT_ALGORITHM o un valor por defecto

  generateToken: function (payload) {
    if (!this.secretKey) {
      throw new Error("SECRET_KEY no está definida en las variables de entorno");
    }
    return jwt.sign(payload, this.secretKey, {
      expiresIn: this.expiresIn,
      algorithm: this.algorithm,
    });
  },

  verifyToken: function (token) {
    return jwt.verify(token, this.secretKey);
  },
};

module.exports = AuthService;