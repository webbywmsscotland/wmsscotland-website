interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-xl bg-cyan-500 px-6 py-4 text-lg font-bold text-black transition-all duration-300 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      {children}
    </button>
  );
}