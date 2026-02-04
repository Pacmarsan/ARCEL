
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const AccordionItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-sm font-medium text-text-main transition-colors hover:text-primary"
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-sm leading-relaxed text-text-muted">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface ProductDetailProps {
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ onBack }) => {
  const [selectedSize, setSelectedSize] = useState('S');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 lg:px-12 lg:py-12"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
        
        {/* Left Column: Editorial Image Stack */}
        <div className="flex flex-col gap-4 lg:col-span-7 lg:gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100 group"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2yawm19KHGr-eVe0y_JPzHpJTVhUa0YnnMfnAYxrwO3b6xRaKMCpUnEPTQr8fObN4SnwsOgeHwZGKAoyqENs-XvItm_u34iNZGRk1m7g4DaPWzEbd-LTfQ_CtPDhAy3exLQYWtRr-RzTDjGluD8yUP8PX5_go8onYg22cwh6nOAAdsRG-qLbsxKuLGcGW3bvhNpozLi0OoCXYCIw0lJelhL4bkH8nf4fXq8aoGfXnX3gePu5XNAVlIFgoIex4ONANBFjrZzYhA48"
              alt="Arcèl Coat 01 front view"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100 group"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgFKo-OmRfeCkvkIlrCBY0sRfFghvm-zu61_ElHsLr8FLw8NCPP-rvksQf_Xis_oFu2QphZhhgZ1YP7f4v3gn_3-xGPWbO4SaMtkvQHYIrdfhSkxQ3R8kzjhGnlJ1-1rZNyVndZljFcN8ZHHKNQxDyC0TBeuZJsOcq3-ENPU4kZxgQd21_dB-lVF8q5kMyCD-WrCzY7Z13dxTtvvziDepajO33rjYkqyzEDl90sqeUDG7jPm39cqF6TNRvSJ1ypfFioME0CjmfB1k"
              alt="Texture detail"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100 group"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzYYeXdQiAbMXxAXjW3HdoK9hq_2RUL9MwfQ9kXI5fXQat-tMY_TMXWxQAHBTJHD4tRJSifH4c16q1vCMMlKcjQ-OHbs0afsqtpUoD1xv1zvGvpk0hBcFzKNa0HRzyIMc6H2ZRAxVP2BhiI6Zc15fuF-CTYVAtS45PKMVlGcks3IkG6Ds0LZr4pCto6NhUGo5R_oQfOpDN13fQpfYnSn5hu5nC64uoh35tQwIcsYCk1HMzhsRzeydukqhM8FM5xqnm6o2T4uDpj74"
              alt="Side view walking"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100 group"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBoovjoK--WUypUyPiygZbcTtXMV1owl-TtQVERgAC8twdGph-PV7R1bw_CqjNr9_aF5N4dFNxT3uGP53bJpEBt5vLztXmyVIfzdi171LmImsZZpC2zEOezIcCvX08FXC8BDr6T5isJnVWCsyos7gJTF8pi4ltXb9msmB8nD9t-lzsyhOYwa5BbFrDflWqxbsUo9meQ7jsplL9BzCNYE7Nw2uY-y3V2voOSApBgrutEnriazv02OQiClOa137NL83oTQVGF_b7-b8"
                alt="Editorial pose"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100 group"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrLyT15AmVUZlp7WqOfiMhey5Q5jixMdLNq1Frj1aqLB-aP6BQAsmGxVfyr-I4dP0AOjlIkfci0P9fTsla4TQTHPl19IxmJPE4PLNshE2CX2yTZ-E-QH5_NOFOmzYUhou0ixUwFVNQFM2LSZaqM24l75Ku1W8ltbzNKNJHj67iFXSWN6mo6Q0LEIG_D3D92B0y2tyeE0NknNX6bIfrmJ2gOASToDrFN2DPbI_B2T6BnoR9iHYZCOP5AubnCGaFzukhlEhCry7mwEM"
                alt="Back view"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Column: Sticky Product Details */}
        <div className="relative lg:col-span-5">
          <div className="sticky top-28 flex flex-col h-auto">
            
            {/* Breadcrumbs */}
            <nav className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-text-muted">
              <button onClick={onBack} className="hover:text-primary transition-colors">Shop</button>
              <span className="text-gray-300">/</span>
              <button onClick={onBack} className="hover:text-primary transition-colors">Outerwear</button>
              <span className="text-gray-300">/</span>
              <span className="text-text-main">Arcèl Coat 01</span>
            </nav>

            {/* Header */}
            <div className="mb-4">
              <h1 className="mb-2 font-serif text-4xl leading-tight text-text-main lg:text-5xl">
                Arcèl Coat 01
              </h1>
              <p className="text-lg font-medium text-text-main">
                €1,250.00
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-sm leading-relaxed text-text-muted lg:text-base">
                A study in volume and restraint. The Arcèl Coat 01 features a dropped shoulder 
                silhouette constructed from archival virgin wool. Designed for movement, finished 
                with hand-stitched detailing and genuine horn buttons. An enduring piece for the modern wardrobe.
              </p>
            </div>

            {/* Configurator */}
            <div className="mb-8 flex flex-col gap-6">
              
              {/* Color */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-text-muted">Color</span>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-[#3d4246] ring-2 ring-primary ring-offset-2 ring-offset-[#f6f8f7]"></div>
                  <span className="text-sm font-medium text-text-main">Charcoal Grey</span>
                </div>
              </div>

              {/* Size */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted">Size</span>
                  <button className="text-xs text-text-muted underline hover:text-primary">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`flex h-10 w-12 items-center justify-center rounded border text-sm font-medium transition-all
                        ${selectedSize === size 
                          ? 'border-primary bg-primary text-white' 
                          : 'border-gray-200 bg-white text-text-main hover:border-primary/50'
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                  <button disabled className="relative flex h-10 w-12 cursor-not-allowed items-center justify-center overflow-hidden rounded border border-gray-100 bg-gray-50 text-sm font-medium text-gray-300">
                    XL
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full -rotate-45 border-t border-gray-300"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mb-10">
              <button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-bold tracking-wide text-white shadow-sm transition-all hover:bg-[#119e6e] hover:shadow-md">
                <span>ADD TO WARDROBE</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-3 text-center text-xs text-text-muted">Free worldwide shipping on orders over €500.</p>
            </div>

            {/* Accordions */}
            <div className="flex flex-col border-t border-gray-200">
              <AccordionItem title="Fabric & Care">
                <p className="mb-2"><strong>Main:</strong> 100% Virgin Wool (sourced from Italy)</p>
                <p className="mb-2"><strong>Lining:</strong> 100% Cupro</p>
                <p>Dry clean only. Do not wash, bleach or tumble dry. Iron on low heat if necessary.</p>
              </AccordionItem>
              <AccordionItem title="Fit Note">
                <p>Designed for an oversized, relaxed fit. We recommend taking your normal size for the intended silhouette, or sizing down for a closer fit.</p>
                <p className="mt-2">Model is 178cm/5'10" and wears a size S.</p>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <p>Complimentary shipping and returns on all orders within the EU. International orders are shipped via DHL Express.</p>
              </AccordionItem>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};
