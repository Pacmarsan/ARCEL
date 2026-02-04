
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const imageReveal = {
  hidden: { scale: 1.05, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" }
  }
};

const carouselItems = [
  {
    id: "02",
    title: "Structured Blazer",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYa2MzxJXqIbV23KLcewLF42ORgaJQTbn-X67Zq-OL-TwDn_XqM0VasaEjjUE1jUdgUrzJI1iLGBJXnhSy1s3SHsWAIUuJqQmW0uJuUp0J-iwgxnZjOHQ2RY_UOGAlfi3cvUZ-90rLhhK6V-By5RoLyk9pPK4uBou_fEadkjNFeREY7ey7rlTlbdVyKkBzBnAGMATqgjnLeaAn1bZXHtft-k4vLqQGm7VMuEy29l9LsiJzwDqtgnAVeGhiOwA_KugiOIlqawmJg7U",
    alt: "Close up portrait of model in structured black blazer"
  },
  {
    id: "03",
    title: "Pleated Trouser",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtggvndp1uWeRFqVzn_7ATN0N2JzXEnrI0uvJAANAhxR3NRRq-jemakNEj5ENQufjYAXBIFO3utmVR2Rq0s_H8PUHObyf5fn6CErXfsoi6vRRYcrNHhs2AOn_pvI28SQj4T0nwx05Cude4Z8cMEkmB-Rp4rqieL747dX4VlUqhuQElzyHDG709rI0RxV_T66boZkFRdiAtrfx1c03pGLmK1rHl7ZuixZuX0kSN1mRkbvuHAFPYhRiQF0Sy5qBWMFOZpmowUsrwXPk",
    alt: "Fashion model sitting on a chair wearing wide leg trousers"
  },
  {
    id: "04",
    title: "Silk Tunic",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUHoVwY0H7u_mcFc5J1lzBjWWNQ5yRqveedvt10Jrfgqg3qAiK2Y75hAIAnxB_jKuuA-wt0UlEOFRGYSYV9sf19B27IoSshpeE-RPONAuRXhEY7tDkpOp5ISLR-z0xPmaC4qq20vxapkwh0z5tkSedJDjNPNaJhy8RD9afC5oxV1pCdUnoQn6Z1yk3zLLDQL9DBC5Cf0oHUD-CHb8QySQ38TLets_bWRoTSZbtIyn_PfIbYdVrG6RNWJ-O9TKPR03IYu_A_wzw0Gc",
    alt: "Model wearing silk tunic"
  }
];

export const Editorial: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const updateWidth = () => {
    if (carouselRef.current && contentRef.current) {
      const scrollWidth = contentRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setWidth(Math.max(0, scrollWidth - offsetWidth));
    }
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const slide = (direction: 'left' | 'right') => {
    const currentX = x.get();
    const containerWidth = carouselRef.current?.offsetWidth || 0;
    const scrollAmount = containerWidth * 0.75; // Scroll 75% of view width
    
    let newX = direction === 'left' ? currentX + scrollAmount : currentX - scrollAmount;
    
    // Clamp
    if (newX > 0) newX = 0;
    if (newX < -width) newX = -width;
    
    animate(x, newX, { type: "spring", stiffness: 300, damping: 30 });
  };

  return (
    <section id="editorial" className="flex flex-col items-center w-full px-4 md:px-10 lg:px-20 pb-20 pt-10">
      <div className="w-full max-w-[1400px]">
        
        {/* Page Heading Section */}
        <div className="flex flex-col gap-2 pt-20 pb-12 md:pt-32 md:pb-24">
          <motion.div 
            className="flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-none text-[#111815]">
              ARCÈL 01 — <br/>
              <span className="text-[#14b881] italic font-light font-serif opacity-90">STILLNESS</span>
            </h1>
            <div className="flex items-center gap-4 mt-4">
              <span className="h-[1px] w-12 bg-[#14b881]"></span>
              <p className="text-[#63887c] text-sm md:text-base font-medium tracking-widest uppercase">FALL 2024 COLLECTION</p>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="w-full mb-24 md:mb-40">
          <motion.div 
            className="relative w-full aspect-[3/4] md:aspect-[21/9] overflow-hidden rounded-lg group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageReveal}
          >
            <img 
              loading="lazy"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwNUzugs2WawG3sTYb3ZsynRsX6mZjJPa75p-Pdoid3jri8--4PcpBu3NvVhiQG3PW076teLGAa8lOqu3Rdf8_XphzEm_-e-ZueWPJ3gyD__DTyw7AsJvyikSBdgGTp-yOPsfwosOQWz8XWelk3nlfxzhdECVhGqYtNSh6Wt-uVi11bliGHL0gCbV0D9p_zKcuiorljp-iDyBiU33ugBSaLYqaCOCcrk15PF8Mcr2l0vl-Oy-SmAr8G7eWVK9Yy0ICTvkXs9zeIts"
              alt="Woman in minimal white dress standing in a vast, foggy landscape"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <p className="text-white/90 text-xs font-medium tracking-wider uppercase backdrop-blur-md bg-black/20 px-3 py-1 rounded-full inline-block">
                Campaign 01
              </p>
            </div>
          </motion.div>
        </div>

        {/* Narrative Text Block */}
        <div className="flex justify-center mb-24 md:mb-40 px-4">
          <motion.div 
            className="max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
              "Weightless wool. <br/> <span className="text-[#63887c] font-normal">Structured silence."</span>
            </h2>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-lg mx-auto">
              The collection explores the space between the body and the fabric. We stripped away the noise to find the volume in the void.
            </p>
          </motion.div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="flex flex-col gap-12 md:gap-32 w-full">
          
          {/* Row 1: Look 01 (Large Left) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <motion.div 
              className="md:col-span-8 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="w-full aspect-[4/5] md:aspect-[16/10] bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHBtoqYfsp3UMNNj8-icKTYrSf7JZcazXNHM2OYvXe0xOjImqNhofzKMEceJsiSh_lUdnhmLfxCp7EB2B56TpIcjG7kh1i_yISJMhAYRN0EwtzERTldfklzR-qWfrMouX0Bn54-C_JfFT7mnIqoQuRd3b5_ZNbIr34TLFRB2htL0djiS9q9RGMkCdz2SkJJ9O-MoC3KePw7OTDJ8zULtzIM7Lai8I73qQDHdU6pMFWlzAXTA_tNYO65SYjq2zZex8Rj0RLRy43a-s"
                  alt="Model wearing oversized grey textured coat walking away"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 md:-right-12 bg-[#f6f8f7] p-4 z-10 max-w-[200px]">
                <p className="text-[#63887c] text-xs font-bold uppercase tracking-wider mb-1">Look 01</p>
                <p className="text-sm font-medium">Washed Linen Coat</p>
              </div>
            </motion.div>
            
            <div className="hidden md:block md:col-span-4 h-full pl-8 flex flex-col justify-end pb-12">
              <p className="text-xs text-gray-400 uppercase tracking-widest rotate-90 origin-bottom-left translate-x-4 whitespace-nowrap">
                Architecture of Cloth
              </p>
            </div>
          </div>

          {/* Row 2: Look 02, 03 & 04 (Carousel) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 w-full pt-10">
            {/* Spacer/Text column */}
            <div className="md:col-span-4 flex flex-col justify-center order-2 md:order-1 px-4 md:px-0">
              <div className="h-[1px] w-20 bg-gray-300 mb-8"></div>
              <p className="text-lg md:text-xl font-light leading-relaxed mb-4">
                Raw edges meet precise tailoring. A study in contradiction.
              </p>
              <span className="text-xs text-gray-400 font-mono mb-8 block">FABRIC: JAPANESE COTTON</span>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex gap-4">
                <button 
                  onClick={() => slide('left')}
                  className="p-3 rounded-full border border-gray-200 hover:border-[#14b881] hover:text-[#14b881] transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => slide('right')}
                  className="p-3 rounded-full border border-gray-200 hover:border-[#14b881] hover:text-[#14b881] transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Carousel Container */}
            <div className="md:col-span-8 order-1 md:order-2 relative" ref={carouselRef}>
              <motion.div 
                className="overflow-hidden cursor-grab active:cursor-grabbing w-full"
                whileTap={{ cursor: "grabbing" }}
              >
                 <motion.div 
                   ref={contentRef}
                   style={{ x }}
                   drag="x"
                   dragConstraints={{ right: 0, left: -width }}
                   className="flex gap-6 md:gap-8 pr-6 md:pr-0"
                 >
                   {carouselItems.map((item, index) => (
                     <motion.div 
                       key={item.id}
                       className="min-w-[85vw] md:min-w-[45%] relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg group"
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true }}
                       transition={{ delay: index * 0.1 }}
                       variants={fadeUp}
                     >
                        <img 
                          loading="lazy"
                          src={item.image}
                          alt={item.alt}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          draggable="false"
                        />
                        <div className="absolute bottom-4 left-4 text-white/90">
                          <p className="text-xs font-bold uppercase tracking-wider opacity-80">Look {item.id}</p>
                          <p className="text-sm font-medium">{item.title}</p>
                        </div>
                     </motion.div>
                   ))}
                 </motion.div>
              </motion.div>
              
              {/* Mobile Navigation Hint/Buttons */}
              <div className="flex md:hidden justify-end gap-2 mt-4">
                <button 
                  onClick={() => slide('left')}
                  className="p-2 rounded-full bg-white shadow-md text-gray-700 active:scale-95 transition-transform"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => slide('right')}
                  className="p-2 rounded-full bg-white shadow-md text-gray-700 active:scale-95 transition-transform"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Row 3: Detail Shot (Macro) */}
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-full md:w-2/3 aspect-video bg-gray-100 rounded-lg overflow-hidden relative group">
              <img 
                loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBObU8_6fTlRs6x09TSnJQqXfsJfjFDEFP9q_dKexO_9-zv3JlBYL5w-Z3EI7sNEXGJlb3d02iMTb5BKWlALMJQAeVxGvt56DxOP3CKhI_iJTqSJMEZN-n4VmYa6Ckwym3n4f_FH8E6xdDRVznC0Dn6DJrysgWa5u2nTjRb3_wJ5twVfPKETYAWaW44_zAGd7NkrZpcneGDjJinmdsjCE6Vy2hqxqZrPgxu-SaNYIGeK1_9w76LPJvLNSGXZXE_7NSiWyPj6zbvAi8"
                alt="Macro detail shot of white fabric texture and stitching"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                <p className="text-white font-medium tracking-widest uppercase text-sm border border-white px-4 py-2 rounded-full backdrop-blur-sm">View Texture</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-400 font-mono">FIG 04. — TEXTURE DETAIL</p>
          </div>

          {/* Row 4: Look 04 (New Row) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full items-start">
            {/* Large Left Image */}
            <motion.div 
              className="md:col-span-8 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                <img 
                  loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCChQL-UsS4VVJLqz_jcVXMmk8SJ_yP_bFwPvXTFN_5PHxaRaXuqGGjjgwyl63j7QlJEyC4ItDTEtu8s0Ksy7p3Z8iuKOJPFAoTVU86FYIxOLuxvexfU6TOHfeqLQo_QOkgLkKmyScVj4i347b2MJhzyEHpolaBXTegc_-ByWtQCxk2xUY4-Ec9TBMZNI6tYqm7-EEQ4023FKBF2DKvR11ilYJvc_Yd81mMyfxPXIG6nyWTdkX64NTdJ8CYZpoTWdxYxuvu0l_b-54"
                  alt="Look 04 Main"
                  className="h-full w-full object-cover"
                />
                 <div className="absolute bottom-4 left-4 text-white/90 bg-black/20 px-3 py-1 rounded backdrop-blur-md">
                   <p className="text-xs font-bold uppercase tracking-wider">Look 04</p>
                   <p className="text-sm font-medium">Evening Pleats</p>
                 </div>
              </div>
            </motion.div>

            {/* Right Column: Stacked Images */}
            <div className="md:col-span-4 flex flex-col gap-6">
               <motion.div 
                 className="relative w-full aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 variants={fadeUp}
               >
                 <img 
                   loading="lazy"
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQD0zk0nXX-OEz8lwOaRRmJK5FBjwDIj9mIt6ZskUIQrWAb9VSnj7AvFptixkUxmpu6c5KmPEQHIGbvs8jckJVmseqGG488WbuZBREvq7CDJ76FB9SsfUQWLKVBmduk1WbMQ_IWV1u5-hFpw5eB83p-PyhDdB5A71prP4yLNTW7dPE0UonDO-Dzp5mAluK_65kLK0xoDCJhyZRr0A_cm8otKR89Ex4b-wCwvG8zFNJEQu7uE1j11CkzWJ1xLV6kdJOsQNx-W58WBw"
                   alt="Look 04 Detail Bag"
                   className="h-full w-full object-cover"
                 />
               </motion.div>
               
               <motion.div 
                 className="relative w-full aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 variants={fadeUp}
               >
                 <img 
                   loading="lazy"
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDp1TfAuMMnxYXfWIEbx7YqzjKLDq0a6uXaCtE0OXp5m5MdD2YMkEahFpc1_oPxVAOLX0S_1SFNVO-VMcH-eNe6SC9pWz3gn5stkQdzQZB3lJ8evW0hjgAEddKSwdz-sfqLIrDC3qmN4_qCqjRUrFj0pzR9tvlpyDbr1aBtmxDFfMMq1-aIWs7LWbG0Z1tr5lITI6zzbJlU2L8w70-lUAjWAsYyhARvm7pAPEULiC-CcBt256W-JXSbZ7aNEPLmUmsrQA48xpxJVg"
                   alt="Look 04 Detail Shirt"
                   className="h-full w-full object-cover"
                 />
               </motion.div>
            </div>
          </div>

          {/* Row 5: Look 05 (Full Bleed Offset) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 items-center mb-20">
            <div className="md:col-span-5 md:col-start-2 z-10 p-6 md:p-0">
              <h3 className="text-3xl md:text-5xl font-bold mb-4">Functional<br/>Minimalism.</h3>
              <p className="text-gray-500 mb-8 max-w-sm">
                Designed for movement. Constructed for longevity. Every seam serves a purpose.
              </p>
              <div className="flex items-center gap-2 text-[#14b881] cursor-pointer hover:underline underline-offset-4 group">
                <span className="text-sm font-bold uppercase tracking-widest">Explore Materials</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
            <motion.div 
              className="md:col-span-6 md:col-start-7 -ml-0 md:-ml-20 mt-8 md:mt-0"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-full aspect-[3/4] md:aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM8Elf3O0iWVDTXnv75vnWDwu91s53z3qGk2PxOtg_ff7yyHmmbtggdC4tLc1H1PIdclD9g7Aq9YpE5yIdym0Dbbh0XuDNi_6I8uw3GMK_BhnKZ2dtxYyhdKy0KfWb0YRvU5G1EPOt_U8PJuDIwIg8C5rn6Ftwi__KSZqZYnh6dNM7Yp-XzxM7BnYTkVcCSuX1twUdkhIvAwBCF0bXt4Of6DsDQCjjoC6PoxFudVXxY_Ni8rImcbW2p2xgiVN8TnTnkGNT-cL9f_o"
                  alt="Model in monochromatic beige outfit standing against a wall"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex justify-between items-start mt-4 px-2">
                <div>
                  <p className="text-[#63887c] text-xs font-bold uppercase tracking-wider mb-1">Look 05</p>
                  <p className="text-sm font-medium">Canvas Work Jacket</p>
                </div>
                <p className="text-xs text-gray-400">05 / 12</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
