import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="px-12 py-16 border-t border-white/5 bg-eg-deep z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-3">
          <span className="text-eg-gold text-xs font-bold uppercase tracking-[0.2em]">The Saga</span>
          <p className="text-sm opacity-50 font-light leading-relaxed">
            A cinematic fantasy universe where memory shapes reality, and every spark matters.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-eg-gold text-xs font-bold uppercase tracking-[0.2em]">Explore</span>
          <ul className="space-y-1 text-sm opacity-50 font-light">
            <li><Link to="/books" className="hover:text-eg-gold transition-colors">Books</Link></li>
            <li><Link to="/galleries" className="hover:text-eg-gold transition-colors">Galleries</Link></li>
            <li><Link to="/lore" className="hover:text-eg-gold transition-colors">Lore</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-eg-gold text-xs font-bold uppercase tracking-[0.2em]">Atelier</span>
          <ul className="space-y-1 text-sm opacity-50 font-light">
            <li><Link to="/about" className="hover:text-eg-gold transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-eg-gold transition-colors">Contact</Link></li>
            <li><Link to="/newsletter" className="hover:text-eg-gold transition-colors">Newsletter</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 text-right">
          <span className="text-3xl font-light tracking-tighter">EST. 2026</span>
          <span className="text-[10px] opacity-40 uppercase tracking-[0.1em]">Bespoke Fantasy Storytelling</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 opacity-20 text-[10px] flex justify-between uppercase tracking-widest">
        <span>© {new Date().getFullYear()} Emberglow Universe.</span>
        <span>Created by Zac Heggie</span>
      </div>
    </footer>
  );
}
