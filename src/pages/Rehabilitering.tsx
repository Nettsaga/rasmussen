import { NavLink } from "react-router-dom";
import { Hammer, Home, Expand, CheckCircle2, Sparkles } from "lucide-react";
import HeroSection from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import renovationHero from "@/assets/service-renovation.webp";
import interiorImage from "@/assets/reference-5.webp";
import layoutImage from "@/assets/reference-2.webp";
import { useSEO } from "@/hooks/use-seo";

const focusAreas = [
  {
    icon: <Hammer className="h-5 w-5 text-primary" />,
    title: "Interiørfornyelse",
    description: "Skreddersydde kjøkken, bad og oppholdsområder med materialer som passer til hverdagen.",
    image: "/rehabilitation/interior.jpg",
  },
  {
    icon: <Home className="h-5 w-5 text-primary" />,
    title: "Layout-omtenkning",
    description: "Åpne opp vegger, omkonfigurer rom og optimaliser lagring for smartere flyt.",
    image: "/rehabilitation/layout.jpg",
  },
  {
    icon: <Expand className="h-5 w-5 text-primary" />,
    title: "Tilbygg & loft",
    description: "Planlegg tilbygg som føles originale mens du legger til plassen du mangler.",
    image: "/rehabilitation/extension.jpg",
  },
];

const timeline = [
  {
    step: "Oppdag",
    detail: "Vi møtes på stedet, fanger opp det som fungerer, og lister opp smertepunkter pluss ønskeliste-oppgraderinger.",
  },
  {
    step: "Design",
    detail: "Sammen justerer vi layout-endringer, ferdigstillelse og eventuell arkitekt- eller spesialistinvolvering.",
  },
  {
    step: "Bygg",
    detail: "Våre mestergodkjente mannskap koordinerer fag, tillatelser og kvalitetskontroller til overlevering.",
  },
];

const serviceBadges = [
  "Strukturelle endringer",
  "Energioppgraderinger",
  "Vindusutskifting",
  "Taklegging",
  "Isolasjon",
  "Prosjektledelse",
  "Pålitelige partnere",
];

const Rehabilitering = () => {
  useSEO('rehabilitering');
  
  return (
    <div className="theme-light bg-white text-foreground">
      <HeroSection className="min-h-[45vh] py-24" backgroundImage="/references/8.jpg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
           
            <h1 className="text-4xl md:text-5xl font-bold pt-8">
              Rehabilitering av bolig
            </h1>
            <p className="text-lg text-white">
              Renover huset eller hytta du allerede elsker med en partner som balanserer designinnsikt, eksperthåndverk og selvsikker koordinering.
            </p>
          </div>
        </div>
      </HeroSection>

      <section className="py-20">
        <div className="container mx-auto px-4 space-y-20">
          <Card className="overflow-hidden border border-border/60 bg-white shadow-sm">
            <CardContent className="grid gap-10 p-8 lg:grid-cols-[1.35fr_1fr] lg:items-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">Renoveringsspillbok</p>
                  <h2 className="text-3xl font-semibold text-foreground">
                    Start der du er, avslutt med rom som endelig passer
                  </h2>
                  <p className="text-base text-muted-foreground">
                    Noen ganger er det en enkelt vegg, andre ganger en fullstendig layout-omtenkning. Rasmussen & Skjelbred AS hjelper deg med å navigere begge deler - med mer enn 30 års renoveringserfaring i hele Vestfold.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {serviceBadges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/60 bg-subtle p-5">
                    <p className="text-sm font-semibold text-foreground">Lite eller stort omfang</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Fra raske vindusutskiftninger til fullstendig omkonfigurering, tilpasser vi mannskapet, tidsplanen og budsjettet.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-subtle p-5">
                    <p className="text-sm font-semibold text-foreground">Ett kontaktpunkt</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Du forholder deg til oss - vårt nettverk av pålitelige spesialister kobles inn når det trengs og holder seg koordinert.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border/60 bg-subtle shadow-xl">
                  <img
                    src="/references/1.jpg"
                    alt="Arkitekt som skisserer en fornyet plantegning"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 left-1/2 w-11/12 -translate-x-1/2 rounded-2xl border border-border/60 bg-white/95 p-5 shadow-lg backdrop-blur">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-1 h-5 w-5 text-primary" />
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="font-semibold text-foreground">Trenger noe mindre?</p>
                      <p>
                        La oss også takle vedlikehold og raske gevinster-
                        <NavLink to="/tjenester/service-og-smajobber" className="text-primary underline-offset-4 hover:underline">
                          utforsk våre service & småjobber
                        </NavLink>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((item) => (
              <Card key={item.title} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border-gray-200">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      {item.icon}
                    </span>
                    <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        
          <Card className="overflow-hidden border border-border/60 bg-white shadow-sm">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1.25fr_1fr] md:items-center">
              <div className="space-y-4 text-muted-foreground">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Imagine what's next</p>
                <h2 className="text-2xl font-semibold text-foreground">
                  Ready to walk through possibilities for your renovation?
                </h2>
                <p className="text-sm">
                  Share a few details and we will schedule a free inspection, outline the scope, and bring inspiration that fits your timeline and budget.
                </p>
                <Button asChild size="lg" className="mt-2 w-full sm:w-auto">
                  <NavLink to="/kontakt">Book a renovation chat</NavLink>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border/60 bg-subtle shadow-xl">
                  <img
                    src="/references/7.jpg"
                    alt="Light-filled living room after renovation"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Rehabilitering;






