import { 
  MapPin, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Clock, 
  MessageCircle 
} from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Endereços Completos",
    description: "Localização exata de cada fornecedor com mapa integrado para você ir direto ao ponto.",
  },
  {
    icon: ShieldCheck,
    title: "Fornecedores Verificados",
    description: "Todos os contatos são checados pela nossa equipe antes de entrar no aplicativo.",
  },
  {
    icon: TrendingUp,
    title: "Preços de Atacado",
    description: "Acesso a preços exclusivos para revenda com margens que podem chegar a 300%.",
  },
  {
    icon: Users,
    title: "Comunidade Exclusiva",
    description: "Grupo VIP no WhatsApp com dicas, lançamentos e networking com outros empreendedores.",
  },
  {
    icon: Clock,
    title: "Atualizações Constantes",
    description: "Novos fornecedores adicionados toda semana. Seu catálogo sempre atualizado.",
  },
  {
    icon: MessageCircle,
    title: "Suporte Dedicado",
    description: "Equipe pronta para te ajudar a encontrar o fornecedor ideal para seu negócio.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Por que escolher o App
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Tudo que você precisa para{" "}
            <span className="text-gradient">lucrar mais</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pare de perder tempo procurando fornecedores. Tenha acesso direto aos melhores
            contatos da 25 de Março e comece a faturar de verdade.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border">
          {[
            { value: "5.000+", label: "Usuários ativos" },
            { value: "500+", label: "Fornecedores" },
            { value: "98%", label: "Satisfação" },
            { value: "24h", label: "Suporte" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
