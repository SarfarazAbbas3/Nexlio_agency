import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import webVideo from "../assets/videos/web.mp4";
import brandingVideo from "../assets/videos/branding.mp4";
import marketingVideo from "../assets/videos/marketing.mp4";
import contentVideo from "../assets/videos/content.mp4";
import editingVideo from "../assets/videos/editing.mp4";
import vectorVideo from "../assets/videos/vector.mp4";



gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Custom websites, e-commerce platforms and scalable web applications built for growth.",
    video: webVideo,
  },
  {
    number: "02",
    title: "Branding",
    description:
      "Memorable visual identities, logos and brand systems that make your business stand out.",
    video: brandingVideo,
  },
  {
    number: "03",
    title: "Marketing",
    description:
      "Data-driven campaigns designed to increase visibility, leads and conversions.",
    video: marketingVideo,
  },
  {
    number: "04",
    title: "Content Creation",
    description:
      "Creative content strategies for social media, websites and digital campaigns.",
    video: contentVideo,
  },
  {
    number: "05",
    title: "Video Editing",
    description:
      "High-impact videos with cinematic editing, motion graphics and storytelling.",
    video: editingVideo,
  },
  {
    number: "06",
    title: "Vector Art",
    description:
      "Professional illustrations, icons and scalable graphics for digital brands.",
    video: vectorVideo,
  },
];

export default function HorizontalScroll() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const panels = trackRef.current.children;

    const animation = gsap.to(trackRef.current, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + window.innerWidth * (panels.length - 1),
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="horizontal-section">
      <div ref={trackRef} className="horizontal-track">
        {services.map((service) => (
          <div key={service.title} className="service-panel">
            <video
              className="service-video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={service.video} type="video/mp4" />
            </video>

            <div className="overlay"></div>

            <motion.div
                 className="service-content"
                     initial={{ opacity: 0, y: 80 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8 }}
                                >
              <span>{service.number}</span>

              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <button>Start Project</button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}