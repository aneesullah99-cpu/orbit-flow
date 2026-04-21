import { motion } from "motion/react";
import { 
  Users, 
  Target, 
  Zap, 
  Search, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle,
  MessageSquare,
  BarChart3,
  Rocket,
  Plus
} from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { SectionHeading, FeatureCard } from "./components/SectionComponents";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-brand-navy min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* 2. Brand Positioning */}
        <section className="py-24 bg-white/[0.01]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeading 
                badge="Positioning"
                title="We Turn Outreach Into Predictable Growth"
                subtitle="At Orbit Flow, we don’t rely on random messaging or one-off campaigns. We build structured LinkedIn outreach systems that consistently bring qualified B2B opportunities into your pipeline."
              />
            </div>
          </div>
        </section>

        {/* 3. Problem Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <SectionHeading 
                  align="left"
                  badge="The Reality"
                  title="Why Most Outreach Fails"
                  subtitle="Manual outreach is broken. It's time-consuming, inconsistent, and often damaging to your brand reputation."
                />
                
                <div className="space-y-6">
                  {[
                    "No targeting strategy",
                    "Low response rates",
                    "Generic messaging",
                    "No conversion system"
                  ].map((text, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800"
                    >
                      <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                        <XCircle size={14} className="text-red-500" />
                      </div>
                      <span className="text-slate-300 font-medium">{text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                  <p className="text-red-400 font-bold flex items-center gap-2">
                    <span className="text-xl">👉</span> Result: wasted time, inconsistent leads, and zero predictability.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-brand-blue/5 blur-[100px] rounded-full" />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative p-12 rounded-[40px] border border-white/5 bg-white/[0.02] flex items-center justify-center aspect-square md:aspect-video lg:aspect-auto lg:h-[400px]"
                >
                  <div className="relative">
                    <XCircle size={80} className="text-white/5" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-px bg-white/10 rotate-45" />
                       <div className="w-16 h-px bg-white/10 -rotate-45" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Solution Section */}
        <section className="py-24 bg-white/[0.01]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-brand-cyan/5 blur-[100px] rounded-full" />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative p-8 rounded-[40px] border border-brand-cyan/20 bg-brand-cyan/5 overflow-hidden"
                >
                  <div className="h-64 flex flex-col items-center justify-center text-brand-cyan uppercase font-black text-4xl select-none">
                    <div className="flex gap-4">
                      <Zap className="animate-pulse" />
                      <span>OPTIMIZED</span>
                    </div>
                    <div className="text-sm font-medium tracking-[0.4em] mt-4 opacity-50">BY ORBIT FLOW</div>
                  </div>
                </motion.div>
              </div>

              <div className="order-1 lg:order-2">
                <SectionHeading 
                  align="left"
                  badge="The Solution"
                  title="A System That Works Like a Pipeline"
                  subtitle="Orbit Flow builds end-to-end LinkedIn outreach systems that automate the hard work while keeping the human touch."
                />
                
                <div className="space-y-6">
                  {[
                    { title: "Identify your ideal customers", icon: <Search size={18} /> },
                    { title: "Engage them with personalized messaging", icon: <MessageSquare size={18} /> },
                    { title: "Convert conversations into meetings", icon: <Users size={18} /> },
                    { title: "Turn outreach into predictable revenue", icon: <TrendingUp size={18} /> }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-brand-blue">
                        {item.icon}
                      </div>
                      <span className="text-white font-semibold">{item.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Services Section */}
        <section id="services" className="py-32 relative">
          <div className="container mx-auto px-6">
            <SectionHeading 
              badge="Expertise"
              title="What We Do"
              subtitle="Full-service outreach excellence designed for B2B growth."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard 
                featured
                icon={<Target />}
                title="LinkedIn Outreach"
                description="Our core engine for generating high-quality leads directly for your sales team."
                items={[
                  "Ideal client research",
                  "Profile optimization",
                  "Personalized campaigns",
                  "Multi-step messaging",
                  "Lead qualification",
                  "Meeting booking"
                ]}
              />

              <FeatureCard 
                icon={<Rocket />}
                title="Custom Growth Systems"
                description="Tailored strategies that align with your specific business model and revenue goals."
                items={[
                  "Funnel design",
                  "Messaging strategy",
                  "Conversion structure",
                  "Scaling systems"
                ]}
              />

              <FeatureCard 
                icon={<ShieldCheck />}
                title="Social Media Authority Building"
                description="Position yourself as a thought leader to make outreach feel like a warm introduction."
                items={[
                  "LinkedIn content strategy",
                  "Personal branding",
                  "Authority positioning",
                  "Engagement growth"
                ]}
              />

              <FeatureCard 
                icon={<BarChart3 />}
                title="Revenue Optimization Consulting"
                description="Maximize the ROI of your outreach by fixing leaks in your sales funnel."
                items={[
                  "Offer refinement",
                  "Sales pipeline structure",
                  "Conversion improvement",
                  "Growth strategy"
                ]}
              />
            </div>
          </div>
        </section>

        {/* 6. How It Works */}
        <section id="how-it-works" className="py-32 bg-white/[0.01] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <SectionHeading 
              badge="Workflow"
              title="Simple System. Predictable Growth."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { index: "01", title: "Discover", desc: "We understand your business, offer, and audience." },
                { index: "02", title: "Design", desc: "We build your custom outreach system." },
                { index: "03", title: "Execute", desc: "We run LinkedIn outreach campaigns." },
                { index: "04", title: "Scale", desc: "We optimize and increase conversions." }
              ].map((item, i) => (
                <FeatureCard 
                  key={i}
                  indexNumber={item.index}
                  title={item.title}
                  description={item.desc}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 7. Who We Work With */}
        <section id="who" className="py-32">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3">
                <SectionHeading 
                  align="left"
                  badge="Target Audience"
                  title="Built for B2B Growth-Focused Companies"
                  subtitle="We partner with ambitious teams who are ready to scale their lead generation."
                />
                <button className="flex items-center gap-3 text-brand-blue font-bold group">
                  Learn about our criteria <Plus className="group-hover:rotate-90 transition-transform" />
                </button>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "SaaS Companies", desc: "Needing consistent B2B clients to hit MRR milestones." },
                  { title: "Startups", desc: "Looking to scale aggressively or raise their next funding round." },
                  { title: "Consultants", desc: "Targeting high-ticket clients and building a personal brand." },
                  { title: "Agencies", desc: "Expanding outreach systems to automate client acquisition." }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-blue/30 transition-all">
                    <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Results */}
        <section className="py-32 bg-brand-blue/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <SectionHeading 
                  align="left"
                  badge="Impact"
                  title="Outcomes We Drive"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Consistent qualified B2B leads",
                    "Investor and business connections",
                    "High-ticket client acquisition",
                    "Scalable LinkedIn pipelines"
                  ].map((text, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue mt-1">
                        <CheckCircle2 size={14} />
                      </div>
                      <p className="text-white font-medium">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative p-12 rounded-[60px] bg-brand-navy border border-brand-blue/20 overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8">
                  <TrendingUp className="text-brand-blue opacity-20" size={120} />
                </div>
                <div className="relative z-10">
                  <div className="text-5xl font-black text-brand-cyan mb-2">+400%</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-white/40 mb-12">Average Pipeline Volume Growth</div>
                  <div className="flex gap-4">
                    <div className="flex -space-x-3">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-navy bg-white/10" />
                      ))}
                    </div>
                    <div>
                      <div className="text-sm font-bold">Trusted by 50+ Modern Teams</div>
                      <div className="text-xs text-white/40">Real results, measured daily.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Why Orbit Flow */}
        <section id="why" className="py-24">
          <div className="container mx-auto px-6">
            <div className="glass p-12 rounded-[40px] relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-brand-blue/10 blur-[100px] rounded-full" />
              
              <div className="max-w-4xl relative z-10">
                <SectionHeading 
                  align="left"
                  badge="The Edge"
                  title="Why Orbit Flow?"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    "System-based outreach (not random messaging)",
                    "Focus on quality leads, not volume spam",
                    "LinkedIn-first B2B strategy",
                    "Custom-built for each client",
                    "Designed for predictable revenue growth"
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="w-6 h-6 rounded-lg bg-brand-blue flex items-center justify-center text-brand-navy shrink-0">
                        <CheckCircle2 size={14} />
                      </div>
                      <p className="text-white/80 font-medium">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Final CTA */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-brand-blue/5 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-screen bg-brand-blue/10 blur-[180px] rounded-full opacity-50" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
                Ready to Build a <br /> <span className="text-gradient">Predictable Lead Flow?</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
                Let Orbit Flow design a LinkedIn outreach system that consistently brings qualified clients into your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://calendly.com/usmanleads/30minutes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary px-10 py-5 text-xl inline-block"
                >
                  Get Started Now
                </a>
                <a 
                  href="https://calendly.com/usmanleads/30minutes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline px-10 py-5 text-xl inline-block"
                >
                  Book Free Call
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
