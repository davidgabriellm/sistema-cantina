type CardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: JSX.Element;
};

export default function DashboardCard({ title, value, subtitle, icon }: CardProps) {
  return (
    <div className="bg-white w-56 rounded-xl shadow-sm p-4 border border-gray-100">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-700 text-sm">{title}</h3>
        <span className="text-yellow-600 text-xl">{icon}</span>
      </div>

      <p className="text-2xl font-semibold mt-2">{value}</p>

      {subtitle && (
        <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
      )}
    </div>
  );
}
