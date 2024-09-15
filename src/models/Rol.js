const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/db');

class Rol extends Model { }

Rol.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'Rol',
    timestamps: false
});

module.exports = Rol;