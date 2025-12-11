import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const navigate = useNavigate();
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5555991396093", "_blank");
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Mila Beauty Background" 
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-rose-200 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span className="text-sm font-medium text-rose-600">Desde 2018</span>
          </div>

          {/* Logo */}
          <div className="mb-8 animate-scale-in">
            <img
              src="/logo.png"
              alt="Mila Beauty Cosméticos"
              className="h-32 md:h-40 w-auto mx-auto"
            />
          </div>

          {/* H1 - Nome da Empresa */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 animate-fade-in-up px-4">
            Mila Beauty Cosméticos
          </h1>

          {/* H2 - Descrição */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: "0.2s" }}>
            Beleza que inspira cuidado. Produtos de qualidade para mulheres, homens e crianças em Faxinal do Soturno.
          </h2>

          {/* Slogan */}
          <p className="text-base sm:text-lg md:text-xl font-medium text-rose-600 mb-8 md:mb-12 italic animate-fade-in-up px-4" style={{ animationDelay: "0.3s" }}>
            "Beleza que inspira cuidado."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up px-4" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              Fale conosco
            </Button>
            <Button
              onClick={() => navigate("/vitrine")}
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 w-full sm:w-auto"
            >
              Ver produtos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
