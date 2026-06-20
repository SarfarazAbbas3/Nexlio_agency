import logo from "../assets/logo.png";
import ReactGA from "react-ga4";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <img src={logo} alt="Nexlio Logo" className="logo" />

      <h1>Next Level Digital Solutions</h1>

      <p className="subtitle">
        Web Development • Branding • Marketing • Content Creation • Video Editing • Vector Art
      </p>

      <a href="#contact" className="hero-btn magnetic"onClick={() =>
    ReactGA.event({
      category: "Lead",
      action: "Start Project Click",
    })
  } >
                Start Your Project
        </a>
        <a
  href="https://wa.me/923283363738?text=Hi%20Nexlio,%20I%20want%20to%20discuss%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="hero-btn whatsapp-btn"
>
  Chat on WhatsApp
</a>
        <div className="scroll-indicator">
  Scroll ↓
</div>
    </section>
  );
}