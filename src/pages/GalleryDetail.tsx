import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, X, Maximize2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { GALLERIES } from '../constants';

export default function GalleryDetail() {
  const { id } = useParams();
  const gallery = GALLERIES.find(g => g.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!gallery) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-eg-charcoal">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Gallery Not Found</h1>
          <Link to="/galleries" className="text-eg-amber hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Back to Galleries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <section className="py-24 bg-eg-charcoal min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Link 
              to="/galleries" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-eg-amber transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Galleries
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                {gallery.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/60 leading-relaxed"
              >
                {gallery.description}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-mono text-eg-amber uppercase tracking-widest bg-eg-amber/10 px-4 py-2 rounded-full"
            >
              {gallery.images.length} Illustrations
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.images.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image} 
                  alt={`${gallery.title} - Illustration ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-eg-deep/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="text-white w-8 h-8 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-eg-deep/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Full size illustration"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
