import { Routes, Route } from "react-router-dom";

import WebDevelopment from "./pages/WebDevelopment";
import Branding from "./pages/Branding";
import Marketing from "./pages/Marketing";
import ContentCreation from "./pages/ContentCreation";
import VideoEditing from "./pages/VideoEditing";
import VectorArt from "./pages/VectorArt";

import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import ProgressBar from "./components/ProgressBar";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import HorizontalScroll from "./components/HorizontalScroll";
import Contact from "./components/Contact";
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

      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HorizontalScroll />
              <Portfolio />
              <Insights />
              <Testimonials />
              <WhyChoose />
              <Process />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/web-development"
          element={<WebDevelopment />}
        />

        <Route
          path="/branding"
          element={<Branding />}
        />

        <Route
          path="/marketing"
          element={<Marketing />}
        />

        <Route
          path="/content-creation"
          element={<ContentCreation />}
        />

        <Route
          path="/video-editing"
          element={<VideoEditing />}
        />

        <Route
          path="/vector-art"
          element={<VectorArt />}
        />
      </Routes>

      <WhatsAppButton />
    </>
  );
}

export default App;