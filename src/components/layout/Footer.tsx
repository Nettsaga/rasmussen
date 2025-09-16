import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-subtle border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <div className="text-xl font-bold text-brand">
                Rasmussen & Skjelbred
              </div>
              <div className="text-sm text-muted-foreground">
                Byggmester i Vestfold siden 1986
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand" />
                <a href="tel:+4790996432" className="hover:text-brand transition-colors">
                  +47 909 96 432
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand" />
                <a href="mailto:sverre@r-s.no" className="hover:text-brand transition-colors">
                  sverre@r-s.no
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-brand mt-0.5" />
                <div>
                  <div>Lillevarskogen 4</div>
                  <div>3160 Stokke</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Hurtiglenker</h3>
            <div className="space-y-2 text-sm">
              <NavLink to="/tjenester" className="block hover:text-brand transition-colors">
                Tjenester
              </NavLink>
              <NavLink to="/tomter" className="block hover:text-brand transition-colors">
                Tomter
              </NavLink>
              <NavLink to="/referanser" className="block hover:text-brand transition-colors">
                Referanser
              </NavLink>
              <NavLink to="/kontakt" className="block hover:text-brand transition-colors">
                Kontakt oss
              </NavLink>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Tjenester</h3>
            <div className="space-y-2 text-sm">
              <NavLink to="/tjenester/oppforing" className="block hover:text-brand transition-colors">
                Oppføring
              </NavLink>
              <NavLink to="/tjenester/service-og-smajobber" className="block hover:text-brand transition-colors">
                Service & småjobber
              </NavLink>
              <NavLink to="/tjenester/rehabilitering" className="block hover:text-brand transition-colors">
                Rehabilitering
              </NavLink>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Følg oss</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-brand transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <div>Org.nr: 123456789</div>
              <NavLink to="/personvern" className="block hover:text-brand transition-colors">
                Personvern
              </NavLink>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Rasmussen & Skjelbred. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;