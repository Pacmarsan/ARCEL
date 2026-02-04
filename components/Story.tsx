
import React from 'react';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

interface StoryProps {
  onReadStory: () => void;
}

export const Story: React.FC<StoryProps> = ({ onReadStory }) => {
  return (
    <section id="story" className="bg-white py-20">
      <motion.div 
        className="mx-auto max-w-[960px] px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-6 flex justify-center">
          <Leaf className="h-10 w-10 text-[#14b881] font-light" strokeWidth={1.5} />
        </div>
        
        <h2 className="mb-6 font-serif text-2xl leading-tight md:text-4xl">
          "Restraint is the ultimate expression of luxury."
        </h2>
        
        <p className="mx-auto mb-8 max-w-2xl text-base text-gray-500">
          Our materials are sourced from the finest mills in Italy and Japan, prioritizing
          sustainability and tactile quality above all else.
        </p>
        
        <button
          onClick={onReadStory}
          className="inline-block border-b border-black pb-1 text-sm font-bold transition-all hover:border-[#14b881] hover:text-[#14b881]"
        >
          Read our Story
        </button>
      </motion.div>
    </section>
  );
};
