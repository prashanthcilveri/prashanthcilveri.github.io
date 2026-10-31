import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10 items-center">
        {/* Text column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-400" />
            </span>
            <span className="text-sm font-medium text-neutral-400 tracking-wide">
              Available for opportunities
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="font-display text-2xl md:text-3xl font-bold text-neutral-300 mb-3"
          >
            HELLO, I'M PRASHANTH.
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tightest mb-6"
          >
            <span className="block text-white">I TURN</span>
            <span className="block gradient-text text-glow">IDEAS</span>
            <span className="block text-white">
              INTO <span className="text-lime-400">CODE.</span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base md:text-lg text-neutral-400 font-medium mb-6 max-w-xl"
          >
            Computer Science Graduate <span className="text-lime-400/70">|</span> Python{' '}
            <span className="text-lime-400/70">|</span> Data{' '}
            <span className="text-lime-400/70">|</span> AI
          </motion.p>

          <motion.p
            variants={item}
            className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            I'm Prashanth Cilveri, a computer science graduate who enjoys building
            practical software and exploring data-driven problems. I'm most at home
            writing Python, digging into datasets, and learning how AI systems work.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-lime-400 text-ink-950 font-semibold hover:bg-lime-300 transition-colors duration-200 box-glow"
            >
              Explore My Work
              <ArrowDown
                size={18}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-neutral-200 font-semibold hover:border-lime-400 hover:text-lime-400 transition-colors duration-200"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Visual column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="lg:col-span-5 relative h-[20rem] sm:h-[24rem] lg:h-[30rem] hidden sm:block"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500 hover:text-lime-400 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central glowing core */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-48 h-48 rounded-full bg-lime-400/20 blur-2xl"
      />

      {/* Rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute w-72 h-72 rounded-full border border-lime-400/20"
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-lime-400 shadow-[0_0_20px_rgba(184,255,0,0.6)]" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        className="absolute w-56 h-56 rounded-full border border-violet-400/15"
      >
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_16px_rgba(167,139,250,0.5)]" />
      </motion.div>

      {/* Floating code glyph */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute font-display text-7xl font-extrabold gradient-text text-glow"
      >
        {'</>'}
      </motion.div>

      {/* Small floating chips */}
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-6 right-4 glass px-3 py-1.5 rounded-lg text-xs font-medium text-lime-400"
      >
        Python
      </motion.div>
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-8 left-2 glass px-3 py-1.5 rounded-lg text-xs font-medium text-violet-400"
      >
        Data
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-20 right-6 glass px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-200"
      >
        AI
      </motion.div>
    </div>
  );
}
