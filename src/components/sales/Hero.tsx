import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star, MessageCircle } from "lucide-react";
import mockupImage from "@/assets/mockup-hero.png";

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTestimonials = () => {
    document.getElementById("social-proof")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left text-primary-foreground">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="text-sm font-medium">+5.000 empreendedores já usam</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
              Importadoras da 25 de Março{" "}
              <span className="relative inline-block">
                no seu Bolso
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8C75 2 225 2 298 8" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Acesso direto às melhores Importadoras de atacado, preços exclusivos e oportunidades que você não encontra em nenhum outro lugar.
            </p>

            {/* Benefits list */}
            <ul className="flex flex-col gap-3 mb-8" aria-label="Benefícios principais">
              {[
                "Mais de 260 Importadoras verificadas",
                "Contatos atualizados semanalmente",
                "Suporte via WhatsApp Exclusivo",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center" aria-hidden="true">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-base md:text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={scrollToPricing}
                className="group text-base md:text-lg px-8"
                aria-label="Ver planos e preços"
              >
                Quero Acesso Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>

              <Button 
                variant="outline" 
                size="xl" 
                onClick={scrollToTestimonials}
                className="text-base md:text-lg px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                aria-label="Ver depoimentos"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Ver Depoimentos
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-10 pt-8 border-t border-primary-foreground/20">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-9 h-9 rounded-full bg-primary-foreground/30 border-2 border-primary-foreground flex items-center justify-center text-xs font-bold"
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

          {/* Right Column - Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div 
                className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                style={{
                  boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.4), 0 30px 60px -30px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
                
                {/* Screen */}
                <div className="relative bg-white rounded-[2.5rem] overflow-hidden" style={{ width: '280px', height: '580px' }}>
                  <img 
                    src={mockupImage} 
                    alt="App Importadoras da 25 de Março - Tela de categorias" 
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>

                {/* Phone button */}
                <div className="absolute -right-1.5 top-32 w-1.5 h-12 bg-gray-700 rounded-r-lg" />
                <div className="absolute -left-1.5 top-24 w-1.5 h-8 bg-gray-700 rounded-l-lg" />
                <div className="absolute -left-1.5 top-36 w-1.5 h-16 bg-gray-700 rounded-l-lg" />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl px-4 py-2 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Fornecedores</p>
                    <p className="text-sm font-bold text-foreground">260+</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-2 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Star className="w-4 h-4 text-green-600 fill-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Avaliação</p>
                    <p className="text-sm font-bold text-foreground">4.9/5</p>
                  </div>
                </div>
              </div>

              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-accent/30 rounded-full blur-3xl -z-10 scale-75" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
