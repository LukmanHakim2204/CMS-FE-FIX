import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../component/Header";
import About from "../component/Landing/About";
import Hero from "../component/Landing/Hero";
import VisiMisi from "../component/Landing/VisiMisi";
import Milestone from "../component/Landing/MileStone";
import Portfolio from "../component/Landing/Portfolio";
import Footer from "../component/Footer";
import PostingIG from "../component/Landing/PostingIG";
import Contact from "../component/Landing/Contact";

// import InstagramPOST from "../component/Landing/PostinganIG";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Pastikan refresh setelah semua komponen dirender
    setTimeout(() => {
      AOS.refresh();
    }, 100);
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

export default Home;
