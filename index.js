const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const logger = require("./logger");
const authMiddleware = require("./src/middleware/authMiddleware");
const passport = require("passport");
require("./config/passport");

// Routes
const rolRoutes = require("./src/routes/rolRoutes");
const userRoutes = require("./src/routes/usuarioRoutes");
const categoriaRoutes = require("./src/routes/categoriaRoutes");
const ingenieroRoutes = require("./src/routes/ingenieroRoutes");
const linkContactoRoutes = require("./src/routes/linkContactoRoutes");
const noticiaEventoRoutes = require("./src/routes/noticiaEventoRoutes");
const pensumRoutes = require("./src/routes/pensumRoutes");
const authRoutes = require("./src/routes/authRoutes");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      process.env.FRONTEND_URL, // http://localhost:8100
      'https://localhost',      // Permite también HTTPS en localhost
    ];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};


app.use(cors(corsOptions));
app.use(express.json());

// Passport
app.use(passport.initialize());

// Middleware de registro de llamadas de API
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const responseTime = Date.now() - start;
    logger.logAPICall(req, res, responseTime);
  });
  next();
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("Galileo News API v0.1");
});

// Rutas públicas
app.use("/auth", authRoutes);

app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  authMiddleware(req, res, next);
});

// Rutas protegidas
app.use("/api/roles", rolRoutes);
app.use("/api/usuarios", userRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/ingenieros", ingenieroRoutes);
app.use("/api/link-contactos", linkContactoRoutes);
app.use("/api/noticias-eventos", noticiaEventoRoutes);
app.use("/api/pensums", pensumRoutes);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  logger.logError(err, req);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
  logger.info(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});

process.on("uncaughtException", (error) => {
  logger.error("Uncaught Exception:", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  logger.error("Unhandled Rejection at:", promise, "reason:", reason);
});
