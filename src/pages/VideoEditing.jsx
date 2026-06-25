
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import FAQSchema from "../components/FAQSchema";

export default function VideoEditing() {
  const faqs = [
    {
      question: "What videos do you edit?",
      answer:
        "We edit YouTube videos, Instagram Reels, TikToks, promotional videos, podcasts and business advertisements.",
    },
    {
      question: "How fast is delivery?",
      answer:
        "Most video editing projects are completed within 2 to 5 business days depending on complexity.",
    },
    {
      question: "Can you add subtitles?",
      answer:
        "Yes. We provide professional subtitles, captions and animated text for better engagement.",
    },
    {
      question: "Do you provide revisions?",
      answer:
        "Yes. Every project includes revisions to ensure complete client satisfaction.",
    },
    {
      question: "What file formats do you deliver?",
      answer:
        "We deliver videos in MP4, MOV and other formats optimized for YouTube, Instagram, TikTok and other platforms.",
    },
  ];

  return (
    <>
      <SEO
        title="Video Editing Services | Nexlio"
        description="Professional video editing services including YouTube videos, reels, ads, corporate videos and cinematic editing."
        keywords="Video Editing, YouTube Editing, Reels Editing, Motion Graphics, Nexlio"
        url="https://nexlioo.com/video-editing"
      />

      <FAQSchema faqs={faqs} />

      <div className="service-page">
        <div className="service-page-container">
          <span className="service-tag">
            NEXLIO VIDEO EDITING
          </span>

          <h1>Professional Video Editing That Captivates Audiences</h1>

          <p>
            We produce high-quality videos that increase engagement,
            strengthen your brand and help grow your business.
          </p>

          <a
            href="https://wa.me/923283363738"
            target="_blank"
            rel="noreferrer"
            className="hero-btn"
          >
            Start Your Video Project
          </a>

          <div className="service-features">
            <div className="feature-card">
              <h3>YouTube Videos</h3>
              <p>Professional editing for YouTube creators.</p>
            </div>

            <div className="feature-card">
              <h3>Instagram Reels</h3>
              <p>Short-form videos designed to go viral.</p>
            </div>

            <div className="feature-card">
              <h3>Commercial Ads</h3>
              <p>High-converting promotional videos.</p>
            </div>

            <div className="feature-card">
              <h3>Motion Graphics</h3>
              <p>Animations and visual effects that stand out.</p>
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

            <h3>What videos do you edit?</h3>
            <p>
              We edit YouTube videos, Instagram Reels, TikToks,
              promotional videos, podcasts and business advertisements.
            </p>

            <h3>How fast is delivery?</h3>
            <p>
              Most video editing projects are completed within
              2–5 business days.
            </p>

            <h3>Can you add subtitles?</h3>
            <p>
              Yes. We provide professional subtitles, captions
              and animated text.
            </p>

            <h3>Do you provide revisions?</h3>
            <p>
              Yes. Every project includes revisions to ensure
              complete client satisfaction.
            </p>

            <h3>What file formats do you deliver?</h3>
            <p>
              We deliver videos in MP4, MOV and other formats
              optimized for YouTube, Instagram, TikTok and other
              social media platforms.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
