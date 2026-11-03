import React, { useState, useEffect } from 'react';
import { ArrowRight, Film } from 'lucide-react';

interface MobileStickyBarProps {
  onCtaClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-[#090A0F]/95 backdrop-blur-md border-t border-[#202538] lg:hidden animate-fade-in shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex items-center gap-2 pl-1 truncate">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#FFC400]/20 text-[#FFC400]">
            <Film className="h-3.5 w-3.5" />
          </span>
          <div className="truncate text-left">
            <p className="text-[11px] font-bold text-white leading-tight truncate">
              Guia Estúdio 2D
            </p>
            <p className="text-[9px] text-[#B8B8C2] truncate">
              Manual em PDF com IA
            </p>
          </div>
        </div>

        <button
          onClick={onCtaClick}
          type="button"
          className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#FFC400] to-[#FF6B1A] px-4 py-2.5 text-xs font-black text-[#090A0F] shadow-md shadow-[#FFC400]/20 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span>QUERO O GUIA</span>
          <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
