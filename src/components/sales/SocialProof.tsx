import { Star, Quote, Sparkles, User } from "lucide-react";

const testimonials = [
  {
    name: "Alik Nunes",
    role: "Cliente Verificada",
    content: "O material é excelente! Extremamente organizado e com a relação dos melhores fornecedores. Amei demais! O atendimento também é excelente.",
    rating: 5,
    initials: "AN",
    gradientClass: "from-neon-cyan to-neon-blue",
  },
  {
    name: "Elén Camargo",
    role: "Revendedora",
    content: "Não é golpe. Recebi a lista dos fornecedores e quando fui pessoalmente ao Brás, eles me ajudaram muito. Me deram dicas de compras e me orientaram. Indico o trabalho deles.",
    rating: 5,
    initials: "EC",
    gradientClass: "from-neon-purple to-neon-cyan",
  },
  {
    name: "Érica Oliveira",
    role: "Revendedora",
    content: "Estou enlouquecendo! Muita coisa linda e barata. Essa lista é uma mina de ouro pra quem revende!",
    rating: 5,
    initials: "EO",
    gradientClass: "from-neon-blue to-neon-purple",
  },
  {
    name: "Papelaria Office",
    role: "Lojista",
    content: "Pode confiar. Você compra a lista, arquiva ela, e quando postam algo você pergunta o nome do fornecedor, consulta sua lista e entra em contato. Já comprei com 2 fornecedores e recebi tudo direitinho.",
    rating: 5,
    initials: "PO",
    gradientClass: "from-neon-orange to-neon-cyan",
  },
  {
    name: "Andréa Lopes",
    role: "Cliente Verificada",
    content: "Já consegui minha lista. Obrigada! Dinheiro bem gasto. Demais a lista de vocês!",
    rating: 5,
    initials: "AL",
    gradientClass: "from-neon-cyan to-neon-purple",
  },
  {
    name: "Joseane",
    role: "Paraná",
    content: "Gente, pode comprar das lojas que estão na lista, é super confiável. Atenciosos, às vezes demoram para responder devido à demanda, mas vem tudo certinho. Com certeza comprarei mais. Fiz compras de Make e Acessórios.",
    rating: 5,
    initials: "JS",
    gradientClass: "from-neon-purple to-neon-blue",
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

              {/* Author with futuristic icon avatar */}
              <div className="flex items-center gap-4 pt-4 border-t border-neon-cyan/20">
                <div className="relative">
                  <div 
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradientClass} flex items-center justify-center border-2 border-neon-cyan/50`}
                  >
                    <span className="text-background font-bold text-sm">{testimonial.initials}</span>
                  </div>
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
