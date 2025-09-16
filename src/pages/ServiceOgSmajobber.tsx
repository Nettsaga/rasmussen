import { NavLink } from "react-router-dom";
import {
  Hammer,
  Wrench,
  Clock3,
  ClipboardList,
  ShieldCheck,
  Sparkles,
  Truck,
  BadgeCheck,
  Paintbrush,
  ArrowRight,
} from "lucide-react";
import HeroSection from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import maintenanceHero from "@/assets/service-maintenance.webp";
import craftImage from "@/assets/reference-4.webp";
import { useSEO } from "@/hooks/use-seo";

const heroStats = [
  {
    label: "Gjennomsnittlig leveringstid",
    value: "3-7 dager",
  },
  {
    label: "Tilbakevendende kunder",
    value: "86%",
  },
  {
    label: "År i tjeneste",
    value: "30+",
  },
];

const serviceCategories = [
  {
    title: "Dør- og vindusutskifting",
    description: "Tette tetninger, smidig drift og malerklare ferdigstillelser.",
    image: "/service/doors.jpg",
  },
  {
    title: "Eksteriørfornyelse",
    description: "Kledningsreparasjoner, terrasseoppgraderinger og fasadeoppussing.",
    image: "/service/exterior.jpg",
  },
  {
    title: "Interiørdetaljering",
    description: "Skreddersydde hyller, lister-oppgraderinger og akustiske panel-installasjoner.",
    image: "/service/interior.jpg",
  },
  {
    title: "Vedlikeholdsredning",
    description: "Punktliste-avslutninger, sesongforberedelser og nødfikser.",
     image: "/service/maintenance.jpg",
  },
];

const responseWorkflow = [
  {
    icon: <ClipboardList className="h-5 w-5 text-primary" />,
    title: "Del ønskelisten",
    detail: "Send over en rask beskrivelse, skisser eller bilder. Vi avklarer omfanget samme dag.",
  },
  {
    icon: <Clock3 className="h-5 w-5 text-primary" />,
    title: "Lås inn timing",
    detail: "Vi reserverer et mannskap og bekrefter når materialer og tilgang er klare til å gå.",
  },
  {
    icon: <Truck className="h-5 w-5 text-primary" />,
    title: "Utfør raskt",
    detail: "Arbeidet fortsetter på en tett tidsplan med fremdriftsmeldinger og byggeplassbilder.",
  },
];

const toolkit = [
  {
    icon: <Hammer className="h-5 w-5 text-primary" />,
    title: "Strukturelle fikser",
    description: "Stendvegg-justeringer, forsterkninger og rammekorreksjoner utført internt.",
  },
  {
    icon: <Paintbrush className="h-5 w-5 text-primary" />,
    title: "Overflateperfeksjon",
    description: "Forberedelse og ferdigstillelse som etterlater overflater klare for maling eller beising.",
  },
  {
    icon: <Wrench className="h-5 w-5 text-primary" />,
    title: "Hardware-installasjoner",
    description: "Armaturer, tilbehør og hardware-utskiftninger fullstendig justert og testet.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5 text-primary" />,
    title: "Sertifiserte partnere",
    description: "Elektrikere og rørleggere vi stoler på stiger inn når lisenser kreves.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-primary" />,
    title: "Sikkerhet først",
    description: "Byggeplass beskyttet, støv kontrollert og overholdelse dokumentert hver dag.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-primary" />,
    title: "Ren overlevering",
    description: "Vi etterlater rom ryddig, gir bilder og går gjennom det som ble fullført.",
  },
];

const ServiceOgSmajobber = () => {
  useSEO('serviceOgSmajobber');
  
  return (
    <div className="theme-light bg-white text-foreground">
      <HeroSection className="min-h-[45vh] py-24" backgroundImage="/references/7.jpg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl space-y-8">
            
            <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-end">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold pt-8">Service og småjobber</h1>
                <p className="text-lg white ">
                   Ingen jobb er for liten når kvalitet betyr noe.
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </HeroSection>

      <section className="py-20">
        <div className="container mx-auto px-4 space-y-20">
          <Card className="overflow-hidden border border-border/60 bg-white shadow-sm">
            <CardContent className="space-y-6 p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">Det vi takler</p>
                  <h2 className="text-3xl font-semibold text-foreground">Profesjonell oppmerksomhet for jobbene som ikke kan vente</h2>
                  <p className="text-base text-muted-foreground">
                    Vi ringgjerder kapasitet for små oppdrag så du ikke trenger å stå i kø bak store byggeprosjekter. Velg beskrivelsen og vi bringer de riktige spesialistene.
                  </p>
                </div>
                
              </div>
              <div className="-mx-4 overflow-x-auto pb-4">
                <div className="flex min-w-full gap-6 px-4">
                  {serviceCategories.map((category) => (
                    <div
                      key={category.title}
                      className="group relative h-60 w-72 shrink-0 overflow-hidden rounded-3xl border border-border/60 bg-cover bg-center shadow-sm transition-transform duration-300 hover:-translate-y-1"
                      style={{ backgroundImage: `url(${category.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/35" aria-hidden />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                      <div className="relative flex h-full flex-col justify-end space-y-2 p-5 text-white">
                        <h3 className="text-lg font-semibold">{category.title}</h3>
                        <p className="text-sm text-white/80">{category.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-foreground">A rapid response workflow that keeps you informed</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Rasmussen & Skjelbred AS has more than 30 years of construction experience. We are a local company 
                  with local knowledge, which provides security when we take care of your construction project.
                </p>
                <p>
                  With our experience as a general contractor for housing projects, we have good routines for 
                  coordinating and administering different types of work. We have a wide network of partners and 
                  bring in specialists when necessary.
                </p>
                <p>
                  As a customer, you only deal with us, which makes it easier for you to have an overview of 
                  the status of the project.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border/60 bg-subtle shadow-xl">
                <img
                  src="/references/14.jpg"
                  alt="Craft team completing a small assignment"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

 
        </div>
      </section>
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
          <div className="absolute inset-0 bg-background/30" aria-hidden />
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

export default ServiceOgSmajobber;
