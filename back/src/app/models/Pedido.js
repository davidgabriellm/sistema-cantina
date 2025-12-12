import { Model, DataTypes } from 'sequelize';

class Pedido extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        total: DataTypes.DECIMAL(10, 2),
        data_pedido: DataTypes.DATE,
      },
      {
        sequelize,
        tableName: 'pedidos',
        underscored: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: 'cliente_id', as: 'cliente' });

    this.hasMany(models.ItemPedido, {
      foreignKey: 'pedido_id',
      as: 'itens'
    });
  }
}

export default Pedido;
