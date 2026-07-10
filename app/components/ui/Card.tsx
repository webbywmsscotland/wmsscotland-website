import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-cyan-500/20 bg-[#10192d] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] ${className}`}
    >
      {children}
    </div>
  );
}