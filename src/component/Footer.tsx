import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <>
      <footer className="bg-orange-500 min-h-[300px] flex flex-col justify-between py-8">
        {/* Konten Tengah */}
        <div className="container mx-auto px-4 flex-grow flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-4 text-white w-full">
            {/* Kiri: Deskripsi */}
            <div className="text-center md:text-left md:w-1/2">
              <h4 className="font-bold text-lg">PT Barareca Niroga</h4>
              <p className="mb-0">
                Bara Reca Niroga merupakan perusahaan FMCG (Fast Moving Consumer
                Good) berbasis digital marketing yang bergerak di bidang produk
                herbal yang berkualitas
              </p>
            </div>

            {/* Kanan: Sosial Media */}
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="flex flex-col items-start">
                <p className="font-bold mb-3">Hubungi Kami Di Bawah Ini :</p>
                <div className="flex gap-7">
                  <a href="https://www.tiktok.com/@bararecaofficial">
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://www.instagram.com/barareca/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bawah */}
        <div className="text-center text-white mt-4">
          <div>
            <span>&copy; </span>
            <strong className="px-1">PT Barareca Niroga</strong>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
