import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  target?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  target,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center border-2 border-transparent justify-center px-8 py-3 rounded-full font-semibold transition-all duration-300";

  const variants = {
    primary: "bg-brand-800 text-white hover:bg-brand-900 shadow-md",
    secondary: "bg-brand-400 text-white hover:bg-brand-500 shadow-md",

    outline:
      "border-brand-800! text-brand-800 hover:bg-brand-800 hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      target={target}
    >
      {children}
    </Link>
  );
}
