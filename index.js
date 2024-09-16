const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const rolRoutes = require('./src/routes/rolRoutes');

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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
