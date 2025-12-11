import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';

class Usuario extends Model {
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
        funcao: {
          type: DataTypes.STRING,
          defaultValue: 'usuario',
        },
      },
      {
        sequelize,
        modelName: 'Usuario',
      }
    );

    this.addHook('beforeSave', async (usuario) => {
      if (usuario.senha) {
        usuario.senha_hash = await bcrypt.hash(usuario.senha, 8);
      }
    });

    return this;
  }

  checkPassword(senha) {
    return bcrypt.compare(senha, this.senha_hash);
  }

  static associate(models) {
    this.hasMany(models.Pedido, { foreignKey: 'usuario_id' });
  }
}

export default Usuario;