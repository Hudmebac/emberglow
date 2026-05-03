import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Books', path: '/books' },
  { name: 'Characters', path: '/characters' },
  { name: 'Lore', path: '/lore' },
  { name: 'Galleries', path: '/galleries' },
  { name: 'Original', path: '/original' },
  { name: 'Songs', path: '/songs' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-eg-deep/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-12 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-gradient-to-tr from-eg-gold to-eg-amber rounded-md shadow-[0_0_15px_rgba(230,138,69,0.4)] group-hover:scale-110 transition-transform"></div>
          <span className="text-xl font-bold tracking-tight uppercase group-hover:text-eg-gold transition-colors">
            EMBERGLOW
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`eg-nav-link ${location.pathname === link.path ? 'eg-nav-link-active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="px-6 py-2 border border-eg-gold/30 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-eg-gold hover:text-white transition-colors">
            Inquiry
          </Link>
        </div>
      </div>
    </nav>
  );
}
