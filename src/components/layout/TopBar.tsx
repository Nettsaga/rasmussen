import { Phone, Mail, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="fixed top-0 z-50 h-top-bar w-full border-b bg-brand border-brand-foreground/20 text-brand-foreground">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full text-sm">
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+4790996432" 
              className="flex items-center space-x-2 text-brand-foreground/90 hover:text-brand-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+47 909 96 432</span>
            </a>
            <a 
              href="mailto:sverre@r-s.no" 
              className="flex items-center space-x-2 text-brand-foreground/90 hover:text-brand-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">sverre@r-s.no</span>
            </a>
            <div className="flex items-center space-x-2 text-brand-foreground/90">
              <MapPin className="h-4 w-4" />
              <span className="hidden md:inline">Lillevarskogen 4, 3160 Stokke</span>
              <span className="hidden sm:inline md:hidden">Stokke</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
