
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.15,
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative mx-auto flex h-screen max-w-[1440px] flex-col justify-center px-6 pt-16 md:px-10 lg:px-20 overflow-hidden">
      <div className="grid h-full w-full grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-16">
        {/* Text Content */}
        <div className="order-2 flex flex-col gap-8 md:col-span-5 md:order-1 md:gap-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-6 relative z-10"
          >
            <motion.h1
              className="font-serif text-6xl font-light leading-[0.9] tracking-tight text-text-main md:text-7xl lg:text-8xl xl:text-9xl"
              custom={0}
              variants={fadeUp}
            >
              A study in <br />
              <span className="relative inline-block">
                <span className="relative z-10 pl-4 italic text-primary md:pl-8">form</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-2 left-4 md:left-8 w-full h-3 bg-primary/10 -z-0 origin-left"
                />
              </span>, <br />
              balance & <br />
              silence.
            </motion.h1>

            <motion.div
              className="mt-8 mb-4 h-[1px] w-16 bg-text-main/20"
              custom={1}
              variants={fadeUp}
            />

            <motion.p
              className="max-w-md font-sans text-sm font-light leading-relaxed text-text-muted md:text-base"
              custom={2}
              variants={fadeUp}
            >
              Arcèl Studio creates garments that exist between silence and noise.
              Focused on silhouette, linen, and the absence of the unnecessary.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex items-center gap-4 pt-4"
          >
            <a href="#lookbook" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest transition-all hover:gap-5 text-text-main hover:text-primary">
              <span className="border-b border-current pb-0.5">Scroll to enter</span>
              <ArrowDown className="h-4 w-4 transition-colors group-hover:text-primary" />
            </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <div className="order-1 relative h-[55vh] w-full md:col-span-7 md:order-2 md:h-[90vh] md:-mr-20">
          <motion.div
            className="group relative ml-auto h-full w-full overflow-hidden md:w-full"
            initial={{ clipPath: 'inset(100% 0% 0% 0%)', scale: 1.1 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
          >
            {/* Decorative Blur */}
            <div className="absolute -left-20 bottom-20 -z-10 h-80 w-80 rounded-full bg-background-light blur-3xl opacity-50"></div>

            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-[3s] ease-out group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHHmPicTqdAjRpKPZV39rVMBOt6ZGQ6Sgc6Kg55us7Vin4GRLBuSq6p9ygbiicS5vJaFrpCEbXcVPD_BMskmJzSoZvhdtsTjEOxSFoAN7qnQhroSAZFrrhmp1WA2Xvf-9Gvy7PQgrhcE0nmCxylMvSxMpCjWcaZWDXvmYSG7AdMPpJ-Kq6Llbrm1D-7Et8EgfBT2dBweqYwSFN_XPtQAD0NVCb52uLjuOty-Xpehp5PJst9qr4f6iXKdM3itWqTls4cdV67Dch5o4')",
              }}
            />
            {/* Gradient Overlay for Text Readability if needed, though split layout handles it. 
                 Added soft gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/5 pointer-events-none" />

            {/* Floating Label */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="absolute bottom-10 right-10 md:right-auto md:left-10 rounded-none border border-white/20 bg-white/10 px-6 py-3 text-xs font-medium tracking-[0.2em] uppercase text-white backdrop-blur-md"
            >
              FW / 2026 — Look 01
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Editorial Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 right-6 hidden lg:block"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] [writing-mode:vertical-rl] text-text-main">
          Editorial Collection
        </span>
      </motion.div>
    </section>
  );
};
