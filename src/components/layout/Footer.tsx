import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brand text-brand-foreground border-t border-brand-foreground/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
                <div className="text-xl font-bold text-brand-foreground">
                  Rasmussen & Skjelbred
                </div>
                <div className="text-sm text-brand-foreground/90">
                  Byggmester i Vestfold siden 1986
                </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-foreground" />
                <a href="tel:+4790996432" className="text-brand-foreground/90 hover:text-brand-foreground transition-colors">
                  +47 909 96 432
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-foreground" />
                <a href="mailto:sverre@r-s.no" className="text-brand-foreground/90 hover:text-brand-foreground transition-colors">
                  sverre@r-s.no
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-brand-foreground mt-0.5" />
                <div>
                  <div>Lillevarskogen 4</div>
                  <div>3160 Stokke</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
              <h3 className="font-semibold text-brand-foreground">Hurtiglenker</h3>
              <div className="space-y-2 text-sm">
                <NavLink to="/tjenester" className="block text-brand-foreground/90 hover:text-brand-foreground transition-colors">
                  Tjenester
                </NavLink>
                <NavLink to="/referanser" className="block text-brand-foreground/90 hover:text-brand-foreground transition-colors">
                  Referanser
                </NavLink>
                <NavLink to="/kontakt" className="block text-brand-foreground/90 hover:text-brand-foreground transition-colors">
                  Kontakt oss
                </NavLink>
              </div>
            </div>

          {/* Services */}
          <div className="space-y-4">
              <h3 className="font-semibold text-brand-foreground">Tjenester</h3>
            <div className="space-y-2 text-sm">
                <NavLink to="/tjenester/oppforing" className="block text-brand-foreground/90 hover:text-brand-foreground transition-colors">
                Oppføring
              </NavLink>
                <NavLink to="/tjenester/service-og-smajobber" className="block text-brand-foreground/90 hover:text-brand-foreground transition-colors">
                Service & småjobber
              </NavLink>
                <NavLink to="/tjenester/rehabilitering" className="block text-brand-foreground/90 hover:text-brand-foreground transition-colors">
                Rehabilitering
              </NavLink>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Følg oss</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61574624980669&sk=photos" className="text-brand-foreground/80 hover:text-brand-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            
          </div>
        </div>

        <div className="border-t border-brand-foreground/20 mt-8 pt-8 text-center text-sm text-brand-foreground/80">
          <p>&copy; 2025 Rasmussen & Skjelbred. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
