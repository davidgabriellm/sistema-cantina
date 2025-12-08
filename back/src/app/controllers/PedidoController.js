import * as Yup from "yup";
import Pedido from "../models/Pedido.js";
import Produto from "../models/Produto.js";
import ItemPedido from "../models/ItemPedido.js";
import Cliente from "../models/Cliente.js";

class PedidoController {
  
  async create(req, res) {
    const schema = Yup.object().shape({
      clienteId: Yup.number().required(),
      itens: Yup.array()
        .of(
          Yup.object().shape({
            produtoId: Yup.number().required(),
            quantidade: Yup.number().min(1).required(),
          })
        )
        .min(1, "O pedido precisa ter ao menos 1 item")
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validação falhou" });
    }

    const { clienteId, itens } = req.body;

    const cliente = await Cliente.findByPk(clienteId);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }

    const pedido = await Pedido.create({
      cliente_id: clienteId,
      total: 0,
      status: "aberto",
    });

    let total = 0;

    for (const item of itens) {
      const produto = await Produto.findByPk(item.produtoId);

      if (!produto || !produto.ativo) {
        return res.status(400).json({
          error: `Produto inválido ou inativo: ID ${item.produtoId}`,
        });
      }

      const precoUnitario = produto.preco;

      total += precoUnitario * item.quantidade;

      await ItemPedido.create({
        pedido_id: pedido.id,
        produto_id: item.produtoId,
        quantidade: item.quantidade,
        precoUnitario,
      });
    }

    pedido.total = total;
    await pedido.save();

    return res.status(201).json({
      message: "Pedido criado com sucesso",
      pedidoId: pedido.id,
      total,
    });
  }

  async listar(req, res) {
    const { status } = req.query;

    const where = {};
    if (status) where.status = status;

    const pedidos = await Pedido.findAll({
      where,
      include: [
        {
          model: ItemPedido,
          include: [Produto],
        },
        {
          model: Cliente,
          attributes: ["id", "nome", "email"],
        },
      ],
    });

    return res.json(pedidos);
  }

  async pagar(req, res) {
    const { id } = req.params;

    const pedido = await Pedido.findByPk(id, {
      include: [{ model: Cliente }],
    });

    if (!pedido) return res.status(404).json({ error: "Pedido não encontrado" });

    if (pedido.status !== "aberto") {
      return res.status(400).json({ error: "Pedido não pode ser pago" });
    }

    if (pedido.Cliente.saldo < pedido.total) {
      return res.status(400).json({ error: "Saldo insuficiente" });
    }

    pedido.Cliente.saldo -= pedido.total;
    await pedido.Cliente.save();

    pedido.status = "pago";
    await pedido.save();

    return res.json({ message: "Pedido pago com sucesso" });
  }

  async cancelar(req, res) {
    const { id } = req.params;

    const pedido = await Pedido.findByPk(id);

    if (!pedido) return res.status(404).json({ error: "Pedido não encontrado" });

    if (pedido.status !== "aberto") {
      return res.status(400).json({ error: "Só é possível cancelar pedidos abertos" });
    }

    pedido.status = "cancelado";
    await pedido.save();

    return res.json({ message: "Pedido cancelado" });
  }
}

export default new PedidoController();
