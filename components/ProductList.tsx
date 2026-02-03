
import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  material: string;
  price: string;
  image: string;
  tag?: string;
  alt: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Silk Tunic",
    material: "Natural Linen",
    price: "$240",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgz52NYu86GWBi6wlqmZJhtO2_HawRNWhUzTBxLRQFM9WOeb38YYwHpt3B-jwSb1qJY_9fzzhOAXS1Cmr9f1VhLcYFz_bZytrzdLbDNFhPbrUVAQturIhNMzSJqCw6KtmVuZ6FA0IPLOI19pcXsIl1cquURs0w4FkQNg_d5aHMkq5PuqvKT0zYPS1RBHJ5WiB54RKKQFGk3ZEA3WRXpxvuXhG4wdXi3wMQGqIPGU2BjeppZZjBWhYsyoSneBR95p4nwJfKGSrvDPE",
    alt: "Woman in white minimalistic dress posing in a bright studio"
  },
  {
    id: 2,
    name: "Structure Coat",
    material: "Wool Blend",
    price: "$480",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNtwRks4UW69OW2VXuu053RNBQy66lmOxAKAq2bMqVMRQJ7on0XvvbPiMcmUXEYmsMHOwTHKAPcefpb0AtnP7t7SYXj4-3apR_tzTgUam2uOtdIlbaGIPt4Wwank2Q8WGZuMBd4-GSrmj-IxiXAIicmJwjMtEHjTorPPaFQuvRhkiEtU6hlpB0dDQ5VjEHG3GluBU10PpqujvUHfh4kyz-0UGJDEw6a3RyqCS929eNweK9aTMmQ8UT-4eNd7hf3JN-8fD4OPPKocM",
    alt: "Close up of a beige textured wool coat on a model"
  },
  {
    id: 3,
    name: "Pleated Trouser",
    material: "Cotton Twill",
    price: "$195",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1U8lVI8SbY5rcm-XoCy_ziBqbxnsin79QRFxEWTyTx9ibXRS0Xoyzr0XvF3tR5yfcAY_07GngGNH98E_vrY892IsEM_-d_-F7VN-hjmW3zo4DuM7WYOxQxO4I1DwQIpK6e2t_ZSn2EcYO2opPPYyrAmaVjqoCw4GyW49AF8xcsSpDR6G5Xf_0r0go6CrEyXRyTRlvpoKPmoTX35B-jlHnfiNcAUmARF95hu8oPbjfAmXiTu8rtpL0pHLG9m98BpotRd77FgLn0j0",
    tag: "New",
    alt: "Model wearing flowing oversized white trousers and a minimalist top"
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const ProductList: React.FC = () => {
  return (
    <section id="shop" className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-20">
      <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
        <div>
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#14b881]">
            New Arrivals
          </span>
          <h2 className="font-serif text-3xl font-medium md:text-5xl">The Collection</h2>
        </div>
        <a
          href="#"
          className="hidden items-center gap-2 border-b border-transparent pb-1 text-sm font-medium transition-colors hover:border-[#14b881]/30 hover:text-[#14b881] md:flex"
        >
          View all products
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3 lg:gap-x-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className={`group cursor-pointer ${index === 1 ? 'md:mt-16' : ''}`}
            variants={itemVariant}
          >
            <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-lg bg-[#f0f4f3]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${product.image}')` }}
                aria-label={product.alt}
              />
              
              {product.tag && (
                <div className="absolute left-4 top-4 rounded bg-[#14b881] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {product.tag}
                </div>
              )}

              <button
                aria-label="Quick Add"
                className="absolute bottom-4 right-4 translate-y-2 rounded-full bg-white p-3 shadow-lg opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <Plus className="h-5 w-5 text-black" />
              </button>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h3 className="mb-1 text-lg font-medium leading-none transition-colors group-hover:text-[#14b881]">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.material}</p>
              </div>
              <span className="text-sm font-medium">{product.price}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center md:hidden">
        <button className="inline-flex h-12 items-center justify-center rounded-lg bg-[#14b881]/10 px-8 text-sm font-bold tracking-wider text-[#14b881] transition-colors hover:bg-[#14b881]/20">
          Explore Shop
        </button>
      </div>
    </section>
  );
};
