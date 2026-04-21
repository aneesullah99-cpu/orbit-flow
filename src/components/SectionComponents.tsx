import { motion } from "motion/react";
import React, { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "center" | "left";
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({ title, subtitle, badge, align = "center", className = "", children }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center mx-auto" : "max-w-2xl"} ${className}`}>
      {badge && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full badge-premium mb-4"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg md:text-xl font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </div>
  );
}

interface FeatureCardProps {
  key?: React.Key;
  indexNumber?: string;
  icon?: ReactNode;
  title: string;
  description: string;
  items?: string[];
  delay?: number;
  featured?: boolean;
}

export function FeatureCard({ indexNumber, icon, title, description, items, delay = 0, featured = false }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`p-8 transition-all h-full border rounded-2xl ${
        featured 
          ? "bg-slate-900/60 border-brand-blue/30 overflow-hidden relative shadow-lg shadow-brand-blue/5" 
          : "bg-slate-900/40 border-slate-800"
      }`}
    >
      {indexNumber && <div className="text-brand-blue mb-4 font-mono text-sm leading-none">{indexNumber}</div>}
      {icon && <div className="mb-6 inline-flex p-3 rounded-2xl bg-brand-blue/5 text-brand-blue">{icon}</div>}
      <h3 className="text-xl md:text-2xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>
      
      {items && (
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-white/80">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/60" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
