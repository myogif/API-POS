'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Pastikan ID Categories sudah sesuai dengan seeder Categories
    await queryInterface.bulkInsert('products', [
      {
        category_id: 1, 
        name: 'Aqua 600 ml',
        price: 3000,
        unit: 'pcs',
        stocks: 50,
        code: '1188299',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 1,
        name: 'Aqua 1500 ml',
        price: 60000,
        unit: 'pcs',
        stocks: 30,
        code: '1100128882',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 2, 
        name: 'Sawi',
        price: 1000,
        unit: 'pcs',
        stocks: 20,
        code: '112882',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 3,
        name: 'Beng Beng',
        price: 2500,
        unit: 'pcs',
        stocks: 100,
        code: '11188829',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
