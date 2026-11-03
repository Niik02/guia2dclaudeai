import React from 'react';
import { ArrowRight, CheckCircle2, Film, Sparkles, Layers } from 'lucide-react';
import mascotHeroImg from '../assets/images/mascot_studio_hero_1793717757394.jpg';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background radial atmosphere */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(255,196,0,0.12)_0%,rgba(255,107,26,0.06)_40%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(255,107,26,0.08)_0%,transparent_70%)] blur-2xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Kicker (Clean unboxed metadata) */}
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FFC400] uppercase">
              <span className="flex h-2 w-2 rounded-full bg-[#FFC400]" />
              <span>Guia Digital</span>
              <span className="text-[#B8B8C2]" aria-hidden="true">|</span>
              <span className="text-[#B8B8C2]">Produção de Animações 2D com IA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white max-w-2xl text-balance">
              TRANSFORME SUAS IDEIAS EM{' '}
              <span className="bg-gradient-to-r from-[#FFC400] via-[#FFD033] to-[#FF6B1A] bg-clip-text text-transparent">
                VÍDEOS ANIMADOS 2D
              </span>{' '}
              COM INTELIGÊNCIA ARTIFICIAL.
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-[#B8B8C2] leading-relaxed max-w-xl">
              Aprenda a construir seu próprio estúdio automatizado com Claude AI, narração profissional, personagens consistentes, efeitos sonoros, legendas e vídeos prontos para publicar.
            </p>

            {/* 3 Key Benefits */}
            <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full">
              <div className="flex items-center gap-2.5 rounded-lg border border-[#202538] bg-[#111522]/80 px-3.5 py-2 text-xs sm:text-sm font-medium text-white shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-[#FFC400] shrink-0" />
                <span>Do roteiro ao vídeo finalizado.</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg border border-[#202538] bg-[#111522]/80 px-3.5 py-2 text-xs sm:text-sm font-medium text-white shadow-sm">
                <Sparkles className="h-4 w-4 text-[#FFC400] shrink-0" />
                <span>Automação inteligente da produção.</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg border border-[#202538] bg-[#111522]/80 px-3.5 py-2 text-xs sm:text-sm font-medium text-white shadow-sm">
                <Film className="h-4 w-4 text-[#FFC400] shrink-0" />
                <span>Exportação em MP4 para redes sociais.</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="mt-8 flex flex-col items-start gap-3 w-full sm:w-auto">
              <button
                onClick={onCtaClick}
                type="button"
                className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#FFC400] via-[#FFB700] to-[#FF6B1A] px-8 py-4 text-base font-extrabold text-[#090A0F] shadow-lg shadow-[#FFC400]/25 hover:shadow-xl hover:shadow-[#FFC400]/35 hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span className="tracking-wide">QUERO CONHECER O GUIA</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
              </button>

              <span className="text-xs text-[#B8B8C2]/90 flex items-center gap-1.5 pl-1">
                <Layers className="h-3.5 w-3.5 text-[#FFC400]" />
                Apenas R$ 9,99 · Produto digital em PDF. Acesso imediato após a compra.
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow ring */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-[#FFC400]/30 via-[#FF6B1A]/20 to-transparent blur-md" />

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl border border-[#FFC400]/40 bg-[#111522] shadow-2xl shadow-black/80 aspect-[16/9] min-h-[260px] sm:min-h-[300px]">
                <img
                  src={mascotHeroImg}
                  onError={(e) => {
                    e.currentTarget.src = '/images/mascot_studio_hero.jpg';
                  }}
                  alt="Mascote de capacete preto e jaqueta verde operando o estúdio de animação 2D com IA"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                />

                {/* Ambient glass badge overlay */}
                <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-[#090A0F]/85 backdrop-blur-md p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-[#FFC400]/15 border border-[#FFC400]/40 flex items-center justify-center text-[#FFC400]">
                      <Film className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white tracking-wide">ESTÚDIO AUTOMATIZADO 2D</p>
                      <p className="text-[11px] text-[#B8B8C2]">Claude AI · ElevenLabs · Remotion</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#FFC400] bg-[#FFC400]/10 border border-[#FFC400]/30 px-2 py-0.5 rounded">
                    MP4 1080p
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
