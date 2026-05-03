import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { GALLERIES } from '../constants';

export default function Galleries() {
  return (
    <PageTransition>
      <section className="py-24 bg-eg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 italic">Visions of the Void</h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Behold the visual manifestations of a universe in flux. From the radiant glow of the First Light to the obsidian shadows of the Understar, witness the cinematic beauty of the Emberglow Universe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {GALLERIES.map((gallery, index) => (
              <motion.div
                key={gallery.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={`/galleries/${gallery.id}`}
                  className="group relative block h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                >
                  <img 
                    src={gallery.coverImage} 
                    alt={gallery.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-eg-deep via-eg-deep/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-8 space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-3xl font-bold">{gallery.title}</h3>
                    <p className="text-white/60 group-hover:opacity-100 opacity-0 transition-opacity">{gallery.description}</p>
                    <div className="flex items-center gap-2">
                       <span className="text-xs font-mono text-eg-amber uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Collection</span>
                       <div className="h-px flex-1 group-hover:bg-eg-amber bg-transparent transition-all duration-500" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
