const Usuario = require("../models/Usuario");
const AuthService = require("../services/AuthService");
const { hashPassword, comparePassword } = require("../utils/encrypt");
const passport = require("passport");

/**
 * Registra un nuevo usuario en el sistema.
 *
 * @param {Object} req - El objeto de solicitud Express.
 * @param {Object} res - El objeto de respuesta Express.
 * @returns {Promise<void>} - Una promesa que se resuelve cuando se completa el registro.
 */
exports.register = async (req, res) => {
  try {
    console.log("Iniciando registro de usuario");
    const { username, email, password } = req.body;

    console.log("Datos recibidos:", { username, email, password: "***" });

    try {
      const existingUser = await Usuario.findOne({ where: { email } });
      console.log("Búsqueda de usuario existente completada");

      if (existingUser) {
        console.log("Usuario ya existe");
        return res.status(400).json({ message: "El usuario ya existe" });
      }
    } catch (dbError) {
      console.error("Error al buscar usuario existente:", dbError);
      throw new Error("Error en la base de datos al buscar usuario");
    }

    let hashedPassword;
    try {
      hashedPassword = await hashPassword(password);
      console.log("Contraseña hasheada correctamente");
    } catch (hashError) {
      console.error("Error al hashear la contraseña:", hashError);
      throw new Error("Error al procesar la contraseña");
    }

    let newUser;
    try {
      newUser = await Usuario.create({
        username,
        email,
        password: hashedPassword,
        rol_id: 2,
      });
      console.log("Nuevo usuario creado:", newUser.id);
    } catch (createError) {
      console.error("Error al crear nuevo usuario:", createError);
      throw new Error("Error al crear el usuario en la base de datos");
    }

    let token;
    try {
      token = AuthService.generateToken({
        id: newUser.id,
        email: newUser.email,
      });
      console.log("Token generado correctamente");
    } catch (tokenError) {
      console.error("Error al generar el token:", tokenError);
      throw new Error("Error al generar el token de autenticación");
    }

    console.log("Registro completado con éxito");
    res.status(201).json({ message: "Usuario registrado", token });
  } catch (error) {
    console.error("Error general en el registro:", error);
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
      return res.status(401).json({ message: "Correo electrónico no registrado" });
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = AuthService.generateToken({ id: user.id, email: user.email });

    res.json({ message: "Bienvenido " + user.username, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al iniciar sesion", error: error.message });
  }
};

exports.googleLogin = passport.authenticate('google', {
  scope: ['profile', 'email']
})

exports.googleCallback = passport.authenticate('google', {
  failureRedirect: '/auth/failure',
  successRedirect: '/auth/success'
});

exports.googleSuccess = (req, res) => {
  if (req.user) {
    const token = authService.generateToken({ id: req.user.id, email: req.user.email });
    res.json({ message: `Bienvenido ${req.user.username}`, token });
  } else {
    res.status(401).json({ message: 'Usuario no autenticado' });
  }
};

// Ruta de fallo para Google
exports.googleFailure = (req, res) => {
  res.status(401).json({ message: 'Falló el inicio de sesión con Google' });
};