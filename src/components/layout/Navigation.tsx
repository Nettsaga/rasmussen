import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: "Om oss", path: "/ansatte" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-top-bar z-40 h-nav">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <div className="text-2xl font-bold text-brand">
              R&S
            </div>
            <div className="ml-2 text-sm text-muted-foreground hidden sm:block">
              Byggmester
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="flex items-center space-x-1 hover:text-brand"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="start" 
                      className="bg-background border border-border shadow-lg"
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
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative px-1 py-2 text-sm font-medium transition-colors hover:text-brand ${
                        isActive 
                          ? "text-brand after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand" 
                          : "text-foreground"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

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
          <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <div>
                      <div className="font-medium text-foreground py-2">
                        {item.name}
                      </div>
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
                          isActive ? "text-brand" : "text-foreground"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;