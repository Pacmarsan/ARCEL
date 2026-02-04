
import React from 'react';
import { motion } from 'framer-motion';

const studies = [
  {
    id: "02",
    season: "SS 2023",
    title: "Study 02:",
    subtitle: "Absence",
    description: "Investigating the negative space between fabric and skin. This collection challenged traditional tailoring by removing structural padding, allowing the garment to collapse and reform based on movement. A study in vulnerability and exposure.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAle7HhcBRkGIhRPdaxivo-vxqzmQMtLdkYYOwXnwgoeNPaTOPvkDxchOT1X-r6p2fw06o5KYENXk5TFzo_bGLsyCyl8qWBdRwmtMtj-cjMiG5fu4jlJ5FCSmFp2oLvPDF8_J9hWjD4w5zIhjBNOWvQdWtYks-fH0mQn6YNqsiJzrkEkD_Krrt_XxRInPyVdPn2K5vwc-SOudq_m4NIIuy6JmQDAi11gfuIoInitk3LnUzXiGCYrY1ObGcHNLHA4NTchs51pgHIUIE"
  },
  {
    id: "01",
    season: "FW 2022",
    title: "Study 01:",
    subtitle: "Silhouette",
    description: "Exploring the absence of body in favor of structure. Heavy wools and industrial felt were utilized to create self-standing shapes that defy gravity. The silhouette becomes a shell, protecting the wearer from the external gaze.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfdJ6452fEz8nIf-11hGcx3t_ed6BPLqR9DMNewJFAyLRp_eRwZsOk01IODks35ptGJr-exBfq_7DH2PHr-LkH62nfWwrHMHEqkNkmBAs4eJqhuu9nHHV3CForUGyFA6QYf7swRFB-JN7K1hUr9nzX4oNG22jUdDrDiYM1ThAkSkSMEfrJmJhMdqn_K_VmUcaVuJH_RMRzPviF1u9dOuzC8wFbzWZ3ALcu9zEbw8oWPNrWBvCr2hmYVJvqIpAyd2OfsI0a4kQJRfM"
  },
  {
    id: "00",
    season: "FW 2021",
    title: "Study 00:",
    subtitle: "Proportion",
    description: "Redefining the hemline in the post-modern context. Our inaugural collection focused on the mathematics of dress—how ratio and scale can alter the perception of height and presence.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKu3ZogZigyMWD6OXd2MEz2ERyAazQj--H4K_MwcIlIcItiL4LtL9r5GFl9NkRz3ZxxA3D04QQ53Du6NPkAQjj8bU2oxLfJQXmOpljushwYOJ_4kVZrkgJwrd1oLOlhJxRR9Ll9Vm6xzu6qJVOY7CupKCm_UczXUzm-_qinf7Pb6Bm0VaASYjzMWErQQJeFmfkOdD3DP_VsKwN2HF5pEFRFQsH8KPE8jNsQ9Uqb9-mA8sgX3E0P8gMfuZ6SZ4dza0qAf2ScNwmgfg"
  },
  {
    id: "Ø",
    season: "2020",
    title: "Pre-Study:",
    subtitle: "Origins",
    description: "The initial sketches that defined the Arcel ethos. Raw, unfiltered concepts drafted on paper and muslin. This era represents the chaotic search for identity before the refinement of the studio was established.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOQkMKcOFYLRhN6GATzymARqrgDlmUMcAHFFLlAlXKEr3MjDrzcGWSvZr4_ZOEaQvz0Z9YUzg__3Q2Igehk8n3sWxDoE-1vRLAbt_Obt4CrD2xldr-SRH6zk4neHI6fWaqrsZp3dz3cDGJMyxmJ-FZIm7sCbO8Y-trYJdP_6FjwTlFLElwnQMlfSXPldn3KWNmi0u40yRZSnaVeU9MaUx1n0imcQFSWgz2cqaJ8Sb4lKpT1Vk0ZwxW-_ODLTxGkdr8tHg0yZHpuwg"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const Archives: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-archive-bg text-[#E5E5E5] font-display selection:bg-archive-blue selection:text-white">
      <div className="grain-overlay"></div>
      
      <main className="relative flex-1 pt-32 pb-20 z-10">
        <div className="flex flex-col items-center justify-center px-6 lg:px-40 py-12 md:py-24">
          <motion.div 
            className="max-w-[960px] w-full text-center flex flex-col gap-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <p className="text-[#9e9eb7] text-sm font-bold tracking-[0.2em] uppercase">A Chronology of Form</p>
            <h1 className="text-white text-5xl md:text-7xl font-serif italic font-medium leading-none tracking-tight">
              The Archives
            </h1>
            <p className="text-[#9e9eb7] text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto mt-4">
              Documenting the evolution of design studies. A digital museum dedicated to the persistent exploration of silhouette, texture, and the absence of color.
            </p>
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-[#9e9eb7] to-transparent mx-auto mt-8"></div>
          </motion.div>
        </div>

        <div className="px-6 lg:px-20 max-w-7xl mx-auto space-y-32 md:space-y-48">
          {studies.map((study, index) => (
            <motion.article 
              key={study.id}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className={`relative ${index % 2 === 0 ? 'md:col-span-6 md:col-start-1 order-2 md:order-1' : 'md:col-span-6 md:col-start-7 order-2'}`}>
                <div className="relative overflow-hidden rounded-sm aspect-[3/4] md:aspect-[4/5] shadow-2xl shadow-black/50">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105 grayscale contrast-125"
                    style={{ backgroundImage: `url('${study.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none"></div>
                </div>
                <div className={`absolute -bottom-6 z-10 hidden md:block ${index % 2 === 0 ? '-right-12' : '-left-12'}`}>
                  <span className="text-[120px] leading-none font-serif text-white/5 select-none">{study.id}</span>
                </div>
              </div>

              <div className={`flex flex-col gap-6 relative z-20 ${index % 2 === 0 ? 'md:col-span-5 md:col-start-8 order-1 md:order-2' : 'md:col-span-5 md:col-start-1 order-1 md:text-right md:items-end'}`}>
                <div className={`flex items-center gap-3 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <span className="h-px w-8 bg-archive-blue"></span>
                  <span className="text-xs font-bold tracking-[0.15em] text-archive-blue">{study.season}</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                  {study.title} <br/><span className="italic text-gray-400">{study.subtitle}</span>
                </h2>
                <p className="text-[#9e9eb7] text-base leading-relaxed text-justify md:text-left">
                  {study.description}
                </p>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 text-white text-xs tracking-widest uppercase border border-white/20 px-4 py-2 rounded-full opacity-60 hover:opacity-100 transition-opacity cursor-default">
                    <span className="material-symbols-outlined text-sm">history_edu</span>
                    Archived
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center px-6 lg:px-40 py-24 md:py-32 mt-20 border-t border-[#292938]">
          <div className="flex flex-col gap-8 text-center max-w-2xl">
            <span className="material-symbols-outlined text-4xl text-archive-blue/50 mx-auto">mail</span>
            <h2 className="text-white text-3xl md:text-4xl font-serif italic">
              Subscribe to future studies
            </h2>
            <p className="text-[#9e9eb7]">
              Be the first to know when the archives are updated or a new study is released.
            </p>
            <div className="flex w-full flex-col md:flex-row gap-2 mt-4">
              <input 
                className="flex-1 rounded-md border border-[#292938] bg-[#1a1a20] px-4 py-3 text-white placeholder:text-[#5c5c6e] focus:border-archive-blue focus:outline-none focus:ring-1 focus:ring-archive-blue" 
                placeholder="Enter your email" 
                type="email"
              />
              <button className="bg-archive-blue hover:bg-archive-blue/90 text-white font-bold py-3 px-8 rounded-md transition-colors duration-200">
                Join
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
