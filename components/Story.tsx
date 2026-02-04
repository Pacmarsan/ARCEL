import React, { useRef } from 'react';
import { Leaf } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StoryProps {
  onReadStory: () => void;
}

export const Story: React.FC<StoryProps> = ({ onReadStory }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 1, 0]);

  return (
    <section id="story" ref={containerRef} className="relative bg-background-light py-32 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />

      <motion.div
        className="mx-auto max-w-[960px] px-6 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-8 flex justify-center">
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Leaf className="h-12 w-12 text-primary font-light opacity-80" strokeWidth={1} />
          </motion.div>
        </div>

        <h2 className="mb-8 font-serif text-3xl md:text-5xl leading-tight text-text-main">
          "Restraint is the ultimate <br /> expression of <span className="italic text-primary">luxury</span>."
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-text-muted font-light leading-relaxed">
          Our materials are sourced from the finest mills in Italy and Japan, prioritizing
          sustainability and tactile quality above all else. We believe in the quiet power of
          a garment that speaks for itself.
        </p>

        <motion.button
          onClick={onReadStory}
          className="group inline-flex flex-col items-center gap-1 text-sm font-bold uppercase tracking-widest text-text-main transition-colors hover:text-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Read our Story</span>
          <span className="h-[1px] w-full bg-current transition-all duration-300 group-hover:w-1/2" />
        </motion.button>
      </motion.div>

      {/* Parallax Quote or Text */}
      <motion.div
        style={{ y, opacity: 0.05 }}
        className="absolute top-1/2 left-0 w-full text-center pointer-events-none -z-0"
      >
        <span className="text-[15vw] font-serif leading-none text-text-main">ORIGIN</span>
      </motion.div>
    </section>
  );
};
