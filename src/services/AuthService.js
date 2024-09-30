const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const AuthService = {
  secretKey: process.env.SECRET_KEY,
  expiresIn: "1h",
  algorithm: process.env.ALGORITHM,

  generateToken: function (payload) {
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