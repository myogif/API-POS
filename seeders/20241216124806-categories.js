'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Minuman',
        description: ' Segala Hal tentang minuman',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Sayuran',
        description: 'Sayuran',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Snacks',
        description: 'Snacks',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
