import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { ArrowRight, Award, MapPin, Calendar, Hammer, Wrench, Home as HomeIcon } from "lucide-react";
import HeroSection from "@/components/ui/hero-section";
import heroImage from "@/assets/hero-home.webp";
import newBuildImage from "@/assets/service-newbuild.webp";
import maintenanceImage from "@/assets/service-maintenance.webp";
import renovationImage from "@/assets/service-renovation.webp";

const Home = () => {
  const services = [
    {
      title: "Oppføring",
      description: "Vi bygger ditt drømmehus fra grunn av med fokus på kvalitet og bærekraft.",
      image: newBuildImage,
      path: "/tjenester/oppforing",
      icon: <HomeIcon className="h-6 w-6" />,
    },
    {
      title: "Service & småjobber",
      description: "Vedlikehold, reparasjoner og mindre tilbygg utført med håndverksstolthet.",
      image: maintenanceImage,
      path: "/tjenester/service-og-smajobber",
      icon: <Wrench className="h-6 w-6" />,
    },
    {
      title: "Rehabilitering",
      description: "Oppgradering og renovering av eksisterende bygg med moderne løsninger.",
      image: renovationImage,
      path: "/tjenester/rehabilitering",
      icon: <Hammer className="h-6 w-6" />,
    },
  ];

  const whyUs = [
    {
      icon: <Award className="h-8 w-8 text-brand" />,
      title: "Mesterbrev siden 1986",
      description: "39 års erfaring med håndverkstradisjon og faglig stolthet i hvert prosjekt.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-brand" />,
      title: "Lokal ekspertise",
      description: "Grundig kjennskap til Vestfold og lokale byggeskikker og regelverk.",
    },
    {
      icon: <Hammer className="h-8 w-8 text-brand" />,
      title: "Kvalitetsmaterialer",
      description: "Vi bruker kun de beste materialene for varige og holdbare løsninger.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection backgroundImage={heroImage}>
        <div className="container mx-auto px-4 text-center text-background">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Byggmester i Vestfold siden 1986
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Fra fundamentet til taket - vi leverer håndverksstolthet og kvalitet i hvert eneste prosjekt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button asChild size="lg" className="bg-brand hover:bg-brand/90 text-brand-foreground">
                <NavLink to="/kontakt">
                  Kontakt oss
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-background text-background hover:bg-background hover:text-foreground">
                <NavLink to="/referanser">
                  Se referanser
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </HeroSection>

      {/* Trust Band */}
      <section className="py-16 bg-subtle">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-brand" />
              <span className="font-semibold">Mesterbrev</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-brand" />
              <span className="font-semibold">Etablert 1986</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-brand" />
              <span className="font-semibold">Vestfold</span>
            </div>
            <Badge variant="outline" className="border-brand text-brand">
              Mesterhus
            </Badge>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Våre tjenester
            </h2>
            <p className="text-lg text-muted-foreground">
              Fra oppføring av nye hjem til vedlikehold og rehabilitering - vi er din totalleverandør i Vestfold.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button asChild variant="outline" className="w-full group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                    <NavLink to={service.path}>
                      Les mer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </NavLink>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hvorfor velge oss?
            </h2>
            <p className="text-lg text-muted-foreground">
              Med nærmere fire tiår i byggebransjen har vi opparbeidet oss solid erfaring og et sterkt rykte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, index) => (
              <div 
                key={item.title} 
                className="text-center space-y-4 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center">
                  <div className="p-4 bg-background rounded-full shadow-sm">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand text-brand-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Klar for å starte ditt prosjekt?
            </h2>
            <p className="text-xl opacity-90">
              Kontakt oss i dag for en uforpliktende samtale om dine byggeplaner.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
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

export default Home;