import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../component/Header";
import About from "../component/Landing/About";
import Hero from "../component/Landing/Hero";
import VisiMisi from "../component/Landing/Visimisi";
import Milestone from "../component/Landing/Milestone";
import Portfolio from "../component/Landing/Portfolio";
import Footer from "../component/Footer";
import PostingIG from "../component/Landing/PostingIG";
import Contact from "../component/Landing/Contact";

// import InstagramPOST from "../component/Landing/PostinganIG";

const Landing = () => {
  useEffect(() => {
    // Initialize AOS
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Cleanup function untuk membersihkan AOS saat component unmount
    return () => {
      AOS.refreshHard(); // Reset semua AOS animations
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <VisiMisi />
      <Milestone />
      <Portfolio />
      <PostingIG />
      <Contact />
      <Footer />
    </>
  );
};

export default Landing;
