import Navbar from "@/components/navigation/Navbar";
import Hero from "@/sections/home/Hero";
import SignatureStatement from "@/sections/home/SignatureStatement";
import FeaturedProjects from "@/sections/home/FeaturedProjects";
import AboutPreview from "@/sections/home/AboutPreview";
import SkillsPreview from "@/sections/home/SkillsPreview";
import Journey from "@/sections/home/Journey";
import ContactCTA from "@/sections/home/ContactCTA";
import Footer from "@/sections/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <SignatureStatement />
      <FeaturedProjects />
      <AboutPreview />
      <SkillsPreview />
      <Journey />
      <ContactCTA />
      <Footer />
    </main>
  );
}