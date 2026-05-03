import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { BOOKS } from '../constants';

export default function Books() {
  return (
    <PageTransition>
      <section className="py-24 bg-gradient-to-b from-eg-deep to-eg-charcoal">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 italic">The Eternal Cycle</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-16">
              Witness the descent of the First Light and the trials that forged a mythic legend. Explore the five core volumes and the definitive guide to the Emberglow Universe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BOOKS.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative mb-8 overflow-hidden rounded-xl border border-white/10 flex aspect-[3/4]">
                  <img 
                    src={book.coverImage} 
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-eg-amber/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Link 
                    to={`/book/${book.id}`}
                    className="absolute inset-0 z-10"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-eg-amber transition-colors">{book.title}</h3>
                <p className="text-white/40 mb-6 font-medium italic">{book.subtitle}</p>
                <Link to={`/book/${book.id}`} className="eg-btn eg-btn-ghost py-2 text-sm w-full block text-center">
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
