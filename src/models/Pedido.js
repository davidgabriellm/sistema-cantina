const Sequelize = require('sequelize');
const database = require('../database');
const Cliente = require('./Cliente');
const Produto = require('./Produto');

const Pedido = database.define('pedido', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    total: { type: Sequelize.FLOAT, defaultValue: 0.0 },
    status: {
        type: Sequelize.ENUM('aberto', 'pago', 'cancelado'),
        defaultValue: 'aberto'
    },
    dataPedido: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
});

const ItemPedido = database.define('item_pedido', {
    quantidade: { type: Sequelize.INTEGER, allowNull: false },
    precoUnitario: { type: Sequelize.FLOAT, allowNull: false }
});

Cliente.hasMany(Pedido);
Pedido.belongsTo(Cliente);

Pedido.belongsToMany(Produto, { through: ItemPedido });
Produto.belongsToMany(Pedido, { through: ItemPedido });

module.exports = { Pedido, ItemPedido, Cliente, Produto }