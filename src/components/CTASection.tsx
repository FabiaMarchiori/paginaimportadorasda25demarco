import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Shield, Clock } from "lucide-react";

const CTASection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    window.open("https://abrir.link/hHPUP", "_blank");
  };

  return (
    <section className="py-20 lg:py-28 gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-6 py-3 rounded-full mb-8 animate-pulse-glow">
            <Clock className="w-5 h-5" />
            <span className="font-bold">Oferta expira em breve!</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Pronto para transformar{" "}
            <span className="relative inline-block">
              seu negócio?
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="hsl(var(--orange))" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Junte-se a mais de 5.000 empreendedores que já estão lucrando com os
            melhores fornecedores da 25 de Março.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToPricing}
              className="group"
            >
              Quero Começar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="whatsapp"
              size="xl"
              onClick={handleWhatsAppClick}
              className="group"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Trust elements */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-primary-foreground/20">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>Pagamento Criptografado</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>Garantia de 7 Dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
