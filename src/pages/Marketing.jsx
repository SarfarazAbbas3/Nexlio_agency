import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Marketing() {
    return (
        <>
            <SEO
                title="Digital Marketing Services | Nexlio"
                description="Grow your business with Nexlio's digital marketing services including SEO, Google Ads, Social Media Marketing, Lead Generation and Performance Marketing."
                keywords="Digital Marketing, SEO Services, Google Ads, Social Media Marketing, Lead Generation, Nexlio"
                url="https://nexlioo.com/marketing"
            />

            <div className="service-page">
                <div className="service-page-container">

                    <span className="service-tag">
                        NEXLIO MARKETING
                    </span>

                    <h1>
                        Marketing That Generates Real Results
                    </h1>

                    <p>
                        We help businesses attract more customers through strategic digital
                        marketing, advertising and lead generation campaigns.
                    </p>

                    <a
                        href="https://wa.me/923283363738"
                        target="_blank"
                        rel="noreferrer"
                        className="hero-btn"
                    >
                        Start Your Marketing Campaign
                    </a>

                    <div className="service-features">
                        <div className="feature-card">
                            <h3>Social Media Marketing</h3>
                            <p>Reach more people and increase engagement.</p>
                        </div>

                        <div className="feature-card">
                            <h3>Google Ads</h3>
                            <p>Targeted campaigns designed for conversions.</p>
                        </div>

                        <div className="feature-card">
                            <h3>Lead Generation</h3>
                            <p>Attract qualified prospects for your business.</p>
                        </div>

                        <div className="feature-card">
                            <h3>Performance Analytics</h3>
                            <p>Track growth with detailed reporting and insights.</p>
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

                        <h3>What marketing services do you offer?</h3>
                        <p>
                            We provide Social Media Marketing, Google Ads, SEO, Lead Generation,
                            Email Marketing, and complete digital marketing solutions.
                        </p>

                        <h3>How long does it take to see results?</h3>
                        <p>
                            Paid advertising can generate results within days, while SEO and
                            organic marketing usually take 3 to 6 months for long-term growth.
                        </p>

                        <h3>Do you manage social media accounts?</h3>
                        <p>
                            Yes. We create content, manage posts, run advertising campaigns,
                            and monitor performance across all major social media platforms.
                        </p>

                        <h3>Can you generate leads for my business?</h3>
                        <p>
                            Yes. We build targeted marketing campaigns designed to attract
                            qualified leads and increase your sales opportunities.
                        </p>

                    </section>

                </div>
            </div>
        </>
    );
}