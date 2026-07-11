type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold uppercase tracking-wide text-black">
      {children}
    </span>
  );
}