import React from 'react';
import { Clock, Cpu, Film, ArrowRight, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="visao-geral" className="relative py-16 lg:py-24 border-t border-[#1C2133] bg-[#0B0D14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-[#FFC400] uppercase">
            A NOVA FORMA DE PRODUZIR CONTEÚDO
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            IMAGINE TER SEU PRÓPRIO ESTÚDIO DE ANIMAÇÃO COM IA.
          </h2>
          <p className="mt-4 text-base text-[#B8B8C2] leading-relaxed">
            Produzir vídeos animados tradicionalmente exige diversas etapas: criar roteiros, desenvolver personagens, montar cenários, produzir narrações, sincronizar legendas, adicionar efeitos e finalizar a edição.
          </p>
          <p className="mt-2 text-base font-medium text-white/90">
            O <span className="text-[#FFC400]">Guia Estúdio 2D com Claude AI</span> apresenta um processo estruturado para integrar ferramentas de inteligência artificial e automatizar boa parte desse trabalho.
          </p>
        </div>

        {/* 3 Comparison Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Produção Manual */}
          <div className="relative rounded-2xl border border-[#23293D] bg-[#111522]/90 p-7 flex flex-col justify-between transition-all hover:border-[#384160]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
                <Clock className="h-6 w-6" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                  Etapa 01
                </span>
                <span className="text-[#B8B8C2]/40" aria-hidden="true">·</span>
                <span className="text-xs text-[#B8B8C2]">Gargalo Tradicional</span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                PRODUÇÃO MANUAL
              </h3>
              <p className="mt-3 text-sm text-[#B8B8C2] leading-relaxed">
                Diversas etapas, ferramentas desconectadas e tarefas repetitivas que tomam horas para cada segundo de vídeo produzido.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[#1C2133] flex items-center gap-2 text-xs text-[#B8B8C2]">
              <AlertCircle className="h-4 w-4 text-red-400/80 shrink-0" />
              <span>Alto tempo investido & retrabalho contínuo</span>
            </div>
          </div>

          {/* Card 2: Automação com IA (Marquee Card) */}
          <div className="relative rounded-2xl border border-[#FFC400]/40 bg-gradient-to-b from-[#141A2B] to-[#111522] p-7 flex flex-col justify-between shadow-xl shadow-[#FFC400]/5 hover:border-[#FFC400]/70 transition-all">
            {/* Subtle glow highlight */}
            <div className="absolute top-0 right-0 h-24 w-24 bg-[#FFC400]/10 rounded-full blur-xl pointer-events-none" />

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFC400]/15 border border-[#FFC400]/40 text-[#FFC400] mb-6">
                <Cpu className="h-6 w-6" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#FFC400] uppercase tracking-wider">
                  Etapa 02
                </span>
                <span className="text-[#B8B8C2]/40" aria-hidden="true">·</span>
                <span className="text-xs text-[#FFC400] font-medium">O Método do Guia</span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                AUTOMAÇÃO COM IA
              </h3>
              <p className="mt-3 text-sm text-[#B8B8C2] leading-relaxed">
                Ferramentas trabalhando em conjunto para organizar, gerar e executar o processo em um fluxo ágil e orquestrado.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[#FFC400]/20 flex items-center gap-2 text-xs text-white">
              <Sparkles className="h-4 w-4 text-[#FFC400] shrink-0" />
              <span>Claude + ElevenLabs + Remotion orquestrados</span>
            </div>
          </div>

          {/* Card 3: Vídeo Finalizado */}
          <div className="relative rounded-2xl border border-[#23293D] bg-[#111522]/90 p-7 flex flex-col justify-between transition-all hover:border-[#FF6B1A]/40">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B1A]/15 border border-[#FF6B1A]/30 text-[#FF6B1A] mb-6">
                <Film className="h-6 w-6" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#FF6B1A] uppercase tracking-wider">
                  Etapa 03
                </span>
                <span className="text-[#B8B8C2]/40" aria-hidden="true">·</span>
                <span className="text-xs text-[#B8B8C2]">Resultado Pronto</span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                VÍDEO FINALIZADO
              </h3>
              <p className="mt-3 text-sm text-[#B8B8C2] leading-relaxed">
                Uma animação 2D renderizada em MP4 com roteiro, voz, movimento e trilha, pronta para publicação nas suas redes sociais.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[#1C2133] flex items-center gap-2 text-xs text-[#B8B8C2]">
              <CheckCircle2 className="h-4 w-4 text-[#FF6B1A] shrink-0" />
              <span>Exportação direta para TikTok, Reels e YouTube</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
