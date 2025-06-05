import { useState } from "react";
import type { PortfolioItem } from "../../types/type";

const Portfolio = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-app",
      title: "Mobile App Development",
      description: "Aplikasi mobile modern dengan UI/UX terbaik",
      gallery: "portfolio-gallery-app",
      details:
        "Pengembangan aplikasi mobile cross-platform menggunakan React Native dan Flutter. Fokus pada performa tinggi, user experience yang intuitif, dan design yang modern.",
      technologies: ["React Native", "Flutter", "Firebase", "Redux"],
      client: "TechCorp Solutions",
      duration: "3 bulan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-product",
      title: "Product Design",
      description: "Desain produk inovatif dan fungsional",
      gallery: "portfolio-gallery-product",
      details:
        "Desain produk digital yang mengutamakan user-centered design. Melakukan riset pengguna, wireframing, prototyping, dan testing untuk menciptakan produk yang user-friendly.",
      technologies: ["Figma", "Sketch", "InVision", "Principle"],
      client: "DesignStudio Inc",
      duration: "2 bulan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-branding",
      title: "Brand Identity",
      description: "Identitas brand yang kuat dan memorable",
      gallery: "portfolio-gallery-branding",
      details:
        "Pengembangan identitas brand komprehensif mulai dari logo design, color palette, typography, hingga brand guidelines. Menciptakan brand yang konsisten dan memorable.",
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
      client: "StartupXYZ",
      duration: "4 minggu",
    },
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-app",
      title: "Web Application",
      description: "Aplikasi web responsive dan modern",
      gallery: "portfolio-gallery-app",
      details:
        "Pengembangan aplikasi web full-stack dengan teknologi modern. Implementasi real-time features, responsive design, dan optimasi performa untuk pengalaman pengguna terbaik.",
      technologies: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      client: "WebTech Solutions",
      duration: "5 bulan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-product",
      title: "E-commerce Platform",
      description: "Platform e-commerce dengan fitur lengkap",
      gallery: "portfolio-gallery-product",
      details:
        "Pengembangan platform e-commerce enterprise dengan fitur lengkap: payment gateway, inventory management, analytics dashboard, dan sistem CRM terintegrasi.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
      client: "RetailCorp",
      duration: "8 bulan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-branding",
      title: "Digital Marketing",
      description: "Strategi pemasaran digital yang efektif",
      gallery: "portfolio-gallery-branding",
      details:
        "Strategi pemasaran digital komprehensif meliputi SEO, SEM, social media marketing, content marketing, dan email marketing untuk meningkatkan brand awareness dan konversi.",
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEMrush"],
      client: "MarketingPro",
      duration: "6 bulan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-app",
      title: "AI Integration",
      description: "Integrasi AI untuk solusi pintar",
      gallery: "portfolio-gallery-app",
      details:
        "Implementasi solusi AI dan machine learning untuk automatisasi proses bisnis. Pengembangan chatbot, sistem rekomendasi, dan analisis prediktif untuk meningkatkan efisiensi operasional.",
      technologies: ["Python", "TensorFlow", "OpenAI API", "Docker"],
      client: "AI Innovations Ltd",
      duration: "4 bulan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-product",
      title: "IoT Solutions",
      description: "Solusi IoT untuk industri modern",
      gallery: "portfolio-gallery-product",
      details:
        "Pengembangan solusi IoT end-to-end untuk monitoring dan kontrol perangkat industri. Implementasi sensor networks, data analytics, dan dashboard real-time untuk optimasi operasional.",
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "InfluxDB"],
      client: "IndustryTech Corp",
      duration: "6 bulan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-branding",
      title: "Corporate Website",
      description: "Website korporat yang profesional",
      gallery: "portfolio-gallery-branding",
      details:
        "Pengembangan website korporat yang profesional dengan fokus pada brand storytelling, SEO optimization, dan user experience. Implementasi CMS untuk kemudahan maintenance konten.",
      technologies: ["WordPress", "PHP", "MySQL", "GSAP"],
      client: "Corporate Solutions Inc",
      duration: "3 bulan",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

  const goToPrevious = (): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = (): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number): void => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const openModal = (item: PortfolioItem): void => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement>
  ): void => {
    e.currentTarget.style.display = "none";
    e.currentTarget.parentElement?.classList.add("loading");
  };

  return (
    <div className="bg-gradient-to-br from-orange-400 via-orange-600 to-red-600 min-h-screen">
      <section
        id="portfolio"
        className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-black/10"
          data-aos="fade-in"
          data-aos-duration="1500"
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div
            className="text-center mb-16 relative"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10 drop-shadow-lg"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Galeri Kami
            </h2>
            <p
              className="text-lg text-white/90 max-w-3xl mx-auto mb-8 relative z-10 drop-shadow-md"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              Koleksi karya terbaik yang mencerminkan dedikasi dan inovasi dalam
              setiap project yang kami kerjakan
            </p>
            <div
              className="flex items-center justify-center gap-4 relative z-10"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="w-16 h-0.5 bg-white/80"></div>
              <div className="w-3 h-3 bg-white/80 rounded-full animate-pulse"></div>
              <div className="w-16 h-0.5 bg-white/80"></div>
            </div>
          </div>

          {/* Portfolio Carousel */}
          <div
            className="relative"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1200"
          >
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / totalPages)
                  }%)`,
                  width: `${totalPages * 100}%`,
                }}
              >
                {Array.from({ length: totalPages }).map((_, pageIndex) => {
                  const startIndex = pageIndex * itemsPerPage;
                  const endIndex = Math.min(
                    startIndex + itemsPerPage,
                    portfolioItems.length
                  );
                  const pageItems = portfolioItems.slice(startIndex, endIndex);

                  return (
                    <div
                      key={pageIndex}
                      className="flex-shrink-0"
                      style={{ width: `${100 / totalPages}%` }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {pageItems.map((item, itemIndex) => (
                          <div
                            key={`${pageIndex}-${itemIndex}`}
                            className="group relative bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
                            data-aos="fade-up"
                            data-aos-delay={700 + itemIndex * 100}
                            data-aos-duration="800"
                            data-aos-anchor-placement="top-bottom"
                          >
                            <div className="relative overflow-hidden aspect-square">
                              <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                onError={handleImageError}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                              {/* Floating Elements */}
                              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                                <span className="px-3 py-1 bg-white/90 text-orange-600 text-xs font-medium uppercase tracking-wide rounded-full backdrop-blur-sm shadow-lg">
                                  {item.category.replace("filter-", "")}
                                </span>
                              </div>
                            </div>

                            <div className="absolute inset-x-3 bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                              <div className="bg-white/95 backdrop-blur-md p-4 rounded-t-xl border-t border-white/30 shadow-lg">
                                <h4 className="text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2 pr-12">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-gray-600 mb-3 pr-12">
                                  {item.description}
                                </p>
                                <div className="flex justify-end">
                                  <button
                                    className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full flex items-center justify-center hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 group/btn"
                                    title="View Details"
                                    onClick={() => openModal(item)}
                                    type="button"
                                  >
                                    <svg
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      className="transition-transform duration-300 group-hover/btn:scale-110"
                                    >
                                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation - FIXED VERSION WITHOUT CONFLICTING AOS */}
            <div className="flex items-center justify-between mt-12">
              <button
                className={`flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md text-white rounded-xl border border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 group ${
                  isTransitioning
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-white/30"
                }`}
                onClick={goToPrevious}
                disabled={isTransitioning}
                title="Previous"
                type="button"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                >
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>

              {/* Fixed Dots Container */}
              <div className="flex items-center gap-4 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
                      index === currentIndex
                        ? "bg-white scale-150 shadow-lg"
                        : "bg-white/60 hover:bg-white/80 shadow-sm hover:scale-125"
                    } ${isTransitioning ? "pointer-events-none" : ""}`}
                    onClick={() => goToSlide(index)}
                    disabled={isTransitioning}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                className={`flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md text-white rounded-xl border border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 group ${
                  isTransitioning
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-white/30"
                }`}
                onClick={goToNext}
                disabled={isTransitioning}
                title="Next"
                type="button"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 mt-8 text-sm">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-2 border border-white/30">
                <span className="text-white font-medium">
                  Halaman {currentIndex + 1} dari {totalPages}
                </span>
                <span className="mx-2 text-white/60">•</span>
                <span className="text-white/90">
                  {portfolioItems.length} Total Projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Modal */}
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
            isModalOpen
              ? "visible opacity-100 bg-black bg-opacity-75"
              : "invisible opacity-0"
          }`}
          onClick={handleModalClick}
        >
          <div
            className={`relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 ${
              isModalOpen ? "scale-100" : "scale-75"
            }`}
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white bg-opacity-90 text-gray-700 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200 shadow-lg"
              onClick={closeModal}
              aria-label="Close modal"
              type="button"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {selectedItem && (
              <div className="flex flex-col md:flex-row max-h-[90vh]">
                <div className="md:w-1/2 aspect-video md:aspect-auto">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:w-1/2 p-8 overflow-y-auto">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {selectedItem.title}
                    </h3>
                    <div className="w-12 h-1 bg-orange-600 mb-6"></div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedItem.details}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                          Client
                        </h4>
                        <p className="text-gray-700">{selectedItem.client}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                          Duration
                        </h4>
                        <p className="text-gray-700">{selectedItem.duration}</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 font-medium">
                        Visit Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
