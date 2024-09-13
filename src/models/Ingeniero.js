const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/db');

class Ingeniero extends Model { }

Ingeniero.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Ingeniero',
    timestamps: false
});

module.exports = Ingeniero;
