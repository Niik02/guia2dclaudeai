import React from 'react';
import {
  Terminal,
  Volume2,
  Users,
  Image as ImageIcon,
  Sparkles,
  Video,
  Layers,
  Subtitles,
  Music,
  Cpu,
  FileVideo,
  CheckCircle2,
} from 'lucide-react';

interface LearnItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

const LEARN_ITEMS: LearnItem[] = [
  {
    title: 'Configuração do Claude Desktop',
    description: 'Instalação e ajuste do ambiente ideal para o Claude orquestrar comandos, roteiros e geração.',
    icon: Terminal,
  },
  {
    title: 'Integração com ElevenLabs',
    description: 'Conexão para geração de vozes expressivas, ajustes de estabilidade e narrações alinhadas ao roteiro.',
    icon: Volume2,
  },
  {
    title: 'Geração de Personagens com IA',
    description: 'Métodos para conceber personagens 2D carismáticos com proporções e traços prontos para animação.',
    icon: Users,
  },
  {
    title: 'Criação de Cenários e Elementos Visuais',
    description: 'Geração de planos de fundo, objetos de cena e composições com harmonia cromática e profundidade.',
    icon: ImageIcon,
  },
  {
    title: 'Consistência Visual entre Personagens e Cenas',
    description: 'Técnicas essenciais para manter o mesmo personagem com identidade idêntica ao longo de todo o vídeo.',
    icon: Sparkles,
  },
  {
    title: 'Animações 2D com Movimentos de Câmera',
    description: 'Zooms dinâmicos, pans, shakes e transições de enquadramento que dão ritmo cinematográfico ao vídeo.',
    icon: Video,
  },
  {
    title: 'Efeitos Visuais e Transições',
    description: 'Criação de cortes suaves, sobreposições de partículas, impactos e efeitos de motion design.',
    icon: Layers,
  },
  {
    title: 'Geração Automática de Legendas Sincronizadas',
    description: 'Automação para gerar legendas dinâmicas perfeitamente alinhadas palavra por palavra com o áudio.',
    icon: Subtitles,
  },
  {
    title: 'Músicas e Efeitos Sonoros',
    description: 'Inserção automática de trilhas de fundo, transições de áudio e sonoplastia nos momentos de ênfase.',
    icon: Music,
  },
  {
    title: 'Montagem e Renderização Automatizada',
    description: 'Compilação de código, imagens e áudios em uma linha de montagem com Remotion.',
    icon: Cpu,
  },
  {
    title: 'Exportação em MP4',
    description: 'Exportação com bitrate e resolução otimizados para YouTube, TikTok, Reels e Shorts.',
    icon: FileVideo,
  },
];

export const WhatYouLearn: React.FC = () => {
  return (
    <section id="o-que-aprende" className="relative py-16 lg:py-24 border-t border-[#1C2133] bg-[#0B0D14]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] bg-[radial-gradient(ellipse_at_center,rgba(255,196,0,0.05)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-[#FFC400] uppercase">
            GRADE PRÁTICA DO MATERIAL
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            TUDO O QUE VOCÊ PRECISA PARA CONSTRUIR SEU ESTÚDIO 2D.
          </h2>
          <p className="mt-4 text-base text-[#B8B8C2] leading-relaxed">
            Cada tópico foi estruturado com foco em aplicação real, sem enrolação teórica. Você aprende exatamente o que precisa para colocar a esteira para rodar.
          </p>
        </div>

        {/* 11 Items Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LEARN_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-[#202538] bg-[#111522]/80 p-6 transition-all duration-300 hover:border-[#FFC400]/50 hover:bg-[#141A29] hover:shadow-lg hover:shadow-[#FFC400]/5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#090A0F] border border-[#262D42] text-[#FFC400] group-hover:border-[#FFC400]/40 group-hover:scale-105 transition-all">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#FFC400]/80">
                      MÓDULO {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-white tracking-tight mt-0.5 group-hover:text-[#FFC400] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#B8B8C2] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
