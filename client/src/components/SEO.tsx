import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
}

const defaultSEO = {
  title: "RasmusKala - Personaaltreening ja ÜKE treeningud",
  description: "Personaaltreeningud sportlastele ja harrastajatele. Üldkehaline ettevalmistus, jõutreeningud ja online juhendamine. Alusta oma teekonda parema tervise poole.",
  keywords: "personaaltreening, jõutreening, üldkehaline ettevalmistus, sportlase treening, online coaching, fitness, treener, RasmusKala",
  image: "/assets/Kalarow.jpeg",
  url: "https://rasmuskala.ee",
  type: "website",
  siteName: "RasmusKala",
};

export function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  siteName = defaultSEO.siteName,
}: SEOProps) {
  const finalTitle = title ? `${title} | ${defaultSEO.siteName}` : defaultSEO.title;
  const finalDescription = description || defaultSEO.description;
  const finalKeywords = keywords || defaultSEO.keywords;
  const finalImage = image || defaultSEO.image;
  const finalUrl = url || defaultSEO.url;

  useEffect(() => {
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Update title
    document.title = finalTitle;

    // Basic meta tags
    updateMetaTag("description", finalDescription);
    updateMetaTag("keywords", finalKeywords);
    updateMetaTag("author", "RasmusKala");

    // Open Graph tags
    updateMetaTag("og:title", finalTitle, "property");
    updateMetaTag("og:description", finalDescription, "property");
    updateMetaTag("og:image", finalImage, "property");
    updateMetaTag("og:url", finalUrl, "property");
    updateMetaTag("og:type", type, "property");
    updateMetaTag("og:site_name", siteName, "property");

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", finalTitle);
    updateMetaTag("twitter:description", finalDescription);
    updateMetaTag("twitter:image", finalImage);

    // Additional SEO tags
    updateMetaTag("robots", "index, follow");
    updateMetaTag("language", "Estonian");
    updateMetaTag("revisit-after", "7 days");

    // Add structured data (JSON-LD)
    let jsonLd = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLd) {
      jsonLd = document.createElement("script");
      jsonLd.setAttribute("type", "application/ld+json");
      document.head.appendChild(jsonLd);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": type === "website" ? "WebSite" : "Service",
      name: siteName,
      description: finalDescription,
      url: finalUrl,
      image: finalImage,
      ...(type === "Service" && {
        serviceType: "Personal Training",
        provider: {
          "@type": "Person",
          name: "Rasmus Kala",
        },
        areaServed: {
          "@type": "Country",
          name: "Estonia",
        },
      }),
    };

    jsonLd.textContent = JSON.stringify(structuredData);
  }, [finalTitle, finalDescription, finalKeywords, finalImage, finalUrl, type, siteName]);

  return null;
}

