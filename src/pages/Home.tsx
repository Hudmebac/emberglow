import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { BOOKS } from '../constants';

export default function Home() {
  const mainBook = BOOKS[0];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center px-12 z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="md:col-span-7"
          >
            <h1 className="text-7xl md:text-9xl font-light leading-[0.9] mb-8 tracking-tighter">
              Emberglow: <br/><span className="text-eg-gold font-normal">The Mythic Camel Universe</span>
            </h1>
            <div className="space-y-6 mb-12 max-w-2xl">
              <p className="text-2xl text-eg-gold font-medium italic">
                Epic, franchise‑ready, and signals a whole world.
              </p>
              <p className="text-xl text-eg-sand/60 leading-relaxed font-light">
                Emberglow is a mythic storytelling universe centred on a radiant, winged camel born from desert starlight. Blending ancient wonder with modern cinematic energy, the series delivers sweeping adventures, elemental magic, and emotionally rich characters. Every tale is crafted with world‑class clarity, visual imagination, and the warm, timeless heart of a classic legend.
              </p>
            </div>
            <div className="flex items-center gap-10">
              <Link to={`/book/${mainBook.id}`} className="eg-btn eg-btn-primary">
                Explore Collection
              </Link>
              <div className="hidden sm:flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-eg-gold mb-1 font-bold">Featured Saga</span>
                <span className="text-sm italic opacity-50 font-light">{mainBook.title}, 2026</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="md:col-span-5"
          >
            <div className="relative bg-white/5 rounded-[2rem] p-1 border border-white/5 shadow-2xl overflow-hidden group">
              <div className="aspect-[4/5] bg-gradient-to-b from-eg-charcoal to-eg-deep rounded-[1.8rem] flex items-center justify-center relative overflow-hidden">
                 <div className="absolute w-64 h-64 bg-eg-gold/20 opacity-20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                 <img 
                    src={mainBook.coverImage} 
                    alt={mainBook.title}
                    className="relative z-10 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-[10px] font-mono uppercase tracking-widest opacity-40">
                    <div>SAGA // 01</div>
                    <div className="text-right">DESERT // ECHOES</div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-32 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col gap-4">
              <span className="text-eg-gold text-xs font-bold uppercase tracking-[0.2em]">The Saga</span>
              <p className="text-lg opacity-50 font-light leading-relaxed">
                Five volumes of cinematic prose merged with epic celestial worldbuilding.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-eg-gold text-xs font-bold uppercase tracking-[0.2em]">The Archive</span>
              <p className="text-lg opacity-50 font-light leading-relaxed">
                Definitive guidebooks detailing the mythology and origins of every spark.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-eg-gold text-xs font-bold uppercase tracking-[0.2em]">The Atlas</span>
              <p className="text-lg opacity-50 font-light leading-relaxed">
                A geography of memory, mapping the desert's shifting dunes and celestial reaches.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
