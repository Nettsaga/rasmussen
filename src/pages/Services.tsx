import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/ui/hero-section";
import { useSEO } from "@/hooks/use-seo";

const Services = () => {
  useSEO('services');

  const serviceCards = [
    {
      title: "Oppføring av hus og hytter",
      image: "/services/1.jpg",
      description: "Skreddersydde boliger og fritidsboliger levert med solide materialer, moderne løsninger og tett oppfølging hele veien.",
      to: "/tjenester/oppforing",
    },
    {
      title: "Service og småjobber",
      image: "/services/2.jpg",
      description: "Alt fra mindre reparasjoner til løpende vedlikehold. Vi løser oppgaver raskt og ryddig for både hjem og hytte.",
      to: "/tjenester/service-og-smajobber",
    },
    {
      title: "Rehabilitering av bolig",
      image: "/services/3.jpg",
      description: "Oppgrader hjemmet ditt med energieffektive og funksjonelle løsninger som bevarer karakteren og øker verdien.",
      to: "/tjenester/rehabilitering",
    },
    {
      title: "Garage",
      image: "/services/4.jpg",
      description: "Fra integrerte dobbeltgarasjer til kompakte carporter – vi planlegger og bygger praktiske løsninger for kjøretøyene dine.",
    },
    {
      title: "Barnehager og skoler",
      image: "/services/5.jpg",
      description: "Vi bygger trygge og inspirerende læringsmiljøer med fokus på robuste materialer og fleksible planløsninger.",
    },
    {
      title: "Leilighetskompleks",
      image: "/services/6.jpg",
      description: "Effektiv prosjektstyring og kvalitet i alle ledd for større boligprosjekter med mange boenheter.",
    },
    {
      title: "Nøkkelferdig hus",
      image: "/services/7.jpg",
      description: "Vi leverer komplette nøkkelferdige boliger – du flytter rett inn i et ferdigstilt hjem tilpasset dine behov.",
    },
    {
      title: "Ombygging",
      image: "/services/8.jpg",
      description: "Tilpass boligen til nye behov med smart ombygging, åpne planløsninger og bedre utnyttelse av arealet.",
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
            {serviceCards.map((service) => (
              <Card
                key={service.title}
                className="group flex h-full flex-col overflow-hidden border-border/60 transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <CardHeader className="flex-1 space-y-3">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0">
                    {service.to ? (
                      <Button
                        asChild
                        variant="link"
                        className="px-0 text-brand hover:text-brand/80"
                      >
                        <NavLink to={service.to} className="inline-flex items-center gap-2">
                          Les mer
                          <ArrowRight className="h-4 w-4" />
                        </NavLink>
                      </Button>
                    ) : (
                      <Button variant="link" className="px-0 text-muted-foreground" disabled>
                        Les mer (kommer snart)
                      </Button>
                    )}
                  </CardFooter>
                </div>
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
