import { motion } from 'motion/react';
import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { CHAPTERS } from '../constants';
import { BookOpen, ChevronRight, ChevronLeft, Minus, Plus, Type } from 'lucide-react';

export default function Original() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [fontSize, setFontSize] = useState(20);

  const nextChapter = () => {
    if (activeChapter < CHAPTERS.length - 1) {
      setActiveChapter(activeChapter + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevChapter = () => {
    if (activeChapter > 0) {
      setActiveChapter(activeChapter - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <PageTransition>
      <section className="py-24 bg-eg-charcoal min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Original Concept</h1>
            <p className="text-xl text-white/60">The story of Ralph, the ordinary camel who became Emberglow.</p>
          </motion.div>

          {/* Table of Contents for Mobile or Quick Access */}
          <div className="lg:hidden mb-12 overflow-x-auto pb-4 flex gap-4 no-scrollbar">
            {CHAPTERS.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => setActiveChapter(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-full border text-sm transition-all ${
                  activeChapter === index 
                    ? 'bg-eg-amber border-eg-amber text-eg-deep font-bold' 
                    : 'border-white/10 hover:border-eg-amber/50 text-white/60'
                }`}
              >
                Ch {chapter.id}
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Desktop Side Navigation */}
            <aside className="hidden lg:block w-64 space-y-2 sticky top-32 h-fit">
              <h2 className="text-eg-amber font-mono text-xs uppercase tracking-widest mb-4 px-4 font-bold">Chapters</h2>
              {CHAPTERS.map((chapter, index) => (
                <button
                  key={chapter.id}
                  onClick={() => setActiveChapter(index)}
                  className={`w-full text-left px-4 py-2 rounded-xl transition-all group flex items-center gap-3 ${
                    activeChapter === index 
                      ? 'bg-white/5 text-eg-amber' 
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <BookOpen size={16} className={activeChapter === index ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'} />
                  <span className="text-sm truncate font-medium">{chapter.title.split(': ')[1]}</span>
                </button>
              ))}
            </aside>

            {/* Main Content Area */}
            <main className="flex-1">
              <motion.div
                key={activeChapter}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4 flex-1">
                    <span className="text-eg-amber font-mono text-xs uppercase tracking-widest font-bold">
                      Chapter {CHAPTERS[activeChapter].id}
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  
                  {/* Font Size Controls */}
                  <div className="flex items-center gap-3 ml-4 bg-white/5 rounded-full px-3 py-1.5 border border-white/10 shrink-0">
                    <Type size={14} className="text-white/40" />
                    <div className="flex items-center gap-1">
                      <button 
                        onClick={() => setFontSize(prev => Math.max(14, prev - 2))}
                        className="p-1 hover:text-eg-amber transition-colors text-white/60"
                        title="Decrease Font Size"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-[10px] font-mono w-8 text-center text-white/40">{fontSize}px</span>
                      <button 
                        onClick={() => setFontSize(prev => Math.min(36, prev + 2))}
                        className="p-1 hover:text-eg-amber transition-colors text-white/60"
                        title="Increase Font Size"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
                  {CHAPTERS[activeChapter].title.split(': ')[1]}
                </h2>

                <div 
                  className="space-y-6 text-white/80 leading-relaxed font-light first-letter:text-5xl first-letter:font-bold first-letter:text-eg-gold first-letter:mr-3 first-letter:float-left"
                  style={{ fontSize: `${fontSize}px` }}
                >
                  {CHAPTERS[activeChapter].content.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-16 pt-12 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={prevChapter}
                    disabled={activeChapter === 0}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                      activeChapter === 0 
                        ? 'opacity-0 pointer-events-none' 
                        : 'bg-white/5 hover:bg-white/10 text-white'
                    }`}
                  >
                    <ChevronLeft size={20} /> Previous
                  </button>
                  <button
                    onClick={nextChapter}
                    disabled={activeChapter === CHAPTERS.length - 1}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                      activeChapter === CHAPTERS.length - 1 
                        ? 'opacity-0 pointer-events-none' 
                        : 'bg-eg-amber hover:bg-eg-gold text-eg-deep font-bold shadow-lg shadow-eg-amber/20'
                    }`}
                  >
                    Next <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            </main>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
