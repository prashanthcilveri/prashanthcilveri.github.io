import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 lg:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#home" className="font-display text-xl font-extrabold tracking-tightest">
          <span className="text-white">CILVER</span>
          <span className="text-lime-400">I</span>
        </a>

        <p className="text-sm text-neutral-500 text-center">
          Prashanth Cilveri — built with React, Tailwind, and Framer Motion.
        </p>

        <a
          href="#home"
          className="group inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-lime-400 transition-colors"
        >
          Back to top
          <span className="w-8 h-8 rounded-full border border-white/10 group-hover:border-lime-400 flex items-center justify-center transition-colors">
            <ArrowUp size={15} />
          </span>
        </a>
      </div>
    </footer>
  );
}
