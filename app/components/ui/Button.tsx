import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const classes =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black transition hover:bg-cyan-400"
      : "inline-flex items-center justify-center rounded-xl border border-cyan-500 px-6 py-3 font-bold text-cyan-300 transition hover:bg-cyan-500/20";

  const isExternal =
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}