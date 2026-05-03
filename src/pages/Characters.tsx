import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { CHARACTERS } from '../constants';

export default function Characters() {
  const categories = [
    { id: 'main', name: 'Main Characters' },
    { id: 'cosmic', name: 'Ancient & Cosmic Beings' },
  ];

  return (
    <PageTransition>
      <section className="py-24 bg-eg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Character Compendium</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Meet the sparks, guardians, lights, shadows, and ancient beings who shape the Emberglow Universe.
            </p>
          </div>

          <div className="space-y-32">
            {categories.map((cat) => (
              <div key={cat.id}>
                <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-eg-amber mb-12 border-b border-eg-amber/20 pb-4 inline-block">
                  {cat.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {CHARACTERS.filter(char => char.category === cat.id).map((char, index) => (
                    <motion.div
                      key={char.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group p-6 eg-glass rounded-2xl hover:bg-white/10 transition-all duration-500"
                    >
                      <div className="aspect-square rounded-xl overflow-hidden mb-6 border border-white/10">
                        <img 
                          src={char.image} 
                          alt={char.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-eg-amber transition-colors">{char.name}</h3>
                      <p className="text-eg-amber/80 text-sm font-medium uppercase tracking-wider mb-4">{char.role}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{char.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
