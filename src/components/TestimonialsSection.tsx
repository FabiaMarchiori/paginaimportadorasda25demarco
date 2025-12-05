import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcos Silva",
    role: "Revendedor de Eletrônicos",
    content: "Em 3 meses usando o app, consegui triplicar meu lucro! Os fornecedores são reais e os preços são absurdamente bons.",
    rating: 5,
    image: "M",
  },
  {
    name: "Ana Paula Costa",
    role: "Lojista de Acessórios",
    content: "Melhor investimento que fiz pro meu negócio. Não preciso mais ir presencialmente pra achar fornecedores novos.",
    rating: 5,
    image: "A",
  },
  {
    name: "Roberto Mendes",
    role: "Dropshipper",
    content: "O suporte é sensacional! Me ajudaram a encontrar exatamente o fornecedor que eu precisava em menos de 24h.",
    rating: 5,
    image: "R",
  },
  {
    name: "Juliana Ferreira",
    role: "Empreendedora Digital",
    content: "Comecei do zero e hoje faturo mais de R$15 mil por mês só com os contatos do app. Vale cada centavo!",
    rating: 5,
    image: "J",
  },
  {
    name: "Carlos Eduardo",
    role: "Comerciante",
    content: "Já conhecia alguns fornecedores, mas o app me apresentou outros que nem sabia que existiam. Incrível!",
    rating: 5,
    image: "C",
  },
  {
    name: "Patricia Lima",
    role: "Vendedora Online",
    content: "O grupo VIP do WhatsApp é ouro! As dicas que recebi lá me fizeram economizar milhares em compras erradas.",
    rating: 5,
    image: "P",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Depoimentos Reais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            O que nossos <span className="text-gradient">usuários</span> dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Milhares de empreendedores já transformaram seus negócios com o Importadoras da 25.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-soft transition-all duration-300 border border-border/50 group"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
