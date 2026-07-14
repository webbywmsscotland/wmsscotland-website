interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export default function TextArea({
  label,
  name,
  value,
  placeholder,
  rows = 6,
  required = false,
  onChange,
}: TextAreaProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-white">
        {label}
      </label>

      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        rows={rows}
        required={required}
        onChange={onChange}
        className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white transition-all outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
      />
    </div>
  );
}