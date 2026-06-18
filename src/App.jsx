import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import ProgressBar from "./components/ProgressBar";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import HorizontalScroll from "./components/HorizontalScroll";
import Contact from "./components/Contact";
import Particles from "./components/Particles";
import "./index.css";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <ProgressBar />
      <Cursor />
      <Particles />

      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <Hero />
      <HorizontalScroll />
      <Portfolio />
      <Contact />
      <WhatsAppButton />
    </>
  );
}

export default App;