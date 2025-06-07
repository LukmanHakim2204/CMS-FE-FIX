// AboutPages.tsx - Clean version without problematic SVG
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";
import HeroAbout from "../component/About/HeroAbout";
import CopanyAbout from "../component/About/CompanyAbout";
import Astasila from "../component/About/Astasila";
import ValuesAbout from "../component/About/ValuesAbout";
import DirectorAbout from "../component/About/DirectorAbout";

const AboutPages = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <>
      <Header />
      {/* Hero About */}
      <HeroAbout />
      {/* Company Story */}
      <CopanyAbout />
      {/* About Director */}
      <DirectorAbout />
      {/* Asta Sila */}
      <Astasila />
      {/* Values & Capabilities */}
      <ValuesAbout />
      <Footer />
    </>
  );
};

export default AboutPages;
