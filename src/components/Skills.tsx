import Reveal from './Reveal';
import {
  FlaskConical,
  Database,
  Brain,
  BarChart3,
  GitBranch,
  FileSpreadsheet,
  Terminal,
  Layers,
} from 'lucide-react';

const groups = [
  {
    label: 'Languages',
    items: [
      { name: 'Python', icon: Terminal },
      { name: 'SQL', icon: Database },
    ],
  },
  {
    label: 'Frameworks & Tools',
    items: [
      { name: 'Flask', icon: FlaskConical },
      { name: 'Git', icon: GitBranch },
      { name: 'Pandas', icon: FileSpreadsheet },
      { name: 'NumPy', icon: Layers },
    ],
  },
  {
    label: 'Data & AI',
    items: [
      { name: 'Data Analysis', icon: BarChart3 },
      { name: 'Machine Learning', icon: Brain },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.2em] text-lime-400 uppercase">
            Skills & Technologies
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mt-4 mb-14 leading-tight">
            Tools I reach for <span className="gradient-text">most often</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.12}>
              <div className="glass rounded-3xl p-7 h-full">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-400 uppercase mb-6">
                  {group.label}
                </h3>
                <div className="space-y-3">
                  {group.items.map((s) => (
                    <div
                      key={s.name}
                      className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 cursor-default"
                    >
                      <div className="w-11 h-11 rounded-xl bg-ink-700 flex items-center justify-center group-hover:bg-lime-400/10 transition-colors duration-200">
                        <s.icon
                          className="text-neutral-300 group-hover:text-lime-400 transition-colors duration-200"
                          size={20}
                        />
                      </div>
                      <span className="font-medium text-neutral-200 group-hover:text-white transition-colors">
                        {s.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
