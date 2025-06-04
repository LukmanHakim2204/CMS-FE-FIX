// AboutPages.tsx - Clean version without problematic SVG
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { CheckCircle, Users, Target, Award, Heart } from "lucide-react";
import Header from "../component/Header";
import Footer from "../component/Footer";

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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-red-500 text-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-orange-600 bg-opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Tentang
                <span className="block text-orange-200">Bara Reca Niroga</span>
              </h1>
              <p className="text-xl lg:text-2xl text-orange-100 mb-8 leading-relaxed">
                Perusahaan FMCG berbasis digital marketing yang berkomitmen
                menghadirkan produk herbal berkualitas untuk Indonesia.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="text-2xl font-bold text-orange-600 text-center">
                    2021
                  </div>
                  <div className="text-orange-600 text-sm">Didirikan</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="text-2xl font-bold text-orange-600 text-center">
                    1000+
                  </div>
                  <div className="text-orange-600 text-sm">
                    Produk Terdistribusi
                  </div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="text-2xl font-bold text-orange-600 text-center">
                    50+
                  </div>
                  <div className="text-orange-600 text-sm">Kota Jangkauan</div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="relative">
              <div className="relative z-10">
                <img
                  src="/assets/images/Programming.png"
                  alt="Bara Reca Niroga"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-300 rounded-full opacity-15 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <img
                src="/assets/images/herbal-products.jpg"
                alt="Produk herbal Bara Reca"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=800&h=600&fit=crop";
                }}
              />
            </div>

            <div data-aos="fade-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Perjalanan Kami
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Bara Reca Niroga didirikan dengan visi mulia untuk
                  menghadirkan produk herbal berkualitas tinggi yang dapat
                  dinikmati oleh seluruh masyarakat Indonesia. Sebagai
                  perusahaan FMCG berbasis digital marketing, kami memahami
                  pentingnya inovasi dalam pendistribusian produk.
                </p>
                <p>
                  Dengan memanfaatkan teknologi digital dan strategi pemasaran
                  modern, kami tidak hanya fokus pada penjualan produk, tetapi
                  juga pada pembentukan generasi muda yang siap menghadapi
                  tantangan industri masa depan.
                </p>
                <p>
                  Komitmen kami terhadap kualitas dan inovasi telah membawa
                  dampak positif bagi ribuan konsumen dan mitra bisnis di
                  seluruh Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Komitmen & Kemampuan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Membentuk generasi muda yang kuat, kreatif, inovatif, adaptif, dan
              siap kerja
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-orange-600" />,
                title: "Berpikir Kritis & Solutif",
                description:
                  "Menghadapi tantangan industri dengan pendekatan analitis dan solusi inovatif",
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Teknologi & Digital Tools",
                description:
                  "Menguasai pemasaran modern dengan teknologi terdepan dan strategi digital",
              },
              {
                icon: <Heart className="w-8 h-8 text-red-600" />,
                title: "Komunikasi Efektif",
                description:
                  "Membangun kerja sama tim yang solid dengan komunikasi yang konstruktif",
              },
              {
                icon: <Award className="w-8 h-8 text-purple-600" />,
                title: "Kontribusi Profesional",
                description:
                  "Siap berkontribusi secara profesional di berbagai sektor industri",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPages;
