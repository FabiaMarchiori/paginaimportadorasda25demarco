import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, MessageCircle, Zap } from "lucide-react";

const CTA = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Tenho interesse no App Importadoras da 25 de Março."
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Futuristic gradient background */}
      <div className="absolute inset-0 bg-gradient-futuristic" />
      
      {/* Animated neon orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-neon" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--neon-cyan)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon-cyan)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center text-foreground">
          {/* Urgency badge with neon glow */}
          <div className="inline-flex items-center gap-2 bg-neon-orange/20 border border-neon-orange/50 text-neon-orange px-6 py-3 rounded-full mb-8 animate-pulse-neon glow-orange">
            <Clock className="w-5 h-5" />
            <span className="font-bold">Oferta expira em breve!</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Pronto para transformar{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
                seu negócio?
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="hsl(var(--neon-orange))" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto">
            Junte-se a mais de 5.000 empreendedores que já estão lucrando com as
            melhores importadoras da 25 de Março.
          </p>

          {/* CTA Buttons with neon effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              onClick={scrollToPricing}
              className="group text-lg px-10 bg-neon-orange hover:bg-neon-orange/90 text-background font-bold hover-glow-orange transition-all duration-300"
              aria-label="Ver planos e começar agora"
            >
              <Zap className="w-5 h-5 mr-2" />
              Quero Começar Agora
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
            <Button
              size="xl"
              onClick={handleWhatsAppClick}
              className="group text-lg px-10 bg-[hsl(142,100%,45%)] hover:bg-[hsl(142,100%,40%)] text-background font-bold transition-all duration-300"
              style={{ boxShadow: '0 0 25px hsl(142 100% 45% / 0.5), 0 0 50px hsl(142 100% 45% / 0.3)' }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Trust elements with glass effect */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-10 mt-10 border-t border-neon-cyan/20">
            <div className="flex items-center gap-2 text-foreground/80">
              <Shield className="w-5 h-5 text-neon-cyan" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <span className="text-neon-cyan">🔒</span>
              <span>Pagamento Criptografado</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <span className="text-neon-cyan">✅</span>
              <span>Garantia de 7 Dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
