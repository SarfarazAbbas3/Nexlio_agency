const testimonials = [
  {
    name: "Ahmed Khan",
    company: "E-Commerce Brand",
    text:
      "Nexlio transformed our online presence with a fast and modern website.",
  },
  {
    name: "Sarah Ali",
    company: "Marketing Agency",
    text:
      "The branding and content strategy helped us increase engagement significantly.",
  },
  {
    name: "Usman Tariq",
    company: "Startup Founder",
    text:
      "Professional communication, fast delivery and outstanding design quality.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <span className="contact-tag">
        Client Feedback
      </span>

      <h2>What Our Clients Say</h2>

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <div key={item.name} className="testimonial-card">
            <p>"{item.text}"</p>

            <div className="testimonial-author">
              <strong>{item.name}</strong>
              <span>{item.company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}