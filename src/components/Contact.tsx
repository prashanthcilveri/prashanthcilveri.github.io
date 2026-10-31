import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const channels = [
  { label: 'Email', value: 'prashanthcilveri@gmail.com', href: 'mailto:prashanthcilveri@gmail.com', icon: Mail },
  { label: 'GitHub', value: 'github.com/prashanthcilveri', href: 'https://github.com/prashanthcilveri', icon: Github },
  { label: 'LinkedIn', value: 'linkedin.com/in/prashanth-cilveri', href: 'https://www.linkedin.com/in/prashanth-cilveri/', icon: Linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.2em] text-lime-400 uppercase">
            Contact
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mt-4 mb-6 leading-[0.95] tracking-tightest">
            Let's build <br />
            <span className="gradient-text text-glow">something.</span>
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-xl mb-12">
            I'm open to opportunities, collaborations, and good conversations about
            Python, data, and AI. Reach out — I'd love to hear from you.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href="mailto:prashanthcilveri@gmail.com"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-lime-400 text-ink-950 font-semibold text-lg hover:bg-lime-300 transition-colors duration-200 box-glow mb-12"
          >
            <Mail size={20} />
            Say hello
            <ArrowUpRight
              size={20}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid sm:grid-cols-3 gap-4">
            {channels.map((c) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group glass rounded-2xl p-5 flex items-center gap-4 hover:border-lime-400/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-lime-400/10 flex items-center justify-center shrink-0">
                  <c.icon className="text-lime-400" size={22} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-neutral-500 mb-0.5">{c.label}</p>
                  <p className="text-sm font-medium text-neutral-200 truncate group-hover:text-lime-400 transition-colors">
                    {c.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
