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
  interval = 5000 // 5 seconds default
}: RotatingHeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      
      // Wait for fade out to complete, then change image
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % images.length
        );
        setIsTransitioning(false);
      }, 500); // Half of the transition duration
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
              "absolute inset-0 transition-opacity duration-500 ease-in-out",
              {
                "opacity-100": index === currentImageIndex && !isTransitioning,
                "opacity-0": index !== currentImageIndex || isTransitioning,
              }
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
