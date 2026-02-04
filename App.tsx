
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Lookbook } from './components/Lookbook';
import { Editorial } from './components/Editorial';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { Story } from './components/Story';
import { StoryDetail } from './components/StoryDetail';
import { Archives } from './components/Archives';
import { Footer } from './components/Footer';
import { ShoppingBag } from './components/ShoppingBag';
import { Checkout } from './components/Checkout';
import { OrderConfirmed } from './components/OrderConfirmed';
import { About } from './components/About';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'shop' | 'product' | 'story' | 'archives' | 'checkout' | 'order-confirmed' | 'about'>('home');
  const [isBagOpen, setIsBagOpen] = useState(false);

  const navigateToProduct = () => {
    setView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToShop = () => {
    setView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToStory = () => {
    setView('story');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const navigateToArchives = () => {
    setView('archives');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const navigateToCheckout = () => {
    setView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const navigateToOrderConfirmed = () => {
    setView('order-confirmed');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const navigateToAbout = () => {
    setView('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className={`relative flex min-h-screen w-full flex-col overflow-hidden font-sans selection:bg-primary-light/30 ${view === 'archives' ? 'bg-[#1A1A1E]' : 'bg-background-light text-text-main'}`}>
      <AnimatePresence mode="wait">
        {view === 'checkout' ? (
          <motion.div
            key="checkout"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="w-full h-full flex-grow"
          >
            <Checkout
              onBack={navigateToShop}
              onComplete={navigateToOrderConfirmed}
              darkMode={false}
            />
          </motion.div>
        ) : view === 'order-confirmed' ? (
          <motion.div
            key="order-confirmed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex-grow"
          >
            <OrderConfirmed
              onNavigateHome={navigateToHome}
              darkMode={false}
            />
          </motion.div>
        ) : (
          <motion.div
            key="standard-layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="contents"
          >
            <Navbar
              onNavigateHome={navigateToHome}
              onNavigateStory={navigateToStory}
              onNavigateArchives={navigateToArchives}
              onNavigateShop={navigateToShop}
              onNavigateAbout={navigateToAbout}
              onOpenBag={() => setIsBagOpen(true)}
              darkMode={view === 'archives'}
            />
            <main className="flex-grow pt-16 min-h-[calc(100vh-theme(spacing.16))]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={view}
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                  className="w-full"
                >
                  {view === 'home' && (
                    <>
                      <div className="-mt-16">
                        <Hero />
                      </div>
                      <Lookbook />
                      <Editorial />
                      <Story onReadStory={navigateToStory} />
                    </>
                  )}
                  {view === 'shop' && (
                    <ProductList onProductClick={navigateToProduct} />
                  )}
                  {view === 'product' && (
                    <ProductDetail onBack={navigateToShop} />
                  )}
                  {view === 'story' && (
                    <StoryDetail />
                  )}
                  {view === 'archives' && (
                    <Archives />
                  )}
                  {view === 'about' && (
                    <About />
                  )}
                </motion.div>
              </AnimatePresence>
            </main>

            <ShoppingBag
              isOpen={isBagOpen}
              onClose={() => setIsBagOpen(false)}
              onCheckout={navigateToCheckout}
              darkMode={view === 'archives'}
            />

            <Footer darkMode={view === 'archives'} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
