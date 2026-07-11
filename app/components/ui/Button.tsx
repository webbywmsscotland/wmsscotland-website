import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-8 py-4 font-bold transition-all duration-300 hover:-translate-y-1";

  const styles =
    variant === "primary"
      ? "bg-cyan-500 text-black hover:bg-cyan-400 shadow-lg shadow-cyan-500/20"
      : "border border-cyan-500 text-cyan-300 hover:bg-cyan-500/10";

  return (
    <Link
      href={href}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}