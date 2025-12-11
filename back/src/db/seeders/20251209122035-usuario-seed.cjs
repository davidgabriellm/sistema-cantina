'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'Jean Marcos',
        email: 'jean@example.com',
        senha: 'hash-ficticia-1',
        funcao: 'Analista',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'David Gabriel',
        email: 'david@example.com',
        senha: 'hash-ficticia-2',
        funcao: 'Desenvolvedor',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Pedro Lima',
        email: 'pedro@example.com',
        senha: 'hash-ficticia-3',
        funcao: 'Estagiário',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
