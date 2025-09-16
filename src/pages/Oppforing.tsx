import { NavLink } from "react-router-dom";
import HeroSection from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import newBuildImage from "@/assets/service-newbuild.webp";
import planningImage from "@/assets/plots-banner.webp";
import teamImage from "@/assets/team-header.webp";
import { useSEO } from "@/hooks/use-seo";

const Oppforing = () => {
  useSEO('oppforing');
  
  return (
    <div className="theme-light bg-white text-foreground">
      <HeroSection className="min-h-[45vh] py-24" backgroundImage="/references/6.jpg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            
            <h1 className="text-4xl md:text-5xl font-bold">
              Oppføring av hus og hytter
            </h1>
            <p className="text-lg">
              Skreddersy ditt drømmehus med en partner som følger deg gjennom hvert steg av byggeprosessen.
            </p>
          </div>
        </div>
      </HeroSection>

      <section className="py-20">
        <div className="container mx-auto px-4 space-y-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <h2 className="text-2xl font-semibold text-foreground">
                Fra idé til nøkkelferdig hjem
              </h2>
              <p>
                Det kan føles overveldende å planlegge et byggeprosjekt på egen hånd, så vi stiger inn uansett hvor du er i prosessen.
              </p>
              <p>
                Ingen tomt eller plantegning ennå? Vi kartlegger løsninger med deg, finpusser Mesterhus-modeller, eller henter inn en arkitekt for å skreddersy et hjem som passer din familie og tomten din.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
                  Gjennomsiktig prosjektplanlegging fra tillatelser til ferdigstillelse.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
                  Tilgang til Mesterhus katalogmodeller med tilpassede tilpasninger.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
                  Dedikert veiledning så hver beslutning støtter ditt drømmehus.
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-subtle shadow-lg">
                <img
                  src="/references/3.jpg"
                  alt="Arkitektplaner for et nybyggprosjekt"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative order-2 overflow-hidden rounded-2xl border border-border/60 bg-subtle shadow-lg md:order-1">
              <img
                src="/references/6.jpg"
                alt="Rasmussen & Skjelbred byggeteam på byggeplass"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="order-1 space-y-5 text-base leading-relaxed text-muted-foreground md:order-2">
              <h2 className="text-2xl font-semibold text-foreground">
                Pålitelige byggmestere i Vestfold
              </h2>
              <p>
                Rasmussen & Skjelbred AS er en pålitelig byggepartner med erfarne håndverkere og bred faglig ekspertise.
              </p>
              <p>
                Vi holder kommunikasjonen klar, tilbyr ærlige anbefalinger, og sørger for at hver bygning møter byggmesterstandarder og dine forventninger.
              </p>
            </div>
          </div>

          <Card className="border border-border/60 bg-white">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1.1fr_1fr]">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  Hvorfor bygge med Rasmussen & Skjelbred?
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>30+ års erfaring med skreddersydde hus, hytter og større utviklingsprosjekter i hele Vestfold.</li>
                  <li>En dedikert hovedentreprenør som koordinerer pålitelige håndverkere og leverandører.</li>
                  <li>Energibesparende fokus med tidslinjer og budsjetter du kan stole på.</li>
                </ul>
              </div>
              <div className="flex flex-col items-start justify-between gap-6 rounded-xl bg-subtle p-6 shadow-sm">
                <p className="text-sm text-muted-foreground">
                  Klar til å starte? Del dine ideer, skisser, eller bare drømmen - vi hjelper deg med å forme prosjektet og få byggearbeidet i gang.
                </p>
                <Button asChild size="lg">
                  <NavLink to="/kontakt">
                    Snakk med oss
                  </NavLink>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Oppforing;



