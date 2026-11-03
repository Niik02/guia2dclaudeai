import React from 'react';
import { BookOpen, Sliders, Terminal, FolderTree, CheckSquare, Wrench, ArrowRight } from 'lucide-react';

interface WhatYouReceiveProps {
  onCtaClick: () => void;
}

const INCLUDED_MATERIALS = [
  {
    title: 'Manual Completo Passo a Passo',
    description: 'Guia digital detalhado do início ao fim com todos os conceitos e etapas do fluxo.',
    icon: BookOpen,
  },
  {
    title: 'Configurações Técnicas e Orientações',
    description: 'Instruções diretas de instalação e requisitos de sistema para rodar o pipeline.',
    icon: Sliders,
  },
  {
    title: 'Prompt de Implementação para o Claude',
    description: 'Prompt estruturado para instruir o Claude a construir e gerenciar todo o seu estúdio.',
    icon: Terminal,
  },
  {
    title: 'Estrutura de Pastas e Organização',
    description: 'Arquitetura de diretórios para manter roteiros, áudios, imagens e renders em ordem.',
    icon: FolderTree,
  },
  {
    title: 'Checklist de Qualidade dos Vídeos',
    description: 'Roteiro de conferência antes da exportação final para garantir padrão visual e sonoro.',
    icon: CheckSquare,
  },
  {
    title: 'Orientações para Solução de Problemas',
    description: 'Resolução prática dos erros mais comuns de render, áudio, dependências e parâmetros.',
    icon: Wrench,
  },
];

export const WhatYouReceive: React.FC<WhatYouReceiveProps> = ({ onCtaClick }) => {
  return (
    <section id="o-guia" className="relative py-16 lg:py-24 border-t border-[#1C2133] bg-[#090A0F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-[#FFC400] uppercase">
            ENTREGA IMEDIATA
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            SEU MATERIAL COMPLETO PARA COMEÇAR.
          </h2>
          <p className="mt-4 text-base text-[#B8B8C2] leading-relaxed">
            Tudo o que você precisa reunido em um único material estruturado para acelerar sua curva de aprendizado e implementação.
          </p>
        </div>

        {/* Content Layout: 3D Guide Mockup on the Left / Included List on the Right */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Mockup visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Amber Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#FFC400]/25 via-[#FF6B1A]/15 to-transparent blur-2xl pointer-events-none" />

              <div className="relative overflow-hidden rounded-2xl border border-[#FFC400]/40 bg-[#111522] shadow-2xl shadow-black">
                <img
                  src="/src/assets/images/guide_digital_mockup_1793717757021.jpg"
                  alt="Mockup do Guia Estúdio 2D com Claude AI em formato digital 3D"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />

                <div className="p-4 border-t border-[#202538] bg-[#0B0D14]/90 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      GUIA ESTÚDIO 2D COM CLAUDE AI
                    </p>
                    <p className="text-[11px] text-[#B8B8C2]">Material Digital em PDF de Alta Resolução</p>
                  </div>
                  <span className="text-[10px] font-bold text-[#FFC400] bg-[#FFC400]/10 border border-[#FFC400]/30 px-2 py-0.5 rounded">
                    PDF + PROMPTS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Included Items List */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INCLUDED_MATERIALS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-[#202538] bg-[#111522]/70 p-4 hover:border-[#FFC400]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-8 w-8 rounded-lg bg-[#FFC400]/10 border border-[#FFC400]/25 flex items-center justify-center text-[#FFC400] shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-sm font-bold text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#B8B8C2] leading-relaxed pl-11">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Strategic Callout */}
            <div className="mt-8 rounded-2xl border border-[#FFC400]/35 bg-gradient-to-r from-[#171D2E] to-[#111522] p-6 shadow-lg">
              <p className="text-base sm:text-lg font-bold text-white leading-snug">
                “Não é apenas um conjunto de ideias. É um guia estruturado para implementar seu próprio fluxo de produção.”
              </p>
              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-xs text-[#B8B8C2]">
                  Instruções organizadas com rigor técnico para execução direta.
                </span>
                <button
                  onClick={onCtaClick}
                  type="button"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FFC400] hover:text-[#FFD033] transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>Garantir meu acesso</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
