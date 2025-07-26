import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 md:px-8">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-full transition-all duration-300 group-hover:bg-secondary group-hover:scale-110 group-hover:shadow-secondary-glow"></div>
          <span className="font-heading font-bold text-xl text-foreground">Aditya Raj</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="font-medium text-gray-300 transition-colors hover:text-primary"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden rounded-md p-2 transition-colors text-gray-300 hover:bg-card hover:text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background/95 border-t border-border"
        >
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-medium text-lg text-gray-300 transition-colors hover:text-primary"
              >
                {link.title}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};
