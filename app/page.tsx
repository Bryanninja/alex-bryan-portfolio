import GlobalExperience from "./components/sections/GlobalExperience";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <GlobalExperience />
      <div className="h-[800px]"></div>
    </main>
  );
}
