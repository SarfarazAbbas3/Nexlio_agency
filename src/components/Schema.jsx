export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://nexlioo.com/#organization",

    name: "Nexlio",

    alternateName: "Nexlio Digital Agency",

    url: "https://nexlioo.com",

    logo: "https://nexlioo.com/logo.png",

    image: "https://nexlioo.com/logo.png",

    description:
      "Nexlio is a digital agency providing Web Development, Branding, Digital Marketing, Content Creation, Video Editing and Vector Art services.",

    email: "info@nexlioo.com",

    telephone: "+923283363738",

    slogan: "Next Level Digital Solutions",

    foundingLocation: "Pakistan",

    areaServed: "Worldwide",

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