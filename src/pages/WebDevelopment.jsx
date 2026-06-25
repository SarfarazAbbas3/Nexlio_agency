import { Link } from "react-router-dom";
import SEO from "../components/SEO";


export default function WebDevelopment() {
    return (
        <>
            <SEO
                title="Web Development Services | Nexlio"
                description="Professional web development services including business websites, e-commerce stores, React development, SEO optimization and fast modern websites."
                keywords="Web Development, Website Design, React Developer, SEO Website, Pakistan, Nexlio"
                url="https://nexlioo.com/web-development"
            />

            <div className="service-page">
                <div className="service-page-container">

                    <span className="service-tag">
                        NEXLIO WEB DEVELOPMENT
                    </span>

                    <h1>
                        Websites That Turn Visitors Into Customers
                    </h1>

                    <p>
                        We build modern, fast and SEO-optimized websites that help
                        businesses generate leads, build trust and increase revenue.
                    </p>

                    <a
                        href="https://wa.me/923283363738"
                        target="_blank"
                        rel="noreferrer"
                        className="hero-btn"
                    >
                        Start Your Project
                    </a>

                    <div className="service-features">
                        <div className="feature-card">
                            <h3>Business Websites</h3>
                            <p>Professional websites designed for growth.</p>
                        </div>

                        <div className="feature-card">
                            <h3>E-Commerce Stores</h3>
                            <p>Online stores optimized for conversions.</p>
                        </div>

                        <div className="feature-card">
                            <h3>SEO Optimized</h3>
                            <p>Built to rank higher on Google.</p>
                        </div>

                        <div className="feature-card">
                            <h3>Fast Performance</h3>
                            <p>Lightning-fast loading experience.</p>
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

                        <h3>How much does a website cost?</h3>
                        <p>
                            Website pricing depends on the project scope, features,
                            design requirements, and functionality. Contact us for a
                            free custom quote.
                        </p>

                        <h3>How long does it take to build a website?</h3>
                        <p>
                            Most business websites are completed within 2–4 weeks.
                            Large custom web applications may take longer depending
                            on complexity.
                        </p>

                        <h3>Will my website be SEO optimized?</h3>
                        <p>
                            Yes. Every website includes technical SEO, responsive
                            design, fast loading speed, and search engine best
                            practices.
                        </p>

                        <h3>Can you redesign my existing website?</h3>
                        <p>
                            Yes. We redesign outdated websites with modern UI/UX,
                            improved performance, and better conversion rates.
                        </p>

                        <h3>Do you provide website maintenance?</h3>
                        <p>
                            Yes. We offer maintenance, security updates, backups,
                            performance optimization, and ongoing technical support.
                        </p>
                    </section>

                </div>
            </div>
        </>
    );
}