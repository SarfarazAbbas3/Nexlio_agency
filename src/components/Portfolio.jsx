import p1 from "../assets/portfolio/project1.jpg";
import p2 from "../assets/portfolio/project2.jpg";
import p3 from "../assets/portfolio/project3.jpg";
import p4 from "../assets/portfolio/project4.png";
import p5 from "../assets/portfolio/project5.jpg";
import p6 from "../assets/portfolio/project6.jpg";

const projects = [
  {
    image: p1,
    title: "E-Commerce Website",
    category: "Web Development",
  },
  {
    image: p2,
    title: "Luxury Brand Identity",
    category: "Branding",
  },
  {
    image: p3,
    title: "Social Media Campaign",
    category: "Marketing",
  },
  {
    image: p4,
    title: "Content Strategy",
    category: "Content Creation",
  },
  {
    image: p5,
    title: "Cinematic Reels",
    category: "Video Editing",
  },
  {
    image: p6,
    title: "Illustration Pack",
    category: "Vector Art",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio">
      <span className="contact-tag">Selected Work</span>

      <h2>Projects That Deliver Results</h2>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.title} className="portfolio-card">
            <img src={project.image} alt={project.title} />

            <div className="portfolio-overlay">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}