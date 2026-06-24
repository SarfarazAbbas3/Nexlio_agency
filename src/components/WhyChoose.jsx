export default function WhyChoose() {
  const items = [
    {
      title: "Fast Delivery",
      desc: "Projects delivered on time with premium quality.",
    },
    {
      title: "Modern Design",
      desc: "Clean, cinematic and conversion-focused interfaces.",
    },
    {
      title: "Growth Focused",
      desc: "Every project is built to generate leads and sales.",
    },
    {
      title: "Ongoing Support",
      desc: "Continuous support after project completion.",
    },
  ];

  return (
    <section className="why">
      <div className="why-header">
        <span>WHY NEXLIO</span>
        <h2>Why Choose Nexlio</h2>
      </div>

      <div className="why-grid">
        {items.map((item) => (
          <div key={item.title} className="why-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}