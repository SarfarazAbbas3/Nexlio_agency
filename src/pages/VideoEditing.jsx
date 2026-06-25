import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function VideoEditing() {
    return (
        <>
            <SEO
                title="Video Editing Services | Nexlio"
                description="Professional video editing services including YouTube videos, reels, ads, corporate videos and cinematic editing."
                keywords="Video Editing, YouTube Editing, Reels Editing, Motion Graphics, Nexlio"
                url="https://nexlioo.com/video-editing"
            />

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
                            We edit YouTube videos, reels, TikToks, promotional videos,
                            podcasts and business advertisements.
                        </p>

                        <h3>How fast is delivery?</h3>

                        <p>
                            Most projects are completed within 2–5 business days.
                        </p>

                        <h3>Can you add subtitles?</h3>

                        <p>
                            Yes. We provide professional subtitles and captions.
                        </p>

                        <h3>Do you provide revisions?</h3>

                        <p>
                            Yes. Every project includes revisions to ensure satisfaction.
                        </p>

                    </section>

                </div>
            </div>
        </>
    );
}