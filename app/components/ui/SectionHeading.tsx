type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <h2 className="text-5xl font-black text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-xl leading-8 text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}