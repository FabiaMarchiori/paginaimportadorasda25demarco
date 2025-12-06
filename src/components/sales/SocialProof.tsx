import { Star, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Revendedora de Acessórios",
    content: "Em 2 meses usando o app, consegui triplicar meu lucro! Os fornecedores são reais e os preços são incríveis.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Ana Paula Costa",
    role: "Lojista de Moda",
    content: "Melhor investimento que fiz pro meu negócio. Não preciso mais ir presencialmente pra achar fornecedores novos.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Carla Mendes",
    role: "Empreendedora Digital",
    content: "Comecei do zero e hoje faturo mais de R$15 mil por mês só com os contatos do app. Vale cada centavo!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Juliana Ferreira",
    role: "Vendedora Online",
    content: "O grupo VIP do WhatsApp é ouro! As dicas que recebi lá me fizeram economizar milhares em compras erradas.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Fernanda Lima",
    role: "Dropshipper",
    content: "O suporte é sensacional! Me ajudaram a encontrar exatamente o fornecedor que eu precisava em menos de 24h.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Patrícia Oliveira",
    role: "Comerciante",
    content: "Já conhecia alguns fornecedores, mas o app me apresentou outros que nem sabia que existiam. Incrível!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face",
  },
];

const SocialProof = () => {
  return (
    <section id="social-proof" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full neon-border-cyan mb-6">
            <Sparkles className="w-4 h-4 text-neon-cyan animate-pulse-neon" />
            <span className="text-neon-cyan font-semibold text-sm uppercase tracking-wider">Depoimentos Reais</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Quem usa,{" "}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
              recomenda
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Milhares de empreendedoras já transformaram seus negócios com o Importadoras da 25.
          </p>
        </div>

        {/* Testimonials grid with futuristic cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative glass-card rounded-2xl p-6 lg:p-8 neon-border hover-glow transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon with glow */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="w-12 h-12 text-neon-cyan" />
              </div>

              {/* Rating with neon stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-neon-orange text-neon-orange" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author with glowing avatar */}
              <div className="flex items-center gap-4 pt-4 border-t border-neon-cyan/20">
                <div className="relative">
                  <img 
                    src={testimonial.avatar} 
                    alt={`Foto de ${testimonial.name}, ${testimonial.role}`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-neon-cyan/50"
                    loading="lazy"
                    width={48}
                    height={48}
                  />
                  <div className="absolute inset-0 rounded-full bg-neon-cyan/20 blur-md -z-10" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-neon-cyan transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
