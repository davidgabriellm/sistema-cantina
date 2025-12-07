import { Sequelize } from 'sequelize';
import config from '../config/database';

import Cliente from '../app/models/Cliente';
import Pedido from '../app/models/Pedido';
import Produto from '../app/models/Produto';
import ItemPedido from '../app/models/ItemPedido';

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
