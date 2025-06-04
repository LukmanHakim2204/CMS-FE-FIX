export default function HeroAbout() {
  return (
    <>
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
    </>
  );
}
