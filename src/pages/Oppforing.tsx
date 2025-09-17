import HeroSection from "@/components/ui/hero-section";
import { useSEO } from "@/hooks/use-seo";

const Oppforing = () => {
  useSEO('oppforing');

  return (
    <div className="theme-light bg-background text-foreground">
      <HeroSection className="min-h-[40vh] py-24" backgroundImage="/references/6.jpg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Oppføring av hus og hytter</h1>
        </div>
      </HeroSection>

      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 space-y-8">
          <p>
            Velger du å bygge hus, gir du også deg selv muligheten til å skreddersy ditt drømmehjem. Vi i Rasmussen &amp; Skjelbred AS har mer enn 30 års erfaring med oppføring av hus og hytter i Vestfold. Vi holder i byggeprosjektet fra start til slutt, og gjør vårt ytterste for at du skal få en bolig eller hytte du trives i.
          </p>
          <div className="overflow-hidden rounded-2xl border border-border/40 bg-subtle">
            <img src="/services/1.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <h2 className="text-2xl font-semibold">Vi tar alle typer byggeoppdrag</h2>
          <p>
            Det kan virke overveldende å planlegge et byggeprosjekt på egenhånd,. Vi ønsker at våre kunder skal kunne komme til oss uavhengig av hvor langt i planleggingsprosessen de har kommet. Vi starter prosessen fra ditt utgangspunkt, så om du enda ikke har tomt og plantegninger, er ikke dette noen hindring. Vårt spesialfelt er oppføring av eneboliger, men vi tar på oss alle typer oppdrag innen bygg. Som Mesterhusbedrift har vi tilgang på en rekke modellhus fra Mesterhuskatalogen, men vi henter også inn arkitekt når dette er ønskelig. De færreste hus settes opp slik de fremstår i katalogene. Her vil som regel individuelle tilpasninger gjøres, slik at huset passer dine behov.
          </p>
          <h2 className="text-2xl font-semibold">Vi tar hånd om hele prosjektet</h2>
          <p>
            Å bygge hus er en stor og viktig prosess, og vi ønsker at du skal føle deg trygg og ivaretatt. Om ønskelig holder vi i prosjektet som hovedentreprenør. Du har da kun én aktør å forholde deg til, og vi koordinerer og henter inn nødvendige håndverkere. Det er ikke alltid så lett å vite hvordan en byggeprosess vil forløpe og hva som må gjøres til hvilken tid. Da er det godt å ha en erfaren byggmester med på laget, som vet hvilke forhold det må tas hensyn til.
          </p>
          <h2 className="text-2xl font-semibold">Hvorfor skal vi bygge ditt drømmehus?</h2>
          <p>
            Rasmussen &amp; Skjelbred AS er en pålitelig og stabil byggmesterbedrift, med erfarne håndverkere med bred fagkompetanse. Vi vektlegger god kommunikasjon med våre kunder, slik at det ferdige resultatet svarer til forhåpningene og forventningene. Vår lange og brede erfaring med oppføring av ulike bygg, gjør oss egnet til å komme med anbefalinger og råd, slik at du får realisert din tomts potensiale. Som Mesterhusbedrift med sentral godkjenning, kan du også føle deg trygg på at arbeidet som blir levert er av høy faglig kvalitet.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Oppforing;
