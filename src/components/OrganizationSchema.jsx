export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexlio",
    url: "https://nexlioo.com",
    logo: "https://nexlioo.com/logo.png",
    image: "https://nexlioo.com/logo.png",
    description:
      "Nexlio is a digital agency providing Web Development, Branding, Digital Marketing, Content Creation, Video Editing and Vector Art services.",

    email: "info.nexlioo@gmail.com",
    telephone: "+923283363738",

    sameAs: [
      "https://www.facebook.com/people/Nexlio/61589429759284/",
      "https://www.instagram.com/nexlio.official",
      "https://www.linkedin.com/in/sarfaraz-abbas-977a47b7/"
    ],

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+923283363738",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["English"]
    },

    address: {
      "@type": "PostalAddress",
      addressCountry: "PK"
    },

    knowsAbout: [
      "Web Development",
      "Branding",
      "Digital Marketing",
      "SEO",
      "Content Creation",
      "Video Editing",
      "Vector Art"
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