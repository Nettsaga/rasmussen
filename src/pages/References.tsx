import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import HeroSection from "@/components/ui/hero-section";
import heroImage from "@/assets/hero-home.webp";
import { useSEO } from "@/hooks/use-seo";

const References = () => {
  useSEO('references');

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Reference images from public/references folder
  const referenceImages = [
    "/references/1.jpg",
    "/references/2.jpeg",
    "/references/3.jpg",
    "/references/4.jpg",
    "/references/5.jpg",
    "/references/6.jpg",
    "/references/7.jpg",
    "/references/8.jpg",
    "/references/9.jpg",
    "/references/10.jpg",
    "/references/11.jpg",
    "/references/12.jpg",
    "/references/13.jpg",
    "/references/14.jpg",
    "/references/15.jpg",
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? referenceImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === referenceImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <div className="theme-light bg-background text-foreground">
      {/* Hero Section */}
      <HeroSection className="min-h-[50vh]" backgroundImage="/references/4.jpg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Våre referanser
          </h1>
          <p className="text-lg text-white max-w-4xl mx-auto">
            Her kan du se bilder av hus og bygninger vi har bygget for private personer,
            borettslag, barnehager og mer. Vi har et variert utvalg av hus
            og kan også tilpasse og lage dine egne hjem og løsninger.
          </p>
        </div>
      </HeroSection>

      {/* References Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Våre byggeprosjekter
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vi prioriterer kvalitet og godt håndverk, og har sentral godkjenning i alle relevante klasser.
              Vi holder til i Stokke og leverer våre byggetjenester til kunder i hele Vestfold.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {referenceImages.map((image, index) => (
              <div key={index} className="break-inside-avoid mb-6">
                <div
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image}
                    alt={`Referanseprosjekt ${index + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold">Interessert i et lignende prosjekt?</h2>
            <p className="text-xl opacity-90 mt-3">Vi tilpasser våre tjenester til dine behov og ønsker. Ta kontakt for en uforpliktende samtale om ditt byggeprosjekt.</p>
            <Button asChild size="lg" variant="default" className="mt-6">
              <NavLink to="/kontakt">
                Kontakt oss i dag
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-7xl max-h-[90vh] mx-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 z-10 p-2 text-white hover:text-gray-300 transition-colors"
              aria-label="Lukk lysboks"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full"
              aria-label="Forrige bilde"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full"
              aria-label="Neste bilde"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image */}
            <img
              src={referenceImages[selectedImage]}
              alt={`Referanseprosjekt ${selectedImage + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Counter */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-sm">
              {selectedImage + 1} / {referenceImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default References;
