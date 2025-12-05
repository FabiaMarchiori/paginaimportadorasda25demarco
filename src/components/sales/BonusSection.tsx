import { 
  Briefcase, 
  Store, 
  MessageCircle, 
  TrendingUp,
  FileText,
  Award,
  Palette,
  ShoppingBag,
  Search,
  Megaphone,
  Clock,
  BookOpen,
  Heart,
  DollarSign,
  Shield,
  BarChart3
} from "lucide-react";

const pillars = [
  {
    icon: Briefcase,
    title: "Profissionalização Descomplicada",
    items: [
      "Legalize em 15 minutos: guias passo a passo para abrir MEI",
      "Registro de marca simplificado, sem burocracia",
      "Branding de impacto: logomarca, domínio e identidade profissional",
    ],
    subIcons: [FileText, Award, Palette],
  },
  {
    icon: Store,
    title: "Domínio dos Marketplaces",
    items: [
      "Estratégias para vender na Shopee e Mercado Livre",
      "Como aparecer na primeira página",
      "Boas práticas para anúncios de alta conversão",
    ],
    subIcons: [ShoppingBag, Search, Megaphone],
  },
  {
    icon: MessageCircle,
    title: "Suporte Inteligente 24/7",
    items: [
      "Mentoria digital sempre disponível",
      "Tire dúvidas e receba materiais personalizados",
      "Linguagem simples, direta e acolhedora",
    ],
    subIcons: [Clock, BookOpen, Heart],
  },
  {
    icon: TrendingUp,
    title: "Foco no Lucro",
    items: [
      "Orientações para faturar com segurança",
      "Estruturação do negócio",
      "Maximização de margem e crescimento estável",
    ],
    subIcons: [DollarSign, Shield, BarChart3],
  },
];

const BonusSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Main Card */}
        <div className="relative bg-card rounded-[2rem] p-8 md:p-12 shadow-xl border border-border/30 overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 via-accent/10 to-transparent rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange/10 to-transparent rounded-full blur-2xl -z-10" />

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
              <span className="text-lg">🎁</span>
              Bônus Exclusivo
            </span>
          </div>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              <span className="text-gradient">SOPH</span> — Sua Mentora Digital de Alta Performance
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Para comerciantes, lojistas, revendedores e sacoleiras que querem escalar o jogo.
            </p>
          </div>

          {/* Description */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-foreground text-lg leading-relaxed">
              <span className="font-semibold text-primary">Soph não é um chatbot.</span>{" "}
              Ela é a primeira Agente de IA brasileira focada em Educação Empreendedora Prática — 
              seu atalho para transformar a revenda em um negócio sólido e profissional.
            </p>
          </div>

          {/* Four Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {pillar.title}
                </h3>

                {/* Items */}
                <ul className="space-y-3">
                  {pillar.items.map((item, i) => {
                    const SubIcon = pillar.subIcons[i];
                    return (
                      <li key={i} className="flex items-start gap-2">
                        <SubIcon className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-snug">
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-accent/10 to-orange/10 px-8 py-4 rounded-2xl border border-primary/20">
              <span className="text-2xl">✨</span>
              <p className="text-foreground font-medium">
                Sua assinatura garante acesso total à Soph — o futuro da sua parceria de negócios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
