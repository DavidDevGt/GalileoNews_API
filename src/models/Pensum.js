const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/db');

class Pensum extends Model { }

Pensum.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    url_documento: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Pensum',
    timestamps: false,
    freezeTableName: true,
});

module.exports = Pensum;
