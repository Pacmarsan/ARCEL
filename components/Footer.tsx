import React from 'react';
import { Infinity as InfinityIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  darkMode?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode = false }) => {
  const bgClass = darkMode ? 'bg-archive-bg border-white/5' : 'bg-background-light border-text-main/5';
  const textMainClass = darkMode ? 'text-white' : 'text-text-main';
  const textMutedClass = darkMode ? 'text-white/40' : 'text-text-muted';
  const inputBorderClass = darkMode
    ? 'border-white/10 text-white focus:border-white focus:ring-white/20'
    : 'border-text-main/10 text-text-main focus:border-primary focus:ring-primary/20';
  const buttonClass = darkMode
    ? 'bg-white text-archive-bg hover:bg-white/90'
    : 'bg-text-main text-white hover:bg-primary';

  return (
    <footer className={`w-full border-t pt-24 pb-12 ${bgClass}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-4 flex flex-col items-start gap-6">
            <div className="flex items-center gap-2">
              <InfinityIcon className={`h-6 w-6 ${textMainClass}`} strokeWidth={1.5} />
              <span className={`font-serif text-xl font-bold tracking-wider ${textMainClass}`}>Arcèl Studio</span>
            </div>
            <p className={`max-w-xs text-sm leading-relaxed ${textMutedClass}`}>
              A design practice focused on the essentials.
              Creating silence in a noisy world through form and texture.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2 md:col-start-7 flex flex-col gap-4">
            <h4 className={`text-xs font-bold uppercase tracking-widest ${textMainClass}`}>Explore</h4>
            <a href="#shop" className={`text-sm hover:text-primary transition-colors ${textMutedClass}`}>Wardrobe</a>
            <a href="#collections" className={`text-sm hover:text-primary transition-colors ${textMutedClass}`}>Collections</a>
            <a href="#story" className={`text-sm hover:text-primary transition-colors ${textMutedClass}`}>Journal</a>
            <a href="#about" className={`text-sm hover:text-primary transition-colors ${textMutedClass}`}>About</a>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className={`text-xs font-bold uppercase tracking-widest ${textMainClass}`}>Newsletter</h4>
            <p className={`text-sm ${textMutedClass} mb-2`}>Updates on new collections and editorial stories.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className={`flex-1 h-10 px-4 rounded-sm border bg-transparent text-sm placeholder:text-gray-400 focus:ring-1 outline-none transition-all ${inputBorderClass}`}
              />
              <button
                type="button"
                className={`h-10 px-6 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors ${buttonClass}`}
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className={`flex flex-col md:flex-row justify-between items-center text-xs pt-8 border-t ${darkMode ? 'border-white/5 text-white/30' : 'border-text-main/5 text-text-muted'}`}>
          <div className="flex gap-8 mb-4 md:mb-0">
            <a href="#" className={`transition-colors uppercase tracking-wider hover:text-primary`}>Instagram</a>
            <a href="#" className={`transition-colors uppercase tracking-wider hover:text-primary`}>Twitter</a>
            <a href="#" className={`transition-colors uppercase tracking-wider hover:text-primary`}>Pinterest</a>
          </div>
          <p>© 2026 ARCÈL STUDIO. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};
