import { 
  Building2, 
  Award, 
  Palette, 
  Globe,
  ShoppingCart,
  Check,
  MessageCircle,
  TrendingUp,
  Sparkles,
  Zap,
  DollarSign,
  Wrench,
  ArrowRight,
  Target,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const professionalizationCards = [
  {
    icon: Building2,
    title: "Abrir MEI — sem contador",
    description: "Economize até R$ 200.",
    detail: "A SOPH te guia com ferramentas simples que qualquer pessoa consegue usar."
  },
  {
    icon: Award,
    title: "Registrar Marca — sem advogado",
    description: "Economize entre R$ 900 e R$ 1.300.",
    detail: "Passo a passo direto e explicado pela SOPH."
  },
  {
    icon: Palette,
    title: "Logomarca Profissional — sem designer",
    description: "Crie sua identidade visual com ferramentas gratuitas e fáceis.",
    detail: ""
  },
  {
    icon: Globe,
    title: "Domínio e Site — sem programador",
    description: "A SOPH mostra como registrar seu domínio e montar seu site usando ferramentas gratuitas e intuitivas.",
    detail: ""
  }
];

const salesItems = [
  {
    icon: ShoppingCart,
    title: "Vender nos Marketplaces",
    description: "Checklist completo: cadastro, aprovação, produtos, fotos, descrições e primeiras vendas."
  },
  {
    icon: Share2,
    title: "Vendas nas Redes Sociais",
    description: "Estratégias simples para captar clientes e vender todos os dias."
  },
  {
    icon: Target,
    title: "Estratégias de Crescimento",
    description: "Como ajustar preços, margens e produtos para lucrar mais."
  }
];

const toolsInProgress = [
  "Fluxo de caixa",
  "Precificação",
  "Controle de estoque",
  "Análises de vendas",
  "Automações e muito mais…"
];

const BonusSophSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Futuristic Background - Matching design system */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(220,35%,12%)] to-background" />
      
      {/* Animated gradient orbs - Using design system colors */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-[150px] opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary rounded-full blur-[150px] opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent rounded-full blur-[200px] opacity-10" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider overflow-hidden group glass-card neon-border">
            <Sparkles className="relative z-10 w-4 h-4 text-secondary animate-pulse" />
            <span className="relative z-10 text-white">Bônus Exclusivo</span>
          </span>
        </div>

        {/* Main Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Conheça a <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">SOPH</span>: Sua Sócia Digital que Profissionaliza Seu Negócio 24h por Dia
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            A primeira Inteligência Artificial do Brasil criada para ajudar pequenos empreendedores a organizarem, profissionalizarem e crescerem sem depender de contador, designer, advogado ou consultores caros.
          </p>
          <p className="inline-flex items-center gap-2 text-xl md:text-2xl font-bold text-secondary">
            <DollarSign className="w-6 h-6" />
            A SOPH te ajuda a economizar mais de R$ 3.000 por ano evitando serviços que você faria pagando profissionais.
          </p>
        </div>

        {/* SEÇÃO 1 — Profissionalização Rápida */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 flex items-center justify-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary glow-primary">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span>Profissionalização <span className="text-secondary">Rápida</span></span>
          </h3>
          
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            A SOPH mostra o caminho e as ferramentas — a maioria gratuitas e fáceis de usar. Você só segue o passo a passo.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {professionalizationCards.map((card, index) => (
              <div 
                key={index}
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] glass-card neon-border hover-glow"
              >
                {/* Card content */}
                <div className="relative p-6 h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-5 shadow-lg glow-primary">
                    <card.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    {card.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-secondary font-semibold mb-2">{card.description}</p>
                  {card.detail && <p className="text-muted-foreground text-sm leading-relaxed">{card.detail}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEÇÃO 2 — Vendas Inteligentes */}
        <div className="mb-20">
          <div className="relative rounded-3xl overflow-hidden glass-card neon-border-cyan">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-[100px] opacity-20" />
            
            <div className="relative p-8 md:p-12">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg glow-secondary">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Vendas <span className="text-secondary">Inteligentes</span>
                  </h3>
                </div>
                
                {/* Sales Items Grid */}
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  {salesItems.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:bg-white/10 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/30 to-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>

                <p className="text-center text-secondary font-semibold text-lg">
                  Com a SOPH você acelera suas vendas mesmo começando do zero.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SEÇÃO 3 — Mentoria & Gestão 24/7 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Suporte Inteligente 24/7 */}
          <div className="group relative rounded-3xl overflow-hidden glass-card neon-border hover-glow">
            <div className="relative p-8 h-full">
              {/* UV glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg glow-primary">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  Suporte Inteligente <span className="text-primary">24/7</span>
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Mentora digital sempre disponível para tirar dúvidas e orientar.
                </p>
              </div>
            </div>
          </div>

          {/* Foco Total no Lucro */}
          <div className="group relative rounded-3xl overflow-hidden glass-card neon-border-cyan hover-glow">
            <div className="relative p-8 h-full">
              {/* Holographic shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-3xl animate-shimmer" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-[hsl(160,90%,50%)] flex items-center justify-center mb-6 shadow-lg glow-secondary">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  Foco Total no <span className="text-secondary">Lucro</span>
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Guias práticos para aumentar margem e reduzir desperdícios.
                </p>
              </div>
            </div>
          </div>

          {/* Ferramentas em Evolução */}
          <div className="group relative rounded-3xl overflow-hidden glass-card neon-border hover-glow md:col-span-2 lg:col-span-1">
            <div className="relative p-8 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-3xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6 shadow-lg">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  Ferramentas em <span className="text-accent">Evolução</span>
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Como assinante, você recebe automaticamente novos módulos:
                </p>
                
                <ul className="space-y-2">
                  {toolsInProgress.map((tool, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer phrase */}
        <div className="mt-12 text-center">
          <p className="text-lg text-secondary font-semibold">
            A SOPH cresce junto com você — quanto mais você usa, mais ferramentas ela libera.
          </p>
        </div>
        
        {/* Frase reforço */}
        <div className="mt-6 text-center">
          <p className="text-muted-foreground">
            Tudo com ferramentas gratuitas ou acessíveis, sem depender de ninguém.
          </p>
        </div>

        {/* CTA Footer */}
        <div className="mt-10 text-center">
          {/* Main CTA */}
          <p className="text-muted-foreground mb-4">
            Pronto para começar? Acesse agora e veja tudo por dentro.
          </p>
          <Button 
            variant="hero" 
            size="xl" 
            className="hover-glow-orange animate-pulse-neon"
            onClick={() => window.open("https://pay.kiwify.com.br/348GxuG", "_blank")}
          >
            Quero a SOPH Agora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BonusSophSection;
