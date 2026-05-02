import FloatingMenu from "./components/FloatingMenu";
import FocusSection from "./components/sections/FocusSection";
import GlobalExperience from "./components/sections/GlobalExperience";
import Hero from "./components/sections/Hero";
import PortfolioSection from "./components/sections/PortfolioSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <GlobalExperience />
      <FocusSection />
      <PortfolioSection />
      <FloatingMenu />
    </main>
  );
}
