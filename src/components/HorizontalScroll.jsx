
import { Link } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";

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
    stats: "50+ Projects Delivered",
    features: [
      "Custom Websites",
      "E-commerce Stores",
      "Web Applications"
    ],

    video: webVideo,
  },
  {
    number: "02",
    title: "Branding",
    description:
      "Memorable visual identities, logos and brand systems that make your business stand out.",
    stats: "30+ Brands Built",
    features: [
      "Logo Design",
      "Brand Identity",
      "Brand Guidelines"
    ],
    video: brandingVideo,
  },
  {
    number: "03",
    title: "Marketing",
    description:
      "Data-driven campaigns designed to increase visibility, leads and conversions.",
    stats: "100+ Campaigns Run",
    features: [
      "Social Media Marketing",
      "Email Marketing",
      "SEO Optimization"
    ],
    video: marketingVideo,
  },
  {
    number: "04",
    title: "Content Creation",
    description:
      "Creative content strategies for social media, websites and digital campaigns.",
    stats: "200+ Pieces Created",
    features: [
      "Social Media Content",
      "Blog Writing",
      "Copywriting"
    ],
    video: contentVideo,
  },
  {
    number: "05",
    title: "Video Editing",
    description:
      "High-impact videos with cinematic editing, motion graphics and storytelling.",
    stats: "50+ Videos Edited",
    features: [
      "Cinematic Editing",
      "Motion Graphics",
      "Storytelling"
    ],
    video: editingVideo,
  },
  {
    number: "06",
    title: "Vector Art",
    description:
      "Professional illustrations, icons and scalable graphics for digital brands.",
    stats: "100+ Illustrations Created",
    features: [
      "Illustrations",
      "Icons",
      "Scalable Graphics"
    ],
    video: vectorVideo,
  },
];
const totalServices = services.length;
export default function HorizontalScroll() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // console.log("HorizontalScroll Loaded");


  useLayoutEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const panels = trackRef.current.children;

      gsap.to(trackRef.current, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + window.innerWidth * (panels.length - 1),
          onUpdate: (self) => {
            setActiveIndex(
              Math.round(self.progress * (panels.length - 1))
            );
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="horizontal-section"
    >
      <div className="service-counter">
        {String(activeIndex + 1).padStart(2, "0")} /{" "}
        {String(totalServices).padStart(2, "0")}
      </div>
      <div ref={trackRef} className="horizontal-track">
        {services.map((service) => (
          <div
            key={service.title}
            className="service-panel"
          >

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
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {service.number}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {service.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {service.description}
              </motion.p>
              <div className="service-meta">
                <div className="service-stats">
                  {service.stats}
                </div>

                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: "25px" }}>
                <Link
                  to={
                    service.title === "Web Development"
                      ? "/web-development"
                      : service.title === "Branding"
                        ? "/branding"
                        : service.title === "Marketing"
                          ? "/marketing"
                          : service.title === "Content Creation"
                            ? "/content-creation"
                            : service.title === "Video Editing"
                              ? "/video-editing"
                              : service.title === "Vector Art"
                                ? "/vector-art"
                                : "/"
                  }
                  className="hero-btn"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}