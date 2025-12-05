import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Zap, Crown } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";

const plans = [
  {
    name: "Mensal",
    price: "27",
    period: "/mês",
    description: "Acesso imediato ao aplicativo",
    icon: Zap,
    features: [
      "Acesso imediato ao aplicativo",
      "Área de Membro estilo Netflix",
      "+200 fornecedores verificados",
      "Acesso aos 15 nichos exclusivos",
      "Novos fornecedores semanais",
      "R$ 408 em bônus inclusos",
      "Garantia de 7 dias",
      "Suporte via WhatsApp",
    ],
    cta: "Quero Acesso Agora",
    popular: false,
    savings: null,
    planKey: "mensal" as const,
  },
  {
    name: "Anual",
    price: "147",
    priceMonthly: "12,25",
    period: "/ano",
    description: "Economia máxima garantida",
    icon: Crown,
    features: [
      "Economize R$ 177 no ano",
      "Todos os benefícios do plano mensal",
      "Acesso garantido por 12 meses",
      "Bônus mensal liberado",
      "Atualizações semanais",
      "Garantia de 7 dias",
      "Suporte via WhatsApp",
    ],
    cta: "Quero Economizar Agora",
    popular: true,
    savings: "Mais Vendido",
    planKey: "anual" as const,
    priceEquivalent: "R$ 12,25/mês",
  },
];

const Pricing = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    key: "mensal" | "anual";
    price: string;
  } | null>(null);

  const handlePlanSelect = (planKey: "mensal" | "anual", price: string) => {
    setSelectedPlan({ key: planKey, price });
    setFormOpen(true);
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
            Escolha o Plano{" "}
            <span className="text-gradient">Ideal para Você</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comece a lucrar hoje mesmo com acesso aos melhores fornecedores.
          </p>

          {/* Urgency banner */}
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full mt-6 font-semibold">
            <Zap className="w-5 h-5" />
            <span>🔥 Oferta por tempo limitado</span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

              {/* Savings badge */}
              {plan.savings && (
                <div className="absolute -top-4 right-4 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold">
                  {plan.savings}
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
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-foreground">R$</span>
                  <span className="text-5xl font-extrabold text-gradient">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                {plan.popular && (
                  <p className="text-sm text-accent font-semibold mt-2">
                    Equivale a R$ 12,25/mês
                  </p>
                )}
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
                variant="hero"
                size="lg"
                className="w-full"
                onClick={() => handlePlanSelect(plan.planKey, plan.price)}
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
            Se em 7 dias você não estiver satisfeita, devolvemos 100% do seu dinheiro.
            Sem perguntas, sem burocracia.
          </p>
        </div>
      </div>

      {/* Lead Capture Form */}
      {selectedPlan && (
        <LeadCaptureForm
          open={formOpen}
          onOpenChange={setFormOpen}
          planSelected={selectedPlan.key}
          planPrice={`R$${selectedPlan.price}`}
        />
      )}
    </section>
  );
};

export default Pricing;
