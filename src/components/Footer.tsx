import { Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg">
              Importadoras da 25
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#" className="hover:text-accent transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Contato
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/70">
            © 2024 Importadoras da 25. Todos os direitos reservados.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/50 max-w-3xl mx-auto">
            Este produto não garante a obtenção de resultados. Qualquer referência
            ao desempenho de uma estratégia não deve ser interpretada como uma
            garantia de resultados. Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
