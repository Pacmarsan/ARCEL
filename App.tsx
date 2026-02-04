
import React, { useState } from 'react';
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

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'shop' | 'product' | 'story' | 'archives' | 'checkout' | 'order-confirmed'>('home');
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

  // If in checkout mode, render the isolated checkout view
  if (view === 'checkout') {
    return (
      <Checkout 
        onBack={navigateToShop} 
        onComplete={navigateToOrderConfirmed}
        darkMode={false} // Force light mode or manage based on previous context if desired
      />
    );
  }

  // If order confirmed, render the success page
  if (view === 'order-confirmed') {
    return (
      <OrderConfirmed 
        onNavigateHome={navigateToHome}
        darkMode={false}
      />
    );
  }

  return (
    <div className={`relative flex min-h-screen w-full flex-col overflow-hidden font-sans selection:bg-[#14b881]/30 ${view === 'archives' ? 'bg-[#1A1A1E]' : 'text-[#111815]'}`}>
      <Navbar 
        onNavigateHome={navigateToHome} 
        onNavigateStory={navigateToStory} 
        onNavigateArchives={navigateToArchives}
        onNavigateShop={navigateToShop}
        onOpenBag={() => setIsBagOpen(true)}
        darkMode={view === 'archives'}
      />
      <main className="flex-grow pt-16">
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
      </main>
      
      <ShoppingBag 
        isOpen={isBagOpen} 
        onClose={() => setIsBagOpen(false)} 
        onCheckout={navigateToCheckout}
        darkMode={view === 'archives'}
      />
      
      <Footer darkMode={view === 'archives'} />
    </div>
  );
};

export default App;
