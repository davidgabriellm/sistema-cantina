import { Model, DataTypes } from "sequelize";

class Pedido extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        total: {
          type: DataTypes.FLOAT,
          defaultValue: 0.0,
        },
        status: {
          type: DataTypes.ENUM("aberto", "pago", "cancelado"),
          defaultValue: "aberto",
        },
        dataPedido: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        modelName: "Pedido",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: "cliente_id" });

    this.belongsToMany(models.Produto, {
      through: models.ItemPedido,
      foreignKey: "pedido_id",
    });
  }
}

export default Pedido;