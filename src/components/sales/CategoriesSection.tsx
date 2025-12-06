import { PenTool, Coffee, Ribbon, Gem, Briefcase, Smartphone, Gift, Package, Palette, Sparkles, Heart, Scissors, Cpu, Gamepad2, Home, LayoutGrid } from "lucide-react";
const categories = [{
  name: "Papelaria Fofa",
  icon: PenTool
}, {
  name: "Garrafas e Marmitas",
  icon: Coffee
}, {
  name: "Acessórios e Laços",
  icon: Ribbon
}, {
  name: "Bijouterias e Semijoias",
  icon: Gem
}, {
  name: "Mochilas e Malas",
  icon: Briefcase
}, {
  name: "Películas e Capinhas",
  icon: Smartphone
}, {
  name: "Presentes e Pelúcias",
  icon: Gift
}, {
  name: "Embalagens Personalizadas",
  icon: Package
}, {
  name: "Maquiagem",
  icon: Palette
}, {
  name: "Unhas e Cílios",
  icon: Sparkles
}, {
  name: "Cosméticos e Perfumes",
  icon: Heart
}, {
  name: "Perucas e Cabelos",
  icon: Scissors
}, {
  name: "Eletrônicos",
  icon: Cpu
}, {
  name: "Games e Acessórios",
  icon: Gamepad2
}, {
  name: "Utilidades Domésticas",
  icon: Home
}];
const CategoriesSection = () => {
  return <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full neon-border-cyan mb-6">
            <LayoutGrid className="w-4 h-4 text-neon-cyan" />
            <span className="text-neon-cyan font-semibold text-sm uppercase tracking-wider">Nichos Exclusivos</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Categorias do{" "}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
              Aplicativo
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            15 nichos diferentes para você encontrar os fornecedores ideais para o seu negócio.
          </p>
        </div>

        {/* Categories Grid with futuristic cards */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => <a key={index} href="#pricing" className="group flex flex-col items-center gap-3 p-4 md:p-6 glass-card rounded-2xl neon-border hover-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden animate-fade-in" style={{
          animationDelay: `${index * 0.05}s`
        }}>
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon Circle with neon gradient */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:border-neon-cyan/60" style={{
            boxShadow: "0 0 20px hsl(var(--neon-cyan) / 0.2)"
          }}>
                <category.icon className="w-7 h-7 md:w-9 md:h-9 text-neon-cyan group-hover:text-neon-cyan transition-colors" />
              </div>

              {/* Name */}
              <span className="relative text-xs md:text-sm font-semibold text-foreground/80 text-center leading-tight group-hover:text-neon-cyan transition-colors duration-300">
                {category.name}
              </span>
            </a>)}
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>;
};
export default CategoriesSection;