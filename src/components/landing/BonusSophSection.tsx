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
  BarChart3
} from "lucide-react";

const professionalizationCards = [
  {
    icon: Building2,
    title: "Abrir MEI — sem contador",
    color: "from-purple-500 to-violet-600",
    items: [
      "Guia interativo para abrir sua MEI em menos de 15 minutos",
      "Nada de pagar contador: tudo gratuito e explicado pela Soph",
      "Configuração completa: atividade, impostos, benefícios e obrigações"
    ]
  },
  {
    icon: Award,
    title: "Registro de Marca — sem advogado",
    color: "from-fuchsia-500 to-pink-600",
    items: [
      "Passo a passo para registrar sua marca sem burocracia",
      "Como economizar até R$ 1.000 fazendo tudo sozinha",
      "Orientações sobre proteção legal e tipos de registro"
    ]
  },
  {
    icon: Palette,
    title: "Logomarca Profissional — sem designer",
    color: "from-cyan-400 to-blue-500",
    items: [
      "Indicação de ferramentas gratuitas",
      "Modelos e estilos recomendados por nicho",
      "Guia para criar sua identidade visual do zero"
    ]
  },
  {
    icon: Globe,
    title: "Domínio & Presença Online — sem programador",
    color: "from-violet-500 to-purple-600",
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
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(280,70%,15%)] via-[hsl(260,60%,12%)] to-[hsl(220,50%,8%)]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[hsl(280,95%,60%)] rounded-full blur-[150px] opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[hsl(190,98%,70%)] rounded-full blur-[150px] opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(295,90%,50%)] rounded-full blur-[200px] opacity-10" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(280,95%,60%) 1px, transparent 1px), linear-gradient(90deg, hsl(280,95%,60%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-[hsl(280,95%,60%)] via-[hsl(295,90%,60%)] to-[hsl(190,98%,60%)] opacity-90" />
            <span className="absolute inset-[1px] bg-[hsl(280,70%,15%)] rounded-full" />
            <span className="absolute inset-0 bg-gradient-to-r from-[hsl(280,95%,60%)] via-[hsl(295,90%,60%)] to-[hsl(190,98%,60%)] opacity-20" />
            <Sparkles className="relative z-10 w-4 h-4 text-[hsl(295,90%,70%)]" />
            <span className="relative z-10 text-white">Bônus Exclusivo</span>
          </span>
        </div>

        {/* Main Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Conheça a <span className="bg-gradient-to-r from-[hsl(280,95%,70%)] via-[hsl(295,90%,70%)] to-[hsl(190,98%,70%)] bg-clip-text text-transparent">SOPH</span>: Sua Nova Sócia Digital que Trabalha 24h por Você
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
            Esqueça a burocracia e o medo de errar. A primeira Inteligência Artificial do Brasil treinada para pegar na sua mão e profissionalizar seu negócio do zero — sem que você gaste com contador, consultorias ou serviços caros.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            <span className="text-[hsl(295,90%,70%)] font-semibold">Soph não é um chatbot.</span>{" "}
            <span className="text-white/80">Ela é uma mentora digital prática, criada para transformar iniciantes em empreendedores organizados, seguros e lucrativos.</span>
          </p>
        </div>

        {/* SEÇÃO 1 — Profissionalização Sem Complicação */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            <Zap className="inline-block w-8 h-8 mr-3 text-[hsl(295,90%,70%)]" />
            Profissionalização Sem Complicação
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {professionalizationCards.map((card, index) => (
              <div 
                key={index}
                className="group relative rounded-2xl p-[1px] overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Animated border gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                {/* Card content */}
                <div className="relative bg-[hsl(260,50%,10%)]/90 backdrop-blur-xl rounded-2xl p-6 h-full">
                  {/* Glow effect on hover */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${card.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-5 shadow-lg shadow-purple-500/20`}>
                    <card.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[hsl(295,90%,70%)] animate-pulse" />
                    {card.title}
                  </h4>
                  
                  {/* Items */}
                  <ul className="space-y-3">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[hsl(190,98%,70%)] mt-0.5 flex-shrink-0" />
                        <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEÇÃO 2 — Vendendo nos Marketplaces */}
        <div className="mb-20">
          <div className="relative rounded-3xl p-[1px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(280,95%,60%)] via-[hsl(190,98%,60%)] to-[hsl(295,90%,60%)]" />
            
            <div className="relative bg-[hsl(260,50%,10%)]/95 backdrop-blur-xl rounded-3xl p-8 md:p-12">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(190,98%,60%)] rounded-full blur-[100px] opacity-20" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(190,98%,60%)] to-[hsl(220,90%,60%)] flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Vendendo nos Marketplaces
                  </h3>
                </div>
                
                <p className="text-lg text-white/70 mb-8 max-w-3xl">
                  A forma mais simples e prática de começar a vender na Shopee, Mercado Livre e outras — mesmo sem experiência. Com a Soph, você recebe um plano guiado para lançar seus produtos, otimizar anúncios e conseguir as primeiras vendas.
                </p>
                
                {/* Checklist Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {marketplaceChecklist.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 hover:border-[hsl(190,98%,60%)]/50 transition-colors duration-300"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[hsl(190,98%,60%)] to-[hsl(280,95%,60%)] flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEÇÃO 3 & 4 — Support & Profit Focus */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Suporte Inteligente 24/7 */}
          <div className="group relative rounded-3xl p-[1px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(280,95%,60%)] to-[hsl(295,90%,60%)] opacity-60 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative bg-[hsl(260,50%,10%)]/90 backdrop-blur-xl rounded-3xl p-8 h-full">
              {/* UV glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(280,95%,60%)]/10 to-transparent rounded-3xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(280,95%,60%)] to-[hsl(295,90%,60%)] flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  🤝 Suporte Inteligente 24/7
                </h3>
                
                <ul className="space-y-4">
                  {[
                    "Mentoria digital sempre disponível",
                    "Responde dúvidas e entrega materiais personalizados",
                    "Linguagem simples, direta e acolhedora",
                    "Recomenda o conteúdo certo conforme sua necessidade"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[hsl(295,90%,70%)] mt-2 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Foco Total no Lucro */}
          <div className="group relative rounded-3xl p-[1px] overflow-hidden">
            {/* Holographic effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[hsl(190,98%,60%)] via-[hsl(280,95%,60%)] to-[hsl(190,98%,60%)] opacity-60 group-hover:opacity-100 transition-opacity"
              style={{
                backgroundSize: '400% 400%',
                animation: 'holographic 8s ease infinite'
              }}
            />
            
            <div className="relative bg-[hsl(260,50%,10%)]/90 backdrop-blur-xl rounded-3xl p-8 h-full">
              {/* Holographic shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-3xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(190,98%,60%)] to-[hsl(160,90%,50%)] flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  💰 Foco Total no Lucro
                </h3>
                
                <ul className="space-y-4">
                  {[
                    { icon: Shield, text: "Estruturação profissional do negócio" },
                    { icon: Zap, text: "Orientações para faturar com segurança" },
                    { icon: BarChart3, text: "Estratégias para maximizar margens" },
                    { icon: TrendingUp, text: "Crescimento estável e sustentável" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-[hsl(190,98%,70%)] mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[hsl(280,95%,60%)]/20 via-[hsl(295,90%,60%)]/20 to-[hsl(190,98%,60%)]/20 backdrop-blur-sm px-8 py-5 rounded-2xl border border-[hsl(295,90%,60%)]/30">
            <Sparkles className="w-6 h-6 text-[hsl(295,90%,70%)]" />
            <p className="text-white font-medium text-lg">
              Sua assinatura garante acesso total à Soph — o futuro da sua parceria de negócios.
            </p>
          </div>
        </div>
      </div>

      {/* Holographic animation keyframes */}
      <style>{`
        @keyframes holographic {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default BonusSophSection;
