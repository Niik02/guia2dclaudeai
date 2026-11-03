import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#202538] bg-[#090A0F]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Wordmark */}
        <a
          href="#inicio"
          className="flex items-center gap-2 whitespace-nowrap text-lg font-extrabold tracking-tight text-white hover:text-[#FFC400] transition-colors shrink-0"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#FFC400] to-[#FF6B1A] text-xs font-black text-[#090A0F] shadow-sm">
            2D
          </span>
          <span>
            ESTÚDIO <span className="text-[#FFC400]">2D</span>
          </span>
        </a>

        {/* Zone 2: Single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#B8B8C2]">
          <a
            href="#visao-geral"
            className="whitespace-nowrap shrink-0 hover:text-white transition-colors"
          >
            Visão Geral
          </a>
          <a
            href="#como-funciona"
            className="whitespace-nowrap shrink-0 hover:text-white transition-colors"
          >
            Como Funciona
          </a>
          <a
            href="#o-que-aprende"
            className="whitespace-nowrap shrink-0 hover:text-white transition-colors"
          >
            Conteúdo
          </a>
          <a
            href="#ferramentas"
            className="whitespace-nowrap shrink-0 hover:text-white transition-colors"
          >
            Ferramentas
          </a>
          <a
            href="#faq"
            className="whitespace-nowrap shrink-0 hover:text-white transition-colors"
          >
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onCtaClick}
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-[#FFC400] px-4 py-2 text-xs sm:text-sm font-bold text-[#090A0F] shadow-md shadow-[#FFC400]/10 hover:bg-[#FFD033] hover:shadow-lg hover:shadow-[#FFC400]/20 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Quero o Guia</span>
            <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </header>
  );
};
