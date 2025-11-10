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

  return (
    <>
      <Helmet>
        <title>Demonstração de Vitrine - Mila Beauty Cosméticos</title>
        <meta name="description" content="Demonstração de vitrine dos produtos Mila Beauty Cosméticos" />
      </Helmet>
      
      <div className="min-h-screen overflow-hidden flex flex-col pb-[63px]">
        <Header />
        
        <main className="w-full pt-20" style={{ height: `${iframeHeight}px` }}>
          <iframe 
            src="https://botimila.egestor.com.br/vitrine/" 
            className="w-full h-full border-none"
            title="Vitrine Mila Beauty"
          />
        </main>
        
        {/* Badge do MonteSite */}
        <div id="montesite-footer-badge" className="fixed bottom-0 left-0 right-0 z-50"></div>
        <script src="https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe"></script>
      </div>
    </>
  );
};

export default Vitrine;
