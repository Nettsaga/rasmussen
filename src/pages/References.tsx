import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { ArrowRight, Filter, Home as HomeIcon, Building, Baby } from "lucide-react";
import reference1 from "@/assets/reference-1.webp";
import reference2 from "@/assets/reference-2.webp";
import reference3 from "@/assets/reference-3.webp";
import reference4 from "@/assets/reference-4.webp";
import reference5 from "@/assets/reference-5.webp";
import reference6 from "@/assets/reference-6.webp";

const References = () => {
  const [activeFilter, setActiveFilter] = useState("alle");

  const projects = [
    {
      id: 1,
      title: "Moderne enebolig i skogsmiljø",
      location: "Stokke",
      type: "enebolig",
      image: reference1,
      description: "Nyoppført enebolig med fokus på energieffektivitet og moderne skandinavisk design.",
      tags: ["Enebolig", "Nybygg", "Energieffektiv"],
    },
    {
      id: 2,
      title: "Barnehage med naturmaterialer",
      location: "Tønsberg",
      type: "offentlig",
      image: reference2,
      description: "Moderne barnehage bygget med naturvennlige materialer og barnesikre løsninger.",
      tags: ["Barnehage", "Offentlig", "Naturmaterialer"],
    },
    {
      id: 3,
      title: "Borettslag med 12 leiligheter",
      location: "Sandefjord",
      type: "borettslag",
      image: reference3,
      description: "Kvalitetsbygg for borettslag med fokus på fellesarealer og bærekraftige løsninger.",
      tags: ["Borettslag", "Flerfamiliehus", "Bærekraftig"],
    },
    {
      id: 4,
      title: "Totalrenovering av villa",
      location: "Stokke",
      type: "rehabilitering",
      image: reference4,
      description: "Omfattende rehabilitering hvor vi har bevart husets sjel samtidig som vi har modernisert.",
      tags: ["Rehabilitering", "Interiør", "Modernisering"],
    },
    {
      id: 5,
      title: "Moderne hytte ved skogen",
      location: "Vestfold",
      type: "hytte",
      image: reference5,
      description: "Fritidsbolig som kombinerer tradisjonell norsk hyttetradisjon med moderne komfort.",
      tags: ["Hytte", "Fritidsbolig", "Tradisjon"],
    },
    {
      id: 6,
      title: "Påbygg og utvidelse",
      location: "Stokke",
      type: "tilbygg",
      image: reference6,
      description: "Sømløs integrasjon av nytt tilbygg med eksisterende konstruksjon.",
      tags: ["Tilbygg", "Utvidelse", "Integrasjon"],
    },
  ];

  const filters = [
    { key: "alle", label: "Alle prosjekter", icon: <Filter className="h-4 w-4" /> },
    { key: "enebolig", label: "Eneboliger", icon: <HomeIcon className="h-4 w-4" /> },
    { key: "borettslag", label: "Borettslag", icon: <Building className="h-4 w-4" /> },
    { key: "offentlig", label: "Offentlige bygg", icon: <Baby className="h-4 w-4" /> },
  ];

  const filteredProjects = activeFilter === "alle" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Referanser
          </h1>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Her kan du se bilder av boliger og bygninger vi har bygget for privatpersoner, 
              borettslag, barnehager med flere. Som du ser har vi et variert utvalg av hus, 
              og kan også skreddersy og lage egne hjem og løsninger for deg.
            </p>
            <p>
              Vi prioriterer kvalitet og godt håndverk, og har selvfølgelig sentral godkjenning 
              i alle relevante klasser.
            </p>
            <p>
              Vi holder til i Stokke, og leverer våre byggetjenester til kunder i hele Vestfold.
            </p>
            <div className="inline-block bg-brand/10 px-6 py-3 rounded-lg">
              <p className="font-semibold text-brand">
                Vi ønsker å være din byggmester i Stokke, Vestfold
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.key)}
              className="flex items-center space-x-2"
            >
              {filter.icon}
              <span>{filter.label}</span>
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {project.location}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-subtle rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            Interessert i et lignende prosjekt?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Vi tilpasser våre tjenester til dine behov og ønsker. Kontakt oss for en 
            uforpliktende samtale om ditt byggeprosjekt.
          </p>
          <Button asChild size="lg">
            <NavLink to="/kontakt">
              Kontakt oss i dag
              <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default References;