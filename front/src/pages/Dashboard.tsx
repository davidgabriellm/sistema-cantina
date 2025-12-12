import { useEffect, useState } from "react";
import { api } from "../services/api";

import { type DashboardData } from "../interface/dashboard";

import DashboardCard from "../components/dashboardCard";
import EmptyState from "../components/emptyState";

import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { TbCurrencyReal } from "react-icons/tb";

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    aberto: "bg-yellow-100 text-yellow-800 border-yellow-200",
    pago: "bg-green-100 text-green-800 border-green-200",
    cancelado: "bg-red-100 text-red-800 border-red-200",
  };

  const currentStyle = styles[status.toLowerCase()] || "bg-gray-100 text-gray-800 border-gray-200";
  
  const label = status.replace('_', ' ').toUpperCase();

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-bold border ${currentStyle}`}>
      {label}
    </span>
  );
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData>({
    produtosAtivos: 0,
    totalProdutos: 0,
    totalClientes: 0,
    pedidosAbertos: 0,
    vendasHoje: 0,
    pedidosRecentes: [],
  });

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const response = await api.get('/dashboard');
        setData(response.data);
      } catch (error) {
        console.error("Erro ao carregar dashboard:", error);
      }
    }

    fetchDashboard();
  }, []);

  return (
    <div className="w-full p-6"> 
      
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Visão geral do sistema de pedidos</p>
      </div>

      {/* 3. Grid de Cards com Dados Reais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 w-full">
        <DashboardCard 
          title="Produtos Ativos" 
          value={data.produtosAtivos} 
          subtitle={`${data.totalProdutos} total`}
          icon={<MdProductionQuantityLimits />}
        />
        <DashboardCard 
          title="Clientes" 
          value={data.totalClientes}
          icon={<FaUsers />}
        />
        <DashboardCard 
          title="Pedidos Abertos" 
          value={data.pedidosAbertos}
          icon={<AiFillClockCircle />}
        />
        <DashboardCard 
          title="Vendas Hoje" 
          value={Number(data.vendasHoje).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          subtitle="0 pedidos"
          icon={<TbCurrencyReal />}
        />
      </div>

      {}
      <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
        <div className="p-5 border-b border-gray-50">
            <h3 className="text-gray-800 font-semibold text-sm">Pedidos Recentes</h3>
            <span className="text-gray-400 text-xs">Últimos 5 pedidos</span>
        </div>

        <div className="min-h-[250px] flex flex-col">
           {data.pedidosRecentes.length === 0 ? (
             <div className="flex-grow flex items-center justify-center">
                <EmptyState message="Nenhum pedido registrado ainda" />
             </div>
           ) : (
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                 <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                   <tr>
                     <th className="px-6 py-3 font-medium">ID</th>
                     <th className="px-6 py-3 font-medium">Cliente</th>
                     <th className="px-6 py-3 font-medium">Data</th>
                     <th className="px-6 py-3 font-medium">Total</th>
                     <th className="px-6 py-3 font-medium">Status</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                   {data.pedidosRecentes.map((pedido) => (
                     <tr key={pedido.id} className="hover:bg-gray-50 transition-colors">
                       <td className="px-6 py-4 font-medium text-gray-900">
                         #{pedido.id}
                       </td>
                       <td className="px-6 py-4">
                         {}
                         {pedido.cliente_id?.nome || "Cliente Removido"}
                       </td>
                       <td className="px-6 py-4 text-gray-500">
                         {new Date(pedido.dataPedido).toLocaleDateString('pt-BR')}
                         <span className="ml-2 text-xs text-gray-400">
                            {new Date(pedido.dataPedido).toLocaleTimeString('pt-BR', { hour: '2-digit', minute:'2-digit' })}
                         </span>
                       </td>
                       <td className="px-6 py-4 font-medium">
                         {Number(pedido.total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                       </td>
                       <td className="px-6 py-4">
                         <StatusBadge status={pedido.status} />
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           )}
        </div>
      </div>
      
    </div>
  );
}