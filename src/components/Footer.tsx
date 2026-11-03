import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#1C2133] bg-[#07080C] py-12 text-[#B8B8C2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#FFC400] to-[#FF6B1A] text-xs font-black text-[#090A0F]">
              2D
            </span>
            <span className="text-sm font-extrabold text-white tracking-tight">
              GUIA ESTÚDIO 2D COM CLAUDE AI
            </span>
          </div>

          {/* Nav links mirror */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
            <a href="#inicio" className="hover:text-white transition-colors">
              Início
            </a>
            <a href="#visao-geral" className="hover:text-white transition-colors">
              Visão Geral
            </a>
            <a href="#como-funciona" className="hover:text-white transition-colors">
              Como Funciona
            </a>
            <a href="#o-que-aprende" className="hover:text-white transition-colors">
              Conteúdo
            </a>
            <a href="#oferta" className="hover:text-white transition-colors">
              Oferta
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#B8B8C2]/70 text-center md:text-right">
            © {new Date().getFullYear()} Guia Estúdio 2D. Todos os direitos reservados.
          </p>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-6 border-t border-[#151926] text-[11px] text-[#B8B8C2]/60 text-center leading-relaxed max-w-4xl mx-auto">
          Este produto é um material educacional digital que ensina técnicas de automação e integração de ferramentas com inteligência artificial. O guia não é afiliado, patrocinado ou endossado oficialmente pela Anthropic (Claude), ElevenLabs ou Remotion. Todas as marcas e nomes citados pertencem aos seus respectivos proprietários.
        </div>
      </div>
    </footer>
  );
};
