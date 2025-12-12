export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col justify-center items-center text-gray-400 py-12">
      <span className="text-4xl">🛒</span>
      <p className="mt-2">{message}</p>
    </div>
  );
}