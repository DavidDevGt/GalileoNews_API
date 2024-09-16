const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado con MySQL');
    } catch (error) {
        console.error('Error al conectar la db:', error);
    }
};

module.exports = { sequelize, connectDB };
