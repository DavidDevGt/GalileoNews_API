const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const { connectDB } = require("./config/db");

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

app.get("/", (req, res) => {
  res.send("Galileo News API v0.1");
});

app.use("/api/auth", authRoutes);
app.use("/api/roles", rolRoutes);
app.use("/api/usuarios", userRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/ingenieros", ingenieroRoutes);
app.use("/api/link-contactos", linkContactoRoutes);
app.use("/api/noticias-eventos", noticiaEventoRoutes);
app.use("/api/pensums", pensumRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
