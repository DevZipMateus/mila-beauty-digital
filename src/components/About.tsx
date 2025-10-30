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
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
              <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">2018</h3>
              <p className="text-muted-foreground leading-relaxed">
                Início da jornada com revenda de cosméticos durante a faculdade, transformando paixão em propósito.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <Store className="w-7 h-7 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">2022</h3>
              <p className="text-muted-foreground leading-relaxed">
                Abertura da Mila Beauty Cosméticos em Faxinal do Soturno, realizando o sonho de ter um espaço próprio.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Hoje</h3>
              <p className="text-muted-foreground leading-relaxed">
                Referência em beleza e cuidado na região, com atendimento diferenciado e produtos de qualidade.
              </p>
            </div>
          </div>

          {/* Story Text */}
          <div className="bg-gradient-to-br from-white to-rose-50 p-8 md:p-12 rounded-2xl shadow-soft animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Tudo começou em 2018, com a revenda de cosméticos como um hobby, enquanto eu iniciava a faculdade. 
              O que era apenas uma paixão por produtos de beleza foi crescendo junto com o amor pelas vendas — 
              e acabou se tornando muito mais do que uma renda extra.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Em 2022, ao concluir a faculdade, surgiu a oportunidade de transformar esse sonho em realidade: 
              nascia a Mila Beauty Cosméticos, em Faxinal do Soturno.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Desde então, seguimos com o propósito de oferecer um atendimento diferenciado e um espaço onde 
              cada pessoa encontre o que precisa para cuidar da autoestima, se sentir bem e presentear quem ama. 
              A cada dia, buscamos inovar, crescer e ser referência em beleza, cuidado e bem-estar na nossa cidade e região.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
