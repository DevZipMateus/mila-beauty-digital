import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-background to-rose-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossa Galeria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Momentos especiais e nossa equipe dedicada à sua beleza
          </p>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card 
                        className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden"
                        onClick={() => setSelectedImage(image)}
                      >
                        <CardContent className="p-0">
                          <div className="aspect-square relative overflow-hidden">
                            <img
                              src={image}
                              alt={`Galeria Mila Beauty ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-0 border-0 bg-transparent">
                      <div className="relative w-full">
                        <img
                          src={image}
                          alt={`Galeria Mila Beauty ${index + 1}`}
                          className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
