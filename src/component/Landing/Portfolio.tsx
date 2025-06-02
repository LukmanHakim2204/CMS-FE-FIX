import { useState } from "react";

interface PortfolioItem {
  image: string;
  category: string;
  title: string;
  description: string;
  gallery: string;
  details: string;
  technologies: string[];
  client: string;
  duration: string;
}

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
  const itemsPerPage = 3;
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

  const goToPrevious = (): void => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goToNext = (): void => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
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

  const getCurrentPageItemsCount = (): number => {
    const startIndex = currentIndex * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, portfolioItems.length);
    return endIndex - startIndex;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Portfolio Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Koleksi karya terbaik yang mencerminkan dedikasi dan inovasi dalam
              setiap project yang kami kerjakan
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-20"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-20"></div>
            </div>
          </div>

          {/* Portfolio Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
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
                      className="w-full flex-shrink-0"
                      style={{ width: `${100 / totalPages}%` }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                        {pageItems.map((item, itemIndex) => (
                          <div
                            key={`${pageIndex}-${itemIndex}`}
                            className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                          >
                            <div className="relative overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                onError={handleImageError}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-6">
                              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                                {item.title}
                              </h4>
                              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                {item.description}
                              </p>

                              <div className="flex justify-between items-center">
                                <div className="flex flex-wrap gap-1">
                                  {item.technologies
                                    .slice(0, 2)
                                    .map((tech, index) => (
                                      <span
                                        key={index}
                                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  {item.technologies.length > 2 && (
                                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                                      +{item.technologies.length - 2}
                                    </span>
                                  )}
                                </div>

                                <button
                                  className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                                  title="View Details"
                                  onClick={() => openModal(item)}
                                  type="button"
                                >
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </button>
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

            {/* Navigation */}
            <div className="flex items-center justify-center mt-8 space-x-6">
              <button
                className="w-12 h-12 bg-white text-gray-600 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={goToPrevious}
                title="Previous"
                type="button"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? "bg-blue-500 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => goToSlide(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        goToSlide(index);
                      }
                    }}
                  />
                ))}
              </div>

              <button
                className="w-12 h-12 bg-white text-gray-600 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={goToNext}
                title="Next"
                type="button"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </div>

            <div className="text-center mt-6 space-x-4 text-sm text-gray-500">
              <span className="font-medium">
                Halaman {currentIndex + 1} dari {totalPages}
              </span>
              <span>•</span>
              <span>{portfolioItems.length} Total Projects</span>
              <span>•</span>
              <span>{getCurrentPageItemsCount()} Items pada halaman ini</span>
            </div>
          </div>
        </div>

        {/* Portfolio Modal */}
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
            isModalOpen
              ? "visible opacity-100 bg-black/80 backdrop-blur-sm"
              : "invisible opacity-0"
          }`}
          onClick={handleModalClick}
        >
          <div
            className={`relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transition-all duration-300 ${
              isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 text-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors duration-200 shadow-lg"
              onClick={closeModal}
              aria-label="Close modal"
              type="button"
            >
              <svg
                width="20"
                height="20"
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
              <div className="overflow-y-auto max-h-[90vh]">
                <div className="relative">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    loading="lazy"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {selectedItem.title}
                    </h3>
                    <p className="text-white/90">{selectedItem.description}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Client
                      </h4>
                      <p className="text-gray-600">{selectedItem.client}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Duration
                      </h4>
                      <p className="text-gray-600">{selectedItem.duration}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Category
                      </h4>
                      <p className="text-gray-600 capitalize">
                        {selectedItem.category.replace("filter-", "")}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Project Details
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedItem.details}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
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
