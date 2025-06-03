import { CheckCircle, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white -mt-1">
      <div
        className="container mx-auto px-4 text-center "
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-4xl font-bold text-gray-800">About</h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Content */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="mb-4 text-gray-700">
              Bara Reca Niroga merupakan perusahaan FMCG (Fast Moving Consumer
              Good) berbasis digital marketing yang bergerak di bidang produk
              herbal yang berkualitas.
            </p>
            <p className="mb-6 text-gray-700">
              Kami berkomitmen untuk mendistribusikan produk herbal olahan
              terbaik ke seluruh pelosok Indonesia dan membentuk generasi muda
              yang kuat, kreatif, inovatif, adaptif, dan siap kerja, dengan
              kemampuan:
            </p>
            <ul className="space-y-4 text-gray-700">
              {[
                "Berpikir kritis dan solutif dalam menghadapi tantangan industri.",
                "Menguasai teknologi dan digital tools untuk pemasaran modern.",
                "Berkomunikasi efektif dan membangun kerja sama tim",
                "Siap berkontribusi secara profesional di berbagai sektor industri",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex items-center text-primary-600 hover:underline font-medium"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Image */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src="/assets/images/Programming.png"
              alt="Ilustrasi programming"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
