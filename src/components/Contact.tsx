import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua 30 de Novembro, 604\nFaxinal do Soturno, RS",
      link: "https://maps.google.com/?q=Rua+30+de+Novembro,+604,+Faxinal+do+Soturno",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(55) 99139-6093",
      link: "https://wa.me/5555991396093",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "milabcosmeticos@gmail.com",
      link: "mailto:milabcosmeticos@gmail.com",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg a Sex: 8h às 12h e 14h às 18:30\nSábado: 8h às 12h e 14h às 17h",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-white to-rose-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em contato
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Estamos prontos para atender você. Visite nossa loja ou entre em contato pelos nossos canais.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-300 via-rose-400 to-rose-300 mx-auto rounded-full mt-4" />
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-rose-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-muted-foreground hover:text-rose-600 transition-colors duration-200 whitespace-pre-line"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line">
                        {info.content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media & CTA */}
          <div className="bg-gradient-to-br from-rose-50 to-white p-8 md:p-12 rounded-2xl shadow-soft text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Siga-nos no Instagram
            </h3>
            <p className="text-muted-foreground mb-6">
              Acompanhe nossos lançamentos, promoções e dicas de beleza!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open("https://www.instagram.com/milacosmeticos_fx/", "_blank")}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Instagram className="w-5 h-5 mr-2" />
                @milacosmeticos_fx
              </Button>
              <Button
                onClick={() => window.open("https://wa.me/5555991396093", "_blank")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Fale conosco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
