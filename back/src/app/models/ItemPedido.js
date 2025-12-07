import { Model, DataTypes } from "sequelize";

class ItemPedido extends Model {
  static init(sequelize) {
    return super.init(
      {
        quantidade: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        precoUnitario: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "ItemPedido",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Pedido, { foreignKey: "pedido_id" });
    this.belongsTo(models.Produto, { foreignKey: "produto_id" });
  }
}

export default ItemPedido;
