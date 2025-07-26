import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/ProDeveloperAditya", name: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/aditya-raj-developer", name: "LinkedIn" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex flex-col sm:flex-row h-auto sm:h-24 max-w-screen-xl items-center justify-between gap-4 px-4 py-6 md:px-8">
        <p className="text-sm text-gray-500 text-center sm:text-left">
          &copy; {currentYear} Aditya Raj. Designed & Built with passion.
        </p>
        <div className="flex items-center space-x-4">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-colors hover:text-primary">
              <span className="sr-only">{link.name}</span>
              <link.icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
