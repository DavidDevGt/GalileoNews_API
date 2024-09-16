const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/db');

class NoticiaEvento extends Model { }

NoticiaEvento.init({
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
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categoria',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'NoticiaEvento',
    timestamps: true,
    freezeTableName: true,
});

module.exports = NoticiaEvento;
