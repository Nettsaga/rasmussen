import HeroSection from "@/components/ui/hero-section";
import { useSEO } from "@/hooks/use-seo";

const ServiceOgSmajobber = () => {
  useSEO('serviceOgSmajobber');

  return (
    <div className="theme-light bg-background text-foreground">
      <HeroSection className="min-h-[40vh] py-24" backgroundImage="/references/7.jpg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Service og småjobber</h1>
        </div>
      </HeroSection>

      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 space-y-8">
          <p>
            Iblant kan det være vanskelig å vite hvor man skal lete, når man har mindre prosjekter som skal utføres.
            Ved å hente inn en byggmester til å utføre oppdraget, vet du at du får et resultat som holder høy standard.
            Vi tar på oss mindre prosjekter av innen bygg og vedlikehold, for kunder i Vestfold.
          </p>
          <div className="overflow-hidden rounded-2xl border border-border/40 bg-subtle">
            <img src="/services/2.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <h2 className="text-2xl font-semibold">Vi kan utføre mindre oppdrag på kort varsel</h2>
          <p>
            Mange tenker kanskje at en Mesterhusbedrift i hovedsak tar på seg større byggeprosjekter. Vi har til enhver tid holdt av ressurser, slik at det er mulig for oss å ta på oss mindre oppdrag og prosjekter på kort varsel. For oss er ingen jobb for liten. Dette kan være oppdrag som tar alt fra noen få dager til noen uker, og inkluderer alle oppgaver som en byggmester typisk kan utføre. Enten du vil ha vinduer eller dører skiftet eller har en vegg som skulle vært kledd, kan du kontakte oss for profesjonell og effektiv utførelse av arbeidet.
          </p>
          <h2 className="text-2xl font-semibold">Erfaren og kompetent byggmester</h2>
          <p>
            Rasmussen &amp; Skjelbred AS har mer enn 30 års byggmestererfaring. Gjennom disse årene har vi opparbeidet oss bred faglig kompetanse. Vi er en lokal bedrift med lokal kjennskap, noe som er en trygghet for deg når vi tar hånd om ditt byggeprosjekt. Med vår erfaring som hovedentreprenør for husprosjekter, har vi gode rutiner for koordinering og administrering av ulike typer arbeider. Vi har et bredt nettverk av samarbeidspartnere, og henter inn spesialister fra andre fag når det er nødvendig. Som kunde forholder du deg kun til oss, noe som gjør at det blir enklere for deg å ha oversikt over status på prosjektet.
          </p>
          <p>Har du et mindre oppdrag du gjerne skulle hatt utført? Kontakt oss, så tar vi en byggeprat.</p>
        </div>
      </section>
    </div>
  );
};

export default ServiceOgSmajobber;
