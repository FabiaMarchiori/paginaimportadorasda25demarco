import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const scrollToPricing = () => {
  const pricingSection = document.getElementById("pricing");
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: "smooth" });
  }
};

const VideoSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with subtle neon glow on edges */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 drop-shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
              Veja Como Funciona na Prática
            </h2>

            {/* Subtitle */}
            <p className="text-white/80 text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-8">
              Assista ao vídeo rápido e entenda como o aplicativo facilita suas compras, 
              te ajuda a encontrar fornecedores confiáveis e organiza tudo para você.
            </p>

            {/* CTA Button */}
            <Button
              onClick={scrollToPricing}
              size="lg"
              className="bg-gradient-to-r from-orange to-orange/80 hover:from-orange/90 hover:to-orange/70 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-[0_0_30px_hsl(var(--orange)/0.4)] hover:shadow-[0_0_40px_hsl(var(--orange)/0.6)] transition-all duration-300 hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              Quero Começar Agora
            </Button>
          </div>

          {/* Right Column - Tablet Mockup with Video */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Glow effect behind tablet */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 rounded-[3rem] blur-xl opacity-50" />
              
              {/* Tablet Frame */}
              <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                {/* Front camera */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full" />
                
                {/* Screen with video */}
                <div 
                  className="relative rounded-[2rem] overflow-hidden bg-black"
                  style={{ width: '280px', aspectRatio: '9/16' }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/spTs-UeOA9U?rel=0&modestbranding=1"
                    title="Demonstração do App Importadoras 25 de Março"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
