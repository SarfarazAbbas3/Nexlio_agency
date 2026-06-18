import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <img src={logo} alt="Nexlio Logo" className="logo" />

      <h1>Next Level Digital Solutions</h1>

      <p className="subtitle">
        Web Development • Branding • Marketing • Content Creation • Video Editing • Vector Art
      </p>

      <a href="#contact" className="hero-btn magnetic">
                Start Your Project
        </a>
        <div className="scroll-indicator">
  Scroll ↓
</div>
    </section>
  );
}