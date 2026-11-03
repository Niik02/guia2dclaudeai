import React from 'react';
import { Terminal, Volume2, Clapperboard, Sparkles, Info } from 'lucide-react';

interface ToolItem {
  name: string;
  role: string;
  description: string;
  icon: React.ElementType;
  badge: string;
  accentColor: string;
}

const TOOLS: ToolItem[] = [
  {
    name: 'Claude Desktop',
    role: 'Orquestração e Inteligência de Código',
    description: 'Atua como o diretor do estúdio: processa prompts, estrutura roteiros, gera código de animação e gerencia o pipeline.',
    icon: Terminal,
    badge: 'Orquestrador',
    accentColor: '#D97706',
  },
  {
    name: 'ElevenLabs',
    role: 'Síntese de Voz e Efeitos Sonoros',
    description: 'Gera vozes com entonação humana ultra-realista, múltiplos idiomas, sincronia e ambientação sonora para os diálogos.',
    icon: Volume2,
    badge: 'Narrações IA',
    accentColor: '#FFFFFF',
  },
  {
    name: 'Remotion',
    role: 'Framework de Renderização e Vídeo Programático',
    description: 'Transforma código e mídias em vídeo MP4 frame a frame, aplicando transições, camadas e animações com precisão matemática.',
    icon: Clapperboard,
    badge: 'Render Engine',
    accentColor: '#00D8FF',
  },
  {
    name: 'Geração de Imagens com IA',
    role: 'Criação de Personagens e Ambientes',
    description: 'Gera os elementos visuais 2D com estilo unificado, poses para motion e backgrounds imersivos para as cenas.',
    icon: Sparkles,
    badge: 'Assets Visuais',
    accentColor: '#FFC400',
  },
];

export const ToolsEcosystem: React.FC = () => {
  return (
    <section id="ferramentas" className="relative py-16 lg:py-24 border-t border-[#1C2133] bg-[#090A0F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-[#FFC400] uppercase">
            TECNOLOGIAS INTEGRADAS
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white text-balance">
            UM ECOSSISTEMA DE FERRAMENTAS TRABALHANDO EM CONJUNTO.
          </h2>
          <p className="mt-4 text-base text-[#B8B8C2] leading-relaxed">
            O guia ensina como estruturar a integração dessas ferramentas para criar um processo de produção de animações 2D.
          </p>
        </div>

        {/* 4 Tools Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="group relative rounded-2xl border border-[#202538] bg-[#111522]/90 p-6 flex flex-col justify-between hover:border-[#FFC400]/40 hover:bg-[#141A29] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#090A0F] border border-[#262D42] text-[#FFC400] group-hover:scale-105 transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#FFC400] bg-[#FFC400]/10 border border-[#FFC400]/25 px-2 py-0.5 rounded">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {tool.name}
                  </h3>
                  <p className="text-xs font-medium text-[#FFC400]/90 mt-1">
                    {tool.role}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-[#B8B8C2] leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C2133] text-[11px] text-[#B8B8C2]/70 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFC400]" />
                  <span>Pipeline integrado no guia</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparency callout about tools costs */}
        <div className="mt-10 rounded-xl border border-[#23293D] bg-[#111522]/60 p-4 sm:p-5 flex items-start gap-3.5 max-w-3xl mx-auto">
          <Info className="h-5 w-5 text-[#FFC400] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#B8B8C2] leading-relaxed">
            <strong className="text-white">Transparência importante:</strong> Algumas funcionalidades e modelos avançados dependem de créditos de API ou planos específicos das respectivas plataformas (como ElevenLabs ou serviços de imagem). Esses custos de serviços de terceiros são contratados diretamente com cada ferramenta e não estão inclusos no guia.
          </p>
        </div>
      </div>
    </section>
  );
};
