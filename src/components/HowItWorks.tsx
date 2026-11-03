import React from 'react';
import { Lightbulb, Users, Mic, Wand2, Sliders, Download, ArrowRight } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  tag: string;
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'IDEIA E ROTEIRO',
    description: 'Transforme sua ideia em uma história estruturada com ganchos fortes e ritmo de retenção.',
    icon: Lightbulb,
    tag: 'Roteirização',
  },
  {
    number: '02',
    title: 'PERSONAGENS E CENÁRIOS',
    description: 'Gere elementos visuais com inteligência artificial e trabalhe a consistência entre as cenas.',
    icon: Users,
    tag: 'Consistência Visual',
  },
  {
    number: '03',
    title: 'NARRAÇÃO PROFISSIONAL',
    description: 'Integre o ElevenLabs para produzir narrações ultra-realistas com emoção e cadência.',
    icon: Mic,
    tag: 'Voz Sintética',
  },
  {
    number: '04',
    title: 'ANIMAÇÃO 2D',
    description: 'Utilize Remotion e ferramentas integradas para construir movimentos, cenas e efeitos dinâmicos.',
    icon: Wand2,
    tag: 'Motion & Código',
  },
  {
    number: '05',
    title: 'FINALIZAÇÃO AUTOMÁTICA',
    description: 'Organize músicas, efeitos sonoros, legendas sincronizadas e renderização sem esforço manual.',
    icon: Sliders,
    tag: 'Áudio & Legendas',
  },
  {
    number: '06',
    title: 'EXPORTAÇÃO',
    description: 'Gere seu vídeo final em MP4 em alta resolução, 100% pronto para publicação imediata.',
    icon: Download,
    tag: 'MP4 Final',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="relative py-16 lg:py-24 border-t border-[#1C2133] bg-[#090A0F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-[#FFC400] uppercase">
            FLUXO DE PRODUÇÃO ESTRUTURADO
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            DO ZERO AO VÍDEO FINALIZADO.
          </h2>
          <p className="mt-4 text-base text-[#B8B8C2] leading-relaxed">
            O objetivo do guia é capacitar você a montar uma esteira de produção automatizada, conectando IA do primeiro rascunho até o arquivo de vídeo pronto.
          </p>
        </div>

        {/* Steps Grid / Timeline (horizontal on desktop, vertical on mobile) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-[#202538] bg-[#111522]/70 p-6 flex flex-col justify-between hover:border-[#FFC400]/50 hover:bg-[#111522] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono tracking-tight text-[#FFC400]">
                      {step.number}
                    </span>
                    <div className="h-10 w-10 rounded-xl bg-[#FFC400]/10 border border-[#FFC400]/25 flex items-center justify-center text-[#FFC400] group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-[#B8B8C2]/70 uppercase tracking-wider block mb-1">
                    {step.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#FFC400] transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-[#B8B8C2] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C2133] flex items-center justify-between text-xs text-[#B8B8C2]">
                  <span>Etapa do pipeline</span>
                  <span className="text-white/60 font-mono">0{idx + 1} / 06</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pipeline callout banner */}
        <div className="mt-12 rounded-2xl border border-[#FFC400]/30 bg-gradient-to-r from-[#111522] via-[#161C2E] to-[#111522] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#FFC400] to-[#FF6B1A] flex items-center justify-center text-[#090A0F] font-black shrink-0">
              ⚡
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Foco total em automação inteligente e escalável
              </h4>
              <p className="text-xs sm:text-sm text-[#B8B8C2] mt-0.5">
                Você aprende a arquitetura que permite criar múltiplos vídeos sem reiniciar todo o processo do zero.
              </p>
            </div>
          </div>
          <a
            href="#o-que-aprende"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FFC400] hover:text-[#FFD033] whitespace-nowrap transition-colors"
          >
            <span>Ver conteúdos do guia</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
