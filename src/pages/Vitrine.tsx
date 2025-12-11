import { useEffect } from "react";
import Header from "@/components/Header";
import { Helmet } from "react-helmet";

const Vitrine = () => {
  useEffect(() => {
    // Travar scroll do body
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Demonstração de Vitrine - Mila Beauty Cosméticos</title>
        <meta name="description" content="Demonstração de vitrine dos produtos Mila Beauty Cosméticos" />
      </Helmet>
      
      <div className="h-screen overflow-hidden flex flex-col bg-background">
        <Header />
        
        <main className="w-full pt-20 bg-background flex-1 overflow-hidden">
          <iframe 
            src="https://botimila.egestor.com.br/vitrine/" 
            className="w-full h-full border-none"
            title="Vitrine Mila Beauty"
            style={{ height: 'calc(100vh - 80px)' }}
          />
        </main>
      </div>
    </>
  );
};

export default Vitrine;
