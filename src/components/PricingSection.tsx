import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "47",
    originalPrice: "97",
    period: "pagamento único",
    description: "Ideal para quem está começando",
    icon: Zap,
    features: [
      "Acesso a 100+ fornecedores",
      "Contatos de WhatsApp",
      "Endereços completos",
      "Atualizações por 6 meses",
    ],
    cta: "Começar Agora",
    popular: false,
  },
  {
    name: "Premium",
    price: "97",
    originalPrice: "197",
    period: "pagamento único",
    description: "O mais escolhido pelos empreendedores",
    icon: Crown,
    features: [
      "Acesso a 500+ fornecedores",
      "Contatos de WhatsApp",
      "Endereços com mapa integrado",
      "Atualizações vitalícias",
      "Grupo VIP no WhatsApp",
      "Suporte prioritário",
      "Novos fornecedores em primeira mão",
    ],
    cta: "Quero o Premium",
    popular: true,
  },
  {
    name: "Business",
    price: "197",
    originalPrice: "397",
    period: "pagamento único",
    description: "Para quem quer escalar o negócio",
    icon: MessageCircle,
    features: [
      "Tudo do Premium +",
      "Consultoria individual",
      "Lista de fornecedores exclusivos",
      "Acesso a lançamentos antecipados",
      "Mentoria em grupo mensal",
      "Networking com top sellers",
    ],
    cta: "Quero Escalar",
    popular: false,
  },
];

const PricingSection = () => {
  const handleWhatsAppClick = (plan: string) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no plano ${plan} do Importadoras da 25 de Março.`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Planos e Preços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Escolha o plano ideal para{" "}
            <span className="text-gradient">seu negócio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Investimento único, acesso vitalício. Sem mensalidades, sem surpresas.
          </p>

          {/* Urgency banner */}
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full mt-6 font-semibold">
            <Zap className="w-5 h-5" />
            <span>🔥 Oferta por tempo limitado - Desconto de até 50%</span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-3xl p-8 shadow-card border-2 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-primary shadow-glow scale-105"
                  : "border-border/50 hover:border-primary/30"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-hero text-primary-foreground px-6 py-2 rounded-full text-sm font-bold">
                  Mais Popular
                </div>
              )}

              {/* Plan icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.popular ? "gradient-hero" : "bg-muted"
                }`}
              >
                <plan.icon
                  className={`w-8 h-8 ${
                    plan.popular ? "text-primary-foreground" : "text-primary"
                  }`}
                />
              </div>

              {/* Plan name */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-muted-foreground line-through text-lg">
                    R${plan.originalPrice}
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-foreground">R$</span>
                  <span className="text-5xl font-extrabold text-gradient">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {plan.period}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular ? "bg-primary" : "bg-accent"
                      }`}
                    >
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
                onClick={() => handleWhatsAppClick(plan.name)}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
            <div className="text-4xl">🛡️</div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Garantia de 7 Dias
          </h3>
          <p className="text-muted-foreground">
            Se em 7 dias você não estiver satisfeito, devolvemos 100% do seu dinheiro.
            Sem perguntas, sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
