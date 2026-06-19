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
      </form>
    </section>
  );
}