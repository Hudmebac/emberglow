import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart, Info } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { BOOKS } from '../constants';

export default function BookDetail() {
  const { id } = useParams();
  const book = BOOKS.find(b => b.id === id);

  if (!book) {
    return (
      <PageTransition>
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold mb-8">Book Not Found</h1>
          <Link to="/books" className="eg-btn eg-btn-primary">Return to Library</Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* Book Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-eg-amber/5" />
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/books" className="inline-flex items-center gap-2 text-white/50 hover:text-eg-amber transition-colors mb-12 uppercase tracking-widest text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Books
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={book.coverImage} 
                alt={book.title}
                className="w-full max-w-md aspect-[3/4] object-cover rounded-xl shadow-2xl shadow-eg-amber/10 border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <p className="text-eg-amber font-display font-bold uppercase tracking-[0.2em] mb-4">{book.subtitle}</p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">{book.title}</h1>
              </div>

              <p className="text-xl text-white/70 leading-relaxed max-w-xl">
                {book.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {book.buyLinks.map((link) => (
                  <a 
                    key={link.platform}
                    href={link.url}
                    className="eg-btn eg-btn-primary flex items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" /> {link.platform}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Excerpts & Teasers */}
      <section className="py-24 border-t border-white/5 bg-eg-deep/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold flex items-center gap-4">
                <Info className="w-8 h-8 text-eg-amber" /> The Journey Continues
              </h2>
              <div className="markdown-body">
                <p>
                  In this volume, the Emberglow Universe expands into deeper mysteries. 
                  Every chapter is crafted to bridge the gap between the desert sands 
                  and the eternal light beyond.
                </p>
                <p>
                  Follow as the characters face impossible choices that will define 
                  the very fabric of memory and destiny.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <h2 className="text-2xl font-display font-medium uppercase tracking-widest text-eg-amber/60">Teaser Excerpts</h2>
              <div className="space-y-8">
                {book.teaser.map((quote, idx) => (
                  <motion.blockquote 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="border-l-4 border-eg-amber pl-8 py-4 italic text-2xl text-white/80 leading-relaxed font-serif"
                  >
                    {quote}
                  </motion.blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
