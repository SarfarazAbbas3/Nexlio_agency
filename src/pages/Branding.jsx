import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Branding() {
    return (
        <>
            <SEO
                title="Branding Services | Nexlio"
                description="Professional branding services including logo design, brand identity, brand guidelines, social media branding and complete visual identity solutions."
                keywords="Branding Services, Logo Design, Brand Identity, Brand Guidelines, Visual Identity, Nexlio"
                url="https://nexlioo.com/branding"
            />

            <div className="service-page">
                <div className="service-page-container">

                    <span className="service-tag">
                        NEXLIO BRANDING
                    </span>

                    <h1>Build A Brand People Remember</h1>

                    <p>
                        We create powerful brand identities that help businesses stand out,
                        build trust and create lasting impressions.
                    </p>

                    <a
                        href="https://wa.me/923283363738"
                        target="_blank"
                        rel="noreferrer"
                        className="hero-btn"
                    >
                        Start Your Branding Project
                    </a>

                    <div className="service-features">
                        <div className="feature-card">
                            <h3>Logo Design</h3>
                            <p>Unique and memorable logos tailored to your business.</p>
                        </div>

                        <div className="feature-card">
                            <h3>Brand Identity</h3>
                            <p>Complete visual systems that create consistency.</p>
                        </div>

                        <div className="feature-card">
                            <h3>Brand Guidelines</h3>
                            <p>Professional standards for your brand assets.</p>
                        </div>

                        <div className="feature-card">
                            <h3>Social Media Branding</h3>
                            <p>Professional visuals for all social platforms.</p>
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

                        <h3>How much does branding cost?</h3>
                        <p>
                            Branding costs depend on your business goals, project scope, and
                            required deliverables. Contact us for a customized quote.
                        </p>

                        <h3>How long does a branding project take?</h3>
                        <p>
                            Most branding projects are completed within 1 to 3 weeks,
                            depending on the complexity of the project.
                        </p>

                        <h3>What is included in your branding service?</h3>
                        <p>
                            Our branding services include logo design, brand identity,
                            typography, color palette, brand guidelines, and social media
                            branding assets.
                        </p>

                        <h3>Can you redesign an existing brand?</h3>
                        <p>
                            Yes. We can modernize your existing brand while maintaining its
                            core identity and improving its professional appearance.
                        </p>

                        <h3>Why is branding important for a business?</h3>
                        <p>
                            Strong branding builds trust, improves recognition, differentiates
                            your business from competitors, and helps attract more customers.
                        </p>
                    </section>

                </div>
            </div>
        </>
    );
}