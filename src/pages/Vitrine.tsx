import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Helmet } from "react-helmet";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      const headerHeight = 80; // 80px
      const badgeHeight = 63; // 63px
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
      
      <div className="min-h-screen overflow-hidden flex flex-col">
        <Header />
        
        <main className="w-full pt-20" style={{ height: `${iframeHeight}px` }}>
          <iframe 
            src="https://botimila.egestor.com.br/vitrine/" 
            className="w-full h-full border-none"
            title="Vitrine Mila Beauty"
          />
        </main>
      </div>
    </>
  );
};

export default Vitrine;
