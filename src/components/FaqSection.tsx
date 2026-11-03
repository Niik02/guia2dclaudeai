import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 1,
    question: 'O que é o Guia Estúdio 2D com Claude AI?',
    answer:
      'É um material digital em PDF que ensina a configurar um fluxo de produção automatizada de animações 2D utilizando Claude Desktop, ElevenLabs, Remotion e outras ferramentas de inteligência artificial.',
  },
  {
    id: 2,
    question: 'Preciso saber editar vídeos?',
    answer:
      'Não é necessário dominar softwares tradicionais de edição. O guia apresenta orientações para construir um processo de produção utilizando ferramentas de IA. É importante ter disposição para seguir as configurações e instruções técnicas.',
  },
  {
    id: 3,
    question: 'Preciso ter computador?',
    answer:
      'Sim. É necessário ter um computador para realizar as configurações e utilizar o ambiente de produção apresentado no guia.',
  },
  {
    id: 4,
    question: 'Preciso pagar por outras ferramentas?',
    answer:
      'Algumas funcionalidades dependem de APIs, assinaturas e créditos externos. Esses custos não estão incluídos no guia.',
  },
  {
    id: 5,
    question: 'O que vou receber?',
    answer:
      'Um guia digital em PDF com instruções passo a passo, configurações, prompt de implementação, estrutura de pastas, checklist e orientações para solucionar problemas.',
  },
  {
    id: 6,
    question: 'Os vídeos ficam prontos automaticamente?',
    answer:
      'O guia ensina a implementar um fluxo automatizado de produção e renderização. O funcionamento depende das configurações realizadas, das ferramentas utilizadas e dos recursos disponíveis.',
  },
  {
    id: 7,
    question: 'Como recebo o material?',
    answer:
      'O produto é digital e o acesso ao material ocorre após a compra.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1); // Open first by default for immediate engagement

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-16 lg:py-24 border-t border-[#1C2133] bg-[#0B0D14]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-xs font-bold tracking-widest text-[#FFC400] uppercase">
            ESCLARECIMENTOS
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            DÚVIDAS FREQUENTES
          </h2>
          <p className="mt-4 text-base text-[#B8B8C2] leading-relaxed">
            Respostas diretas e transparentes sobre o guia, requisitos e o formato de entrega.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3.5">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#FFC400]/40 bg-[#141A2B]'
                    : 'border-[#202538] bg-[#111522]/80 hover:border-[#2F3750]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full py-4.5 px-6 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#FFC400]/20 border-[#FFC400]/40 text-[#FFC400]'
                        : 'bg-[#090A0F] border-[#262D42] text-[#B8B8C2]'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-[#B8B8C2] leading-relaxed border-t border-[#1C2133]/60">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
