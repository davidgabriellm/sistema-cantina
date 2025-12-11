import { Sequelize } from 'sequelize';
import config from '../config/database.js';

import Cliente from '../app/models/Cliente.js';
import Pedido from '../app/models/Pedido.js';
import Produto from '../app/models/Produto.js';
import ItemPedido from '../app/models/ItemPedido.js';

const models = [Cliente, Pedido, Produto, ItemPedido];

class Database {
  constructor() {
    this.connection = new Sequelize(config);

    this.initModels();
    this.assosiate();
  }
  initModels() {
    models.forEach(model => model.init(this.connection));
  }
  assosiate() {
    models.forEach(model => {
      if (model.associate) model.associate(this.connection.models);
    });
  }
}

export default new Database();
