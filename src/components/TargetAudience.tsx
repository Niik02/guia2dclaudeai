import React from 'react';
import { Smartphone, Clapperboard, Briefcase, Compass, CheckCircle2 } from 'lucide-react';

interface AudienceItem {
  title: string;
  description: string;
  icon: React.ElementType;
  highlight: string;
}

const AUDIENCE: AudienceItem[] = [
  {
    title: 'CRIADORES DE CONTEÚDO',
    description: 'Para quem deseja desenvolver vídeos animados para TikTok, Instagram e YouTube com regularidade e retenção.',
    icon: Smartphone,
    highlight: 'Escala em Redes Sociais',
  },
  {
    title: 'PRODUTORES DE VÍDEO',
    description: 'Para quem deseja explorar novas possibilidades de produção utilizando IA para reduzir tempo de entrega.',
    icon: Clapperboard,
    highlight: 'Eficiência de Produção',
  },
  {
    title: 'EMPREENDEDORES',
    description: 'Para quem deseja criar conteúdo visual atrativo para divulgar produtos, serviços, projetos e marcas.',
    icon: Briefcase,
    highlight: 'Comunicação Visual Forte',
  },
  {
    title: 'INICIANTES EM ANIMAÇÃO',
    description: 'Para quem quer conhecer um fluxo de produção de animações 2D sem precisar dominar softwares tradicionais de edição.',
    icon: Compass,
    highlight: 'Sem Barreiras Complexas',
  },
];

export const TargetAudience: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24 border-t border-[#1C2133] bg-[#0B0D14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-[#FFC400] uppercase">
            PÚBLICO-ALVO
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white text-balance">
            ESSE GUIA FOI FEITO PARA QUEM QUER PRODUZIR MAIS COM INTELIGÊNCIA ARTIFICIAL.
          </h2>
          <p className="mt-4 text-base text-[#B8B8C2] leading-relaxed">
            Seja você um criador individual, profissional do audiovisual ou empreendedor buscando destaque com vídeos de animação.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCE.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative rounded-2xl border border-[#202538] bg-[#111522]/80 p-6 flex flex-col justify-between hover:border-[#FFC400]/50 hover:bg-[#141A2B] transition-all duration-300"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#090A0F] border border-[#262D42] text-[#FFC400] mb-5 group-hover:scale-105 group-hover:border-[#FFC400]/40 transition-all">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-[10px] font-mono font-bold text-[#FFC400] uppercase tracking-wider block mb-1">
                    {card.highlight}
                  </span>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#B8B8C2] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C2133] flex items-center gap-1.5 text-xs text-[#B8B8C2]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#FFC400] shrink-0" />
                  <span>Fluxo aplicável</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
