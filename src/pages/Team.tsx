import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { ArrowRight, Mail, Phone } from "lucide-react";
import HeroSection from "@/components/ui/hero-section";
import heroImage from "@/assets/hero-home.webp";
import { useSEO } from "@/hooks/use-seo";

const Team = () => {
  useSEO('team');
  
  const teamMembers = [
    {
      name: "Sverre Rasmussen",
      title: "Daglig leder",
      company: "Rasmussen & Skjelbred A/S",
      phone: "909 96 432",
      email: "sverre@r-s.no",
      image: "/team/sverre-sh.webp",
    },
    {
      name: "Kai Roger Skjelbred",
      title: "Byggmester",
      company: "Rasmussen & Skjelbred A/S",
      phone: "909 96 442",
      email: "kai@r-s.no",
      image: "/team/kai-sh.webp",
    },
    {
      name: "Terje Magnus Bråten",
      title: "Medarbeider",
      company: "Rasmussen & Skjelbred A/S",
      phone: "970 69 221",
      email: "terje@r-s.no",
      image: "/team/terje-sh.webp",
    },
    {
      name: "Martin Wold",
      title: "Medarbeider",
      company: "Rasmussen & Skjelbred A/S",
      phone: "979 76 175",
      email: "martin@r-s.no",
      image: "/team/martin-sh.webp",
    },
    {
      name: "Kim Andre Norheim",
      title: "Medarbeider",
      company: "Rasmussen & Skjelbred A/S",
      phone: "975 02 942",
      email: "kim@r-s.no",
      image: "/team/kimfranett-sh.webp",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection className="min-h-[50vh]" backgroundImage="/references/9.jpg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Vårt team
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Møt de erfarne fagfolkene bak Rasmussen & Skjelbred A/S. 
            Vårt team samler tiår med byggeerfaring og lokal kunnskap 
            for å levere eksepsjonelle resultater for hvert prosjekt.
          </p>
        </div>
      </HeroSection>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Rasmussen & Skjelbred A/S
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Med over 30 års byggeerfaring er vårt team dedikert til 
              å levere kvalitetshåndverk og eksepsjonell service til kunder i hele Vestfold.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>909 96 432</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@rasmussen-skjelbred.no</span>
              </div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name} 
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border-gray-200 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-primary mb-2">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{member.title}</p>
                  <p className="text-xs text-muted-foreground mb-4">{member.company}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-primary justify-center space-x-2 text-sm">
                      <Phone className="h-3 w-3" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center text-primary justify-center space-x-2 text-sm">
                      <Mail className="h-3 w-3" />
                      <span className="text-xs">{member.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold">Klar til å jobbe med vårt team?</h2>
            <p className="text-xl opacity-90 mt-3">Kontakt oss i dag for å diskutere ditt byggeprosjekt med våre erfarne fagfolk.</p>
            <Button asChild size="lg" variant="default" className="mt-6">
              <NavLink to="/kontakt">
                Kontakt oss i dag
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
