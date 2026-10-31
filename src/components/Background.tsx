import { motion } from 'framer-motion';

function Orb({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      aria-hidden
      className={`absolute rounded-full blur-3xl ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, -30, 0], x: [0, 15, 0] }}
      transition={{
        opacity: { duration: 2, delay },
        y: { duration: 10, repeat: Infinity, ease: 'easeInOut', delay },
        x: { duration: 14, repeat: Infinity, ease: 'easeInOut', delay },
      }}
    />
  );
}

function Shape({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      aria-hidden
      className={`absolute ${className}`}
      animate={{ rotate: [0, 360], y: [0, -24, 0] }}
      transition={{
        rotate: { duration: 30, repeat: Infinity, ease: 'linear', delay },
        y: { duration: 9, repeat: Infinity, ease: 'easeInOut', delay },
      }}
    />
  );
}

export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      {/* Deep base gradient */}
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-950 to-ink-950" />

      {/* Lime glow orbs */}
      <Orb className="top-[-10%] left-[5%] w-[28rem] h-[28rem] bg-lime-400/10" delay={0} />
      <Orb className="bottom-[-15%] right-[10%] w-[32rem] h-[32rem] bg-lime-500/8" delay={2} />

      {/* Violet glow orbs */}
      <Orb className="top-[40%] right-[-5%] w-[24rem] h-[24rem] bg-violet-500/10" delay={1} />
      <Orb className="bottom-[20%] left-[-8%] w-[22rem] h-[22rem] bg-violet-400/8" delay={3} />

      {/* Abstract geometric floating shapes */}
      <Shape
        className="top-[15%] right-[18%] w-20 h-20 border border-lime-400/20 rounded-2xl"
        delay={0.5}
      />
      <Shape
        className="top-[60%] left-[12%] w-14 h-14 border border-violet-400/20 rotate-45"
        delay={1.5}
      />
      <Shape
        className="top-[80%] right-[25%] w-10 h-10 border border-lime-400/15 rounded-full"
        delay={2.5}
      />

      {/* Subtle noise overlay */}
      <div className="absolute inset-0 noise opacity-[0.03]" />
    </div>
  );
}
