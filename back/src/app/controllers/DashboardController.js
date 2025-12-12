import { Op } from 'sequelize';
import { startOfDay, endOfDay } from 'date-fns';
import Pedido from '../models/Pedido.js';
import Cliente from '../models/Cliente.js';
import Produto from '../models/Produto.js';

class DashboardController {
  async index(req, res) {
    try {
      const hoje = new Date();

      const [
        produtosAtivos,
        totalProdutos,
        totalClientes,
        pedidosAbertos,
        vendasHoje,
        pedidosRecentes
      ] = await Promise.all([
        
        Produto.count({ where: { ativo: true } }),
        
        Produto.count(),

        Cliente.count(),

        Pedido.count({ 
            where: { status: { [Op.or]: ['aberto'] } } 
        }),

        Pedido.sum('total', {
            where: {
                data_pedido: { [Op.between]: [startOfDay(hoje), endOfDay(hoje)] },
                status: 'pago'
            }
        }),

        Pedido.findAll({
            limit: 5,
            order: [['data_pedido', 'DESC']],
            include: [
                { 
                  model: Cliente, 
                  as: 'cliente',
                  attributes: ['nome']
                }
            ],
            attributes: ['id', 'total', 'status', 'data_pedido']
        })
      ]);

      return res.json({
        produtosAtivos,
        totalProdutos,
        totalClientes,
        pedidosAbertos,
        vendasHoje: vendasHoje || 0,
        pedidosRecentes
      });

    } catch (error) {
      console.error('Erro no Dashboard:', error);
      return res.status(500).json({ error: 'Erro ao carregar dashboard' });
    }
  }
}

export default new DashboardController();