export interface Dashboard {
  totalMes: number;
  novosClientesMes: number;
  pedidosHoje: number;
  pedidosMes: number;
  clientesHoje: {
    id: string;
    nome: string;
    email: string;
    avatarUrl?: string;
  }[];
}