import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/5555991396093", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};

export default WhatsAppButton;
