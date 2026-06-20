import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
  console.log("EmailJS Error:", error);

  alert(
    error?.text ||
    error?.message ||
    "Something went wrong."
  );
});
  };

  return (
    <section id="contact" className="contact">
      <span className="contact-tag">
        Let's Build Something Great
      </span>

      <h2>Ready to Grow Your Brand?</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Tell us about your project"
          rows="5"
          required
        />

        <button type="submit" className="hero-btn">
          Send Message
        </button>
        <a
  href="https://wa.me/923283363738?text=Hi%20Nexlio,%20I%20want%20to%20discuss%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="hero-btn whatsapp-btn"
>
  Chat on WhatsApp
</a>
      </form>

      <div className="contact-info">
  <a href="mailto:nexlio.info@gmail.com">
    nexlio.info@gmail.com
  </a>

  <a href="tel:+923283363738">
    +92 328 3363738
  </a>
</div>
    </section>
  );
}