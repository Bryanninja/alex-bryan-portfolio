import FloatingMenu from "./components/FloatingMenu";
import FocusSection from "./components/sections/FocusSection";
import Footer from "./components/sections/Footer";
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
      <Footer />
    </main>
  );
}
