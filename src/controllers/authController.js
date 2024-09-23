const Usuario = require("../models/Usuario");
const AuthService = require("../services/AuthService");
const { hashPassword, comparePassword } = require("../utils/encrypt");

/**
 * Registra un nuevo usuario en el sistema.
 *
 * @param {Object} req - El objeto de solicitud Express.
 * @param {Object} res - El objeto de respuesta Express.
 * @returns {Promise<void>} - Una promesa que se resuelve cuando se completa el registro.
 */
exports.register = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    const existingUser = await Usuario.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await Usuario.create({
      nombre,
      email,
      password: hashedPassword,
      rolId: 2,
    });

    const token = AuthService.generateToken({
      id: newUser.id,
      email: newUser.email,
    });

    res.status(201).json({ message: "Usuario registrado", token });
  } catch (error) {
    res.status(500).json({
      message: "Error al registrar el usuario, consulte a Soporte",
      error: error.message,
    });
  }
};

/**
 * Inicia sesión de un usuario en el sistema.
 *
 * @param {Object} req - El objeto de solicitud Express.
 * @param {Object} res - El objeto de respuesta Express.
 * @returns {Promise<void>} - Una promesa que se resuelve cuando se completa el inicio de sesión.
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Usuario.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const token = AuthService.generateToken({ id: user.id, email: user.email });

    res.json({ message: "Bienvenido " + user, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al iniciar sesion", error: error.message });
  }
};
