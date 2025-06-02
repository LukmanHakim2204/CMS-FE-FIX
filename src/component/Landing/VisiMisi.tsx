const VisiMisi = () => {
  const visimisiData = [
    {
      icon: "eye",
      title: "Visi",
      description:
        "Menjadi perusahaan digital berskala nasional yang berkomitmen untuk meningkatkan kesehatan masyarakat Indonesia.",
      delay: "100",
    },
    {
      icon: "target",
      title: "Misi",
      description:
        "Menjadi agen perubahan yang mengintegrasikan iman kepada Allah sebagai fondasi utama, mengubah setiap takdir menjadi pelajaran dan kesempatan pertumbuhan. Kami memperteguh usaha sungguh-sungguh dan doa sebagai kunci utama untuk mencapai potensi maksimal, meyakini bahwa setiap individu mampu membentuk takdir terbaiknya.",
      delay: "200",
    },
  ];

  return (
    <section
      id="visimisi"
      className="relative min-h-screen py-20 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #ff9a56 0%, #ff6b35 25%, #f15516 50%, #ff712f 75%, #ff8a00 100%)`,
        backgroundSize: "400% 400%",
        animation: "gradientWave 12s ease infinite",
      }}
    >
      {/* Wave Effect Layer 1 */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 animate-pulse"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.1' d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          animation: "waveFloat 8s ease-in-out infinite",
        }}
      />

      {/* Wave Effect Layer 2 */}
      <div
        className="absolute bottom-0 left-0 w-full h-full opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.05' d='M0,224L48,208C96,192,192,160,288,170.7C384,181,480,235,576,240C672,245,768,203,864,181.3C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          animation: "waveFloat 10s ease-in-out infinite reverse",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/5 left-1/10 text-2xl opacity-30"
          style={{ animation: "floatParticle 15s infinite linear" }}
        >
          🌊
        </div>
        <div
          className="absolute top-3/5 right-1/6 text-xl opacity-40"
          style={{ animation: "floatParticle 20s infinite linear reverse" }}
        >
          ✨
        </div>
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10 max-w-6xl">
        <div
          className="relative p-8 md:p-10 rounded-3xl border-3 backdrop-blur-xl transform perspective-1000"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            borderColor: "rgba(255, 154, 86, 0.3)",
            boxShadow: `
                0 25px 50px rgba(255, 107, 53, 0.2),
                0 15px 30px rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.4)
              `,
            transform: "perspective(1000px) rotateX(2deg)",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Glow Border Effect */}
          <div
            className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-3xl -z-10"
            style={{
              background:
                "linear-gradient(45deg, rgba(255, 154, 86, 0.4), rgba(255, 107, 53, 0.2), rgba(241, 39, 17, 0.3), rgba(255, 154, 86, 0.4))",
              animation: "borderGlow 4s ease infinite",
            }}
          />

          {/* Title Section */}
          <div
            className="mb-12 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-5"
              style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)" }}
            >
              Visi & Misi
            </h2>
            <p
              className="text-lg text-white/95 max-w-3xl mx-auto"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
            >
              Visi dan misi ini menjadi dasar dalam setiap langkah strategis
              organisasi, serta menjadi pedoman utama dalam mencapai tujuan
              jangka panjang.
            </p>
          </div>

          {/* Cards Grid - Reduced gap and container width */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {visimisiData.map((service, index) => (
              <div key={index} className="flex">
                <div
                  className="group relative w-full h-full p-10
                   text-center rounded-3xl border-2 backdrop-blur-md transition-all duration-400 overflow-hidden transform hover:scale-105 hover:-translate-y-5"
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    borderColor: "rgba(255, 154, 86, 0.2)",
                    boxShadow: `
                        0px 20px 50px rgba(255, 107, 53, 0.2),
                        0px 10px 25px rgba(0, 0, 0, 0.1)
                      `,
                  }}
                >
                  {/* Shimmer Effect */}
                  <div
                    className="absolute -top-1/2 -left-1/2 w-full h-full rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(45deg, transparent, rgba(255, 154, 86, 0.1), transparent)",
                      animation: "shimmer 3s infinite",
                    }}
                  />

                  {/* Icon Container */}
                  <div className="flex justify-center items-center mb-6 relative z-10">
                    <div
                      className="relative w-18 h-18 rounded-3xl flex items-center justify-center text-white transition-all duration-400 group-hover:scale-115 overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(135deg, #ff9a56 0%, #ff6b35 50%, #f12711 100%)",
                        boxShadow: `
                            0 15px 35px rgba(255, 107, 53, 0.4),
                            0 5px 15px rgba(241, 39, 17, 0.3)
                          `,
                      }}
                    >
                      {/* Ripple Effect */}
                      <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-600 group-hover:w-full group-hover:h-full group-hover:scale-300" />

                      {/* Icon SVG */}
                      <div className="relative z-10 text-4xl">
                        {service.icon === "eye" ? (
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{
                              filter:
                                "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
                            }}
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        ) : service.icon === "target" ? (
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{
                              filter:
                                "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
                            }}
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="12" r="6"></circle>
                            <circle cx="12" cy="12" r="2"></circle>
                          </svg>
                        ) : (
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="12" r="6"></circle>
                            <circle cx="12" cy="12" r="2"></circle>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3
                      className="text-2xl font-bold mb-4 text-orange-800 transition-all duration-300 group-hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(135deg, #ff9a56 0%, #ff6b35 50%, #f12711 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-amber-900 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{` @keyframes gradientWave {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 25%;
          }
          50% {
            background-position: 0% 75%;
          }
          75% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes waveFloat {
          0%,
          100% {
            transform: translateX(0) translateY(0) scale(1);
          }
          25% {
            transform: translateX(-10px) translateY(-5px) scale(1.02);
          }
          50% {
            transform: translateX(10px) translateY(5px) scale(0.98);
          }
          75% {
            transform: translateX(-5px) translateY(-10px) scale(1.01);
          }
        }

        @keyframes floatParticle {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        @keyframes borderGlow {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        /* Custom Responsive */
        @media (max-width: 768px) {
          .perspective-1000 {
            transform: none !important;
          }
        }`}</style>
    </section>
  );
};

export default VisiMisi;
