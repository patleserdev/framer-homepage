'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [showCircle, setShowCircle] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Lancer l'effet de cercle après 100ms
    const enterTimeout = setTimeout(() => {
      setShowCircle(true);
    }, 100);

    // Puis le masquer après 1s
    const exitTimeout = setTimeout(() => {
      setShowCircle(false);
    }, 1100);

    return () => {
      clearTimeout(enterTimeout);
      clearTimeout(exitTimeout);
    };
  }, []);

  if (!mounted) {
    // Empêche le rendu côté serveur pour éviter le mismatch
    return <div className="min-h-screen bg-slate-950"></div>;
  }

  return (
    <div className="relative overflow-hidden min-h-screen bg-slate-950">
      {/* Cercle animé */}
      <AnimatePresence>
        {showCircle && (
          <motion.div
            className="fixed top-1/2 left-1/2 bg-slate-900 z-50"
            initial={{
              width: 100,
              height: 100,
              x: "-50%",
              y: "-50%",
              borderRadius: "100%",
              scale: 0,
              opacity: 1,
            }}
            animate={{
              scale: 20,
              borderRadius: "0%",
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            exit={{
              scale: 0,
              borderRadius: "100%",
              opacity: 0,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
          />
        )}
      </AnimatePresence>

      {/* Contenu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}
