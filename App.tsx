
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Lookbook } from './components/Lookbook';
import { Editorial } from './components/Editorial';
import { ProductList } from './components/ProductList';
import { Story } from './components/Story';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden font-sans text-[#111815] selection:bg-[#14b881]/30">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Lookbook />
        <Editorial />
        <ProductList />
        <Story />
      </main>
      <Footer />
    </div>
  );
};

export default App;
