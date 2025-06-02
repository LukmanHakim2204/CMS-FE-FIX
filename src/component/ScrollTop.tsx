import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  // Scroll ke atas setiap kali route berubah
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Hapus preloader saat mount
  useEffect(() => {
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.remove();
      }, 500);
    }
  }, []);

  // Tampilkan tombol scroll-top saat scroll ke bawah
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Tombol Scroll to Top */}
      <a
        href="#"
        onClick={handleScrollTop}
        className={`fixed bottom-5 right-5 w-12 h-12 rounded-full flex items-center justify-center text-white bg-orange-600 shadow-lg transition-transform duration-300 z-50 ${
          showButton
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-75"
        } hover:bg-orange-400 hover:scale-110`}
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
      </a>

      {/* Preloader */}
      <div
        id="preloader"
        className="fixed inset-0 bg-white flex items-center justify-center z-[9999]"
      >
        <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </>
  );
}
