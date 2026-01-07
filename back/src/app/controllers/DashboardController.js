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

    return res.json({
      totalMes: totalMes || 0,
      novosClientesMes,
      pedidosHoje,
      pedidosMes,
    });
  }
}

export default new DashboardController();