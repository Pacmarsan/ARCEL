
import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, Infinity as InfinityIcon } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

interface NavbarProps {
  onNavigateHome: () => void;
  onNavigateStory: () => void;
  onNavigateArchives: () => void;
  onNavigateShop: () => void;
  onOpenBag?: () => void;
  darkMode?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onNavigateHome, 
  onNavigateStory, 
  onNavigateArchives, 
  onNavigateShop, 
  onOpenBag,
  darkMode = false 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href === '#story' || href === '#editorial') {
      e.preventDefault();
      onNavigateStory();
    } else if (href === '#lookbook' || href === '#collections') {
      e.preventDefault();
      onNavigateArchives();
    } else if (href === '#shop') {
      e.preventDefault();
      onNavigateShop();
    } else {
      onNavigateHome();
    }
  };

  const textColorClass = darkMode ? 'text-white hover:text-white/80' : 'text-[#111815] hover:text-primary';
  const bgColorClass = isScrolled 
    ? (darkMode ? 'bg-[#1A1A1E]/90 border-white/10' : 'bg-[#f6f8f7]/90 border-gray-100')
    : 'bg-transparent border-transparent';

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 backdrop-blur-md shadow-sm border-b ${bgColorClass}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12 h-16">
        {/* Left: Logo */}
        <div className="flex items-center gap-4 z-20">
          <button onClick={onNavigateHome} className="group flex items-center gap-2">
            <InfinityIcon className={`h-6 w-6 transition-transform duration-500 group-hover:rotate-180 ${darkMode ? 'text-white' : 'text-primary'}`} />
            <span className={`font-sans text-lg font-bold uppercase tracking-widest ${darkMode ? 'text-white' : 'text-[#111815]'}`}>Arcèl Studio</span>
          </button>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8">
          <a href="#shop" onClick={(e) => handleNavClick('#shop', e)} className={`text-sm font-medium transition-colors duration-300 ${textColorClass}`}>Shop</a>
          <a href="#collections" onClick={(e) => handleNavClick('#collections', e)} className={`text-sm font-medium transition-colors duration-300 ${textColorClass}`}>Collections</a>
          <a href="#story" onClick={(e) => handleNavClick('#story', e)} className={`text-sm font-medium transition-colors duration-300 ${textColorClass}`}>Journal</a>
          <a href="#about" onClick={(e) => handleNavClick('#about', e)} className={`text-sm font-medium transition-colors duration-300 ${textColorClass}`}>About</a>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4 z-20">
          <button aria-label="Search" className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}>
            <Search className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-[#111815]'}`} />
          </button>
          <button 
            aria-label="Cart" 
            onClick={onOpenBag}
            className={`p-2 rounded-full transition-colors relative ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
          >
            <ShoppingBag className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-[#111815]'}`} />
            <span className={`absolute top-1.5 right-1.5 h-2 w-2 rounded-full ${darkMode ? 'bg-archive-blue' : 'bg-primary'}`}></span>
          </button>
          <button aria-label="Menu" className={`md:hidden p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}>
            <Menu className={`h-6 w-6 ${darkMode ? 'text-white' : 'text-[#111815]'}`} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
