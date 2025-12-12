export interface Pedido {
  id: number;
  status: "aberto" | "pago" | "cancelado";
  total: number;
  createdAt: string;
  updatedAt: string;

  Cliente: {
    id: number;
    nome: string;
  };

  ItemPedidos: {
    id: number;
    quantidade: number;
    Produto: {
      id: number;
      nome: string;
      preco: number;
    };
  }[];
}
