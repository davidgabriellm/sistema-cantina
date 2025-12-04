const Sequelize = require('sequelize');
const database = require('../database');

const Produto = database.define('produto', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    nome: { type: Sequelize.STRING, allowNull: false },
    preco: { type: Sequelize.FLOAT, allowNull: false },
    ativo: { type: Sequelize.BOOLEAN, defaultValue: true } 
});

module.exports = Produto;