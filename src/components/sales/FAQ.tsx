import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqData = [
  {
    question: "O aplicativo funciona em qualquer celular?",
    answer:
      "Sim! O app funciona em Android e iPhone. Também pode ser acessado pelo computador através do navegador.",
  },
  {
    question: "Os fornecedores são realmente verificados?",
    answer:
      "Absolutamente! Nossa equipe verifica cada fornecedor antes de incluir no app. Garantimos que são empresas reais, com CNPJ ativo e boa reputação.",
  },
  {
    question: "Preciso ir presencialmente na 25 de Março?",
    answer:
      "Não necessariamente! Muitos fornecedores trabalham com envio para todo o Brasil. Você pode fazer pedidos pelo WhatsApp e receber em casa.",
  },
  {
    question: "Com que frequência o app é atualizado?",
    answer:
      "Adicionamos novos fornecedores toda semana. Além disso, verificamos constantemente se os contatos estão ativos e atualizados.",
  },
  {
    question: "Qual a diferença entre os planos?",
    answer:
      "O plano Mensal dá acesso a todos os 260+ fornecedores com renovação mensal. O Anual inclui tudo mais grupo VIP, suporte prioritário e economia de R$177 por ano.",
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
      "O grupo VIP é onde acontece a mágica! Lá compartilhamos fornecedores exclusivos, dicas de negociação, alertas de oportunidades e networking com milhares de empreendedores.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Tire suas <span className="text-gradient">dúvidas</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Reunimos as perguntas mais comuns para te ajudar a tomar a melhor decisão.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border border-border/50 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
