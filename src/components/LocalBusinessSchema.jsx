export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    "@id": "https://nexlioo.com/#business",

    name: "Nexlio",

    image: "https://nexlioo.com/logo.png",

    url: "https://nexlioo.com",

    telephone: "+923283363738",

    email: "info.nexlioo@gmail.com",

    slogan: "Next Level Digital Solutions",

    address: {
      "@type": "PostalAddress",
      addressCountry: "PK"
    },

    areaServed: [
      "Pakistan",
      "United States",
      "United Kingdom",
      "Canada",
      "Australia",
      "Worldwide"
    ],

    openingHours: "Mo-Su 00:00-23:59",

    sameAs: [
      "https://www.instagram.com/nexlio.official/",
      "https://www.facebook.com/people/Nexlio/61589429759284/"
    ]
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