import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Helmet } from "react-helmet";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      const headerHeight = 80; // 80px
      const badgeHeight = 63; // Espaço para o badge do MonteSite
      const calculatedHeight = window.innerHeight - headerHeight - badgeHeight;
      setIframeHeight(calculatedHeight);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  useEffect(() => {
    // Carregar o script do badge do MonteSite
    const script = document.createElement('script');
    script.src = 'https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpar o script quando o componente for desmontado
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Demonstração de Vitrine - Mila Beauty Cosméticos</title>
        <meta name="description" content="Demonstração de vitrine dos produtos Mila Beauty Cosméticos" />
      </Helmet>
      
      <div className="min-h-screen overflow-hidden flex flex-col bg-background">
        <Header />
        
        <main className="w-full pt-20 bg-background flex-1">
          <iframe 
            src="https://botimila.egestor.com.br/vitrine/" 
            className="w-full h-full border-none"
            title="Vitrine Mila Beauty"
            style={{ height: `${iframeHeight}px` }}
          />
        </main>
        
        {/* Container para o badge do MonteSite */}
        <div id="montesite-footer-badge" className="relative z-50"></div>
      </div>
    </>
  );
};

export default Vitrine;
