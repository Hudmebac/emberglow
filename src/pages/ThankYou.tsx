import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function ThankYou() {
  return (
    <PageTransition>
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-32">
        {/* Floating Sparks */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight,
              opacity: 1,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: -100, 
              opacity: 0,
              x: (Math.random() - 0.5) * 200 + (Math.random() * window.innerWidth)
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute bottom-0 w-2 h-2 bg-eg-amber rounded-full blur-sm z-0"
          />
        ))}

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-24 h-24 bg-eg-amber rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-eg-amber/50"
          >
            <Sparkles className="w-12 h-12 text-eg-deep" />
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 italic">Thank You, Spark</h1>
          <p className="text-2xl text-white/60 mb-16 leading-relaxed">
            Your light has joined the Emberglow Universe. Expect stories, art, lore, and magic 
            delivered straight to your inbox.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/books" className="eg-btn eg-btn-primary flex items-center gap-2">
              Explore the Books <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/lore" className="eg-btn eg-btn-ghost">
              Read the Lore
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
