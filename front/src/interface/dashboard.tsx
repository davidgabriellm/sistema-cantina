export interface PedidoRecente {
  id: number;
  total: string | number;
  status: string;
  dataPedido: string;
  cliente_id: {
    nome: string;
  };
}

export interface DashboardData {
  produtosAtivos: number;
  totalProdutos: number;
  totalClientes: number;
  pedidosAbertos: number;
  vendasHoje: number;
  pedidosRecentes: PedidoRecente[];
}