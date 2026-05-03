import { motion } from 'motion/react';
import { BookOpen, Map, Sparkles, Feather } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { LORE } from '../constants';

export default function Lore() {
  const categories = [
    { id: 'origins', name: 'Origins of the World', icon: <Sparkles className="w-6 h-6 text-eg-amber" /> },
    { id: 'guardians', name: 'The Guardians', icon: <Feather className="w-6 h-6 text-eg-amber" /> },
    { id: 'realms', name: 'Realms & Territories', icon: <Map className="w-6 h-6 text-eg-amber" /> },
    { id: 'themes', name: 'Cosmic Themes', icon: <BookOpen className="w-6 h-6 text-eg-amber" /> },
  ];

  return (
    <PageTransition>
      <section className="py-24 bg-gradient-to-b from-eg-charcoal to-eg-deep">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 italic">Sacred Archives</h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Unveil the ancient tapestries of the Emberglow Universe. Journey through the primordial fires of creation, the silent vigil of the Guardians, and the drifting sands of the infinite Realms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {categories.map((cat) => (
              <div key={cat.id} className="space-y-12">
                <div className="flex items-center gap-4">
                  {cat.icon}
                  <h2 className="text-3xl font-bold uppercase tracking-widest">{cat.name}</h2>
                </div>
                <div className="space-y-6">
                  {LORE.filter(entry => entry.category === cat.id).map((entry, index) => (
                    <motion.div
                      key={entry.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-8 eg-glass rounded-2xl hover:bg-white/10 transition-colors border-l-4 border-l-eg-amber"
                    >
                      <h3 className="text-2xl font-bold mb-3">{entry.title}</h3>
                      <p className="text-white/60 leading-relaxed">{entry.description}</p>
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
