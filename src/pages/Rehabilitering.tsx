import HeroSection from "@/components/ui/hero-section";
import { useSEO } from "@/hooks/use-seo";

const Rehabilitering = () => {
  useSEO('rehabilitering');

  return (
    <div className="theme-light bg-background text-foreground">
      <HeroSection className="min-h-[40vh] py-24" backgroundImage="/references/8.jpg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Rehabilitering av bolig</h1>
        </div>
      </HeroSection>

      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 space-y-8">
          <p>
            Når man kjøper en ny bolig, er det sjelden at alle løsninger er akkurat slik man ønsker dem. Det vil også dukke opp et og annet man ønsker å utbedre eller forandre på når man har hatt en bolig over lengre tid. Vi i Rasmussen &amp; Skjelbred AS utfører utvendig og innvendig rehabilitering av bolig. Våre kompetente fagarbeidere har lang og bred erfaring, og hjelper deg gjerne med å komme frem til de beste løsningene for ditt hus eller hytte.
          </p>
          <div className="overflow-hidden rounded-2xl border border-border/40 bg-subtle">
            <img src="/references/7.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <h2 className="text-2xl font-semibold">Vi tar små og store prosjekter</h2>
          <p>
            Når planløsningen på boligen ikke oppleves som optimal, er en ombygging ofte en god løsning. Vi tar små og store oppdrag, og kan hjelpe til med alt fra å slå ned eller sette opp en vegg, til endring av hele boligens planløsning.
          </p>
          <p>
            Ved behov for mer plass, kan vi bistå med planlegging og oppføring av tilbygg. Et tilbygg gir en utvidelse av bruksarealet innvendig, og en oppfriskning av huset sett utenfra. Vi er behjelpelige med å vurdere ulike forhold på tomten, og kan bistå med innhenting av arkitekt dersom det er ønskelig.
          </p>
          <p>
            Vi tar også på oss mindre prosjekter, som vindusskift, etterisolering, taklegging og lignende. Les mer om å la oss ta hånd om kortere oppdrag her.
          </p>
          <h2 className="text-2xl font-semibold">La en byggmester utføre rehabiliteringen</h2>
          <p>
            Lar du oss ta hånd om ditt rehabiliteringsprosjekt, vet du får utført arbeid av høy kvalitet. Vi har lang erfaring med oppføring av bygg, noe som kommer deg til gode under rehabiliteringen.
          </p>
          <p>
            Vår lange erfaring i bransjen, har gitt oss god kunnskap om rutiner og prosesser i forbindelse med rehabilitering av bolig. Vi tar hånd om prosjektet fra start til slutt, og sørger for at eventuelle tillatelser fra myndighetene og lignende er på plass før byggingen starter.
          </p>
          <p>
            Ønsker du å ta en prat om ditt rehabiliteringsprosjekt, eller vil ha oss med på en gratis befaring? Kontakt oss via e-post, telefon eller kontaktskjema.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Rehabilitering;
