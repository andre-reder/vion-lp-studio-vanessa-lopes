import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info } from "lucide-react";

export default function ConceptBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty("--banner-h", "38px");
    return () => {
      document.documentElement.style.setProperty("--banner-h", "0px");
    };
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    document.documentElement.style.setProperty("--banner-h", "0px");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "38px", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-[60] overflow-hidden bg-[#2D1B23] text-white"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-2.5 flex items-center justify-center gap-2.5 text-center">
            <Info className="w-3.5 h-3.5 text-[#D4877A] flex-shrink-0" />
            <p className="text-[11px] sm:text-xs text-white/70 leading-tight">
              Proposta conceitual não oficial. Conteúdo e dados podem ser
              fictícios e devem ser confirmados antes da publicação.
            </p>
            <button
              onClick={handleDismiss}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors cursor-pointer"
              aria-label="Fechar aviso"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
