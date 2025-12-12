import type { ReactNode } from "react";

type CardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
};

export default function DashboardCard({ title, value, subtitle, icon }: CardProps) {
  return (
    <div className="bg-white w-full h-full rounded-xl shadow-sm p-5 border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
      
      <div className="flex justify-between items-start">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        {}
        <div className="p-2 bg-yellow-50 rounded-lg">
            <span className="text-yellow-600 text-lg">{icon}</span>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-2xl font-bold text-gray-800">{value}</p>

        {subtitle ? (
          <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
        ) : (
          <div className="h-5"></div>
        )}
      </div>
    </div>
  );
}