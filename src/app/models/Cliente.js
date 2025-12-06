import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';

class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: { isEmail: true },
        },
        senha: DataTypes.VIRTUAL,
        senha_hash: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        saldo: {
          type: DataTypes.FLOAT,
          defaultValue: 0.0,
        },
      },
      {
        sequelize,
        modelName: 'Cliente',
      }
    );

    this.addHook('beforeSave', async (cliente) => {
      if (cliente.senha) {
        cliente.senha_hash = await bcrypt.hash(cliente.senha, 8);
      }
    });

    return this;
  }

  checkPassword(senha) {
    return bcrypt.compare(senha, this.senha_hash);
  }

  static associate(models) {
    this.hasMany(models.Pedido, { foreignKey: 'cliente_id' });
  }
}

export default Cliente;
