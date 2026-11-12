import Reveal from './Reveal';
import { Briefcase, MapPin, CalendarDays, Award } from 'lucide-react';

const topics = ['Python', 'Generative AI', 'Applied AI'];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.2em] text-lime-400 uppercase">
            Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mt-4 mb-14 leading-tight">
            Where I put skills <span className="gradient-text">into practice</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-3xl p-7 md:p-10 hover:border-lime-400/30 transition-colors duration-300">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-lime-400/10 flex items-center justify-center shrink-0">
                    <Briefcase className="text-lime-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-2xl">
                      Industrial Trainee — Applied AI &amp; Generative AI
                    </h3>
                    <p className="text-neutral-300 font-medium mt-1">
                      NSIC Technical Services Centre
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-5 text-sm text-neutral-400">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-lime-400" />
                    Hyderabad
                  </span>
                  <span className="flex items-center gap-2">
                    <CalendarDays size={16} className="text-lime-400" />
                    Oct 2026 – Nov 2026
                  </span>
                </div>
              </div>

              <span className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/20">
                <Award size={16} />
                Grade A1
              </span>
            </div>

            <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-3xl mt-6">
              Completed an intensive industrial training programme in Applied AI and
              Generative AI using Python at NSIC Technical Services Centre,
              Hyderabad. Worked hands-on with Python for AI — building a foundation
              in generative AI concepts, modern AI tools, and practical applications.
              Completed the programme with an A1 grade.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              {topics.map((t) => (
                <span
                  key={t}
                  className="text-sm font-medium px-4 py-2 rounded-full bg-white/5 text-neutral-200 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
