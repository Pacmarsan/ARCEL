
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-6 py-24 md:px-10 lg:px-20">
      <div className="grid h-full grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
        {/* Text Content */}
        <div className="order-2 flex flex-col gap-8 md:col-span-5 md:order-1 md:gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h1
              className="font-serif text-5xl font-light leading-[0.9] tracking-tight text-[#111815] md:text-6xl lg:text-7xl xl:text-8xl"
              custom={0}
              variants={fadeUp}
            >
              A study in <br />
              <span className="pl-4 italic text-[#14b881]/90 md:pl-8">form</span>, <br />
              balance, & <br />
              silence.
            </motion.h1>

            <motion.div
              className="mt-8 mb-4 h-[1px] w-12 bg-black/20"
              custom={1}
              variants={fadeUp}
            />

            <motion.p
              className="max-w-md font-sans text-sm font-light leading-relaxed text-[#111815]/70 md:text-base"
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
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center gap-4 pt-4"
          >
            <a href="#lookbook" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest transition-all hover:gap-5">
              <span className="border-b border-current pb-0.5">Scroll to enter</span>
              <ArrowDown className="h-4 w-4 transition-colors group-hover:text-[#14b881]" />
            </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <div className="order-1 relative h-[60vh] w-full md:col-span-7 md:order-2 md:h-[85vh]">
          <motion.div
            className="group relative ml-auto h-full w-full overflow-hidden rounded-lg md:w-[90%]"
            initial={{ clipPath: 'inset(10% 10% 10% 10%)', opacity: 0 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Decorative Blur */}
            <div className="absolute -left-12 bottom-12 -z-10 h-64 w-64 rounded-full bg-[#f0f4f3] blur-3xl"></div>

            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHHmPicTqdAjRpKPZV39rVMBOt6ZGQ6Sgc6Kg55us7Vin4GRLBuSq6p9ygbiicS5vJaFrpCEbXcVPD_BMskmJzSoZvhdtsTjEOxSFoAN7qnQhroSAZFrrhmp1WA2Xvf-9Gvy7PQgrhcE0nmCxylMvSxMpCjWcaZWDXvmYSG7AdMPpJ-Kq6Llbrm1D-7Et8EgfBT2dBweqYwSFN_XPtQAD0NVCb52uLjuOty-Xpehp5PJst9qr4f6iXKdM3itWqTls4cdV67Dch5o4')",
              }}
            />

            {/* Floating Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-6 left-6 rounded bg-white/80 px-4 py-2 text-xs font-medium tracking-wide backdrop-blur-md"
            >
              FW / 2024 — Look 01
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Editorial Text */}
      <div className="absolute bottom-10 right-10 hidden opacity-40 lg:block">
        <span className="text-[10px] uppercase tracking-[0.2em] [writing-mode:vertical-rl]">
          Editorial Collection
        </span>
      </div>
    </section>
  );
};
