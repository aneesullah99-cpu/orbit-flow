import { motion } from "motion/react";

export default function OrbitVisual() {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Theme Background Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(77,163,255,0.15) 0%, rgba(11,15,26,0) 70%)"
        }}
      />

      {/* Central Node */}
      <motion.div 
        className="relative z-10 w-24 h-24 rounded-full bg-brand-blue/20 flex items-center justify-center border border-brand-blue/50 blur-[1px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-12 h-12 rounded-full bg-brand-blue shadow-[0_0_30px_rgba(77,163,255,0.6)]" />
      </motion.div>

      {/* Orbit Rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute border border-white/5 rounded-full"
          style={{
            width: `${ring * 200}px`,
            height: `${ring * 200}px`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10 + ring * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Travelling Particles/Nodes */}
      {[...Array(8)].map((_, i) => {
        const radius = 100 + (i % 3) * 100;
        const duration = 15 + Math.random() * 10;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: i % 2 === 0 ? "#4DA3FF" : "#00F5FF",
              boxShadow: `0 0 10px ${i % 2 === 0 ? "#4DA3FF" : "#00F5FF"}`,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: -i * 2,
            }}
          >
            <div 
              style={{
                transform: `translateX(${radius}px)`,
              }}
            />
          </motion.div>
        );
      })}

      {/* Connections (Static/Subtle) */}
      <svg className="absolute inset-0 w-full h-full opacity-20" pointerEvents="none">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4DA3FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#4DA3FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#4DA3FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.circle 
          cx="50%" cy="50%" r="150" fill="none" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5,10"
          animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}
