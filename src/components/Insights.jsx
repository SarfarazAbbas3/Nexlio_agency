import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import project1 from "../assets/portfolio/project1.jpg";
import project2 from "../assets/portfolio/project2.jpg";
import project3 from "../assets/portfolio/project3.jpg";
import project4 from "../assets/portfolio/project4.png";
import project5 from "../assets/portfolio/project5.jpg";
import project6 from "../assets/portfolio/project6.jpg";

const posts = [
  {
    title: "Logistics Website",
    category: "Web Development",
    image: project1,
  },
  {
    title: "Brand Identity",
    category: "Branding",
    image: project2,
  },
  {
    title: "Marketing Campaign",
    category: "Marketing",
    image: project3,
  },
  {
    title: "Video Production",
    category: "Video Editing",
    image: project4,
  },
  {
    title: "Content Strategy",
    category: "Content Creation",
    image: project5,
  },
  {
    title: "Vector Artwork",
    category: "Vector Art",
    image: project6,
  },
];

export default function Insights() {
  return (
    <section className="insights">
      <div className="section-heading">
        <span>INSIGHTS</span>
        <h2>Ideas That Drive Growth</h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.title}>
            <div
              className="insight-card"
              style={{
                backgroundImage: `url(${post.image})`,
              }}
            >
              <div className="insight-overlay"></div>

              <div className="insight-content">
                <span>{post.category}</span>
                <h3>{post.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}