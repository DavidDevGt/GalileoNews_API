'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LinkContacto', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      noticia_evento_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'NoticiaEvento',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      ingeniero_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Ingeniero',
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      pensum_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Pensum',
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LinkContacto');
  }
};