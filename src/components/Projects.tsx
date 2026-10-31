import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { ArrowUpRight, FlaskConical, GraduationCap, Brain, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'TaskFlow',
    tagline: 'Task management web app',
    description:
      'A task management application built with Python and Flask. Users can create, organize, and track tasks through a clean web interface — a project focused on practical full-stack web development.',
    tags: ['Python', 'Flask', 'Web App'],
    icon: FlaskConical,
    status: 'Completed',
    liveUrl: 'https://taskflow-hqh3.onrender.com/',
  },
  {
    name: 'Beyond Degree',
    tagline: 'Education & job role alignment',
    description:
      'An academic data analysis project exploring how education backgrounds align with job roles. Uses data analysis techniques to surface patterns between fields of study and career paths.',
    tags: ['Data Analysis', 'Python', 'Pandas'],
    icon: GraduationCap,
    status: 'Academic Project',
  },
  {
    name: 'Screen Time Prediction',
    tagline: 'Machine learning project',
    description:
      'A machine learning learning project that aims to predict screen time patterns. Currently a work in progress as I build out the model and experiment with features.',
    tags: ['Machine Learning', 'Python', 'In Progress'],
    icon: Brain,
    status: 'In Progress',
    inProgress: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.2em] text-lime-400 uppercase">
            Featured Projects
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mt-4 mb-14 leading-tight">
            Things I've <span className="gradient-text">built</span> and am building
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group relative glass rounded-3xl p-7 h-full flex flex-col overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-lime-400/0 group-hover:bg-lime-400/10 blur-3xl transition-colors duration-500" />

                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center">
                    <p.icon className="text-lime-400" size={26} />
                  </div>
                  {p.inProgress ? (
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-violet-400/10 text-violet-400">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-60 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
                      </span>
                      {p.status}
                    </span>
                  ) : (
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 text-neutral-400">
                      {p.status}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-2xl font-extrabold text-white mb-1">
                  {p.name}
                </h3>
                <p className="text-sm text-lime-400 font-medium mb-4">{p.tagline}</p>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6 flex-grow">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-ink-700 text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl bg-lime-400/10 text-lime-400 hover:bg-lime-400 hover:text-ink-900 transition-colors duration-300"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                )}
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
