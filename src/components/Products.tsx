import { Sparkles, Droplet, Scissors, Heart, Gift, Tag } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Sparkles,
      title: "Perfumaria",
      description: "Fragrâncias masculinas, femininas, body splash e desodorantes das melhores marcas.",
      color: "from-rose-100 to-rose-50",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      icon: Heart,
      title: "Maquiagens",
      description: "Produtos de maquiagem para realçar sua beleza natural com qualidade e variedade.",
      color: "from-pink-100 to-pink-50",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      icon: Scissors,
      title: "Cabelos",
      description: "Shampoos, condicionadores, máscaras e finalizadores para todos os tipos de cabelo.",
      color: "from-purple-100 to-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Droplet,
      title: "Skincare",
      description: "Cuidados completos para a pele com produtos de alta qualidade e eficácia.",
      color: "from-blue-100 to-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Gift,
      title: "Presentes",
      description: "Kits especiais masculinos, femininos e infantis para todas as ocasiões.",
      color: "from-amber-100 to-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      icon: Tag,
      title: "Promoções",
      description: "Ofertas especiais e lançamentos exclusivos para você economizar com qualidade.",
      color: "from-green-100 to-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-gradient-to-b from-white via-rose-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos produtos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Produtos de qualidade para mulheres, homens e crianças. Cuidado completo para toda a família.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-300 via-rose-400 to-rose-300 mx-auto rounded-full mt-4" />
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${product.color} p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in-up group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 ${product.iconBg} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className={`w-7 h-7 ${product.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <p className="text-muted-foreground text-lg mb-4">
              Visite nossa loja ou entre em contato para conhecer todos os nossos produtos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
