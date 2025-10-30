import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Values />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
