import { Target, Heart, Users, Shield, Handshake, Sparkles } from "lucide-react";

const Values = () => {
  const mission = {
    icon: Target,
    title: "Missão",
    description: "Proporcionar uma experiência completa em cuidados pessoais — com produtos de qualidade para mulheres, homens e crianças, além de opções de presentes para todas as ocasiões. Acreditamos que se cuidar é um gesto de amor próprio e também uma forma de demonstrar carinho por quem a gente ama.",
  };

  const vision = {
    icon: Sparkles,
    title: "Visão",
    description: "Ser referência em beleza, cuidado e bem-estar na nossa região, oferecendo produtos que inspirem confiança e valorizem a autoestima de todas as pessoas.",
  };

  const values = [
    {
      icon: Heart,
      title: "Autoestima",
      description: "Acreditamos que todos merecem se sentir bem com quem são.",
    },
    {
      icon: Handshake,
      title: "Cuidado",
      description: "Oferecemos atendimento atencioso e produtos pensados para cada necessidade.",
    },
    {
      icon: Users,
      title: "Diversidade",
      description: "Temos opções para todos os estilos, idades e momentos.",
    },
    {
      icon: Shield,
      title: "Confiança",
      description: "Trabalhamos com marcas e fornecedores que prezam pela qualidade e transparência.",
    },
  ];

  return (
    <section id="valores" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Missão, visão e valores
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-300 via-rose-400 to-rose-300 mx-auto rounded-full" />
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="bg-gradient-to-br from-rose-50 to-white p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
              <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <mission.icon className="w-7 h-7 text-rose-600" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {mission.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {mission.description}
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-white p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <vision.icon className="w-7 h-7 text-rose-600" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {vision.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {vision.description}
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-6 md:mb-8 animate-fade-in">
              Nossos valores
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-rose-50 p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-rose-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
