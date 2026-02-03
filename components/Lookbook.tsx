
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_Eou1aRjU_d4t4O-ZgbXv0oFys369C9J9-rNnzfC0C0Mflc7Q2A2fO-qSGl3Y2NqF8T9y_2QW_6h3rZ14Qo5q8-d9tK1-X4Dq2Q2j5y_7hM9q8vP5X6L7nB4oG3aE8cK9wR0yZ5_T7vU2xW4mH8s6N3j1I5r9lD6tY2kQ4p0gF8vX",
    aspect: "aspect-[3/4]",
    yRange: [0, -50],
    alt: "Model in grey minimalist coat"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC2qY1aRjU_d4t4O-ZgbXv0oFys369C9J9-rNnzfC0C0Mflc7Q2A2fO-qSGl3Y2NqF8T9y_2QW_6h3rZ14Qo5q8-d9tK1-X4Dq2Q2j5y_7hM9q8vP5X6L7nB4oG3aE8cK9wR0yZ5_T7vU2xW4mH8s6N3j1I5r9lD6tY2kQ4p0gF8vX", // Using a different crop/image for variety would be ideal, reused for demo reliability
    aspect: "aspect-[3/5]",
    yRange: [0, -100],
    alt: "Detail shot of fabric texture"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1U8lVI8SbY5rcm-XoCy_ziBqbxnsin79QRFxEWTyTx9ibXRS0Xoyzr0XvF3tR5yfcAY_07GngGNH98E_vrY892IsEM_-d_-F7VN-hjmW3zo4DuM7WYOxQxO4I1DwQIpK6e2t_ZSn2EcYO2opPPYyrAmaVjqoCw4GyW49AF8xcsSpDR6G5Xf_0r0go6CrEyXRyTRlvpoKPmoTX35B-jlHnfiNcAUmARF95hu8oPbjfAmXiTu8rtpL0pHLG9m98BpotRd77FgLn0j0",
    aspect: "aspect-[3/4]",
    yRange: [0, -30],
    alt: "Model walking in white trousers"
  }
];

export const Lookbook: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="lookbook" ref={containerRef} className="relative w-full overflow-hidden bg-[#11211c] py-32 text-[#f6f8f7]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        
        {/* Header */}
        <div className="mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#14b881]">
              Campaign 01
            </span>
            <h2 className="font-serif text-4xl font-light leading-tight md:text-6xl">
              Silence in <br /><span className="italic text-white/50">Motion</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm font-light leading-relaxed text-white/60">
            Capturing the essence of the modern silhouette through a lens of quiet confidence.
          </p>
        </div>

        {/* Parallax Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          
          {/* Column 1 */}
          <motion.div style={{ y: y1 }} className="flex flex-col gap-12 md:col-span-7">
             <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop" 
                  alt="Minimalist architectural background" 
                  className="h-full w-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 text-xs uppercase tracking-widest text-white">Figure 01</div>
             </div>
             <div className="relative ml-auto w-[80%] aspect-[3/4] overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1509631179647-b84917154023?q=80&w=1776&auto=format&fit=crop" 
                  alt="Model in shadow" 
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
             </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div style={{ y: y2 }} className="flex flex-col gap-12 pt-24 md:col-span-5 md:pt-48">
             <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1886&auto=format&fit=crop" 
                  alt="Fashion detail shot" 
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 text-xs uppercase tracking-widest text-white">Figure 02</div>
             </div>
             <div className="p-8 text-center">
                <p className="font-serif text-2xl italic text-white/80">"Form follows feeling."</p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
