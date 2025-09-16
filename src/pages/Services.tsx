import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/ui/hero-section";
import newBuildImage from "@/assets/service-newbuild.webp";
import maintenanceImage from "@/assets/service-maintenance.webp";
import renovationImage from "@/assets/service-renovation.webp";
import heroImage from "@/assets/hero-home.webp";
import { useSEO } from "@/hooks/use-seo";

const Services = () => {
  useSEO('services');
  
  const services = [
    "Oppføring av hus og hytter",
    "Service og småjobber", 
    "Rehabilitering av bolig",
    "Garage",
    "Barnehager og skoler",
    "Leilighetskompleks",
    "Nøkkelferdig hus",
    "Ombygging"
  ];

  const serviceCards = [
    {
      title: "Oppføring av hus og hytter",
      image: "/services/1.jpg",
    },
    {
      title: "Service og småjobber",
      image: "/services/2.jpg",
    },
    {
      title: "Rehabilitering av bolig",
      image: "/services/3.jpg",
    },
    {
      title: "Garage",
      image: "/services/4.jpg", // Using newBuildImage as placeholder
    },
    {
      title: "Barnehager og skoler",
      image: "/services/5.jpg", // Using newBuildImage as placeholder
    },
    {
      title: "Leilighetskompleks",
      image: "/services/6.jpg", // Using newBuildImage as placeholder
    },
    {
      title: "Nøkkelferdig hus",
      image: "/services/7.jpg",
    },
    {
      title: "Ombygging",
      image: "/services/8.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection className="min-h-[50vh]" backgroundImage="/references/1.jpg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">
            Våre byggetjenester
          </h1>
          
        </div>
      </HeroSection>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Vi har mange ulike prosjekter bak oss, og tilbyr blant annet:
            </h2>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {serviceCards.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border-gray-200">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Location Info */}
          <div className="text-center">
            <p className="font-semibold text-brand text-lg">
              Vi holder til i Stokke og leverer våre byggetjenester til hele Vestfold.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-0">
        <div className="relative w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/home-cta.jpg)" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-white/80" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 text-center text-gray-900">
            <h2 className="text-3xl md:text-4xl font-bold">Klar for å starte ditt prosjekt?</h2>
            <p className="text-xl opacity-90 mt-3">Kontakt oss i dag for en uforpliktende samtale om dine byggeplaner.</p>
            <Button asChild size="lg" variant="default" className="mt-6">
              <NavLink to="/kontakt">
                Be om tilbud
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
