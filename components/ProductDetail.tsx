import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Plus } from 'lucide-react';

const AccordionItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-sm font-medium text-text-main transition-colors hover:text-primary group"
      >
        <span className="tracking-wide uppercase text-xs font-bold">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-text-muted group-hover:text-primary"
        >
          <Plus className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] as const }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-sm leading-relaxed text-text-muted">
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
      transition={{ duration: 0.8 }}
      className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 lg:px-12 lg:py-16"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">

        {/* Left Column: Editorial Image Stack */}
        <div className="flex flex-col gap-4 lg:col-span-7 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-background-subtle group"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2yawm19KHGr-eVe0y_JPzHpJTVhUa0YnnMfnAYxrwO3b6xRaKMCpUnEPTQr8fObN4SnwsOgeHwZGKAoyqENs-XvItm_u34iNZGRk1m7g4DaPWzEbd-LTfQ_CtPDhAy3exLQYWtRr-RzTDjGluD8yUP8PX5_go8onYg22cwh6nOAAdsRG-qLbsxKuLGcGW3bvhNpozLi0OoCXYCIw0lJelhL4bkH8nf4fXq8aoGfXnX3gePu5XNAVlIFgoIex4ONANBFjrZzYhA48"
              alt="Arcèl Coat 01 front view"
              className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-background-subtle group"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgFKo-OmRfeCkvkIlrCBY0sRfFghvm-zu61_ElHsLr8FLw8NCPP-rvksQf_Xis_oFu2QphZhhgZ1YP7f4v3gn_3-xGPWbO4SaMtkvQHYIrdfhSkxQ3R8kzjhGnlJ1-1rZNyVndZljFcN8ZHHKNQxDyC0TBeuZJsOcq3-ENPU4kZxgQd21_dB-lVF8q5kMyCD-WrCzY7Z13dxTtvvziDepajO33rjYkqyzEDl90sqeUDG7jPm39cqF6TNRvSJ1ypfFioME0CjmfB1k"
              alt="Texture detail"
              className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-background-subtle group"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzYYeXdQiAbMXxAXjW3HdoK9hq_2RUL9MwfQ9kXI5fXQat-tMY_TMXWxQAHBTJHD4tRJSifH4c16q1vCMMlKcjQ-OHbs0afsqtpUoD1xv1zvGvpk0hBcFzKNa0HRzyIMc6H2ZRAxVP2BhiI6Zc15fuF-CTYVAtS45PKMVlGcks3IkG6Ds0LZr4pCto6NhUGo5R_oQfOpDN13fQpfYnSn5hu5nC64uoh35tQwIcsYCk1HMzhsRzeydukqhM8FM5xqnm6o2T4uDpj74"
              alt="Side view walking"
              className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-4 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-background-subtle group"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBoovjoK--WUypUyPiygZbcTtXMV1owl-TtQVERgAC8twdGph-PV7R1bw_CqjNr9_aF5N4dFNxT3uGP53bJpEBt5vLztXmyVIfzdi171LmImsZZpC2zEOezIcCvX08FXC8BDr6T5isJnVWCsyos7gJTF8pi4ltXb9msmB8nD9t-lzsyhOYwa5BbFrDflWqxbsUo9meQ7jsplL9BzCNYE7Nw2uY-y3V2voOSApBgrutEnriazv02OQiClOa137NL83oTQVGF_b7-b8"
                alt="Editorial pose"
                className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-background-subtle group"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrLyT15AmVUZlp7WqOfiMhey5Q5jixMdLNq1Frj1aqLB-aP6BQAsmGxVfyr-I4dP0AOjlIkfci0P9fTsla4TQTHPl19IxmJPE4PLNshE2CX2yTZ-E-QH5_NOFOmzYUhou0ixUwFVNQFM2LSZaqM24l75Ku1W8ltbzNKNJHj67iFXSWN6mo6Q0LEIG_D3D92B0y2tyeE0NknNX6bIfrmJ2gOASToDrFN2DPbI_B2T6BnoR9iHYZCOP5AubnCGaFzukhlEhCry7mwEM"
                alt="Back view"
                className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Column: Sticky Product Details */}
        <div className="relative lg:col-span-5">
          <div className="sticky top-28 flex flex-col h-auto">

            {/* Breadcrumbs */}
            <nav className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
              <button onClick={onBack} className="hover:text-primary transition-colors">Shop</button>
              <span className="text-gray-300">/</span>
              <button onClick={onBack} className="hover:text-primary transition-colors">Outerwear</button>
              <span className="text-gray-300">/</span>
              <span className="text-text-main">Arcèl Coat 01</span>
            </nav>

            {/* Header */}
            <div className="mb-6">
              <h1 className="mb-2 font-serif text-4xl lg:text-6xl text-text-main">
                Arcèl Coat 01
              </h1>
              <p className="text-xl font-medium text-text-muted font-sans mt-2">
                €1,250.00
              </p>
            </div>

            {/* Description */}
            <div className="mb-10">
              <p className="text-sm lg:text-base leading-relaxed text-text-muted font-light">
                A study in volume and restraint. The Arcèl Coat 01 features a dropped shoulder
                silhouette constructed from archival virgin wool. Designed for movement, finished
                with hand-stitched detailing and genuine horn buttons. An enduring piece for the modern wardrobe.
              </p>
            </div>

            {/* Configurator */}
            <div className="mb-10 flex flex-col gap-8">

              {/* Color */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-text-main">Color</span>
                <div className="flex items-center gap-3">
                  <button className="h-8 w-8 rounded-full bg-[#3d4246] ring-1 ring-primary ring-offset-4 ring-offset-[#f6f8f7] transition-all hover:scale-110"></button>
                  <span className="text-sm font-light text-text-muted ml-2">Charcoal Grey</span>
                </div>
              </div>

              {/* Size */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-text-main">Size</span>
                  <button className="text-xs text-text-muted underline hover:text-primary">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`flex h-12 w-14 items-center justify-center rounded-sm border text-sm transition-all duration-300
                        ${selectedSize === size
                          ? 'border-text-main bg-text-main text-white'
                          : 'border-gray-200 bg-transparent text-text-main hover:border-primary'
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                  <button disabled className="relative flex h-12 w-14 cursor-not-allowed items-center justify-center overflow-hidden rounded-sm border border-gray-100 bg-gray-50 text-sm font-medium text-gray-300 opacity-50">
                    XL
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full -rotate-45 border-t border-gray-300"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mb-12">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex h-14 w-full items-center justify-center gap-3 rounded-sm bg-primary text-xs font-bold uppercase tracking-[0.2em] text-white shadow-sm transition-all hover:bg-[#2f4d36]"
              >
                <span>Add to Wardrobe</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
              <div className="mt-4 flex justify-between text-[10px] text-text-muted uppercase tracking-wider">
                <span>Free Shipping in EU</span>
                <span>Duty Free to USA</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="flex flex-col border-t border-gray-200">
              <AccordionItem title="Material & Origin">
                <p className="mb-2"><strong>Main:</strong> 100% Virgin Wool (sourced from Biella, Italy)</p>
                <p className="mb-2"><strong>Lining:</strong> 100% Cupro (biodegradable)</p>
                <p>Constructed in our Portugal atelier.</p>
              </AccordionItem>
              <AccordionItem title="Fit & Dimensions">
                <p>Designed for an oversized, relaxed fit. We recommend taking your normal size for the intended silhouette, or sizing down for a closer fit.</p>
                <p className="mt-2">Length: 120cm (Size S)</p>
              </AccordionItem>
              <AccordionItem title="Care Instructions">
                <p>Air frequently to refresh. Dry clean only when necessary to preserve fiber integrity. Steam lightly.</p>
              </AccordionItem>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};
