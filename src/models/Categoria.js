const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/db');

class Categoria extends Model { }

Categoria.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Categoria',
    timestamps: false,
    freezeTableName: true,
});

module.exports = Categoria;
