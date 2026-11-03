import React from 'react';
import { ArrowRight, Film, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCtaProps {
  onCtaClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onCtaClick }) => {
  return (
    <section className="relative py-20 lg:py-28 border-t border-[#1C2133] bg-[#090A0F] overflow-hidden">
      {/* Background cinematic lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,196,0,0.12)_0%,rgba(255,107,26,0.06)_40%,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Mascot Artwork in Studio Control Room */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#FFC400]/30 via-[#FF6B1A]/20 to-transparent blur-xl pointer-events-none" />

              <div className="relative overflow-hidden rounded-2xl border border-[#FFC400]/40 bg-[#111522] shadow-2xl shadow-black">
                <img
                  src="/src/assets/images/mascot_studio_cta_1793717757219.jpg"
                  alt="Mascote de capacete preto e jaqueta verde na sala de controle do estúdio de animação"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />

                <div className="p-4 border-t border-[#202538] bg-[#090A0F]/90 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-[#FFC400]" />
                    <span className="text-xs font-bold text-white tracking-wide">
                      PRODUÇÃO RENDERIZADA EM MP4
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#FFC400]">
                    100% AUTOMATIZADO
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Copy */}
          <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
            <span className="text-xs font-bold tracking-widest text-[#FFC400] uppercase mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span>DÊ O PRIMEIRO PASSO</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15] text-balance">
              SUA PRÓXIMA ANIMAÇÃO PODE COMEÇAR AQUI.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#B8B8C2] leading-relaxed">
              Aprenda a estruturar seu próprio estúdio de animação 2D com inteligência artificial e transforme suas ideias em vídeos completos.
            </p>

            <div className="mt-6 space-y-2.5 w-full">
              <div className="flex items-center gap-2.5 text-sm text-white/90">
                <CheckCircle2 className="h-4 w-4 text-[#FFC400] shrink-0" />
                <span>Fluxo testado integrando Claude, ElevenLabs e Remotion</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/90">
                <CheckCircle2 className="h-4 w-4 text-[#FFC400] shrink-0" />
                <span>Prompts, configurações e checklist inclusos</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/90">
                <CheckCircle2 className="h-4 w-4 text-[#FFC400] shrink-0" />
                <span>Acesso digital imediato ao material após a compra</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-start gap-3 w-full sm:w-auto">
              <button
                onClick={onCtaClick}
                type="button"
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#FFC400] via-[#FFB700] to-[#FF6B1A] px-8 py-4 text-base font-black text-[#090A0F] shadow-xl shadow-[#FFC400]/25 hover:shadow-2xl hover:shadow-[#FFC400]/35 hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span className="tracking-wide">QUERO ACESSAR O GUIA</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
              </button>

              <span className="text-xs text-[#B8B8C2] pl-1">
                Material digital em PDF. Acesso imediato após a confirmação.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
