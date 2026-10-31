import Reveal from './Reveal';
import { GraduationCap, Code2, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'CS Graduate',
    text: 'Computer Science background with a focus on software, data, and AI fundamentals.',
  },
  {
    icon: Code2,
    title: 'Python Builder',
    text: 'Comfortable building applications with Python and Flask, from APIs to full apps.',
  },
  {
    icon: Sparkles,
    title: 'Always Learning',
    text: 'Curious about machine learning and how data can answer real-world questions.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
        {/* Heading column */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] text-lime-400 uppercase">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mt-4 leading-tight">
              A curious mind <br />
              <span className="gradient-text">turning ideas</span> <br />
              into something real.
            </h2>
          </Reveal>
        </div>

        {/* Content column */}
        <div className="lg:col-span-8 space-y-10">
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl">
              I'm Prashanth Cilveri, a Computer Science graduate who enjoys building
              practical software and exploring how data can solve real problems. I
              spend most of my time writing Python, working with datasets, and learning
              the foundations of artificial intelligence.
            </p>
            <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl mt-4">
              I like projects that sit at the intersection of clean code and useful
              outcomes — apps that people can actually use, and analyses that surface
              something interesting. I'm early in my journey, and I'm focused on
              learning by building.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-5">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={0.15 + i * 0.1}>
                <div className="glass rounded-2xl p-6 h-full hover:border-lime-400/30 transition-colors duration-300">
                  <div className="w-11 h-11 rounded-xl bg-lime-400/10 flex items-center justify-center mb-4">
                    <h.icon className="text-lime-400" size={22} />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">
                    {h.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
