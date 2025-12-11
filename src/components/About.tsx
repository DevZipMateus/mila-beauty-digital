import { Calendar, Heart, Store } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossa história
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-300 via-rose-400 to-rose-300 mx-auto rounded-full" />
          </div>

          {/* Timeline Content */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="bg-gradient-to-br from-rose-50 to-white p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
              <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">2018</h3>
              <p className="text-muted-foreground leading-relaxed">
                Início da jornada com revenda de cosméticos durante a faculdade, transformando paixão em propósito.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-white p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <Store className="w-7 h-7 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">2022</h3>
              <p className="text-muted-foreground leading-relaxed">
                Abertura da Mila Beauty Cosméticos em Faxinal do Soturno, realizando o sonho de ter um espaço próprio.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-white p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Hoje</h3>
              <p className="text-muted-foreground leading-relaxed">
                Referência em beleza e cuidado na região, com atendimento diferenciado e produtos de qualidade.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
