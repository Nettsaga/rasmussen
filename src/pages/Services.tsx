import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { ArrowRight, Home as HomeIcon, Wrench, Hammer } from "lucide-react";
import newBuildImage from "@/assets/service-newbuild.webp";
import maintenanceImage from "@/assets/service-maintenance.webp";
import renovationImage from "@/assets/service-renovation.webp";

const Services = () => {
  const services = [
    "Construction of houses and cottages",
    "Service and small jobs", 
    "Residential rehabilitation",
    "Garage",
    "Kindergartens and schools",
    "Apartment complex",
    "Turnkey house",
    "Remodeling"
  ];

  const mainServices = [
    {
      title: "Oppføring",
      subtitle: "Nye hjem og hytter",
      description: "Vi er din totalleverandør for oppføring av eneboliger og fritidsboliger. Med lang erfaring som byggmester i Vestfold leverer vi energieffektive og moderne boliger tilpasset dine behov og ønsker. Vi samarbeider tett med arkitekter og følger prosjektet fra tegning til innflytting.",
      features: [
        "Totalleverandør tjenester",
        "Energieffektive løsninger", 
        "Samarbeid med arkitekter",
        "Prosjektledelse fra start til slutt"
      ],
      image: newBuildImage,
      path: "/tjenester/oppforing",
      icon: <HomeIcon className="h-6 w-6" />,
    },
    {
      title: "Service & småjobber",
      subtitle: "Vedlikehold og reparasjoner",
      description: "Uansett om det gjelder mindre reparasjoner, vedlikehold eller småjobber rundt hjemmet, tar vi oppdraget med samme faglige stolthet som våre store prosjekter. Rask respons og kvalitetsarbeid er vårt varemerke for alle typer serviceoppdrag.",
      features: [
        "Rask respons på henvendelser",
        "Alle typer reparasjoner",
        "Vedlikehold av bygninger",
        "Mindre tilbygg og endringer"
      ],
      image: maintenanceImage,
      path: "/tjenester/service-og-smajobber",
      icon: <Wrench className="h-6 w-6" />,
    },
    {
      title: "Rehabilitering",
      subtitle: "Oppgradering og renovering",
      description: "Vi gir nytt liv til eksisterende bygninger gjennom omfattende rehabiliteringsprosjekter. Fra utskifting av tak og fasader til totalrenovering av interiør - vi kombinerer moderne teknikk med respekt for bygningens opprinnelige karakter.",
      features: [
        "Totalrenovering av interiør",
        "Fasade- og takarbeider",
        "Energioppgradering",
        "Tilbygg og utvidelser"
      ],
      image: renovationImage,
      path: "/tjenester/rehabilitering",
      icon: <Hammer className="h-6 w-6" />,
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our construction services
          </h1>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              If you are looking for a construction company you can trust, you have come to the right place. 
              We have many years of experience and skilled professionals who are passionate about the profession. 
              We emphasize good and close dialogue with our customers, and ensure that you as a customer have 
              a full overview of the process so that you do not have to be afraid of being surprised.
            </p>
            <div>
              <p className="font-semibold text-foreground mb-4">
                We have many different projects behind us, and offer, among other things:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left max-w-2xl mx-auto">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="font-semibold text-brand">
              We are located in Stokke and deliver our construction services to all of Vestfold.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-brand/10 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  asChild 
                  className="w-full group-hover:bg-brand group-hover:text-brand-foreground transition-colors"
                >
                  <NavLink to={service.path}>
                    Les mer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </NavLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-subtle rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Usikker på hvilken tjeneste du trenger?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Kontakt oss for en uforpliktende samtale. Vi hjelper deg med å finne den beste løsningen for ditt prosjekt.
          </p>
          <Button asChild size="lg">
            <NavLink to="/kontakt">
              Kontakt oss i dag
              <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;