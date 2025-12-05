import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "@/components/sales/Hero";
import Benefits from "@/components/sales/Benefits";
import BonusSection from "@/components/sales/BonusSection";
import CategoriesSection from "@/components/sales/CategoriesSection";
import SocialProof from "@/components/sales/SocialProof";
import Pricing from "@/components/sales/Pricing";
import FAQ, { faqData } from "@/components/sales/FAQ";
import CTA from "@/components/sales/CTA";
import Footer from "@/components/Footer";

const SalesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // JSON-LD structured data for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // JSON-LD structured data for Product
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "App Importadoras 25 de Março",
    description:
      "Lista completa de mais de 260 fornecedores verificados da 25 de Março com contatos de WhatsApp, endereços e preços de atacado.",
    brand: {
      "@type": "Brand",
      name: "Importadoras 25",
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "19",
      highPrice: "29",
      priceCurrency: "BRL",
      offerCount: 2,
      offers: [
        {
          "@type": "Offer",
          name: "Plano Mensal",
          price: "29",
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Plano Anual",
          price: "19",
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2300",
    },
  };

  return (
    <>
      <Helmet>
        <title>App Importadoras 25 de Março – Lista Completa de Fornecedores</title>
        <meta
          name="description"
          content="Descubra mais de 260 fornecedores verificados da 25 de Março e transforme seu negócio de revenda. Contatos de WhatsApp, endereços e preços de atacado."
        />
        <meta
          name="keywords"
          content="fornecedores 25 de março, importadoras são paulo, atacado 25 de março, fornecedores verificados, revenda atacado"
        />
        <link rel="canonical" href="https://importadoras25.com.br/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="App Importadoras 25 de Março – Lista Completa de Fornecedores" />
        <meta property="og:description" content="Descubra mais de 260 fornecedores verificados da 25 de Março e transforme seu negócio de revenda." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://importadoras25.com.br/" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="App Importadoras 25 de Março" />
        <meta name="twitter:description" content="Descubra mais de 260 fornecedores verificados da 25 de Março." />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <main>
        <Hero />
        <Benefits />
        <BonusSection />
        <CategoriesSection />
        <SocialProof />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default SalesPage;
