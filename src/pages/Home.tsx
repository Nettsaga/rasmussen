import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { NavLink } from "react-router-dom";
import { ArrowRight, Award, MapPin, Calendar, Hammer, Wrench, ShieldCheck, Home as HomeIcon } from "lucide-react";
import RotatingHeroSection from "@/components/ui/rotating-hero-section";
import heroImage from "@/assets/hero-home.webp";
import newBuildImage from "@/assets/service-newbuild.webp";
import maintenanceImage from "@/assets/service-maintenance.webp";
import renovationImage from "@/assets/service-renovation.webp";
import { useSEO } from "@/hooks/use-seo";

const Home = () => {
  useSEO('home');
  
  // Font test - remove this after confirming font works
 

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

  const certifications = [
    { src: "/cert-1.png", alt: "Sertifisering 1" },
    { src: "/cert-3.png", alt: "Sertifisering 3" },
    { src: "/cert-2.webp", alt: "Sertifisering 2" },
  ];

  return (
    <div className="font-sans bg-background text-foreground">
      {/* Hero Section */}
      <RotatingHeroSection 
        images={[
          "/references/5.jpg",
          "/references/4.jpg", 
          "/references/6.jpg"
        ]}
        interval={6000}
      >
        <div className="container mx-auto px-4 text-center text-brand-foreground">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold">
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
              <Button asChild variant="outline" size="lg" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
                <NavLink to="/referanser">
                  Se referanser
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </RotatingHeroSection>

      {/* About Section (trimmed copy + placeholder image) */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <Badge className="mb-4 bg-accent text-accent-foreground">Om oss</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rasmussen & Skjelbred AS</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Byggmester i Stokke, Vestfold – etablert i 1986 og i dag 20 ansatte. Vi prioriterer kvalitet og godt
                håndverk, og har sentral godkjenning.
              </p>
              <p>
                Eneboliger er vår spesialitet, men vi tar oppdrag i alle størrelser. Med pålitelige samarbeidspartnere
                leverer vi totalentreprise fra grunnarbeid til nøkkelferdig.
              </p>
              <p>
                Tjenester: oppføring av hus og hytter, service og småjobber, rehabilitering av bolig.
              </p>
              <p>
                Som medlem av Mesterhus tilbyr vi både kataloghus og skreddersøm. Ta gjerne kontakt om tomter eller
                leiligheter i Stokke/Tønsberg – kanskje har vi et prosjekt som passer deg.
              </p>
            </div>
          
          </div>
          <div>
            <AspectRatio ratio={16 / 9}>
              <img
                src="/references/3.jpg"
                alt="Byggeprosjekt"
                className="h-full w-full object-cover rounded-lg"
              />
            </AspectRatio>
          </div>
         
        </div>
      </section>

      {/* Certifications (placed under About) */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="sr-only">Sertifiseringer</h2>
          <Card className="rounded-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">Sertifiseringer</CardTitle>
              <CardDescription>Dokumentasjon og miljøprofil</CardDescription>
            </CardHeader>
            <CardContent>
          <div className="flex flex-wrap items-center justify-center gap-20">
            {certifications.map((c, i) => (
              <img
                key={c.src}
                src={c.src}
                alt={c.alt}
                className={`h-20 md:h-28 lg:h-32 w-auto object-contain`}
                loading="lazy"
              />
            ))}
          </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Button asChild size="lg">
                <a
                  href="https://rapportering.miljofyrtarn.no/stats/162227"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Se hele rapporten
                </a>
              </Button>
            </CardFooter>
          </Card>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-brand text-brand-foreground hidden">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-foreground/10 blur-3xl" aria-hidden />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-background/10 blur-3xl" aria-hidden />
            <div className="relative px-8 py-12 md:px-12">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge className="bg-background text-foreground">Gratis befaring</Badge>
                <Badge className="bg-background text-foreground">Sentral godkjenning</Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center">Klar for å starte ditt prosjekt?</h2>
              <p className="text-lg opacity-90 text-center mt-3">
                La oss ta en uforpliktende prat om bolig, hytte eller rehabilitering.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                  <NavLink to="/kontakt">
                    Be om tilbud
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-brand-foreground text-brand-foreground hover:bg-brand-foreground/10">
                  <NavLink to="/referanser">Se referanser</NavLink>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm opacity-90">
                <div className="flex items-center gap-2"><Award className="h-4 w-4" /> 39 år erfaring</div>
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Mesterhus-medlem</div>
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Svar innen 1–2 dager</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications moved into About section above */}

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="border border-border bg-subtle rounded-2xl">
            <CardContent className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between p-8">
              <div className="space-y-2 text-center md:text-left">
                <Badge className="mb-2 w-fit bg-accent text-accent-foreground mx-auto md:mx-0">Tjenester</Badge>
                <CardTitle className="text-2xl md:text-3xl">Vil du utforske våre tjenester?</CardTitle>
                <CardDescription className="text-muted-foreground">Oppdag hvordan vi støtter nybygg, renovering og løpende vedlikehold.</CardDescription>
              </div>
              <Button asChild size="lg" variant="default" className="self-center md:self-auto">
                <NavLink to="/tjenester">
                  Vis tjenester
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

     

      {/* Why Choose Us */}
      {/* <section className="py-24 bg-subtle">
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
      </section> */}

      {/* CTA Section */}
      <section className="py-0">
        <div className="relative w-full overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6 hidden">
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
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/home-cta.jpg)" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-background/20" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 text-center text-foreground">
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

export default Home;
