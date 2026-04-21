import { motion } from "motion/react";
import OrbitVisual from "./OrbitVisual";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-brand-cyan/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">Leading LinkedIn Outreach System</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Predictable <br /><span className="text-gradient">B2B Growth</span> <br />Through LinkedIn.
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
              Orbit Flow helps SaaS companies, startups, and consultants generate qualified leads, book meetings, and build scalable client acquisition systems through strategic LinkedIn outreach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="https://calendly.com/usmanleads/30minutes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 inline-block text-center"
              >
                Get Your Growth Plan
              </a>
              <a 
                href="https://calendly.com/usmanleads/30minutes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline px-8 py-4 inline-block text-center"
              >
                Free Strategy Call
              </a>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-slate-800">
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Trusted by teams at</span>
              <div className="flex gap-6 opacity-40 grayscale font-bold">
                <span>SAAS.IO</span>
                <span>VNTURE</span>
                <span>SCALE</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <OrbitVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
