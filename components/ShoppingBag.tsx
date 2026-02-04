
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus } from 'lucide-react';

interface ShoppingBagProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout?: () => void;
  darkMode?: boolean;
}

export const ShoppingBag: React.FC<ShoppingBagProps> = ({ isOpen, onClose, onCheckout, darkMode = false }) => {
  // Lock body scroll when bag is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Dynamic classes based on darkMode
  const bgClass = darkMode ? 'bg-[#1A1A1E]' : 'bg-[#f6f8f7]';
  const textMainClass = darkMode ? 'text-white' : 'text-[#111815]';
  const textMutedClass = darkMode ? 'text-[#9e9eb7]' : 'text-[#63756d]';
  const borderClass = darkMode ? 'border-white/10' : 'border-gray-200';
  const buttonHoverClass = darkMode ? 'hover:text-white' : 'hover:text-[#111815]';
  const iconClass = darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-600';

  const handleCheckout = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCheckout) {
      onCheckout();
      onClose(); // Close the bag when navigating to checkout
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#111815]/40 backdrop-blur-[2px] z-50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
            className="fixed inset-y-0 right-0 z-[60] flex max-w-full pl-0 sm:pl-10"
          >
            <div className={`w-screen max-w-md transform shadow-2xl flex flex-col h-full ${bgClass} transition-colors duration-300`}>
              
              {/* Drawer Header */}
              <div className={`flex items-center justify-between px-6 py-6 sm:px-8 border-b ${borderClass}`}>
                <h2 className={`text-lg font-medium tracking-tight ${textMainClass}`}>Your bag (2)</h2>
                <button 
                  className={`relative -m-2 p-2 transition-colors ${iconClass}`} 
                  type="button"
                  onClick={onClose}
                >
                  <span className="sr-only">Close panel</span>
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Scrollable Item List */}
              <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 no-scrollbar">
                <div className="flow-root">
                  <ul className={`-my-6 divide-y ${borderClass}`} role="list">
                    
                    {/* Item 1 */}
                    <li className="flex py-8">
                      <div className={`h-28 w-24 flex-shrink-0 overflow-hidden rounded-md border ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
                        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaG3bn-3jvWFmcTmFLnE3SSSZAICSkxuOtMh7bs09leb9At_jITBlozG3dGDPO6AuaAOc8ggqMjQWHsGXNvb3dMt5KDOYNTrvqg1_GXpKuhiIKPuM8zG5ol9Kehc4HUhD6Y4qQjw4JSDvoJKijNNf-pp5XkcmQB19K40XSfCmyQhgxQT7OvDrt32BFI-tGq6O9ckbjwGuZVZY8LvpLgk2udqzNpA2PCfHGzbgV7hIhnyCX5bb7nHujwvZNN2yW-DwGnet6LiksDdA')" }}></div>
                      </div>
                      <div className="ml-6 flex flex-1 flex-col">
                        <div className={`flex justify-between text-base font-medium ${textMainClass}`}>
                          <h3><a className="font-normal tracking-wide" href="#">Arcèl Coat 01</a></h3>
                          <p className="ml-4 font-normal">$450.00</p>
                        </div>
                        <p className={`mt-1 text-sm ${textMutedClass}`}>Chalk</p>
                        <p className={`mt-1 text-sm ${textMutedClass}`}>Size M</p>
                        <div className="flex flex-1 items-end justify-between text-sm mt-4">
                          <div className={`flex items-center border ${darkMode ? 'border-white/20' : 'border-gray-200'} rounded-md`}>
                            <button className={`px-2 py-1 ${textMutedClass} ${buttonHoverClass} transition-colors`}><Minus className="h-3 w-3" /></button>
                            <span className={`px-2 py-1 ${textMainClass} font-medium text-xs`}>1</span>
                            <button className={`px-2 py-1 ${textMutedClass} ${buttonHoverClass} transition-colors`}><Plus className="h-3 w-3" /></button>
                          </div>
                          <button className="font-medium text-[#14b881] hover:text-[#14b881]/80 transition-colors text-xs uppercase tracking-wide" type="button">Remove</button>
                        </div>
                      </div>
                    </li>

                    {/* Item 2 */}
                    <li className="flex py-8">
                      <div className={`h-28 w-24 flex-shrink-0 overflow-hidden rounded-md border ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
                        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4CV0F_cOjhT4jE0VL-W_qpA85ca2kfEaXVetJ3yBji2S9KrGDY5xFatjW8601bQwLFHra6D9dWM25zRjXN0XTw4sAAWJzGNC6ev2AM7sk00ob_w4Dcgo7bymOuvVNvIE2sjtplxzWLwWg3PFkvhlkfmICEWC4yiushEHb6gjKJEdiH-2mbLWDDv10Y1g6WnnN3AITLTqYjEhQ-lEggmlnAxTB7rkI-TFbaCIuWhFkXvv1LgADuv5DNVYL3VwDxDBLgyWjeMfW180')" }}></div>
                      </div>
                      <div className="ml-6 flex flex-1 flex-col">
                        <div className={`flex justify-between text-base font-medium ${textMainClass}`}>
                          <h3><a className="font-normal tracking-wide" href="#">Pleated Trouser</a></h3>
                          <p className="ml-4 font-normal">$220.00</p>
                        </div>
                        <p className={`mt-1 text-sm ${textMutedClass}`}>Charcoal</p>
                        <p className={`mt-1 text-sm ${textMutedClass}`}>Size 32</p>
                        <div className="flex flex-1 items-end justify-between text-sm mt-4">
                          <div className={`flex items-center border ${darkMode ? 'border-white/20' : 'border-gray-200'} rounded-md`}>
                            <button className={`px-2 py-1 ${textMutedClass} ${buttonHoverClass} transition-colors`}><Minus className="h-3 w-3" /></button>
                            <span className={`px-2 py-1 ${textMainClass} font-medium text-xs`}>1</span>
                            <button className={`px-2 py-1 ${textMutedClass} ${buttonHoverClass} transition-colors`}><Plus className="h-3 w-3" /></button>
                          </div>
                          <button className="font-medium text-[#14b881] hover:text-[#14b881]/80 transition-colors text-xs uppercase tracking-wide" type="button">Remove</button>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>

              {/* Footer / Checkout Area */}
              <div className={`border-t ${borderClass} px-6 sm:px-8 py-6 ${bgClass}`}>
                <div className={`flex justify-between text-base font-medium ${textMainClass} mb-2`}>
                  <p className="font-normal">Subtotal</p>
                  <p>$670.00</p>
                </div>
                <p className={`mt-1 text-xs ${textMutedClass} text-center mb-6`}>Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                  <a 
                    className={`flex items-center justify-center rounded-md border border-transparent px-6 py-4 text-sm font-medium shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer ${darkMode ? 'bg-white text-[#1A1A1E] hover:bg-neutral-200' : 'bg-[#111815] text-white hover:bg-neutral-800'}`} 
                    onClick={handleCheckout}
                  >
                    continue to shipping
                  </a>
                </div>
                <div className={`mt-4 flex justify-center text-center text-sm ${textMutedClass}`}>
                  <p>
                    or
                    <button 
                      className={`font-medium ml-1 underline decoration-1 underline-offset-4 ${textMainClass} hover:opacity-80`} 
                      type="button"
                      onClick={onClose}
                    >
                      Continue Shopping
                    </button>
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
