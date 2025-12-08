import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Sparkles } from "lucide-react";
const plans = [
  {
    name: "Plano Mensal",
    price: "47",
    period: "/mês",
    description: "Para quem deseja experimentar com flexibilidade.",
    icon: Zap,
    features: [
      "Acesso imediato ao aplicativo",
      "+260 Importadoras verificadas",
      "Acesso a todas as categorias",
      "Atualizações semanais",
      "Suporte via WhatsApp",
      "Garantia de 7 dias",
      "Cancelamento simples a qualquer momento",
    ],
    cta: "Assinar Mensal",
    popular: false,
    savings: null,
    planKey: "mensal" as const,
    footnote: "Melhor para testar, mas não inclui todos os benefícios premium da SOPH.",
  },
  {
    name: "Plano Anual — Mais Vantajoso",
    price: "97",
    priceMonthly: "8",
    period: "/ano",
    description: "Economize +80% e receba todos os benefícios completos.",
    icon: Crown,
    features: [
      "Acesso completo à Lista de Importadoras",
      "Atualizações semanais ilimitadas",
      "Suporte via WhatsApp (prioritário)",
      "Acesso total à SOPH — sua mentora de IA 24h",
      "Novas ferramentas e módulos liberados automaticamente",
      "Acesso imediato a conteúdos exclusivos",
      "Economia garantida: menos de R$ 9 por mês",
      "Recebe todos os novos módulos de negócio sem pagar nada a mais",
    ],
    cta: "Garantir Plano Anual (Recomendado)",
    popular: true,
    savings: "Mais Escolhido",
    planKey: "anual" as const,
    priceEquivalent: "Menos de R$ 9/mês",
    bonusBadge: "Melhor custo-benefício",
    closingText: "A escolha perfeita para quem quer crescer com segurança, organização e suporte inteligente.",
  },
];

const Pricing = () => {
  const handlePlanSelect = (planKey: "mensal" | "anual") => {
    if (planKey === "anual") {
      window.open("https://pay.kiwify.com.br/348GxuG", "_blank");
    } else {
      window.open("https://pay.kiwify.com.br/1N94Se2", "_blank");
    }
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full neon-border-cyan mb-6">
            <Sparkles className="w-4 h-4 text-neon-cyan animate-pulse-neon" />
            <span className="text-neon-cyan font-semibold text-sm uppercase tracking-wider">Planos e Preços</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Escolha o Plano{" "}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
              Ideal para Você
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Comece a lucrar hoje mesmo com acesso às melhores importadoras.
          </p>

          {/* Urgency banner with neon */}
          <div className="inline-flex items-center gap-2 bg-neon-orange/10 border border-neon-orange/30 text-neon-orange px-6 py-3 rounded-full mt-6 font-semibold glow-orange">
            <Zap className="w-5 h-5" />
            <span>🔥 Oferta por tempo limitado</span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-2 sm:px-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass-card rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 w-full max-w-full transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                plan.popular
                  ? "neon-border md:scale-105"
                  : "border border-neon-cyan/20 hover:border-neon-cyan/50"
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                boxShadow: plan.popular ? '0 0 30px hsl(var(--neon-cyan) / 0.15)' : undefined
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-neon-cyan to-neon-blue text-background px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold whitespace-nowrap">
                  {plan.savings}
                </div>
              )}

              {/* Bonus badge */}
              {plan.bonusBadge && (
                <div className="absolute -top-3 md:-top-4 right-2 md:right-4 bg-neon-orange text-background px-3 md:px-4 py-1 rounded-full text-[10px] md:text-xs font-bold whitespace-nowrap">
                  {plan.bonusBadge}
                </div>
              )}

              {/* Plan icon */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 ${
                  plan.popular 
                    ? "bg-gradient-to-br from-neon-cyan to-neon-blue glow-secondary" 
                    : "bg-neon-cyan/10 border border-neon-cyan/30"
                }`}
              >
                <plan.icon
                  className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${
                    plan.popular ? "text-background" : "text-neon-cyan"
                  }`}
                />
              </div>

              {/* Plan name */}
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-sm sm:text-base text-foreground/60 mb-4 md:mb-6">{plan.description}</p>

              {/* Price with gradient */}
              <div className="mb-4 md:mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-foreground">R$</span>
                  <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-foreground/60">{plan.period}</span>
                </div>
                {plan.priceEquivalent && (
                  <p className="text-xs sm:text-sm text-neon-orange font-semibold mt-2">
                    {plan.priceEquivalent}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 md:space-y-4 mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <div
                      className={`flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.popular 
                          ? "bg-neon-cyan glow-secondary" 
                          : "bg-neon-cyan/20 border border-neon-cyan/50"
                      }`}
                    >
                      <Check className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${plan.popular ? "text-background" : "text-neon-cyan"}`} />
                    </div>
                    <span className="text-sm sm:text-base text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Footnote or closing text */}
              {plan.footnote && (
                <p className="text-xs text-foreground/50 italic mb-4 md:mb-6">{plan.footnote}</p>
              )}
              {plan.closingText && (
                <p className="text-xs sm:text-sm text-neon-cyan/80 font-medium mb-4 md:mb-6">{plan.closingText}</p>
              )}

              {/* CTA */}
              <Button
                size="lg"
                className={`w-full text-sm sm:text-base font-bold transition-all duration-300 ${
                  plan.popular
                    ? "bg-neon-orange hover:bg-neon-orange/90 text-background hover-glow-orange"
                    : "bg-neon-cyan/20 hover:bg-neon-cyan/30 text-neon-cyan border border-neon-cyan/50 hover-glow"
                }`}
                onClick={() => handlePlanSelect(plan.planKey)}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Guarantee with glass effect */}
        <div className="text-center mt-12 md:mt-16 max-w-2xl mx-auto glass-card rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 neon-border-cyan mx-2 sm:mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 mb-6 glow-secondary">
            <div className="text-4xl">🛡️</div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Garantia de 7 Dias
          </h3>
          <p className="text-foreground/70">
            Se em 7 dias você não estiver satisfeita, devolvemos 100% do seu dinheiro.
            Sem perguntas, sem burocracia.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Pricing;
