import Container from "@/components/layout/Container";

const values = [
  {
    title: "Premium UI Execution",
    description:
      "I turn visual ideas into polished interfaces that feel refined, modern, and production-ready.",
  },
  {
    title: "Responsive Product Thinking",
    description:
      "I build with real users in mind, making sure layouts, flows, and interactions work across devices and screen sizes.",
  },
  {
    title: "Strong Frontend Discipline",
    description:
      "I care about clean implementation, maintainable structure, component thinking, and details that improve overall product quality.",
  },
  {
    title: "Client-Facing Quality",
    description:
      "I aim to build work that feels credible, high-value, and ready to represent a real brand or business.",
  },
];

export default function ValueSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-blue-300/80 sm:text-sm">
            What I Bring
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            The kind of value I aim to bring to real teams and real products.
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            I want my contribution to go beyond writing code. I care about how
            a product feels, how clearly it communicates, and how well it holds
            up in real use.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {value.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}