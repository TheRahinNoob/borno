import Container from "@/components/layout/Container";

const items = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "React",
  "Next.js",
  "Vite",
  "Node.js",
  "Express.js",
  "Django",
  "Flask",
  "Python",
  "C",
  "C++",
  "Tailwind CSS",
  "Motion",
  "REST API",
  "API Integration",
  "JWT Auth",
  "Responsive UI",
  "WordPress",
  "WooCommerce",
  "E-commerce",
  "Git",
  "GitHub",
  "Vercel",
  "Deployment",
  "Arduino",
  "Robotics",
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