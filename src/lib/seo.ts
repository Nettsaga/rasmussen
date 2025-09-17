// SEO utility functions for page-specific meta tags

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: any;
}

export const seoData: Record<string, SEOData> = {
  home: {
    title: "Rasmussen & Skjelbred - Byggmester i Vestfold siden 1986",
    description: "Byggmester i Vestfold siden 1986. Vi tilbyr oppføring, rehabilitering og service av boliger. Kontakt oss for en uforpliktende samtale om ditt byggeprosjekt.",
    keywords: "byggmester, Vestfold, Stokke, oppføring, rehabilitering, service, småjobber, hus, hytte, byggeprosjekt, Rasmussen, Skjelbred",
    canonical: "https://rasmussen-skjelbred.no/",
    ogImage: "https://rasmussen-skjelbred.no/ogimg.png"
  },
  services: {
    title: "Våre byggetjenester - Rasmussen & Skjelbred",
    description: "Vi tilbyr omfattende byggetjenester i Vestfold: oppføring av hus og hytter, service og småjobber, rehabilitering av bolig. Erfarne byggmestere siden 1986.",
    keywords: "byggetjenester, oppføring, rehabilitering, service, småjobber, Vestfold, byggmester, hus, hytte",
    canonical: "https://rasmussen-skjelbred.no/tjenester",
    ogImage: "https://rasmussen-skjelbred.no/ogimg.png"
  },
  oppforing: {
    title: "Oppføring av hus og hytter - Rasmussen & Skjelbred",
    description: "Skreddersy ditt drømmehus med våre erfarne byggmestere. Fra idé til nøkkelferdig hjem - vi følger deg gjennom hvert steg av byggeprosessen.",
    keywords: "oppføring, hus, hytte, nybygg, byggmester, Vestfold, nøkkelferdig, skreddersydd",
    canonical: "https://rasmussen-skjelbred.no/tjenester/oppforing",
    ogImage: "https://rasmussen-skjelbred.no/ogimg.png"
  },
  serviceOgSmajobber: {
    title: "Service og småjobber - Rasmussen & Skjelbred",
    description: "Ingen jobb er for liten når kvalitet betyr noe. Vi tilbyr rask og profesjonell service for dør- og vindusutskifting, eksteriørfornyelse og vedlikehold.",
    keywords: "service, småjobber, vedlikehold, dørutskifting, vindusutskifting, eksteriørfornyelse, Vestfold",
    canonical: "https://rasmussen-skjelbred.no/tjenester/service-og-smajobber",
    ogImage: "https://rasmussen-skjelbred.no/ogimg.png"
  },
  rehabilitering: {
    title: "Rehabilitering av bolig - Rasmussen & Skjelbred",
    description: "Renover huset eller hytta du allerede elsker. Vi hjelper med interiørfornyelse, layout-omtenkning og tilbygg som føles originale.",
    keywords: "rehabilitering, renovering, interiørfornyelse, layout, tilbygg, loft, Vestfold, byggmester",
    canonical: "https://rasmussen-skjelbred.no/tjenester/rehabilitering",
    ogImage: "https://rasmussen-skjelbred.no/ogimg.png"
  },
  references: {
    title: "Våre referanser - Byggeprosjekter i Vestfold",
    description: "Se bilder av hus og bygninger vi har bygget for private personer, borettslag, barnehager og mer. Vi har et variert utvalg av hus og kan tilpasse løsninger.",
    keywords: "referanser, byggeprosjekter, hus, bygninger, Vestfold, borettslag, barnehager, private",
    canonical: "https://rasmussen-skjelbred.no/referanser",
    ogImage: "https://rasmussen-skjelbred.no/ogimg.png"
  },
  team: {
    title: "Vårt team - Erfarne byggmestere i Vestfold",
    description: "Møt de erfarne fagfolkene bak Rasmussen & Skjelbred A/S. Vårt team samler tiår med byggeerfaring og lokal kunnskap for å levere eksepsjonelle resultater.",
    keywords: "team, ansatte, byggmestere, fagfolk, erfaring, Vestfold, Rasmussen, Skjelbred",
    canonical: "https://rasmussen-skjelbred.no/ansatte",
    ogImage: "https://rasmussen-skjelbred.no/ogimg.png"
  },
  contact: {
    title: "Kontakt oss - Rasmussen & Skjelbred",
    description: "Ta kontakt for en uforpliktende samtale om ditt byggeprosjekt. Vi svarer raskt og gir deg en ærlig vurdering. Ring +47 909 96 432 eller send en melding.",
    keywords: "kontakt, byggeprosjekt, uforpliktende, samtale, telefon, e-post, Stokke, Vestfold",
    canonical: "https://rasmussen-skjelbred.no/kontakt",
    ogImage: "https://rasmussen-skjelbred.no/ogimg.png"
  }
};

// Function to update document head with SEO data
export const updateSEO = (pageKey: string) => {
  const data = seoData[pageKey];
  if (!data) return;

  // Update title
  document.title = data.title;

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', data.description);
  }

  // Update meta keywords
  if (data.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', data.keywords);
  }

  // Update canonical URL
  if (data.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', data.canonical);
  }

  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', data.title);
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', data.description);
  }

  if (data.ogImage) {
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', data.ogImage);
    }
  }

  // Update Twitter tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', data.title);
  }

  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', data.description);
  }

  if (data.ogImage) {
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', data.ogImage);
    }
  }
};
