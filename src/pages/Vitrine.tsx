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
        
        {/* Badge do Montesite */}
        <div className="fixed bottom-0 left-0 right-0 h-[63px] bg-[#1a1a1a] border-t border-gray-800 flex items-center justify-center z-50">
          <a 
            href="https://lovable.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#8B5CF6" />
              <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-gray-300 text-sm font-medium">Edit in Lovable</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Vitrine;
