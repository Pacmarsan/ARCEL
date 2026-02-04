
import React from 'react';
import { motion } from 'framer-motion';
import { Gem, ArrowRight } from 'lucide-react';

interface OrderConfirmedProps {
  onNavigateHome: () => void;
  darkMode?: boolean;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
  }
};

export const OrderConfirmed: React.FC<OrderConfirmedProps> = ({ onNavigateHome, darkMode = false }) => {
  return (
    <div className={`min-h-screen flex flex-col antialiased font-display ${darkMode ? 'bg-[#111121] text-white' : 'bg-[#f6f6f8] text-[#111117]'}`}>
      
      {/* Header */}
      <header className="w-full px-6 py-8 md:px-12 flex justify-center items-center z-10">
        <div 
          onClick={onNavigateHome}
          className="flex items-center gap-2 group cursor-pointer transition-opacity hover:opacity-70"
        >
          <Gem className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-[#111117]'}`} />
          <h1 className={`text-sm md:text-base font-bold tracking-[0.1em] uppercase ${darkMode ? 'text-white' : 'text-[#111117]'}`}>
            ARCÈL STUDIO
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 md:px-12 py-12 md:py-20 w-full max-w-7xl mx-auto">
        
        {/* Hero Message */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col items-center text-center max-w-3xl mb-24 md:mb-32"
        >
          <h2 className={`text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-[-0.02em] mb-6 ${darkMode ? 'text-white' : 'text-[#111117]'}`}>
            A new presence in<br className="hidden md:block"/> your wardrobe.
          </h2>
          <p className={`text-sm md:text-base font-normal tracking-wide max-w-md ${darkMode ? 'text-gray-400' : 'text-[#646487]'}`}>
            Your selection is being prepared with care in our studio.
          </p>
        </motion.div>

        {/* Order Summary & Details */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className={`w-full max-w-lg mx-auto border-t pt-8 md:pt-12 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
        >
          {/* Order Reference Header */}
          <div className="flex justify-between items-baseline mb-8">
            <span className={`text-xs uppercase tracking-widest font-medium ${darkMode ? 'text-gray-500' : 'text-[#646487]'}`}>
              Order Reference
            </span>
            <span className={`font-medium text-sm ${darkMode ? 'text-blue-400' : 'text-[#16169c]'}`}>
              #92841
            </span>
          </div>

          {/* Items List */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="group flex justify-between items-start text-sm">
              <div className="flex flex-col">
                <span className={`font-medium mb-1 transition-colors ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-[#111117] group-hover:text-[#16169c]'}`}>
                  Silk Trousers
                </span>
                <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-[#646487]'}`}>
                  Charcoal — Size 38
                </span>
              </div>
              <span className={`font-normal ${darkMode ? 'text-white' : 'text-[#111117]'}`}>$320.00</span>
            </div>

            {/* Item 2 */}
            <div className="group flex justify-between items-start text-sm">
              <div className="flex flex-col">
                <span className={`font-medium mb-1 transition-colors ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-[#111117] group-hover:text-[#16169c]'}`}>
                  Structured Blazer
                </span>
                <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-[#646487]'}`}>
                  Midnight — Size M
                </span>
              </div>
              <span className={`font-normal ${darkMode ? 'text-white' : 'text-[#111117]'}`}>$580.00</span>
            </div>
          </div>

          {/* Total */}
          <div className={`mt-8 pt-8 border-t border-dashed flex justify-between items-center ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <span className={`text-xs uppercase tracking-widest font-medium ${darkMode ? 'text-gray-500' : 'text-[#646487]'}`}>
              Total Paid
            </span>
            <span className={`font-medium text-base ${darkMode ? 'text-white' : 'text-[#111117]'}`}>
              $900.00
            </span>
          </div>
          
          <div className="mt-4 flex justify-end">
            <span className={`text-[10px] uppercase tracking-wider ${darkMode ? 'text-gray-600' : 'text-[#646487]'}`}>
              Estimated Delivery: Oct 24 - Oct 28
            </span>
          </div>
        </motion.div>

      </main>

      {/* Footer Action */}
      <footer className="w-full py-12 pb-20 flex justify-center">
        <button 
          onClick={onNavigateHome}
          className={`group relative inline-flex items-center gap-2 text-sm transition-colors duration-300 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-[#111117] hover:text-[#16169c]'}`}
        >
          <span className="relative z-10">Return home</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          <span className={`absolute bottom-[-4px] left-0 w-full h-[1px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></span>
        </button>
      </footer>
    </div>
  );
};
