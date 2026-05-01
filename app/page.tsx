import FocusSection from "./components/sections/FocusSection";
import GlobalExperience from "./components/sections/GlobalExperience";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <GlobalExperience />
      <FocusSection />
    </main>
  );
}
