import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Hjem", path: "/" },
    { name: "Tjenester", path: "/tjenester" },
    { name: "Referanser", path: "/referanser" },
    { name: "Ansatte", path: "/ansatte" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  return (
    <nav
      className={
        `fixed top-top-bar z-40 h-nav w-full border-b transition-colors duration-300 backdrop-blur-md theme-light ` +
        (scrolled
          ? "bg-brand-foreground/95 border-border/60 shadow-sm"
          : "bg-brand-foreground/70 border-border/30")
      }
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <NavLink to="/" className="flex items-center" aria-label="Rasmussen & Skjelbred">
            <img
              src="/logo.png"
              alt="Rasmussen & Skjelbred"
              className="h-10 w-auto md:h-12"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-1 py-2 text-lg font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-brand after:transition-opacity ${isActive
                    ? "text-brand after:opacity-100"
                    : "text-foreground/80 hover:text-brand after:opacity-0"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Facebook Link */}
          <a
            href="https://www.facebook.com/profile.php?id=61574624980669"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-brand/10 hidden text-brand hover:text-brand/80"
            aria-label="Visit our Facebook page"
          >
            <Facebook className="h-5 w-5" />
          </a>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="default"
              size="icon"
              className="h-8 w-8 rounded-lg bg-brand text-brand-foreground hover:bg-brand/90"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-brand-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-brand-foreground" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full theme-light bg-brand-foreground border-b border-border/60 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm font-medium py-2 transition-colors hover:text-brand ${isActive ? "text-brand" : "text-foreground/80"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Facebook Link in Mobile Menu */}
              <div className="pt-4 border-t border-border/60">
                <a
                  href="https://www.facebook.com/profile.php?id=61574624980669&sk=photos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-foreground hover:text-brand transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Facebook className="h-5 w-5" />
                  <span>Følg oss på Facebook</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
