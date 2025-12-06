import { 
  MapPin, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  MessageCircle,
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
    icon: Zap,
    title: "Acesso Imediato",
    description: "Comece a usar em segundos após a compra.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full neon-border-cyan mb-6">
            <Zap className="w-4 h-4 text-neon-cyan" />
            <span className="text-neon-cyan font-semibold text-lg">Por que escolher o App</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Tudo para você{" "}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
              lucrar mais
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Pare de perder tempo procurando fornecedores. Tenha acesso direto aos melhores
            contatos da 25 de Março.
          </p>
        </div>

        {/* Benefits grid with futuristic cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center p-6 glass-card rounded-2xl neon-border hover-glow transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 glow-secondary">
                <benefit.icon className="w-10 h-10 text-neon-cyan" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-neon-cyan transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats with neon styling */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-16 border-t border-neon-cyan/20">
          {[
            { value: "5.000+", label: "Usuários ativos" },
            { value: "260+", label: "Fornecedores" },
            { value: "98%", label: "Satisfação" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-foreground/60 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
