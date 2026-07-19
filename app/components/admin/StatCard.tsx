interface StatCardProps {
  title: string;
  value: number;
  colour: string;
}

export default function StatCard({
  title,
  value,
  colour,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-[#10192d] p-8 shadow-lg">

      <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
        {title}
      </p>

      <h2 className={`mt-4 text-5xl font-black ${colour}`}>
        {value}
      </h2>

    </div>
  );
}