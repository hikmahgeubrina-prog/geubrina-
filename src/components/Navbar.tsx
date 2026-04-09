import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement | null;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a192f]/80 backdrop-blur border-b border-cyan-400/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="px-4">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-xl font-bold tracking-wide bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          >
            Gebrina⚡
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="relative text-cyan-300 hover:text-cyan-200 transition duration-300 group"
              >
                {item.label}

                {/* underline lightning */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
              </a>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">

            {/* THEME BUTTON */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/5 hover:bg-cyan-400/10 text-cyan-300 transition shadow-[0_0_8px_rgba(34,211,238,0.3)]"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* MOBILE MENU */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full bg-white/5 hover:bg-cyan-400/10 text-cyan-300 md:hidden"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>

          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-[#0a192f] border-t border-cyan-400/10"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-cyan-300 hover:text-cyan-200 transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}