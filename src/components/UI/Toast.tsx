import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl bg-dark-800/95 border border-cyan-500/40 text-white shadow-2xl shadow-cyan-950/50 backdrop-blur-xl"
        >
          {type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          ) : (
            <Info className="w-5 h-5 text-cyan-400 shrink-0" />
          )}
          <span className="text-sm font-medium text-slate-200">{message}</span>
          <button
            onClick={onClose}
            className="ml-2 text-slate-400 hover:text-white transition-colors text-xs font-mono"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
