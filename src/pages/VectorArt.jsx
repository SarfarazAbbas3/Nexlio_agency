import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import FAQSchema from "../components/FAQSchema";

export default function VectorArt() {
  const faqs = [
    {
      question: "What is vector art?",
      answer:
        "Vector graphics can be resized to any size without losing quality, making them ideal for logos, branding and print materials.",
    },
    {
      question: "Can you convert my logo into vector?",
      answer:
        "Yes. We can recreate and convert your logo into a professional vector format using Adobe Illustrator.",
    },
    {
      question: "Which file formats do you provide?",
      answer:
        "We deliver AI, EPS, SVG, PDF and PNG formats for both digital and print use.",
    },
    {
      question: "Can I use the artwork for printing?",
      answer:
        "Yes. Our vector artwork is print-ready and can be scaled to any size without losing quality.",
    },
    {
      question: "Do you create custom illustrations?",
      answer:
        "Yes. We create custom illustrations, icons, mascots and brand graphics tailored to your business.",
    },
  ];

  return (
    <>
      <SEO
        title="Vector Art & Illustration Services | Nexlio"
        description="Professional vector art services including illustrations, icons, mascot design, vector tracing and scalable graphics."
        keywords="Vector Art, Illustration, Icons, Mascot Design, Adobe Illustrator, Nexlio"
        url="https://nexlioo.com/vector-art"
      />

      <FAQSchema faqs={faqs} />

      <div className="service-page">
        <div className="service-page-container">
          <span className="service-tag">
            NEXLIO VECTOR ART
          </span>

          <h1>Creative Vector Art That Elevates Your Brand</h1>

          <p>
            We create clean, scalable vector graphics for businesses,
            marketing campaigns, websites and print materials.
          </p>

          <a
            href="https://wa.me/923283363738"
            target="_blank"
            rel="noreferrer"
            className="hero-btn"
          >
            Start Your Design Project
          </a>

          <div className="service-features">
            <div className="feature-card">
              <h3>Custom Illustrations</h3>
              <p>Unique artwork created specifically for your business.</p>
            </div>

            <div className="feature-card">
              <h3>Icon Design</h3>
              <p>Professional icon sets for websites and apps.</p>
            </div>

            <div className="feature-card">
              <h3>Vector Tracing</h3>
              <p>Convert low-quality images into scalable vectors.</p>
            </div>

            <div className="feature-card">
              <h3>Mascot Design</h3>
              <p>Creative mascot illustrations for branding.</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            <Link to="/" className="hero-btn">
              ← Back to Home
            </Link>

            <a
              href="https://wa.me/923283363738"
              target="_blank"
              rel="noreferrer"
              className="hero-btn"
            >
              Get Free Quote
            </a>
          </div>

          <section className="faq">
            <h2>Frequently Asked Questions</h2>

            <h3>What is vector art?</h3>
            <p>
              Vector graphics can be resized to any size without losing quality,
              making them ideal for logos, branding and print materials.
            </p>

            <h3>Can you convert my logo into vector?</h3>
            <p>
              Yes. We can recreate and convert your logo into a professional
              vector format using Adobe Illustrator.
            </p>

            <h3>Which file formats do you provide?</h3>
            <p>
              We deliver AI, EPS, SVG, PDF and PNG formats for both digital
              and print use.
            </p>

            <h3>Can I use the artwork for printing?</h3>
            <p>
              Yes. Our vector artwork is print-ready and can be scaled to any
              size without losing quality.
            </p>

            <h3>Do you create custom illustrations?</h3>
            <p>
              Yes. We create custom illustrations, icons, mascots and brand
              graphics tailored to your business.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
