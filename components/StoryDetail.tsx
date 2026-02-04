import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Leaf, Edit2, Plus } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const shopItems = [
  {
    name: "The Silk Tunic",
    price: "$240.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUHoVwY0H7u_mcFc5J1lzBjWWNQ5yRqveedvt10Jrfgqg3qAiK2Y75hAIAnxB_jKuuA-wt0UlEOFRGYSYV9sf19B27IoSshpeE-RPONAuRXhEY7tDkpOp5ISLR-z0xPmaC4qq20vxapkwh0z5tkSedJDjNPNaJhy8RD9afC5oxV1pCdUnoQn6Z1yk3zLLDQL9DBC5Cf0oHUD-CHb8QySQ38TLets_bWRoTSZbtIyn_PfIbYdVrG6RNWJ-O9TKPR03IYu_A_wzw0Gc"
  },
  {
    name: "Wide Leg Trouser",
    price: "$320.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2lLpZ3u8rkb3PePwf52j5GUG3wZHZLvkigNQ9it5v3VllJyagjkzx-nMaDoSqc7EBTHTzSlrVbF_8EhMbMLhZy8ixWI2-IeaAQneXByo7I1z0bu6aZXTMPavMndbSvsKd9ZrCuGtJdqlE8t16jCra43_TFEQSrRjFbUfTGVmhlvJXsTpzzqUhBIIA8NMdf3gAyxQA-Xul6CKe7fff6CEnS_P-ZowUbhHev1o7f0QsPq_hMAyiDbWyaItkqD6VP89J_o6e7FvOtbw"
  },
  {
    name: "Structured Blazer",
    price: "$450.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-EDFtC5pm3bYkot46itNpizms-Aq9CbjPs-Ag_AbzSgczW4E9MRyEiYPaY8mXh_ifErBOCwrL89avNu5prlgzaSmbfsOHQ9ZIezSi5zsEbVNJwNfTO85mhp6TzmPTZFrzeVVejCRk0bwEBR4I32el7h4IciweKRW0_IRH2ippAlnCWMn5P70XrBdodm3jmNRh4QkArwdaXtRVxBuDwLzUpWiXd65juRNZS9uJIK6q_A67tDINvpkOU34rIohhLo8a6JelhKwlHyU"
  },
  {
    name: "Merino Knit",
    price: "$280.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOOCSK1w-WotBkQC5cT1x4FdWrM1tjlcZNuPrpWp_eZEOOqRDQx78PYVgRtU2Ox1h-0YD4798Wc8wHMV4H0Kstr2Q4eR9Vk93Z-SXvXX16xnEsIyyG3IaG65wgeFZw4afSvEjVZ2bROoWghQClW1rrI2X9gcmB6Ogcd7-vL3gRUkmxvXj5q6lzysPiCnaniPtCPwxoFcyWoZwxQrLkbaX-bke_zd810_G4-GcAbVUaU6OH3iqfUqG414L4FY5-QMjfsX1iyPU2Tqg"
  }
];

export const StoryDetail: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-background-light">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp} 
            className="flex flex-col gap-8 lg:pr-12 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Brand Story</span>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] text-text-main">
                On <br/><i className="font-light text-gray-400">Restraint</i>
              </h1>
              <p className="text-base md:text-lg text-text-muted font-light max-w-md leading-relaxed">
                A study in subtraction. We explore the quiet power of negative space and the discipline of essential forms.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <button className="h-12 px-8 bg-text-main text-white rounded-full text-sm font-medium hover:bg-primary transition-all duration-300">
                Read the Story
              </button>
              <div className="h-[1px] w-20 bg-gray-200"></div>
              <span className="text-xs text-text-muted font-medium">01 / 04</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative h-[60vh] lg:h-[80vh] w-full rounded-lg overflow-hidden order-1 lg:order-2 group"
          >
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCsqeG-9vY1eI2wWVsdVMLY16Wg_dAD104S8It1H-oU-G2HDt-YxKc_U9oYqF1JCuVLWTbuiqeuPbwW_uduN8Z1TsAeLXvGhA5m5uDaKT0Qv4QoY6KRYwCSPtm-GG2TFvcacfHDNWZKi2xGhPDH603JBRv4Q5uw8e-1oXAVQ_L5ciKeiYae_Y9nEk0rDd0tMKTdZ37biyDusGEimNwrAiyv6lj0VwepLeMA4SAwYpp3ujL3oJaZ0L1flbP3-49_AL_woBLan6cCVHc")' }}
            />
            <div className="absolute bottom-6 left-6 z-20 bg-white/80 backdrop-blur-md px-4 py-2 rounded text-xs font-medium tracking-wide">
              Fig. 1 — The Absence of Noise
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-text-main">Scroll</span>
          <ArrowDown className="h-4 w-4 text-text-main" />
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 px-6 bg-background-subtle">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="max-w-3xl mx-auto flex flex-col items-center text-center"
        >
          <Leaf className="h-10 w-10 text-primary/40 mb-8" strokeWidth={1} />
          <h2 className="font-serif text-3xl md:text-5xl font-medium leading-tight mb-12 text-text-main">
            "We design for the moments <br/> <span className="italic text-gray-400">between moments.</span>"
          </h2>
          <div className="w-px h-16 bg-gray-300 mb-12"></div>
          <p className="text-lg md:text-xl font-light leading-loose text-text-muted max-w-xl">
            True luxury is not about abundance, but about precision. In a world of noise, we choose silence. Our process begins not with what we can add, but what we can take away. Every seam is a decision, every fold a deliberate act of restraint.
          </p>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 md:px-20 bg-background-light">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">The Process</span>
              <h3 className="text-2xl font-semibold text-text-main">Archival Sketches & Textures</h3>
            </div>
            <p className="text-sm text-text-muted mt-4 md:mt-0 max-w-xs text-right">
              Exploring raw materials and early drafts from the Spring/Summer 2024 collection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 row-span-1 md:row-span-2 relative group overflow-hidden rounded-lg"
            >
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0RNMU1ReQebO3N0KXIIOG1-MUZFyfq6GVTWIC6cUU_cXJi47SqPtLTOGp6JXF-HDfAuKD9sKaiBCBPhgOV9SujTGZOlnSkorgAPd_dWz8HEcmagBh9OJOd-rJAX7ZwPo3u2cJ45hHAPRh5lEklek6fe22rsBGWAdgw2xi9BVUIJlPxcK5TYfRVjzfaV2jeJTSErndnNtPSlIwcJ-5dkZV4OSRUD00n2o6pDNjgH3EqNQGzyPZCG2LsHWCLrsHJ4laLJR308IE888")' }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-5 relative group overflow-hidden rounded-lg"
            >
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuChR-0h_ll4Zu26sp8wcXEQPdyy1Ys8Ll247ZGC-Z3aHlIyfeJ2nuDFZwUJcTuS71ymC9lImk6EdgImPwM2Iu4tYZYxeGeTAm7i9mJbCLV0gP8WALG-DV8OKAnK4_BE94jhkRXv5bc5UHfzHk8bmL5tDKOm7ucZqsIYdGehbmWPIe-6fL7wzTte7Ez9W2s34v5OpILfIyHsFK4SWHeFL44zHgTUq8oyi10JezeRYCYgl1ndAC3pxlaWmopbXAf_V3rdswyWiqHQLMc")' }}
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-5 bg-[#FDFBF7] flex items-center justify-center p-8 rounded-lg relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-20">
                <Edit2 className="h-8 w-8 text-text-main" />
              </div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAHiBIe_SnrMU4CF2b_4E1u1r64oW6n867GqaGCo-PHyZyeFF3qvkXucEVflWtxu9NC893_sjjp2uEhDPi1CC58VZfPGPLo70CWbJoFVPMzy-971k7p9tgDogSlUMq04k86eEFGcUdcAgmtZfQxAp5WGP2i1RaHyhF6NM6qDERtuZeMQgxu4mj86SCZoZQUw6-i6bH1pnHJTBRfpfSt7MgvDbyGgcAw8vG-arTZh2Ut8iOhClR5IWAyPD8otUZxH3gxB6fXDUtBow"
                alt="Pencil sketch"
                className="w-full h-full object-contain mix-blend-multiply opacity-80 filter grayscale"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Texture Section */}
      <section className="py-24 bg-background-light relative">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] w-full bg-gray-200 rounded-lg overflow-hidden relative">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAz_aa2lGljxv0zQ_MNUDtpFXO0OoWwqWwh9_ivTe7CN5MSsBpj0WnjlH_j09O2wu5JDYfmju_wGIEffOq5U4iQB5krrYJ-kf8-xr51nK-v8X6dGFDKFt-QfPLcqDkzH3jvnrV20KbJkjcb2MhFoBDc2-pqtp51Kzr7x1z4qiaD5otIAmp8oPG07NZeHiL1xPATkvbxiSxBjAZMobRpL-zwL71r1EuF7nMIMp0TqqN42HiqPByibXxmpKpPlaJPDs2jDuJx2aPX4gM")' }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-0"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8"
          >
            <h3 className="font-serif text-4xl md:text-5xl text-text-main">
              Silence is a <br/> texture.
            </h3>
            <div className="space-y-6 text-text-muted font-light">
              <p>
                We believe that the most powerful statement is the one left unsaid. Our silhouettes are architectural, yet fluid. They do not constrain the body but rather frame it, allowing the wearer to define the mood.
              </p>
              <p>
                From the weight of the wool to the coolness of the silk, every material is chosen for how it feels against the skin, not just how it looks to the eye.
              </p>
            </div>
            <div className="pt-4">
              <a href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:underline decoration-1 underline-offset-4">
                Explore Materials
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parallax Banner */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center my-12">
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIJPbAQwMGzkZkwNgYlqPYzlHBL0Ugcj3Oxt0N5dC9gQJd0g2-CSKoBpOYs4tLK9F3U1Wkz4Y_0OMxZw1QUcegpiZ8ssBSVMifGHhTwx_DrDT6sY4ulwIrm1nFjBxT00T0wOkD9dnZwmBp3jpgKcW5nRLIXoQkmyds-swuRvMbGxYalYPVI0Onxg1Ufd13-wL1obswrQJOM9O7RTvE1H6k36Ayb21AEwwud3tYb57C9xhP7ri-4Ejo0A8EHfWj2VHSRrBfqsEPqgk")' }}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase mb-4 opacity-80">Collection 04</p>
          <h2 className="font-serif text-5xl md:text-7xl italic">Essential Forms</h2>
        </motion.div>
      </section>

      {/* Shop the Story */}
      <section className="py-24 px-6 md:px-20 bg-background-subtle">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <h2 className="text-3xl font-bold text-text-main tracking-tight">Shop the Story</h2>
            <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-text-main hover:text-primary transition-colors">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {shopItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded bg-gray-100">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url("${item.image}")` }}
                  />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-black p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-text-main group-hover:text-primary transition-colors">{item.name}</h3>
                <p className="text-xs text-text-muted mt-1">{item.price}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center md:hidden">
            <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
              Shop All
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
