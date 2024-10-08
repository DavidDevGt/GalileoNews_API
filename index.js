const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

// Middleware
const authMiddleware = require("./src/middleware/authMiddleware");

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

app.use(cors());
app.use(express.json());

// Serve Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("Galileo News API v0.1");
});

app.use("/auth", authRoutes);
app.use("/api/roles", authMiddleware, rolRoutes);
app.use("/api/usuarios", authMiddleware, userRoutes);
app.use("/api/categorias", authMiddleware, categoriaRoutes);
app.use("/api/ingenieros", authMiddleware, ingenieroRoutes);
app.use("/api/link-contactos", authMiddleware, linkContactoRoutes);
app.use("/api/noticias-eventos", authMiddleware, noticiaEventoRoutes);
app.use("/api/pensums", authMiddleware, pensumRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
