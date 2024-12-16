'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      unit: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      stocks: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
     // Tambahkan Foreign Key Constraint untuk category_id
    await queryInterface.addConstraint('products', {
        fields: ['category_id'],
        type: 'foreign key',
        name: 'fk_products_category',
        references: {
          table: 'categories',
          field: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  },
};
