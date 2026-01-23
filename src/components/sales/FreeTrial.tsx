import { Button } from "@/components/ui/button";
import { Check, Gift, CreditCard, Clock, ArrowRight } from "lucide-react";

const benefits = [
  "Fornecedores reais e organizados por categoria",
  "Acesso à Soph, mentoria inteligente para quem quer empreender",
  "Ferramentas para criar CNPJ, marca, logo e site",
  "Sistema de Precificação para não vender no prejuízo",
];

const FreeTrial = () => {
  const handleStartTrial = () => {
    window.open("https://pay.kiwify.com.br/1N94Se2", "_blank");
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(220,35%,10%)] to-background" />
      
      {/* Decorative orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Title H2 */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Teste o App de Importadoras +{" "}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
              Soph por 3 dias
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
            Acesso completo às importadoras reais da 25 de Março + ferramentas 
            para estruturar seu negócio do jeito certo.
          </p>

          {/* Benefits list */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neon-cyan/20 border border-neon-cyan/50 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-neon-cyan" />
                </div>
                <span className="text-foreground/90">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Transparency block - glass card */}
          <div className="glass-card rounded-2xl p-6 md:p-8 mb-10 neon-border-cyan max-w-xl mx-auto">
            <div className="space-y-4">
              {/* Free trial */}
              <div className="flex items-center justify-center gap-3 text-lg md:text-xl font-bold text-white">
                <Gift className="w-6 h-6 text-neon-cyan" />
                <span>Teste gratuito por 3 dias</span>
              </div>
              
              {/* Price after period */}
              <div className="flex items-center justify-center gap-3 text-lg md:text-xl font-semibold text-foreground/90">
                <Clock className="w-5 h-5 text-orange" />
                <span>Após o período: <span className="text-orange font-bold">R$ 47/mês</span></span>
              </div>
              
              {/* Divider */}
              <div className="border-t border-neon-cyan/20 pt-4">
                <div className="flex items-center justify-center gap-2 text-sm text-foreground/70">
                  <CreditCard className="w-4 h-4" />
                  <span>Cartão obrigatório</span>
                  <span className="text-neon-cyan">•</span>
                  <span>Cancele quando quiser</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="xl"
            onClick={handleStartTrial}
            className="group text-lg px-10 font-bold bg-orange text-white hover:bg-orange/90 shadow-[0_0_30px_hsl(var(--orange)/0.4)] hover:shadow-[0_0_40px_hsl(var(--orange)/0.6)] transition-all duration-300 hover:scale-105"
          >
            Começar teste de 3 dias agora
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Subtext below button */}
          <p className="mt-4 text-sm text-foreground/60">
            Acesso imediato • Sem fidelidade
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
