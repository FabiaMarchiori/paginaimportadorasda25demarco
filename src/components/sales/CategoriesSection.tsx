import { 
  PenTool, 
  Coffee, 
  Ribbon, 
  Gem, 
  Briefcase,
  Smartphone,
  Gift,
  Package,
  Palette,
  Sparkles,
  Heart,
  Scissors,
  Cpu,
  Gamepad2,
  Home
} from "lucide-react";

const categories = [
  { name: "Papelaria Fofa", icon: PenTool, color: "from-pink-400 to-pink-500" },
  { name: "Garrafas e Marmitas", icon: Coffee, color: "from-blue-400 to-blue-500" },
  { name: "Acessórios e Laços", icon: Ribbon, color: "from-purple-400 to-purple-500" },
  { name: "Bijouterias e Semijoias", icon: Gem, color: "from-amber-400 to-amber-500" },
  { name: "Mochilas e Malas", icon: Briefcase, color: "from-emerald-400 to-emerald-500" },
  { name: "Películas e Capinhas", icon: Smartphone, color: "from-cyan-400 to-cyan-500" },
  { name: "Presentes e Pelúcias", icon: Gift, color: "from-rose-400 to-rose-500" },
  { name: "Embalagens Personalizadas", icon: Package, color: "from-orange-400 to-orange-500" },
  { name: "Maquiagem", icon: Palette, color: "from-fuchsia-400 to-fuchsia-500" },
  { name: "Unhas e Cílios", icon: Sparkles, color: "from-violet-400 to-violet-500" },
  { name: "Cosméticos e Perfumes", icon: Heart, color: "from-red-400 to-red-500" },
  { name: "Perucas e Cabelos", icon: Scissors, color: "from-yellow-400 to-yellow-500" },
  { name: "Eletrônicos", icon: Cpu, color: "from-slate-400 to-slate-500" },
  { name: "Games e Acessórios", icon: Gamepad2, color: "from-indigo-400 to-indigo-500" },
  { name: "Utilidades Domésticas", icon: Home, color: "from-teal-400 to-teal-500" },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nichos Exclusivos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Categorias do{" "}
            <span className="text-gradient">Aplicativo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            15 nichos diferentes para você encontrar os fornecedores ideais para o seu negócio.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#pricing"
              className="group flex flex-col items-center gap-3 p-4 md:p-6 rounded-2xl bg-card border-2 border-[hsl(45_92%_55%)] hover:border-[hsl(45_95%_50%)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer relative overflow-hidden"
              style={{
                boxShadow: "0 4px 20px -4px hsl(45 92% 55% / 0.3)",
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(45_92%_85%)] to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              
              {/* Icon Circle */}
              <div 
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                style={{
                  boxShadow: "0 8px 24px -8px rgba(0,0,0,0.3), inset 0 2px 8px rgba(255,255,255,0.3)",
                }}
              >
                <category.icon className="w-7 h-7 md:w-9 md:h-9 text-white drop-shadow-sm" />
              </div>

              {/* Name */}
              <span className="relative text-xs md:text-sm font-semibold text-foreground text-center leading-tight group-hover:text-primary transition-colors duration-300">
                {category.name}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Clique em qualquer categoria para ver os fornecedores disponíveis
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
