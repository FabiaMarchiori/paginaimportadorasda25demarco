import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Smartphone, Star } from "lucide-react";

const HeroSection = () => {
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-primary-foreground animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="text-sm font-medium">+5.000 empreendedores já usam</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Fornecedores da{" "}
              <span className="relative inline-block">
                25 de Março
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              no seu bolso
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Acesso direto aos <strong>melhores fornecedores</strong> de atacado, 
              preços exclusivos e oportunidades que você não encontra em lugar nenhum.
            </p>

            {/* Benefits list */}
            <ul className="space-y-3 mb-10">
              {[
                "Mais de 500 fornecedores verificados",
                "Contatos atualizados semanalmente",
                "Suporte via WhatsApp exclusivo",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="accent" 
                size="xl" 
                onClick={scrollToPricing}
                className="group"
              >
                Quero Acesso Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Ver Depoimentos
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-primary-foreground/20">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-primary-foreground/30 border-2 border-primary-foreground flex items-center justify-center text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-primary-foreground/80">4.9/5 de mais de 2.300 avaliações</p>
              </div>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-72 h-[580px] bg-foreground rounded-[3rem] p-3 shadow-2xl animate-float">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground rounded-b-2xl z-10" />
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  {/* App screen content */}
                  <div className="p-4 space-y-4">
                    <div className="text-center pt-6 pb-4">
                      <div className="w-16 h-16 gradient-hero rounded-2xl mx-auto mb-3 flex items-center justify-center">
                        <Smartphone className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="font-display font-bold text-foreground">Importadoras 25</h3>
                      <p className="text-xs text-muted-foreground">Seu guia de fornecedores</p>
                    </div>
                    
                    {/* Sample suppliers */}
                    {[
                      { name: "Loja Golden Import", cat: "Eletrônicos", rating: 4.8 },
                      { name: "Casa dos Brinquedos", cat: "Brinquedos", rating: 4.9 },
                      { name: "Mega Fashion SP", cat: "Vestuário", rating: 4.7 },
                    ].map((supplier, i) => (
                      <div key={i} className="bg-muted rounded-xl p-3 flex items-center gap-3">
                        <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                          {supplier.name[0]}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-foreground">{supplier.name}</p>
                          <p className="text-xs text-muted-foreground">{supplier.cat}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-accent text-accent" />
                          <span className="text-xs font-medium text-foreground">{supplier.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-8 top-20 bg-primary-foreground rounded-xl p-3 shadow-lg animate-pulse-glow">
                <p className="text-primary font-bold text-lg">+500</p>
                <p className="text-xs text-muted-foreground">Fornecedores</p>
              </div>

              <div className="absolute -right-8 bottom-32 bg-primary-foreground rounded-xl p-3 shadow-lg">
                <p className="text-accent font-bold text-lg">Verificado</p>
                <p className="text-xs text-muted-foreground">100% confiável</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
