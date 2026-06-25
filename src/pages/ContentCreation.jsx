
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import FAQSchema from "../components/FAQSchema";

export default function ContentCreation() {
  const faqs = [
    {
      question: "What type of content do you create?",
      answer:
        "We create website content, blog articles, social media posts, ad copy, product descriptions and marketing content.",
    },
    {
      question: "Is your content SEO optimized?",
      answer:
        "Yes. Every article and website copy follows modern SEO best practices for better search visibility.",
    },
    {
      question: "Can you create monthly content?",
      answer:
        "Yes. We offer monthly content creation packages for businesses of all sizes.",
    },
    {
      question: "Do you write in English?",
      answer:
        "Yes. We provide professional English content for international businesses and brands.",
    },
    {
      question: "Can you write content for my industry?",
      answer:
        "Yes. We create customized content for technology, healthcare, real estate, e-commerce, education, logistics and many other industries.",
    },
  ];

  return (
    <>
      <SEO
        title="Content Creation Services | Nexlio"
        description="Professional content creation services including social media content, copywriting, blogs, website content and creative digital content."
        keywords="Content Creation, Copywriting, Social Media Content, Blog Writing, Website Content, Nexlio"
        url="https://nexlioo.com/content-creation"
      />

      <FAQSchema faqs={faqs} />

      <div className="service-page">
        <div className="service-page-container">

          <span className="service-tag">
            NEXLIO CONTENT CREATION
          </span>

          <h1>Create Content That Builds Trust & Drives Sales</h1>

          <p>
            We create engaging, high-quality content that helps businesses
            increase brand awareness, improve engagement and convert visitors
            into customers.
          </p>

          <a
            href="https://wa.me/923283363738"
            target="_blank"
            rel="noreferrer"
            className="hero-btn"
          >
            Start Your Content Project
          </a>

          <div className="service-features">
            <div className="feature-card">
              <h3>Social Media Content</h3>
              <p>Creative posts designed for maximum engagement.</p>
            </div>

            <div className="feature-card">
              <h3>Website Copy</h3>
              <p>Professional website content that converts visitors.</p>
            </div>

            <div className="feature-card">
              <h3>Blog Writing</h3>
              <p>SEO-friendly blog articles that rank on Google.</p>
            </div>

            <div className="feature-card">
              <h3>Ad Copywriting</h3>
              <p>High-converting copy for ads and campaigns.</p>
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

            <h3>What type of content do you create?</h3>
            <p>
              We create website content, blog articles, social media posts,
              ad copy, product descriptions and marketing content.
            </p>

            <h3>Is your content SEO optimized?</h3>
            <p>
              Yes. Every article and website copy follows modern SEO best
              practices for better search visibility.
            </p>

            <h3>Can you create monthly content?</h3>
            <p>
              Yes. We offer monthly content creation packages for businesses
              of all sizes.
            </p>

            <h3>Do you write in English?</h3>
            <p>
              Yes. We provide professional English content for international
              businesses and brands.
            </p>

            <h3>Can you write content for my industry?</h3>
            <p>
              Yes. We create customized content for technology, healthcare,
              real estate, e-commerce, education, logistics and many other
              industries.
            </p>
          </section>

        </div>
      </div>
    </>
  );
}