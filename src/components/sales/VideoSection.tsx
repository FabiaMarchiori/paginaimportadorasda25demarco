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
        {/* Centered container with glow */}
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-white mb-4 drop-shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
            Veja Como Funciona na Prática
          </h2>

          {/* Subtitle */}
          <p className="text-center text-white/80 text-base md:text-lg max-w-2xl mx-auto mt-2 mb-8">
            Assista ao vídeo rápido e entenda como o aplicativo facilita suas compras, 
            te ajuda a encontrar fornecedores confiáveis e organiza tudo para você.
          </p>

          {/* Video Player Container */}
          <div className="relative group">
            {/* Glow effect behind video */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            
            {/* Video wrapper */}
            <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl p-1 border border-primary/30 shadow-[0_0_40px_hsl(var(--primary)/0.2)] group-hover:shadow-[0_0_60px_hsl(var(--primary)/0.3)] transition-shadow duration-500">
              <div className="aspect-video rounded-xl overflow-hidden">
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

          {/* CTA Section below video */}
          <div className="mt-10 text-center">
            <p className="text-white/70 text-sm md:text-base mb-4">
              Pronto para começar? Acesse agora e veja tudo por dentro.
            </p>
            <Button
              onClick={scrollToPricing}
              size="lg"
              className="bg-gradient-to-r from-orange to-orange/80 hover:from-orange/90 hover:to-orange/70 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-[0_0_30px_hsl(var(--orange)/0.4)] hover:shadow-[0_0_40px_hsl(var(--orange)/0.6)] transition-all duration-300 hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              Quero Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
