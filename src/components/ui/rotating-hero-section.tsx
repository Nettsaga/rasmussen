import { ReactNode, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface RotatingHeroSectionProps {
  children: ReactNode;
  className?: string;
  images: string[];
  overlay?: boolean;
  interval?: number; // milliseconds between image changes
}

const RotatingHeroSection = ({
  children,
  className,
  images,
  overlay = true,
  interval = 5000, // 5 seconds default
}: RotatingHeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    images.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, [images]);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <section
      className={cn(
        "relative flex items-center justify-center min-h-screen w-full overflow-hidden",
        className
      )}
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            )}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/60" />
      )}

      {/* Content */}
      <div className="relative z-10 w-full text-brand-foreground">
        {children}
      </div>
    </section>
  );
};

export default RotatingHeroSection;
