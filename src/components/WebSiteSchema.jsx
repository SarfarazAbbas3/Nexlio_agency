export default function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    "@id": "https://nexlioo.com/#website",

    url: "https://nexlioo.com",

    name: "Nexlio",

    alternateName: "Nexlio Digital Agency",

    description:
      "Nexlio provides Web Development, Branding, Marketing, Content Creation, Video Editing and Vector Art services worldwide.",

    publisher: {
      "@id": "https://nexlioo.com/#organization"
    },

    inLanguage: "en"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}