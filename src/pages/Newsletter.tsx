import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';

export default function Newsletter() {
  return (
    <PageTransition>
      <section className="py-24 bg-eg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 italic">Carry the Flame</h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto italic leading-relaxed">
              The journey doesn't end between the pages. Join our ranks to receive exclusive legends, early fragments of artwork, and transmissions from the heart of the Emberglow Universe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl font-bold uppercase tracking-[0.1em]">Why Subscribe?</h2>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: '🔥 Exclusive Stories', desc: 'Bonus tales that expand the universe' },
                  { title: '✨ Early Artwork', desc: 'See characters and worlds before anyone else' },
                  { title: '📘 Book Updates', desc: 'Book announcements and release updates' },
                  { title: '🎨 Creative Insights', desc: 'Behind-the-scenes worldbuilding secrets' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col border-l-2 border-eg-amber/30 pl-8 space-y-1 hover:border-eg-amber transition-colors py-2"
                  >
                    <span className="text-xl font-bold">{item.title}</span>
                    <span className="text-white/50">{item.desc}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-white/30 text-sm italic">No spam. No filler. Just pure Emberglow magic.</p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="eg-glass p-16 rounded-[3rem]"
            >
              <h2 className="text-3xl font-bold mb-8">Sign Up</h2>
              <form 
                action="https://formsubmit.co/emberglowfire@gmail.com" 
                method="POST"
                className="space-y-6"
              >
                <input type="text" name="_honey" className="hidden" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />
                <input type="hidden" name="_subject" value="New Emberglow Newsletter Signup" />

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-eg-amber transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-eg-amber transition-colors"
                    placeholder="Your Email"
                  />
                </div>
                <button type="submit" className="eg-btn eg-btn-primary w-full h-16 text-lg uppercase tracking-[0.2em]">
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
