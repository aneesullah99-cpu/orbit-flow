import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center bg-brand-navy/80 backdrop-blur-lg border-b border-white/5">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center shadow-[0_0_15px_rgba(77,163,255,0.4)]">
            <div className="w-3 h-3 rounded-full bg-brand-navy" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">ORBIT FLOW</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">Process</a>
          <a href="#who" className="hover:text-white transition-colors">Clients</a>
          <a href="#why" className="hover:text-white transition-colors">Why Us</a>
        </div>

        <a 
          href="https://calendly.com/usmanleads/30minutes" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-5 py-2 border border-slate-700 rounded-full text-[10px] sm:text-xs font-semibold hover:border-brand-blue transition-colors uppercase tracking-widest bg-transparent inline-block"
        >
          BOOK A STRATEGY CALL
        </a>
      </div>
    </nav>
  );
}
