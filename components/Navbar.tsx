
import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, Infinity as InfinityIcon } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'Shop', href: '#shop' },
    { label: 'Story', href: '#story' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? 'bg-[#f6f8f7]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center gap-2 z-20">
          <a href="#home" className="group flex items-center gap-2">
            <InfinityIcon className="h-6 w-6 text-[#14b881] transition-transform duration-500 group-hover:rotate-180" />
            <h2 className="font-sans text-lg font-bold uppercase tracking-widest">Arcèl Studio</h2>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium transition-colors duration-300 hover:text-[#14b881]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 z-20">
          <button aria-label="Search" className="transition-colors hover:text-[#14b881]">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="relative transition-colors hover:text-[#14b881]">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#14b881] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#14b881]"></span>
            </span>
          </button>
          <button aria-label="Menu" className="md:hidden transition-colors hover:text-[#14b881]">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
