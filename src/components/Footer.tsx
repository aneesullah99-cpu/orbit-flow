import { Mail, Linkedin, Globe, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-black/40 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-brand-navy" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">ORBIT FLOW</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Empowering B2B companies with predictable lead generation systems through strategic LinkedIn outreach.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/orbitfloww" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-white/60 hover:text-brand-blue hover:bg-white/10 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 text-white/60 hover:text-brand-blue hover:bg-white/10 transition-all">
                <Globe size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 text-white/60 hover:text-brand-blue hover:bg-white/10 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-white/40 font-medium">
              <li><a href="#" className="hover:text-brand-blue transition-colors">LinkedIn Outreach</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Growth Systems</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Brand Authority</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Sales Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/40 font-medium">
              <li><a href="#" className="hover:text-brand-blue transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Newsletter</h4>
            <p className="text-white/40 text-sm mb-4">Get outreach tips delivered to your inbox.</p>
            <div className="flex gap-2 p-1 rounded-xl bg-white/5 border border-white/10">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-none text-sm px-3 focus:ring-0 w-full"
              />
              <button className="p-2.5 rounded-lg bg-brand-blue text-brand-navy hover:bg-brand-cyan transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs font-medium">
            © {new Date().getFullYear()} Orbit Flow. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/20 text-xs font-medium">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
