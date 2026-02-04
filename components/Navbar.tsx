
import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, Infinity as InfinityIcon } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

interface NavbarProps {
  onNavigateHome: () => void;
  onNavigateStory: () => void;
  onNavigateArchives: () => void;
  onNavigateShop: () => void;
  onNavigateAbout?: () => void;
  onOpenBag?: () => void;
  darkMode?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateHome,
  onNavigateStory,
  onNavigateArchives,
  onNavigateShop,
  onNavigateAbout,
  onOpenBag,
  darkMode = false
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (href === '#story') onNavigateStory();
    else if (href === '#collections') onNavigateArchives();
    else if (href === '#shop') onNavigateShop();
    else if (href === '#about' && onNavigateAbout) onNavigateAbout();
    else onNavigateHome();
  };

  const textColorClass = darkMode ? 'text-text-light hover:text-white/80' : 'text-text-main hover:text-primary';
  const bgColorClass = isScrolled
    ? (darkMode ? 'bg-[#1A1A1E]/80 border-white/5 backdrop-blur-xl' : 'bg-[#f6f8f7]/80 border-text-main/5 backdrop-blur-xl')
    : 'bg-transparent border-transparent backdrop-blur-sm';

  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a
      href={href}
      onClick={(e) => handleNavClick(href, e)}
      className={`group relative text-sm font-medium tracking-wide transition-colors duration-300 ${textColorClass}`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 h-[1px] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full ${darkMode ? 'bg-white' : 'bg-primary'}`} />
    </a>
  );

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 border-b ${bgColorClass}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12 h-20">
        {/* Left: Logo */}
        <div className="flex items-center gap-4 z-20">
          <button onClick={onNavigateHome} className="group flex items-center gap-2">
            <InfinityIcon className={`h-6 w-6 transition-transform duration-700 group-hover:rotate-180 ${darkMode ? 'text-white' : 'text-primary'}`} strokeWidth={1.5} />
            <span className={`font-serif text-xl font-bold tracking-wider ${darkMode ? 'text-white' : 'text-text-main'}`}>Arcèl Studio</span>
          </button>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-10">
          <NavLink href="#shop">Shop</NavLink>
          <NavLink href="#collections">Collections</NavLink>
          <NavLink href="#story">Journal</NavLink>
          <NavLink href="#about">About</NavLink>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-6 z-20">
          <button aria-label="Search" className={`group p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}>
            <Search className={`h-5 w-5 transition-transform group-hover:scale-110 ${darkMode ? 'text-white' : 'text-text-main'}`} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Cart"
            onClick={onOpenBag}
            className={`group p-2 rounded-full transition-colors relative ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
          >
            <ShoppingBag className={`h-5 w-5 transition-transform group-hover:scale-110 ${darkMode ? 'text-white' : 'text-text-main'}`} strokeWidth={1.5} />
            <span className={`absolute top-2 right-1.5 h-1.5 w-1.5 rounded-full ${darkMode ? 'bg-archive-blue' : 'bg-primary'}`}></span>
          </button>
          <button aria-label="Menu" className={`md:hidden p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}>
            <Menu className={`h-6 w-6 ${darkMode ? 'text-white' : 'text-text-main'}`} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
