import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h3>NEXLIO</h3>
        <p>Creative Digital Agency</p>
      </div>

      <div className="footer-links">
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-contact">
        <a href="mailto:nexlio.info@gmail.com">
          nexlio.info@gmail.com
        </a>

        <a href="tel:+923283363738">
          +92 328 3363738
        </a>

        <a
          href="https://www.nexlioo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.nexlioo.com
        </a>
      </div>

      <div className="footer-socials">
  <a
    href="https://www.instagram.com/nexlio.official?igsh=MWZqNndrM3kwdWthYw=="
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.linkedin.com/in/sarfaraz-abbas-977a47b7?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61589429759284"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebook />
  </a>

  <a
    href="https://wa.me/923283363738"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp />
  </a>
</div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Nexlio. All rights reserved.
      </p>
    </footer>
  );
}