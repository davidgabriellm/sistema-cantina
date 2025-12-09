'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [
      {
        nome: 'Jean Marcos',
        email: 'jean@example.com',
        senha_hash: 'hash-ficticia-1',
        saldo: 100.00,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'David Gabriel',
        email: 'david@example.com',
        senha_hash: 'hash-ficticia-2',
        saldo: 50.00,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Pedro Lima',
        email: 'pedro@example.com',
        senha_hash: 'hash-ficticia-3',
        saldo: 75.00,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};
