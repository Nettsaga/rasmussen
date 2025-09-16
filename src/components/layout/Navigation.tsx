import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    { 
      name: "Tjenester", 
      path: "/tjenester",
      subItems: [
        { name: "Oppføring", path: "/tjenester/oppforing" },
        { name: "Service & småjobber", path: "/tjenester/service-og-smajobber" },
        { name: "Rehabilitering", path: "/tjenester/rehabilitering" },
      ]
    },
    { name: "Referanser", path: "/referanser" },
    { name: "Ansatte", path: "/ansatte" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  return (
    <nav
      className={
        `fixed top-top-bar z-40 h-nav w-full border-b transition-colors duration-300 ` +
        (scrolled 
          ? "theme-light bg-brand-foreground border-border/60 shadow-sm" 
          : "bg-transparent border-transparent")
      }
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <NavLink to="/" className="flex items-center" aria-label="Rasmussen & Skjelbred">
            <img
              src="/logo.png"
              alt="Rasmussen & Skjelbred"
              className="h-8 w-auto md:h-9"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <div className="flex items-center">
                    {/* Main Tjenester link */}
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `relative px-1 py-2 text-lg font-medium transition-colors hover:text-brand ${
                          isActive 
                            ? "text-brand after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand" 
                            : scrolled ? "text-gray-900 hover:text-brand" : "text-white hover:text-brand drop-shadow-lg"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                    {/* Dropdown for sub-items */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className={`ml-1 p-1 hover:text-white ${
                            scrolled ? "text-brand" : "text-white drop-shadow-lg"
                          }`}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        align="start" 
                        className="theme-light bg-brand-foreground text-foreground border border-border/60 shadow-lg"
                      >
                        {item.subItems.map((subItem) => (
                          <DropdownMenuItem key={subItem.name} asChild>
                            <NavLink
                              to={subItem.path}
                              className="block px-4 py-2 text-sm hover:bg-subtle hover:text-brand transition-colors"
                            >
                              {subItem.name}
                            </NavLink>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative px-1 py-2 text-lg font-medium transition-colors hover:text-brand ${
                        isActive 
                          ? "text-brand after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand" 
                          : scrolled ? "text-gray-900 hover:text-brand" : "text-white hover:text-brand drop-shadow-lg"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Facebook Link */}
          <a
            href="https://www.facebook.com/profile.php?id=61574624980669"
            target="_blank"
            rel="noopener noreferrer"
            className={`lg:flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-brand/10 hidden ${
              scrolled ? "text-brand hover:text-brand" : "text-white hover:text-white drop-shadow-lg"
            }`}
            aria-label="Visit our Facebook page"
          >
            <Facebook className="h-5 w-5" />
          </a>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full theme-light bg-brand-foreground border-b border-border/60 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <div>
                      <NavLink
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block font-medium text-gray-900 py-2 hover:text-brand transition-colors"
                      >
                        {item.name}
                      </NavLink>
                      <div className="pl-4 space-y-2">
                        {item.subItems.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-muted-foreground hover:text-brand transition-colors py-1"
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `block text-sm font-medium py-2 transition-colors hover:text-brand ${
                          isActive ? "text-brand" : "text-gray-900"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
              
              {/* Facebook Link in Mobile Menu */}
              <div className="pt-4 border-t border-border/60">
                <a
                  href="https://www.facebook.com/profile.php?id=61574624980669&sk=photos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-900 hover:text-brand transition-colors py-2"
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
