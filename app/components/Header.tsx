import Button from "./Button";

const Header = () => {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
      <div className="font-heading font-extrabold text-2xl text-brand-900">
        Álex Bryan
      </div>
      <nav className="hidden md:flex items-center gap-8 font-medium">
        <a
          href="#projetos"
          className="text-brand-700 hover:text-brand-500 transition"
        >
          Portfólio
        </a>
        <a
          href="#sobre"
          className="text-brand-700 hover:text-brand-500 transition"
        >
          Sobre
        </a>
        <Button
          href="/orcamento"
          variant="outline"
          className="px-6 py-2 text-sm"
        >
          Orçamento ↗
        </Button>
      </nav>
    </header>
  );
};

export default Header;
