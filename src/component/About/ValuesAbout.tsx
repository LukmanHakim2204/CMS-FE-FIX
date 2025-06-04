import { Users, Target, Award, Heart } from "lucide-react";
export default function ValuesAbout() {
  return (
    <>
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
    </>
  );
}
