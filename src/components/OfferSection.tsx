import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Download, Sparkles, FileText, Layers, Lock } from 'lucide-react';
import { PRICE_CONFIG } from '../config';

interface OfferSectionProps {
  onCtaClick: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="oferta" className="relative py-20 lg:py-28 border-t border-[#1C2133] bg-[#090A0F] overflow-hidden">
      {/* Background cinematic lighting */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[900px] bg-[radial-gradient(circle_at_center,rgba(255,196,0,0.14)_0%,rgba(255,107,26,0.07)_45%,transparent_75%)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[500px] w-[900px] bg-[radial-gradient(circle_at_center,rgba(255,107,26,0.1)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-[#FFC400] uppercase">
            ACESSO IMEDIATO AO CONHECIMENTO
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white text-balance">
            COMECE A CONSTRUIR SEU PRÓPRIO ESTÚDIO DE ANIMAÇÃO COM IA.
          </h2>
          <p className="mt-4 text-base text-[#B8B8C2] leading-relaxed">
            Tenha acesso ao guia que apresenta o processo de configuração e implementação de um fluxo automatizado de produção de vídeos 2D.
          </p>
        </div>

        {/* Big Conversion Card */}
        <div className="mt-14 mx-auto max-w-4xl rounded-3xl border border-[#FFC400]/40 bg-gradient-to-b from-[#141A2B] via-[#0E121E] to-[#0A0D16] p-8 sm:p-12 shadow-2xl shadow-black relative overflow-hidden">
          {/* Subtle top corner glow */}
          <div className="absolute top-0 right-0 h-40 w-40 bg-[#FFC400]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: What's included */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFC400] bg-[#FFC400]/10 border border-[#FFC400]/25 px-3 py-1 rounded-md mb-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{PRICE_CONFIG.badge || 'Edição Completa'}</span>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight">
                  GUIA ESTÚDIO 2D COM CLAUDE AI
                </h3>

                <p className="text-xs sm:text-sm text-[#B8B8C2] mt-2 mb-6">
                  Material completo em formato digital com orientações técnicas prontas para você implementar seu fluxo automatizado.
                </p>

                {/* Bullets */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-white/95">
                    <CheckCircle2 className="h-4 w-4 text-[#FFC400] shrink-0" />
                    <span>Guia digital completo em PDF</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/95">
                    <CheckCircle2 className="h-4 w-4 text-[#FFC400] shrink-0" />
                    <span>Manual passo a passo detalhado</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/95">
                    <CheckCircle2 className="h-4 w-4 text-[#FFC400] shrink-0" />
                    <span>Prompt de implementação para o Claude</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/95">
                    <CheckCircle2 className="h-4 w-4 text-[#FFC400] shrink-0" />
                    <span>Configurações e orientações técnicas</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/95">
                    <CheckCircle2 className="h-4 w-4 text-[#FFC400] shrink-0" />
                    <span>Checklist de qualidade dos vídeos</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#202538] flex items-center gap-4 text-xs text-[#B8B8C2]">
                <div className="flex items-center gap-1.5">
                  <Download className="h-3.5 w-3.5 text-[#FFC400]" />
                  <span>Download Imediato</span>
                </div>
                <span className="text-[#B8B8C2]/40" aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-[#FFC400]" />
                  <span>Ambiente Seguro</span>
                </div>
              </div>
            </div>

            {/* Right: Price & CTA Block */}
            <div className="lg:col-span-5 rounded-2xl border border-[#262D42] bg-[#090A0F]/80 p-6 sm:p-7 flex flex-col items-center text-center">
              <span className="text-xs uppercase tracking-wider text-[#B8B8C2]">
                Investimento no Material
              </span>

              {/* Price display: strictly follows prompt (editable via config without inventing values) */}
              <div className="my-5 w-full py-3 px-4 rounded-xl border border-dashed border-[#FFC400]/30 bg-[#111522]/60">
                {PRICE_CONFIG.hasPriceSet && PRICE_CONFIG.currentPrice ? (
                  <div>
                    {PRICE_CONFIG.originalPrice && (
                      <span className="text-xs text-[#B8B8C2] line-through block">
                        De {PRICE_CONFIG.currencySymbol} {PRICE_CONFIG.originalPrice}
                      </span>
                    )}
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm font-bold text-[#FFC400]">
                        {PRICE_CONFIG.currencySymbol}
                      </span>
                      <span className="text-4xl font-extrabold text-white tracking-tight font-mono">
                        {PRICE_CONFIG.currentPrice}
                      </span>
                    </div>
                    {PRICE_CONFIG.installments && (
                      <span className="text-xs text-[#B8B8C2] mt-1 block">
                        ou {PRICE_CONFIG.installments}
                      </span>
                    )}
                  </div>
                ) : (
                  <div>
                    <span className="text-sm font-semibold text-[#FFC400] block">
                      Preço configurável no código
                    </span>
                    <p className="text-[11px] text-[#B8B8C2] mt-1">
                      Defina o valor em <code className="text-white bg-white/10 px-1 py-0.5 rounded font-mono">src/config.ts</code>
                    </p>
                  </div>
                )}
              </div>

              {/* Primary Conversion Button */}
              <button
                onClick={onCtaClick}
                type="button"
                className="w-full group flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#FFC400] via-[#FFB700] to-[#FF6B1A] px-6 py-4 text-base font-black text-[#090A0F] shadow-lg shadow-[#FFC400]/20 hover:shadow-xl hover:shadow-[#FFC400]/30 hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span className="tracking-wide">QUERO MEU GUIA ESTÚDIO 2D</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
              </button>

              {/* Subtext strictly required by prompt */}
              <p className="mt-4 text-xs text-[#B8B8C2] leading-tight">
                Produto digital. Acesso ao material após a confirmação da compra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
