import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import ProgressBar from "./components/ProgressBar";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import HorizontalScroll from "./components/HorizontalScroll";
import Contact from "./components/Contact";
import Particles from "./components/Particles";
import "./index.css";
import WhatsAppButton from "./components/WhatsAppButton";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import Insights from "./components/Insights";
import Footer from "./components/Footer";

import { useEffect } from "react";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}, []);
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <ProgressBar />
      <Cursor />
      {/* <Particles /> */}

      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <Hero />
      <HorizontalScroll />
      <Portfolio />
      <Insights />
      <Testimonials />
      <WhyChoose />
      <Process />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;