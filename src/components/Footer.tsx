import { Smartphone, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-neon-cyan/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-64 h-32 bg-neon-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo with neon effect */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-xl flex items-center justify-center glow-secondary">
              <Smartphone className="w-5 h-5 text-background" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Importadoras da 25
            </span>
          </div>

          {/* Links with neon hover */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#" className="text-foreground/70 hover:text-neon-cyan transition-colors duration-300">
              Termos de Uso
            </a>
            <a href="#" className="text-foreground/70 hover:text-neon-cyan transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="text-foreground/70 hover:text-neon-cyan transition-colors duration-300">
              Contato
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-foreground/50">
            © 2024 Importadoras da 25. Todos os direitos reservados.
          </p>
        </div>

        {/* Disclaimer with glass effect */}
        <div className="mt-8 pt-8 border-t border-neon-cyan/10 text-center">
          <p className="text-xs text-foreground/40 max-w-3xl mx-auto">
            Este produto não garante a obtenção de resultados. Qualquer referência
            ao desempenho de uma estratégia não deve ser interpretada como uma
            garantia de resultados. Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>

        {/* Powered by badge */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-foreground/30">
          <Sparkles className="w-3 h-3 text-neon-purple" />
          <span>Powered by SOPH AI</span>
          <Sparkles className="w-3 h-3 text-neon-cyan" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
