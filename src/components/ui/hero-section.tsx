import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

const HeroSection = ({ 
  children, 
  className, 
  backgroundImage, 
  overlay = true 
}: HeroSectionProps) => {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center min-h-screen-minus-nav",
        className
      )}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      } : undefined}
    >
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-foreground/30" />
      )}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};

export default HeroSection;