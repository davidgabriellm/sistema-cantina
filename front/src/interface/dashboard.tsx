import Layout from "../layout/Layout";
import DashboardCard from "../components/DashboardCard";
import EmptyState from "../components/EmptyState";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { TbCurrencyReal } from "react-icons/tb";

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-gray-500 text-sm mt-1">Visão geral do sistema de pedidos</p>

      {/* Cards */}
      <div className="flex gap-4 mt-6 flex-wrap">
        <DashboardCard 
          title="Produtos Ativos" 
          value={4} 
          subtitle="5 total"
          icon={<MdProductionQuantityLimits />}
        />

        <DashboardCard 
          title="Clientes" 
          value={3}
          icon={<FaUsers />}
        />

        <DashboardCard 
          title="Pedidos Abertos" 
          value={0}
          icon={<AiFillClockCircle />}
        />

        <DashboardCard 
          title="Vendas Hoje" 
          value="R$ 0,00"
          subtitle="0 pedidos"
          icon={<TbCurrencyReal />}
        />
      </div>

      {/* Pedidos Recentes */}
      <div className="bg-white mt-8 rounded-xl shadow-sm p-4 border border-gray-100">
        <h3 className="text-gray-700 text-sm">Pedidos Recentes</h3>
        <span className="text-gray-400 text-xs">Últimos 5 pedidos</span>

        <EmptyState message="Nenhum pedido registrado ainda" />
      </div>
    </Layout>
  );
}
