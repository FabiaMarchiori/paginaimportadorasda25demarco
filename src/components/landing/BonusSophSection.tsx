import { Check, DollarSign, Gift, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const learningItems = [
  "Criar seu MEI passo a passo, sem contador",
  "Registrar sua marca com orientação prática",
  "Criar sua logo profissional usando ferramentas gratuitas",
  "Criar seu site do zero, sem programador",
];

const BonusSophSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background simplificado */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(220,35%,10%)] to-background" />
      
      {/* Orbs decorativos sutis */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 max-w-3xl mx-auto">
        
        {/* Badge - Bônus Exclusivo */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider glass-card neon-border">
            <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-white">Bônus Exclusivo</span>
          </span>
        </div>

        {/* 1. Título focado em transformação */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white text-center mb-4 leading-tight">
          A <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">SOPH</span> ensina você a estruturar seu negócio do zero, sem depender de terceiros.
        </h2>

        {/* 2. Subtítulo com promessa clara */}
        <p className="text-lg text-foreground/80 text-center mb-10 max-w-2xl mx-auto">
          Aprenda passo a passo a abrir, organizar e profissionalizar seu negócio usando ferramentas gratuitas e acessíveis.
        </p>

        {/* 3. Bloco: O que a SOPH ENSINA */}
        <div className="glass-card rounded-2xl p-6 md:p-8 mb-6 neon-border">
          <p className="text-white font-semibold mb-4 text-lg">
            Com a SOPH você aprende a:
          </p>
          <ul className="space-y-3">
            {learningItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 border border-secondary/50 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-secondary" />
                </div>
                <span className="text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Bloco de economia (destaque visual) */}
        <div className="glass-card rounded-2xl p-6 mb-6 neon-border-cyan text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <DollarSign className="w-8 h-8 text-secondary" />
            <span className="text-2xl md:text-3xl font-extrabold text-white">
              Economia estimada em até R$ 4.000
            </span>
          </div>
          <p className="text-foreground/80">
            em serviços como contador, designer, criação de site e consultorias iniciais.
          </p>
        </div>

        {/* 5. Informação de escassez e brinde */}
        <div className="glass-card rounded-2xl p-5 mb-8 border border-orange/30 bg-orange/5 text-center">
          <div className="flex items-center justify-center gap-3">
            <Gift className="w-6 h-6 text-orange" />
            <span className="text-lg font-bold text-white">
              Acesso à SOPH liberado por 6 meses como brinde exclusivo.
            </span>
          </div>
        </div>

        {/* 6. Frase de fechamento (promessa emocional) */}
        <p className="text-center text-lg text-secondary font-semibold mb-8 italic">
          "Enquanto você aprende e vende, a SOPH cuida da estrutura do seu negócio."
        </p>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="xl" 
            className="bg-orange hover:bg-orange/90 text-white font-bold hover-glow-orange hover:brightness-110 transition-all"
            onClick={scrollToPricing}
          >
            Quero a SOPH Agora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BonusSophSection;
