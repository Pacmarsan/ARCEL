
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Leaf, Ruler, Infinity as InfinityIcon, Quote } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: i * 0.1,
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    }
  })
};

const makers = [
  {
    name: "Marco",
    role: "Texturalist — Como, Italy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ7b7jFel2YzRAK3MPnsYbMpktw3SCyzWXEHvPivnaNWMwGiSOYcbJfReiy7gSNU6ZmbSG8BYL7J1Dcrws7BHefe4KOByJDiqRSKMW2dGnsR6MIz04_pbgRDaxXXWgc6GU3g0Nz9dCVQmEX8R06AkFt-tmXaxedwyykoUDQEaP_0yzBXU_5VNWnJuz11hAvnfJyY-Uu87UdwKsWmSQXKtSc6BYemkdIoctBkNcCwNhHBlXjSgVolumuWcYIimZv_Pj0U8IDH6hpYA"
  },
  {
    name: "Elena",
    role: "Pattern Cutter — Milan, Italy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0ptQ0pTMvSpQQ1h0ObmycB87K8oByg9EzcvlQCeSFNAXB3p3lHbjdTozGEhgT_NKdzYgHiQrvs0y6lDARMQCNM9BwVI4FDpvfvOrjsuD_1wQG0ZQILoaZ9CXz_FIXab5N118V0ccnFzSPUKKoJ54qCNyiZ40Wnx1tGXEAHNQaRYCX83jqegkgagYAg43vAMvso9owpW94qqPXKpJp_B8R-Zamdq9QI3q-uz1xOV0LZA42KqQo9OY6xwZ6gRfEXSvQ3yx0Oi2foUA"
  },
  {
    name: "Studio 3",
    role: "Assembly — Porto, Portugal",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRlWtNThNdR7bx9Fb8zlLR2CfEoqa7hwREUM6NEH64i-B-mAmyWq2CU7mcWs5-GoloLpi1M7VQSss9kmlEI2KLAluW4iSXJxRb0OFu-Ic_frxP2zMBcUc5VweTOa5uOqx7UVXS1PbHiGBj5Zi-QnOa_sH07RqnWM3BeZSi7CDDdnMdzTQxKIRUAOam_XN1UHolV5k2qs0mVqMyCCdZLMRH10NJ4n4PmvSkasnyIGiRFYmeJiISu0QNFYjhrk6OKE4blDMq3JJnltQ"
  },
  {
    name: "The Archives",
    role: "Material Sourcing — Kyoto, Japan",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJOJNKsksK0--6cFgF7MMs4jQ26pL4PA3DHOT9JvmgYgaxOwvygk09TAg88eQum_liF4mhK3qrQGyUONcZlP_SVyLDMgq12rgZ4FqND_U1bHUcsUNEOKAnk7Sw9jWjBnufFxpXv6TAEjYQ6ZXYVJ7_5eHgFidHaGWiHArpF-XgNIF8AU5S0nc1mSyPiJGy58mN7s3ETTIhV5LFtvjd-AORou4ukITi89SxQUKgWyDVN7WXzeRU1acfmvbSj3MvZwFH0Gf4Sq5BRlI"
  }
];

export const About: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#fafaf9] text-[#111811] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-16 pb-24 md:pt-32 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8">
          
          {/* Headline */}
          <motion.div 
            className="md:col-span-5 flex flex-col justify-start z-10"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-[#111811] mb-8 md:-mr-24">
              Form <br/>
              <span className="italic font-light opacity-80 pl-8 text-[#14b881]">follows</span> <br/>
              feeling.
            </h1>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="md:col-span-3 md:col-start-6 flex flex-col justify-end pb-4 md:pb-12"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
          >
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-[#111811] font-normal">
                ARCÈL exists in the quiet spaces. We believe that true luxury is the absence of noise.
              </p>
              <p className="text-base leading-relaxed text-[#555555] font-light">
                Our garments are architectural studies in softness, designed not just to be worn, but to be lived in. We reject the seasonal churn in favor of permanent collections that respect the Earth and the body alike.
              </p>
              <div className="mt-8">
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#14b881] hover:text-[#14b881]/80 transition-colors group">
                  Read Philosophy
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="md:col-span-4 flex justify-end relative"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
          >
            <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden rounded-lg group shadow-sm">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAM93ptZ-WqhPGbibN9oEaABwXMXTmP9WkuebvGWHPg5IIvjtmnI_uRUWVqpUboFbzTyOHPMIjU050L0LFfXMwGdkGRE_peJd5UgP2CrJAF3IlJ8l-9_VYQO3-mI4NV6pu2y19swn4Tyh-OmyaI4I0QXFnAXrOw4kvdGMHJERVYidwAPTLBICHbc64D9Zw1DTbwDqdRDQ77kaV2VVFBiOZW8b6UtCtG3K7OxzLw4l7RAWnOvSe2g91EPQjQn8XYkd9vCpalSiJPRp0')" }}
              />
              <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] uppercase tracking-widest text-white/90 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded">Raw Linen / Series 01</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Interlude */}
      <section className="w-full bg-white py-24 px-6 md:px-12 border-y border-gray-100">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex justify-center mb-6">
             <Quote className="h-8 w-8 text-[#14b881] fill-[#14b881]/20" />
          </div>
          <p className="font-serif text-2xl md:text-4xl leading-tight text-[#111811] italic">
            "We build clothes for the woman who has nothing to prove, and everything to express."
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#14b881]"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#555555]">Elena Arcel, Founder</span>
            <div className="h-px w-8 bg-[#14b881]"></div>
          </div>
        </motion.div>
      </section>

      {/* The Makers: Horizontal Scroll */}
      <section className="w-full py-24 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-serif text-[#111811]">The Makers</h2>
            <p className="text-sm text-[#555555] mt-2 max-w-sm">
              Behind every seam is a pair of hands. We honor the artisans who bring our vision to life.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="size-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#14b881] hover:text-[#14b881] transition-colors text-[#111811]"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="size-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#14b881] hover:text-[#14b881] transition-colors text-[#111811]"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="w-full overflow-x-auto flex gap-6 md:gap-8 snap-x snap-mandatory px-6 md:px-12 pb-8 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {makers.map((maker, index) => (
            <motion.div 
              key={index}
              className="min-w-[280px] md:min-w-[340px] snap-start group cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden relative shadow-sm">
                <div 
                  className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ backgroundImage: `url('${maker.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
              </div>
              <div className="mt-4 flex flex-col">
                <span className="text-lg font-medium text-[#111811] group-hover:text-[#14b881] transition-colors">{maker.name}</span>
                <span className="text-xs uppercase tracking-wider text-[#555555] mt-1">{maker.role}</span>
              </div>
            </motion.div>
          ))}
          {/* Spacer */}
          <div className="min-w-[20px] snap-start"></div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200">
        <motion.div 
          className="flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <div className="size-10 rounded-full bg-[#14b881]/10 flex items-center justify-center text-[#14b881] mb-2">
            <Leaf className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-[#111811]">Conscious Sourcing</h3>
          <p className="text-sm text-[#555555] leading-relaxed">
            We only work with natural fibers that are biodegradable and sourced from regenerative farms.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          <div className="size-10 rounded-full bg-[#14b881]/10 flex items-center justify-center text-[#14b881] mb-2">
            <Ruler className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-[#111811]">Precision Fit</h3>
          <p className="text-sm text-[#555555] leading-relaxed">
            Every garment undergoes 6 rounds of fitting on diverse body types to ensure effortless movement.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
        >
          <div className="size-10 rounded-full bg-[#14b881]/10 flex items-center justify-center text-[#14b881] mb-2">
            <InfinityIcon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-[#111811]">Circular Design</h3>
          <p className="text-sm text-[#555555] leading-relaxed">
            We offer a lifetime repair service for all ARCÈL outerwear, keeping them in use and out of landfills.
          </p>
        </motion.div>
      </section>
    </div>
  );
};
