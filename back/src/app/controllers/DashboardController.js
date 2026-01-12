import Pedido from '../models/Pedido.js';
import Cliente from '../models/Cliente.js';
import { Op } from 'sequelize';

class DashboardController {
  async index(req, res) {
    const inicioMes = new Date();
    inicioMes.setDate(1);
    inicioMes.setHours(0, 0, 0, 0);

    const hojeInicio = new Date();
    hojeInicio.setHours(0, 0, 0, 0);

    const hojeFim = new Date();
    hojeFim.setHours(23, 59, 59, 999);

    const totalMes = await Pedido.sum('total', {
      where: {
        status: 'pago',
        created_at: { [Op.gte]: inicioMes },
      },
    });

    const novosClientesMes = await Cliente.count({
      where: {
        created_at: { [Op.gte]: inicioMes },
      },
    });

    const pedidosHoje = await Pedido.count({
      where: {
        created_at: {
          [Op.between]: [hojeInicio, hojeFim],
        },
      },
    });

    const clientesHoje = await Cliente.findAll({
      where: {
        created_at: {
          [Op.between]: [hojeInicio, hojeFim],
        },
      },
      order: [['created_at', 'DESC']],
    });

    const pedidosMes = await Pedido.count({
      where: {
        created_at: { [Op.gte]: inicioMes },
      },
    });

    return res.json({
      totalMes: totalMes || 0,
      novosClientesMes,
      pedidosHoje,
      pedidosMes,
      clientesHoje,
    });
  }
}

export default new DashboardController();
