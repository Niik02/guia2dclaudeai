/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
import { WhatYouLearn } from './components/WhatYouLearn';
import { WhatYouReceive } from './components/WhatYouReceive';
import { TargetAudience } from './components/TargetAudience';
import { ToolsEcosystem } from './components/ToolsEcosystem';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { CheckoutNoticeModal } from './components/CheckoutNoticeModal';
import { CHECKOUT_URL } from './config';

export default function App() {
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  // Centralized checkout handler for all buy buttons
  const handleCheckout = useCallback(() => {
    if (CHECKOUT_URL && CHECKOUT_URL.trim() !== '') {
      // Securely opens the checkout destination in a new tab
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    } else {
      // Displays the required discreet notification when link is not yet configured
      setIsNoticeOpen(true);
    }
  }, []);

  // Hero button specifically directs to the purchase/offer section of the page
  const handleHeroCta = useCallback(() => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleCheckout();
    }
  }, [handleCheckout]);

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#FFFFFF] font-sans antialiased selection:bg-[#FFC400] selection:text-[#090A0F]">
      {/* Top Navigation */}
      <Navbar onCtaClick={handleCheckout} />

      {/* Main Content Sections */}
      <main>
        {/* Seção 1: Hero (Primeira Dobra) */}
        <Hero onCtaClick={handleHeroCta} />

        {/* Seção 2: Apresentação do Problema */}
        <ProblemSection />

        {/* Seção 3: Como Funciona (Do Zero ao Vídeo Finalizado) */}
        <HowItWorks />

        {/* Seção 4: O Que Você Vai Aprender */}
        <WhatYouLearn />

        {/* Seção 5: O Que Você Recebe */}
        <WhatYouReceive onCtaClick={handleCheckout} />

        {/* Seção 6: Para Quem É Este Guia? */}
        <TargetAudience />

        {/* Seção 7: Apresentação das Ferramentas */}
        <ToolsEcosystem />

        {/* Seção 8: Oferta e Conversão */}
        <OfferSection onCtaClick={handleCheckout} />

        {/* Seção 9: Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* Seção 10: CTA Final */}
        <FinalCta onCtaClick={handleCheckout} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Mobile Bottom CTA Bar */}
      <MobileStickyBar onCtaClick={handleCheckout} />

      {/* Checkout Unavailable Modal */}
      <CheckoutNoticeModal
        isOpen={isNoticeOpen}
        onClose={() => setIsNoticeOpen(false)}
      />
    </div>
  );
}
