import { 
  MapPin, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Clock, 
  MessageCircle,
  Package,
  Zap
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
    icon: Users,
    title: "Grupo VIP WhatsApp",
    description: "Comunidade exclusiva com dicas e networking.",
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
    icon: Package,
    title: "Categorias Diversas",
    description: "Eletrônicos, vestuário, acessórios, brinquedos e mais.",
  },
  {
    icon: Zap,
    title: "Acesso Imediato",
    description: "Comece a usar em segundos após a compra.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Por que escolher o App
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Tudo para você{" "}
            <span className="text-gradient">lucrar mais</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pare de perder tempo procurando fornecedores. Tenha acesso direto aos melhores
            contatos da 25 de Março.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center p-6"
            >
              <div className="w-20 h-20 mx-auto rounded-full gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <benefit.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border">
          {[
            { value: "5.000+", label: "Usuários ativos" },
            { value: "260+", label: "Fornecedores" },
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

export default Benefits;
