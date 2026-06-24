export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      desc: "We understand your business, goals and requirements.",
    },
    {
      number: "02",
      title: "Strategy",
      desc: "We create a roadmap and plan for success.",
    },
    {
      number: "03",
      title: "Execution",
      desc: "Our team designs, develops and refines your project.",
    },
    {
      number: "04",
      title: "Launch",
      desc: "We deliver and support your business growth.",
    },
  ];

  return (
    <section className="process">
      <div className="process-header">
        <span>OUR PROCESS</span>
        <h2>How We Work</h2>
      </div>

      <div className="process-grid">
        {steps.map((step) => (
          <div className="process-card" key={step.number}>
            <span className="process-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}