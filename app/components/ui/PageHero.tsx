import Container from "./Container";
import Badge from "./Badge";

type PageHeroProps = {
  badge?: string;
  title: string;
  description: string;
};

export default function PageHero({
  badge,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="border-b border-cyan-500/10 bg-[#08111F] py-20">

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          {badge && (
            <div className="mb-6 flex justify-center">
              <Badge>{badge}</Badge>
            </div>
          )}

          <h1 className="text-5xl font-black text-white md:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-gray-300">
            {description}
          </p>

        </div>

      </Container>

    </section>
  );
}