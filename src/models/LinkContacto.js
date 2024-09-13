const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/db');

class LinkContacto extends Model { }

LinkContacto.init({
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
        type: DataTypes.TEXT,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    noticia_evento_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'LinkContacto',
    timestamps: false
});

module.exports = LinkContacto;
