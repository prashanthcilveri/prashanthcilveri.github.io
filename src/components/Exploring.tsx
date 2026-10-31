import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

const topics = [
  'Machine Learning',
  'Deep Learning',
  'Data Engineering',
  'Model Evaluation',
  'Feature Engineering',
  'Python Ecosystem',
  'Statistics',
  'AI Systems',
  'Data Visualization',
  'NLP',
];

function Marquee() {
  return (
    <div className="relative overflow-hidden py-4 mask-fade">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...topics, ...topics].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="whitespace-nowrap px-5 py-2.5 rounded-full glass text-sm font-medium text-neutral-200"
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Exploring() {
  return (
    <section id="exploring" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <Compass className="text-lime-400" size={20} />
            <span className="text-xs font-semibold tracking-[0.2em] text-lime-400 uppercase">
              Currently Exploring
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            What I'm <span className="gradient-text">learning</span> right now
          </h2>
          <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl mb-10">
            I'm actively building my skills in machine learning and the broader data
            ecosystem. These are the areas I'm spending time with day to day —
            learning by building, not claiming expertise.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <Marquee />
        </Reveal>
      </div>
    </section>
  );
}
