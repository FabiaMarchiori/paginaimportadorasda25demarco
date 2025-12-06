import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const faqData = [
  {
    question: "O aplicativo funciona em qualquer celular?",
    answer:
      "Sim! O app funciona em Android e iPhone. Também pode ser acessado pelo computador através do navegador.",
  },
  {
    question: "As importadoras são realmente verificadas?",
    answer:
      "Absolutamente! Nossa equipe verifica cada importadora antes de incluir no app. Garantimos que são empresas reais, com CNPJ ativo e boa reputação.",
  },
  {
    question: "Preciso ir presencialmente na 25 de Março?",
    answer:
      "Não necessariamente! Muitas importadoras trabalham com envio para todo o Brasil. Você pode fazer pedidos pelo WhatsApp e receber em casa.",
  },
  {
    question: "Com que frequência o app é atualizado?",
    answer:
      "Adicionamos novas importadoras toda semana. Além disso, verificamos constantemente se os contatos estão ativos e atualizados.",
  },
  {
    question: "Qual a diferença entre os planos?",
    answer:
      "O plano Mensal dá acesso a todas as 260+ importadoras com renovação mensal. O Anual inclui tudo mais grupo VIP, suporte prioritário e economia.",
  },
  {
    question: "Como funciona a garantia?",
    answer:
      "Você tem 7 dias para testar o app. Se não gostar, é só enviar uma mensagem que devolvemos 100% do valor, sem perguntas.",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer:
      "Sim! Aceitamos cartão de crédito em até 12x. Também aceitamos Pix com desconto adicional.",
  },
  {
    question: "O grupo VIP é realmente útil?",
    answer:
      "O grupo VIP é onde acontece a mágica! Lá compartilhamos importadoras exclusivas, dicas de negociação, alertas de oportunidades e networking com milhares de empreendedores.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full neon-border-cyan mb-6">
            <HelpCircle className="w-4 h-4 text-neon-cyan" />
            <span className="text-neon-cyan font-semibold text-sm uppercase tracking-wider">Dúvidas Frequentes</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Tire suas{" "}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
              dúvidas
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Reunimos as perguntas mais comuns para te ajudar a tomar a melhor decisão.
          </p>
        </div>

        {/* FAQ Accordion with neon styling */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-neon-cyan hover:no-underline py-6 [&[data-state=open]]:text-neon-cyan">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
