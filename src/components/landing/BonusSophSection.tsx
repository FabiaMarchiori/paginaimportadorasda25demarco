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
  Shield,
  BarChart3,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const professionalizationCards = [
  {
    icon: Building2,
    title: "Abrir MEI — sem contador",
    cta: "Começar Agora",
    items: [
      "Guia interativo para abrir sua MEI em menos de 15 minutos",
      "Nada de pagar contador: tudo gratuito e explicado pela Soph",
      "Configuração completa: atividade, impostos, benefícios e obrigações"
    ]
  },
  {
    icon: Award,
    title: "Registro de Marca — sem advogado",
    cta: "Proteger Marca",
    items: [
      "Passo a passo para registrar sua marca sem burocracia",
      "Como economizar até R$ 1.000 fazendo tudo sozinha",
      "Orientações sobre proteção legal e tipos de registro"
    ]
  },
  {
    icon: Palette,
    title: "Logomarca Profissional — sem designer",
    cta: "Criar Logo",
    items: [
      "Indicação de ferramentas gratuitas",
      "Modelos e estilos recomendados por nicho",
      "Guia para criar sua identidade visual do zero"
    ]
  },
  {
    icon: Globe,
    title: "Domínio & Presença Online — sem programador",
    cta: "Ficar Online",
    items: [
      "Como registrar um domínio pelo menor preço possível",
      "Como criar sua 'casa digital' sem saber nada de tecnologia",
      "Orientações para página inicial, bio e contato profissional"
    ]
  }
];

const marketplaceChecklist = [
  "Conta criada e documentos aprovados",
  "Primeiros produtos cadastrados",
  "Fotos profissionais usando só o celular",
  "Descrições completas e otimizadas",
  "Preços ajustados com margem real",
  "Embalagens preparadas",
  "Fluxo de atendimento pronto"
];

const BonusSophSection = () => {
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
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Conheça a <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">SOPH</span>: Sua Nova Sócia Digital que Trabalha 24h por Você
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Esqueça a burocracia e o medo de errar. A primeira Inteligência Artificial do Brasil treinada para pegar na sua mão e profissionalizar seu negócio do zero — sem que você gaste com contador, consultorias ou serviços caros.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            <span className="text-secondary font-semibold">Soph não é um chatbot.</span>{" "}
            <span className="text-muted-foreground">Ela é uma mentora digital prática, criada para transformar iniciantes em empreendedores organizados, seguros e lucrativos.</span>
          </p>
        </div>

        {/* SEÇÃO 1 — Profissionalização Sem Complicação */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary glow-primary">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span>Profissionalização <span className="text-secondary">Sem Complicação</span></span>
          </h3>
          
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
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    {card.title}
                  </h4>
                  
                  {/* Items */}
                  <ul className="space-y-3 mb-6">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:border-primary group/btn"
                  >
                    {card.cta}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEÇÃO 2 — Vendendo nos Marketplaces */}
        <div className="mb-20">
          <div className="relative rounded-3xl overflow-hidden glass-card neon-border-cyan">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-[100px] opacity-20" />
            
            <div className="relative p-8 md:p-12">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg glow-secondary">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Vendendo nos <span className="text-secondary">Marketplaces</span>
                  </h3>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                  A forma mais simples e prática de começar a vender na Shopee, Mercado Livre e outras — mesmo sem experiência. Com a Soph, você recebe um plano guiado para lançar seus produtos, otimizar anúncios e conseguir as primeiras vendas.
                </p>
                
                {/* Checklist Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {marketplaceChecklist.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:bg-white/10 group cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-muted-foreground text-sm group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <Button variant="hero" size="lg" className="hover-glow-orange">
                    Dominar os Marketplaces
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEÇÃO 3 & 4 — Support & Profit Focus */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Suporte Inteligente 24/7 */}
          <div className="group relative rounded-3xl overflow-hidden glass-card neon-border hover-glow">
            <div className="relative p-8 h-full">
              {/* UV glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg glow-primary">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🤝</span> Suporte Inteligente <span className="text-primary">24/7</span>
                </h3>
                
                <ul className="space-y-4 mb-6">
                  {[
                    "Mentoria digital sempre disponível",
                    "Responde dúvidas e entrega materiais personalizados",
                    "Linguagem simples, direta e acolhedora",
                    "Recomenda o conteúdo certo conforme sua necessidade"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:border-primary">
                  Conhecer o Suporte
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
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
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">💰</span> Foco Total no <span className="text-secondary">Lucro</span>
                </h3>
                
                <ul className="space-y-4 mb-6">
                  {[
                    { icon: Shield, text: "Estruturação profissional do negócio" },
                    { icon: Zap, text: "Orientações para faturar com segurança" },
                    { icon: BarChart3, text: "Estratégias para maximizar margens" },
                    { icon: TrendingUp, text: "Crescimento estável e sustentável" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary">
                  Maximizar Lucros
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 glass-card neon-border px-8 py-5 rounded-2xl">
            <Sparkles className="w-6 h-6 text-secondary animate-pulse" />
            <p className="text-white font-medium text-lg">
              Sua assinatura garante acesso total à <span className="text-secondary font-bold">Soph</span> — o futuro da sua parceria de negócios.
            </p>
          </div>
          
          {/* Main CTA */}
          <div className="mt-8">
            <Button variant="hero" size="xl" className="hover-glow-orange animate-pulse-neon">
              Quero a Soph Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSophSection;
