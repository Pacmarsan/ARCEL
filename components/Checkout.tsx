
import React, { useState } from 'react';
import { ArrowLeft, CreditCard, ShoppingBag, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CheckoutProps {
  onBack: () => void;
  onComplete?: () => void;
  darkMode?: boolean;
}

export const Checkout: React.FC<CheckoutProps> = ({ onBack, onComplete, darkMode = false }) => {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState('standard');

  const inputClass = `block w-full border-0 border-b border-gray-200 bg-transparent px-0 py-3 text-base placeholder-gray-400 focus:border-[#14b881] focus:ring-0 transition-colors ${darkMode ? 'border-white/20 text-white placeholder-white/40' : 'text-[#111815]'}`;
  const labelClass = `block ${darkMode ? 'text-white' : 'text-[#111815]'}`;
  const sectionTitleClass = `mb-6 font-serif text-2xl font-medium italic ${darkMode ? 'text-white' : 'text-[#111815]'}`;

  return (
    <div className={`flex min-h-screen flex-col-reverse lg:flex-row ${darkMode ? 'bg-[#1A1A1E] text-white' : 'bg-white text-[#111815]'}`}>
      
      {/* LEFT COLUMN: Forms */}
      <div className={`flex w-full flex-col border-r border-transparent lg:w-3/5 lg:border-gray-100 xl:w-7/12 ${darkMode ? 'lg:border-white/10' : ''}`}>
        
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-6 lg:px-12 lg:pt-10">
          <div className="flex items-center gap-2">
            <h1 className="font-sans text-xl font-bold tracking-widest uppercase lg:text-2xl">ARCÈL STUDIO</h1>
          </div>
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-[#14b881]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Cart</span>
          </button>
        </header>

        {/* Main Content */}
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-12 lg:px-12">
          
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap gap-2 py-6 text-sm lg:text-base">
            <span className={`font-medium ${darkMode ? 'text-white' : 'text-[#111815]'}`}>Contact</span>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-400">Shipping</span>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-400">Payment</span>
          </nav>

          {/* Contact Section */}
          <section className="mb-12">
            <h2 className={sectionTitleClass}>Contact Information</h2>
            <div className="space-y-6">
              <label className={labelClass}>
                <span className="sr-only">Email address</span>
                <input 
                  className={inputClass}
                  placeholder="Email address" 
                  type="email" 
                  defaultValue="alexandra.doe@example.com"
                />
              </label>
              <div className="flex items-center gap-3">
                <div className={`flex h-4 w-4 items-center justify-center rounded border ${darkMode ? 'border-white/40' : 'border-gray-300'}`}>
                  <Check className="h-3 w-3 text-[#14b881]" />
                </div>
                <label className="cursor-pointer select-none text-sm text-gray-500">
                  Subscribe to our newsletter for exclusive drops.
                </label>
              </div>
            </div>
          </section>

          {/* Destination Section */}
          <section className="mb-12">
            <h2 className={sectionTitleClass}>Destination</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
              <label className={labelClass}>
                <input className={inputClass} placeholder="First name" type="text" />
              </label>
              <label className={labelClass}>
                <input className={inputClass} placeholder="Last name" type="text" />
              </label>
              <label className={`md:col-span-2 ${labelClass}`}>
                <input className={inputClass} placeholder="Address" type="text" />
              </label>
              <label className={`md:col-span-2 ${labelClass}`}>
                <input className={inputClass} placeholder="Apartment, suite, etc. (optional)" type="text" />
              </label>
              <label className={labelClass}>
                <input className={inputClass} placeholder="City" type="text" />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className={labelClass}>
                  <select className={`${inputClass} appearance-none`}>
                    <option>Country</option>
                    <option>United States</option>
                    <option>France</option>
                    <option>Japan</option>
                  </select>
                </label>
                <label className={labelClass}>
                  <input className={inputClass} placeholder="Zip Code" type="text" />
                </label>
              </div>
              <label className={`md:col-span-2 ${labelClass}`}>
                <input className={inputClass} placeholder="Phone (for shipping updates)" type="tel" />
              </label>
            </div>
          </section>

          {/* Shipping Method */}
          <section className="mb-12">
            <h2 className={sectionTitleClass}>Shipping Method</h2>
            <div className="space-y-4">
              <label 
                className={`group relative flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors ${
                  selectedShipping === 'standard' 
                    ? 'border-[#14b881] ring-1 ring-[#14b881]' 
                    : `${darkMode ? 'border-white/10 hover:border-white/30' : 'border-gray-200 hover:border-[#14b881]'}`
                }`}
                onClick={() => setSelectedShipping('standard')}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-5 w-5 items-center justify-center rounded-full border ${selectedShipping === 'standard' ? 'border-[#14b881]' : 'border-gray-300'}`}>
                    {selectedShipping === 'standard' && <div className="h-2.5 w-2.5 rounded-full bg-[#14b881]" />}
                  </div>
                  <div className="flex flex-col">
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-[#111815]'}`}>Standard Delivery</span>
                    <span className="text-sm text-gray-500">4-5 Business Days</span>
                  </div>
                </div>
                <span className={`font-medium ${darkMode ? 'text-white' : 'text-[#111815]'}`}>Free</span>
              </label>

              <label 
                className={`group relative flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors ${
                  selectedShipping === 'express' 
                    ? 'border-[#14b881] ring-1 ring-[#14b881]' 
                    : `${darkMode ? 'border-white/10 hover:border-white/30' : 'border-gray-200 hover:border-[#14b881]'}`
                }`}
                onClick={() => setSelectedShipping('express')}
              >
                <div className="flex items-center gap-4">
                   <div className={`flex h-5 w-5 items-center justify-center rounded-full border ${selectedShipping === 'express' ? 'border-[#14b881]' : 'border-gray-300'}`}>
                    {selectedShipping === 'express' && <div className="h-2.5 w-2.5 rounded-full bg-[#14b881]" />}
                  </div>
                  <div className="flex flex-col">
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-[#111815]'}`}>Express Courier</span>
                    <span className="text-sm text-gray-500">1-2 Business Days</span>
                  </div>
                </div>
                <span className={`font-medium ${darkMode ? 'text-white' : 'text-[#111815]'}`}>$25.00</span>
              </label>
            </div>
          </section>

          {/* Payment */}
          <section className="mb-12">
            <h2 className={sectionTitleClass}>Payment</h2>
            <div className={`rounded-xl border p-6 ${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50/50 border-gray-100'}`}>
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">Credit Card</span>
                <div className="flex gap-2">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-6">
                <label className={labelClass}>
                  <input className={inputClass} placeholder="Card number" type="text" />
                </label>
                <div className="grid grid-cols-2 gap-8">
                  <label className={labelClass}>
                    <input className={inputClass} placeholder="MM / YY" type="text" />
                  </label>
                  <label className={labelClass}>
                    <input className={inputClass} placeholder="CVC" type="text" />
                  </label>
                </div>
                <label className={labelClass}>
                  <input className={inputClass} placeholder="Cardholder Name" type="text" />
                </label>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-12">
            <button 
              onClick={onComplete}
              className="w-full rounded bg-[#14b881] py-4 text-lg font-medium text-white shadow-lg shadow-[#14b881]/20 transition-colors hover:bg-[#14b881]/90"
            >
              Complete Order
            </button>
            <p className="mt-4 text-center text-sm text-gray-400">
              Secure checkout powered by Stripe.
            </p>
          </div>

        </main>

        <footer className={`mt-auto border-t px-6 py-8 lg:px-12 ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 lg:justify-start">
            <a className="hover:underline" href="#">Refund Policy</a>
            <a className="hover:underline" href="#">Shipping Policy</a>
            <a className="hover:underline" href="#">Privacy Policy</a>
            <a className="hover:underline" href="#">Terms of Service</a>
          </div>
        </footer>
      </div>

      {/* RIGHT COLUMN: Summary (Sticky) */}
      <div className={`relative w-full border-b lg:w-2/5 lg:border-b-0 lg:border-l xl:w-5/12 ${darkMode ? 'bg-[#111115] border-white/10' : 'bg-[#f6f8f7] border-gray-200'}`}>
        <div className="px-6 py-8 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:p-12">
          
          {/* Mobile Toggle */}
          <div 
            className="flex cursor-pointer items-center justify-between lg:hidden" 
            onClick={() => setIsSummaryOpen(!isSummaryOpen)}
          >
            <div className="flex items-center gap-2 text-[#14b881]">
              <ShoppingBag className="h-5 w-5" />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-[#111815]'}`}>
                {isSummaryOpen ? 'Hide' : 'Show'} Order Summary
              </span>
              {isSummaryOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </div>
            <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#111815]'}`}>$740.00</span>
          </div>

          {/* Content Wrapper */}
          <AnimatePresence initial={false}>
            {(isSummaryOpen || window.innerWidth >= 1024) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden lg:!h-auto lg:!opacity-100"
              >
                <div className="pt-6 lg:pt-0">
                  <h2 className={`hidden mb-8 font-serif text-2xl font-medium italic lg:block ${darkMode ? 'text-white' : 'text-[#111815]'}`}>Your Selection</h2>
                  
                  {/* Product List */}
                  <div className="space-y-6">
                    {/* Item 1 */}
                    <div className="flex items-start gap-4">
                      <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-gray-200">
                        <img 
                          alt="Oversized Wool Coat" 
                          className="h-full w-full object-cover" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoutqqY5-4RsKQe1dw-3PfALGdjOZjCxkBuyc130_mCaIp0uryAz2xm9AaFux_DPFW7zOQnDOBxGJvhi05KjkSmTduUtHkdVeSXTHvmii_y3oAgAES7ZXWy1sTCqBusna_iAC9QvzwtQTJnhYM1LACn0ypsHyJiTalcRsG2YwvnZJKwEdxD3jHtwRYoJkY9cD4-CwDdHNrkJ0FLSwq9D-eIgT5Vx-y_8_drt0_zEJDZdsvUWVj0kS1XysCBO7gxUk25CkCFzQ4WHA"
                        />
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs text-white">1</span>
                      </div>
                      <div className="flex flex-1 justify-between">
                        <div>
                          <h3 className={`font-medium leading-tight ${darkMode ? 'text-white' : 'text-[#111815]'}`}>Oversized Wool Coat</h3>
                          <p className="mt-1 text-sm text-gray-500">Ash Grey / M</p>
                        </div>
                        <span className={`font-medium ${darkMode ? 'text-white' : 'text-[#111815]'}`}>$450.00</span>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-start gap-4">
                      <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-gray-200">
                        <img 
                          alt="Structured Ankle Boots" 
                          className="h-full w-full object-cover" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuACiI_PY0IlU4Ey4HWTdMHYx3I2AUspDzT7EM-Nf2aDg8tRweW7-X1COx2xMGTOaDmVyUYV8I7MQ8d78sSaJ29nHWqCnpHU54j0Thx5fZ48F6JffegL-Ar1OSM-a68lm39pkptIKmrQWleu2u__2tHBIpv9kgX92lPx8RZozySJrSyGleGqEXvFpWAXbLvat9mNrkzNjIobqfyJC2DXnzKOnPJ0fzXOCbu0-pS0dBY0JgGGOtcv09u3aXiGHxtPgY-MQZ-9QydvY8M"
                        />
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs text-white">1</span>
                      </div>
                      <div className="flex flex-1 justify-between">
                        <div>
                          <h3 className={`font-medium leading-tight ${darkMode ? 'text-white' : 'text-[#111815]'}`}>Structured Ankle Boots</h3>
                          <p className="mt-1 text-sm text-gray-500">Black Leather / 38</p>
                        </div>
                        <span className={`font-medium ${darkMode ? 'text-white' : 'text-[#111815]'}`}>$290.00</span>
                      </div>
                    </div>
                  </div>

                  <div className={`my-6 h-px w-full ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`}></div>

                  {/* Promo Code */}
                  <div className="flex gap-3">
                    <input 
                      className={`flex-1 border-0 border-b bg-transparent px-0 py-2 text-sm focus:ring-0 ${darkMode ? 'border-white/20 placeholder-white/40 focus:border-[#14b881]' : 'border-gray-200 placeholder-gray-400 focus:border-[#14b881]'}`}
                      placeholder="Gift card or discount code" 
                      type="text" 
                    />
                    <button className={`text-sm font-medium transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-[#111815]'}`}>Apply</button>
                  </div>

                  <div className={`my-6 h-px w-full ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`}></div>

                  {/* Totals */}
                  <div className="space-y-3 text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className={`font-medium ${darkMode ? 'text-white' : 'text-[#111815]'}`}>$740.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-xs text-gray-400">(Calculated at next step)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Taxes</span>
                      <span className={`font-medium ${darkMode ? 'text-white' : 'text-[#111815]'}`}>$0.00</span>
                    </div>
                  </div>

                  <div className={`my-6 h-px w-full ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`}></div>

                  <div className="flex items-baseline justify-between">
                    <span className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-[#111815]'}`}>Total</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-normal text-gray-400">USD</span>
                      <span className={`font-serif text-3xl font-medium ${darkMode ? 'text-white' : 'text-[#111815]'}`}>$740.00</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

    </div>
  );
};
