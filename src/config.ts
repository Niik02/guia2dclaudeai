/**
 * CONFIGURAÇÃO GLOBAL DA PÁGINA DE VENDAS
 * =======================================
 * Insira o link do seu checkout e as informações de preço aqui.
 * Todos os botões e áreas da página serão atualizados automaticamente.
 */

// 1. LINK DE CHECKOUT
// Quando você tiver o link da sua plataforma (Hotmart, Kiwify, Eduzz, Stripe, etc.),
// cole a URL completa abaixo, por exemplo: "https://pay.kiwify.com.br/exemplo"
export const CHECKOUT_URL: string = "";

// 2. CONFIGURAÇÃO DE PREÇO
// Insira o valor do produto quando estiver definido.
// Deixe vazio ou configure conforme sua estratégia comercial.
export const PRICE_CONFIG = {
  // Se definido como false, a página exibe uma área pronta para o valor com indicação elegante
  // Se definido como true, exibe os valores preenchidos abaixo.
  hasPriceSet: false,
  currencySymbol: "R$",
  currentPrice: "", // Ex: "97,00" ou "147,00"
  originalPrice: "", // Opcional para ancoragem se desejar no futuro
  installments: "", // Ex: "12x de R$ 9,74"
  badge: "Lançamento Exclusivo",
  guaranteeDays: 7,
};

// Mensagem discreta quando o checkout ainda não estiver configurado
export const CHECKOUT_UNAVAILABLE_MESSAGE =
  "O link de compra estará disponível em breve.";
