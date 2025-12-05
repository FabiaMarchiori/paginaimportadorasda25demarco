import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-sm font-medium">+5.000 empreendedores já usam</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-8">
            Lista Completa de Fornecedores da{" "}
            <span className="relative inline-block">
              25 de Março
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8C75 2 225 2 298 8" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            Acesse <strong>mais de 260 fornecedores verificados</strong> com endereços, 
            WhatsApp e produtos exclusivos de atacado. Comece a lucrar hoje mesmo!
          </p>

          {/* Benefits list */}
          <ul className="flex flex-wrap justify-center gap-6 mb-12" aria-label="Benefícios principais">
            {[
              "260+ fornecedores verificados",
              "Contatos atualizados",
              "Suporte via WhatsApp",
            ].map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center" aria-hidden="true">
                  <Check className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="xl" 
            onClick={scrollToPricing}
            className="group text-lg px-12"
            aria-label="Ver planos e preços"
          >
            Quero Acesso Agora
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Button>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full bg-primary-foreground/30 border-2 border-primary-foreground flex items-center justify-center text-xs font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-primary-foreground/80">4.9/5 de mais de 2.300 avaliações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
