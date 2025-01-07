const AuthService = require("../services/AuthService");

const authMiddleware = async (req, res, next) => {
  // Excluir rutas públicas
  const publicRoutes = ["/auth/login", "/auth/register"];
  if (publicRoutes.includes(req.path)) {
    return next(); // No aplica autenticación en rutas públicas
  }

  // Validar token
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "No existe token" });
  }

  try {
    const decoded = AuthService.verifyToken(token);
    req.user = decoded; // Adjuntar información del usuario al request
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token no válido" });
  }
};

module.exports = authMiddleware;
