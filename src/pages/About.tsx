import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';

export default function About() {
  return (
    <PageTransition>
      <section className="py-24 bg-eg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 italic">The Mythic Tapestry</h1>
              <div className="space-y-6 text-xl text-white/70 leading-relaxed">
                <p>
                  The Emberglow Universe is a masterpiece of mythic storytelling — a cinematic saga where every spark carries the weight of a thousand worlds.
                </p>
                <p>
                  It began with a single cosmic vibration: 
                  <strong> What if the smallest light was destined to be the greatest guardian? </strong>
                </p>
                <p>
                  From that spark emerged a sprawling, franchise‑ready universe. A journey spanning deserts of ancient memory, celestial reaches beyond time, and the elemental fire that defines what it means to be a hero in an age of giants.
                </p>
              </div>
            </div>
            <div className="eg-glass p-12 rounded-3xl">
              <h2 className="text-3xl font-bold mb-8 text-eg-amber">The Themes</h2>
              <ul className="space-y-6">
                {[
                  { title: '✨ Memory', desc: 'The stories we carry and the ones we forget' },
                  { title: '🔥 Light & Shadow', desc: 'Not good vs evil, but balance' },
                  { title: '🌌 Possibility', desc: 'Every spark contains infinite futures' },
                  { title: '💫 Identity', desc: 'Becoming more than what the world expects' },
                ].map((item, id) => (
                  <motion.li 
                    key={id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: id * 0.1 }}
                    className="flex flex-col gap-1"
                  >
                    <span className="text-xl font-bold">{item.title}</span>
                    <span className="text-white/50">{item.desc}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 p-12 lg:p-24 bg-eg-deep rounded-[3rem] border border-white/5">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">The Architect</h2>
              <div className="space-y-6 text-lg text-white/60 leading-relaxed">
                <p>
                  Zac Heggie is the visionary architect behind the Emberglow Universe. A storyteller dedicated to world‑class visual imagination and deep emotional resonance, Zac crafts narratives that bridge the gap between mythic legend and modern cinematic spectacle.
                </p>
                <p>
                  His work blends celestial fantasy with the raw, beating heart of character-driven drama — creating universes that don't just tell a story, but invite you to inhabit them.
                </p>
                <p className="border-l-4 border-eg-amber pl-6 italic text-white/80 py-4 text-xl">
                  “Every spark matters.”
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold italic">The Alchemy of Creation</h2>
              <p className="text-lg text-white/60 leading-relaxed">
                The universe is built through layered worldbuilding — starting with emotional truth, 
                then expanding into mythology, geography, cosmic forces, and character-driven storytelling.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                Every story begins with a heartbeat—a single moment of emotional resonance. We then forge that pulse with layered worldbuilding, weaving together ancient mythology, cosmic geography, and high-stakes character arcs to create a tapestry that lives, breathes, and ignites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
