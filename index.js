const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const { connectDB } = require('./config/db');

// Routes
const rolRoutes = require('./src/routes/rolRoutes');
const userRoutes = require('./src/routes/usuarioRoutes');
const categoriaRoutes = require('./src/routes/categoriaRoutes');

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Galileo News API v0.1');
});

app.use('/api/roles', rolRoutes);
app.use('/api/usuarios', userRoutes);
app.use('/api/categorias', categoriaRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
