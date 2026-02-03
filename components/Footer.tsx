
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-[#f6f8f7] pt-16 pb-12">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-bold mb-4">ARCÈL STUDIO</h4>
            <p className="text-sm text-gray-500 max-w-xs mb-8">
              Restraint and silhouettes. <br/>Based in Copenhagen.
            </p>
            {/* Minimal Newsletter */}
            <div className="flex items-center gap-2 border-b border-gray-300 pb-2 max-w-xs group focus-within:border-[#14b881]">
              <input 
                className="bg-transparent border-none p-0 text-sm w-full focus:ring-0 placeholder-gray-400 focus:outline-none" 
                placeholder="Updates" 
                type="email"
              />
              <button aria-label="Subscribe" className="text-gray-400 hover:text-[#14b881] transition-colors">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="col-span-1">
            <h5 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Credits</h5>
            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              <li className="flex justify-between w-40"><span>Photography</span> <span className="text-gray-400">L. Rossi</span></li>
              <li className="flex justify-between w-40"><span>Styling</span> <span className="text-gray-400">M. Chen</span></li>
              <li className="flex justify-between w-40"><span>Art Direction</span> <span className="text-gray-400">Studio A</span></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h5 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Connect</h5>
            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              <li><a className="hover:text-[#14b881] transition-colors" href="#">Instagram</a></li>
              <li><a className="hover:text-[#14b881] transition-colors" href="#">Pinterest</a></li>
              <li><a className="hover:text-[#14b881] transition-colors" href="#">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2024 ARCÈL STUDIO. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a className="hover:text-[#14b881]" href="#">Privacy</a>
            <a className="hover:text-[#14b881]" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
