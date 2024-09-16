const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/db');

class Usuario extends Model { }

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Roles',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Usuario',
    timestamps: false,
    freezeTableName: true,
});

module.exports = Usuario;
