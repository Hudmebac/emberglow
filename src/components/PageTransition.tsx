import { motion } from 'motion/react';
import { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-24 relative overflow-hidden"
    >
      <div className="eg-glow-top" />
      <div className="eg-glow-bottom" />
      <div className="eg-grid-overlay" />
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
