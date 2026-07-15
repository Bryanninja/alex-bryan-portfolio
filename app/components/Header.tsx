import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <header className="w-full max-w-[1440px] mx-auto px-6 md:px-20 py-6 flex justify-between items-center">
      <Link
        href="/"
        className="font-heading font-extrabold text-2xl text-brand-900"
      >
        Álex Bryan
      </Link>
      <nav className="hidden md:flex items-center gap-8 font-medium">
        <Link
          href="/#projetos"
          className="text-brand-700 hover:text-brand-500 transition"
        >
          Ver Projetos
        </Link>
        <Link
          href="/#sobre"
          className="text-brand-700 hover:text-brand-500 transition"
        >
          Sobre
        </Link>
        <Button
          href="https://wa.me/5531971462832?text=Ol%C3%A1%21+Vim+pelo+site+da+Albry+Studio+e+gostaria+de+conversar+sobre+um+projeto."
          variant="outline"
          className="px-6 py-2 text-sm"
          target="_blank"
        >
          Orçamento ↗
        </Button>
      </nav>
    </header>
  );
};

export default Header;
