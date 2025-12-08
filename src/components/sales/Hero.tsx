import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star, MessageCircle, Sparkles, Zap } from "lucide-react";
import mockupImage from "@/assets/mockup-hero.png";

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTestimonials = () => {
    document.getElementById("social-proof")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Futuristic Background with Neon Gradients */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-futuristic opacity-80" />
        
        {/* Animated neon orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl animate-pulse-neon" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--neon-cyan)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon-cyan)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-cyan/60 rounded-full animate-shimmer"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 neon-border-cyan">
              <Sparkles className="w-4 h-4 text-neon-cyan animate-pulse-neon" />
              <span className="text-sm font-medium text-foreground">+5.000 empreendedores já usam</span>
            </div>

            {/* Main Heading with Neon Effect */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-foreground">Importadoras da </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
                  25 de Março
                </span>
                <div className="absolute -inset-2 bg-neon-cyan/20 blur-xl rounded-lg -z-10" />
              </span>
              <span className="text-foreground"> no seu </span>
              <span className="relative inline-block text-neon-orange">
                Bolso
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 150 12" fill="none">
                  <path d="M2 8C40 2 110 2 148 8" stroke="hsl(var(--neon-orange))" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Acesso direto às melhores Importadoras de atacado, preços exclusivos e oportunidades que você não encontra em nenhum outro lugar.
            </p>

            {/* Benefits list with neon styling */}
            <ul className="flex flex-col gap-3 mb-8" aria-label="Benefícios principais">
              {[
                "Mais de 260 Importadoras verificadas",
                "Contatos atualizados semanalmente",
                "Suporte via WhatsApp Exclusivo",
              ].map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 justify-center lg:justify-start animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neon-cyan/20 border border-neon-cyan/50 flex items-center justify-center glow-secondary" aria-hidden="true">
                    <Check className="w-4 h-4 text-neon-cyan" />
                  </div>
                  <span className="text-base md:text-lg text-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="xl" 
                onClick={() => window.open("https://pay.kiwify.com.br/348GxuG", "_blank")}
                className="group text-base md:text-lg px-8 bg-neon-orange hover:bg-neon-orange/90 text-background font-bold hover-glow-orange transition-all duration-300"
                aria-label="Ver planos e preços"
              >
                <Zap className="w-5 h-5 mr-2" aria-hidden="true" />
                Quero Acesso Agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>

              <Button 
                variant="outline" 
                size="xl" 
                onClick={scrollToTestimonials}
                className="text-base md:text-lg px-8 border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan hover-glow transition-all duration-300"
                aria-label="Ver depoimentos"
              >
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                Ver Depoimentos
              </Button>
            </div>

            {/* Trust badges with glass effect */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-10 pt-8 border-t border-neon-cyan/20">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-9 h-9 rounded-full bg-neon-blue/30 border-2 border-neon-cyan/50 flex items-center justify-center text-xs font-bold text-foreground backdrop-blur-sm"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-neon-orange text-neon-orange" />
                  ))}
                </div>
                <p className="text-sm text-foreground/70">4.9/5 de mais de 2.300 avaliações</p>
              </div>
            </div>
          </div>

          {/* Right Column - Futuristic Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Phone frame with neon glow */}
              <div 
                className="relative bg-gray-900 rounded-[3rem] p-3 transform rotate-3 hover:rotate-0 transition-all duration-500 neon-border"
                style={{
                  boxShadow: '0 0 60px hsl(var(--neon-cyan) / 0.3), 0 0 100px hsl(var(--neon-blue) / 0.2), 0 50px 100px -20px rgba(0, 0, 0, 0.5)'
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

                {/* Phone buttons */}
                <div className="absolute -right-1.5 top-32 w-1.5 h-12 bg-gray-700 rounded-r-lg" />
                <div className="absolute -left-1.5 top-24 w-1.5 h-8 bg-gray-700 rounded-l-lg" />
                <div className="absolute -left-1.5 top-36 w-1.5 h-16 bg-gray-700 rounded-l-lg" />
              </div>

              {/* Floating badges with glass effect */}
              <div className="absolute -top-4 -left-4 glass-card rounded-2xl px-4 py-3 neon-border-cyan animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center glow-secondary">
                    <Check className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">Importadoras</p>
                    <p className="text-lg font-bold text-neon-cyan">260+</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-3 neon-border animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon-orange/20 flex items-center justify-center glow-orange">
                    <Star className="w-5 h-5 text-neon-orange fill-neon-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">Avaliação</p>
                    <p className="text-lg font-bold text-neon-orange">4.9/5</p>
                  </div>
                </div>
              </div>

              {/* AI Badge */}
              <div className="absolute top-1/2 -left-8 glass-card rounded-2xl px-3 py-2 neon-border animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-neon-purple animate-pulse-neon" />
                  <span className="text-sm font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                    IA SOPH
                  </span>
                </div>
              </div>

              {/* Multiple glow effects behind phone */}
              <div className="absolute inset-0 bg-neon-cyan/20 rounded-full blur-3xl -z-10 scale-90 animate-glow-pulse" />
              <div className="absolute inset-0 bg-neon-purple/15 rounded-full blur-3xl -z-10 scale-75 animate-pulse-neon" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
