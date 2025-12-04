const Sequelize = require('sequelize');
const database = require('../database');

const Cliente = database.define('cliente', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    nome: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false, validate: { isEmail: true } },
    saldo: { type: Sequelize.FLOAT, defaultValue: 0.0 }
});

module.exports = Cliente;