import React from 'react';
import { AlertCircle, X, Check, ExternalLink } from 'lucide-react';
import { CHECKOUT_UNAVAILABLE_MESSAGE } from '../config';

interface CheckoutNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutNoticeModal: React.FC<CheckoutNoticeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md rounded-2xl border border-[#FFC400]/40 bg-[#111522] p-6 shadow-2xl shadow-black text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Fechar"
          className="absolute top-4 right-4 text-[#B8B8C2] hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFC400]/10 border border-[#FFC400]/30 text-[#FFC400] mb-4">
          <AlertCircle className="h-7 w-7" />
        </div>

        {/* Title & Message */}
        <h3 className="text-xl font-extrabold text-white tracking-tight">
          Aviso de Lançamento
        </h3>

        <p className="mt-3 text-base font-semibold text-[#FFC400]">
          {CHECKOUT_UNAVAILABLE_MESSAGE}
        </p>

        <p className="mt-2 text-xs sm:text-sm text-[#B8B8C2] leading-relaxed">
          O produto digital está sendo finalizado para a abertura oficial de inscrições.
        </p>

        {/* Developer / Configuration helper tip */}
        <div className="mt-5 rounded-xl border border-[#202538] bg-[#090A0F] p-3 text-left">
          <p className="text-[11px] font-semibold text-white/90">
            Dica de configuração:
          </p>
          <p className="text-[10px] text-[#B8B8C2] mt-0.5">
            Para ativar o direcionamento real para a sua plataforma de checkout (Hotmart, Kiwify, Eduzz, etc.), basta preencher a constante <code className="text-[#FFC400] font-mono">CHECKOUT_URL</code> no arquivo <code className="text-[#FFC400] font-mono">src/config.ts</code>.
          </p>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-[#FFC400] px-4 py-3 text-sm font-bold text-[#090A0F] hover:bg-[#FFD033] transition-colors cursor-pointer"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};
