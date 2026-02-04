
import React from 'react';
import { Infinity as InfinityIcon } from 'lucide-react';

interface FooterProps {
  darkMode?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode = false }) => {
  const bgClass = darkMode ? 'bg-[#1A1A1E] border-white/10' : 'bg-white border-gray-100';
  const textMainClass = darkMode ? 'text-white' : 'text-[#111815]';
  const textMutedClass = darkMode ? 'text-[#9e9eb7]' : 'text-[#63756d]';
  const inputBorderClass = darkMode ? 'border-[#292938] text-white focus:border-archive-blue focus:ring-archive-blue' : 'border-gray-200 text-[#111815] focus:border-[#14b881] focus:ring-[#14b881]';
  const buttonClass = darkMode ? 'bg-white text-[#1A1A1E] hover:bg-archive-blue hover:text-white' : 'bg-[#111815] text-white hover:bg-[#14b881]';

  return (
    <footer className={`w-full border-t pt-20 pb-10 ${bgClass}`}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
             <InfinityIcon className={`h-8 w-8 ${textMainClass}`} />
          </div>
          <h4 className={`text-xl font-bold tracking-tight mb-2 ${textMainClass}`}>Join the inner circle</h4>
          <p className={`text-sm ${textMutedClass}`}>Updates on new collections and editorial stories.</p>
        </div>
        
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-16">
          <input 
            type="email" 
            placeholder="Email address" 
            className={`flex-1 h-10 px-4 rounded border bg-transparent text-sm placeholder:text-gray-400 focus:ring-1 outline-none transition-all ${inputBorderClass}`}
          />
          <button 
            type="button"
            className={`h-10 px-6 rounded text-sm font-bold transition-colors ${buttonClass}`}
          >
            Subscribe
          </button>
        </form>

        <div className={`flex flex-col md:flex-row justify-between items-center text-xs pt-8 border-t ${darkMode ? 'border-white/10 text-gray-500' : 'border-gray-100 text-gray-400'}`}>
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-[#111815]'}`}>Instagram</a>
            <a href="#" className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-[#111815]'}`}>Twitter</a>
            <a href="#" className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-[#111815]'}`}>Pinterest</a>
          </div>
          <p>© 2024 ARCÈL STUDIO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
