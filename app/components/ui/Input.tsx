interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function Input({
  label,
  name,
  type = "text",
  value,
  placeholder,
  required = false,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-white">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white transition-all outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
      />
    </div>
  );
}