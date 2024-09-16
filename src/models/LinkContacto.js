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
        allowNull: true,
        references: {
            model: 'NoticiaEventos',
            key: 'id'
        }
    },
    ingeniero_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Ingeniero',
            key: 'id'
        }
    },
    pensum_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Pensum',
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'LinkContacto',
    timestamps: false,
    freezeTableName: true,
});

module.exports = LinkContacto;
