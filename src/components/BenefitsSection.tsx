import { 
  MapPin, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  MessageCircle,
  Sparkles
} from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Endereços Completos",
    description: "Localização exata de cada fornecedor para você ir direto ao ponto.",
  },
  {
    icon: ShieldCheck,
    title: "100% Verificados",
    description: "Todos os contatos são checados antes de entrar na lista.",
  },
  {
    icon: TrendingUp,
    title: "Margens de até 300%",
    description: "Preços exclusivos de atacado para maximizar seu lucro.",
  },
  {
    icon: Clock,
    title: "Atualizações Semanais",
    description: "Novos fornecedores adicionados toda semana.",
  },
  {
    icon: MessageCircle,
    title: "Suporte Dedicado",
    description: "Equipe pronta para te ajudar a encontrar o ideal.",
  },
  {
    icon: Sparkles,
    title: "Acesso Imediato",
    description: "Comece a usar em segundos após a compra.",
  },
];

const stats = [
  { value: "5.000+", label: "Usuários ativos" },
  { value: "260+", label: "Fornecedores" },
  { value: "98%", label: "Satisfação" },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-lg uppercase tracking-wider mb-4">
            Por que escolher o App
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8">
            Tudo para você{" "}
            <span className="text-gradient">lucrar mais</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Pare de perder tempo procurando fornecedores. Tenha acesso direto aos melhores
            contatos da 25 de Março.
          </p>
        </div>

        {/* Benefits grid - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-4 md:p-6 lg:p-8 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-hero flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats - only 3 metrics */}
        <div className="grid grid-cols-3 gap-6 md:gap-8 mt-20 pt-16 border-t border-border">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
