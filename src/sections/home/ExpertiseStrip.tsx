import Container from "@/components/layout/Container";

const items = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Motion",
  "WordPress",
  "WooCommerce",
  "API Integration",
  "Responsive UI",
  "E-commerce",
];

export default function ExpertiseStrip() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-5">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}