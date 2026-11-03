/**
 * CONFIGURAÇÃO GLOBAL DA PÁGINA DE VENDAS
 * =======================================
 * Insira o link do seu checkout e as informações de preço aqui.
 * Todos os botões e áreas da página serão atualizados automaticamente.
 */

// 1. LINK DE CHECKOUT
// Quando você tiver o link da sua plataforma (Hotmart, Kiwify, Eduzz, Stripe, etc.),
export const CHECKOUT_URL: string = "https://go.perfectpay.com.br/PPU38CQHFQG";

// 2. CONFIGURAÇÃO DE PREÇO
// Insira o valor do produto quando estiver definido.
// Deixe vazio ou configure conforme sua estratégia comercial.
export const PRICE_CONFIG = {
  // Se definido como true, exibe os valores preenchidos abaixo.
  hasPriceSet: true,
  currencySymbol: "R$",
  currentPrice: "9,99",
  originalPrice: "", // Opcional para ancoragem se desejar no futuro
  installments: "", // Ex: "ou 2x no cartão"
  badge: "Lançamento Exclusivo",
  guaranteeDays: 7,
};

// Mensagem discreta quando o checkout ainda não estiver configurado
export const CHECKOUT_UNAVAILABLE_MESSAGE =
  "O link de compra estará disponível em breve.";
