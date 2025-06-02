import { useState, useRef, useEffect } from "react";

const MileStone = () => {
  const milestones = [
    {
      year: "2020",
      icon: "🚀",
      title: "Company Founded",
      description:
        "Started our journey with a vision to revolutionize digital solutions and create innovative experiences for our clients.",
      stats: { projects: "10+", clients: "5+", team: "3" },
    },
    {
      year: "2021",
      icon: "🏆",
      title: "First Major Achievement",
      description:
        "Successfully delivered 50+ projects and established partnerships with leading companies in the industry.",
      stats: { projects: "50+", clients: "20+", team: "8" },
    },
    {
      year: "2022",
      icon: "📈",
      title: "Rapid Growth",
      description:
        "Expanded our team to 25+ professionals and launched our AI-powered solutions that transformed client operations.",
      stats: { projects: "150+", clients: "50+", team: "25" },
    },
    {
      year: "2023",
      icon: "🌍",
      title: "Global Expansion",
      description:
        "Opened international offices and served clients across 15+ countries with our cutting-edge technology solutions.",
      stats: { projects: "300+", clients: "80+", team: "40" },
    },
    {
      year: "2024",
      icon: "🏆",
      title: "Industry Recognition",
      description:
        "Received multiple awards for innovation and became a trusted partner for Fortune 500 companies worldwide.",
      stats: { projects: "500+", clients: "100+", team: "60" },
    },
    {
      year: "2025",
      icon: "⭐",
      title: "Future Innovation",
      description:
        "Launching next-generation AI solutions and expanding into emerging markets with cutting-edge technology platforms.",
      stats: { projects: "750+", clients: "150+", team: "80" },
    },
    {
      year: "2026",
      icon: "💡",
      title: "Tech Leadership",
      description:
        "Establishing ourselves as industry leaders in AI and blockchain technology with revolutionary products.",
      stats: { projects: "1000+", clients: "200+", team: "100" },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? milestones.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === milestones.length - 1 ? 0 : prev + 1));
  };

  // Auto scroll timeline when milestone changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const timelineItem = scrollContainerRef.current.children[
        currentIndex
      ] as HTMLElement;
      if (timelineItem) {
        timelineItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentIndex]);

  const currentMilestone = milestones[currentIndex];

  return (
    <>
      <section
        id="milestone"
        className="relative min-h-screen py-20 overflow-hidden"
      >
        <div className="container mx-auto md:px-16 lg:px-24 relative z-10 max-w-8xl">
          <div
            className="relative p-8 md:p-10 rounded-3xl backdrop-blur-xl transform perspective-1000"
            style={{
              transform: "perspective(1000px) rotateX(2deg)",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Glow Border Effect */}
            <div className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-3xl -z-10" />

            {/* Title Section */}
            <div
              className="mb-12 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                Our Journey
              </h2>
              <p
                className="text-lg text-drak/95 max-w-3xl mx-auto"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
              >
                Milestones that define our path to excellence and innovation in
                digital solutions
              </p>
            </div>

            {/* Main Content Container */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12">
              {/* Slider Section - Always First on Mobile */}
              <div className="w-full lg:w-7/12 order-1">
                <div
                  className="bg-white/90 backdrop-blur-md rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl border-2 border-white/20"
                  style={{
                    minHeight: "500px",
                    height: "auto",
                    position: "relative",
                  }}
                >
                  {/* Current Milestone Display */}
                  <div className="mb-6 lg:mb-8">
                    <div
                      key={`milestone-${currentIndex}`}
                      className="bg-white/80 border-2 border-orange-100 rounded-xl lg:rounded-2xl p-4 md:p-5 lg:p-6 relative overflow-hidden"
                      style={{
                        minHeight: "180px",
                        animation: "fadeInSlide 0.5s ease-out",
                      }}
                    >
                      {/* Top Border */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-600" />

                      {/* Header */}
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div
                          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0"
                          style={{
                            background:
                              "linear-gradient(135deg, #ff6b35, #f12711)",
                          }}
                        >
                          <span className="text-sm md:text-base lg:text-lg">
                            {currentMilestone.icon}
                          </span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <span
                            className="inline-block text-xs font-semibold px-2 md:px-3 py-1 rounded-lg lg:rounded-xl mb-1 border border-orange-300"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(241, 39, 17, 0.1))",
                              color: "#ff6b35",
                            }}
                          >
                            {currentMilestone.year}
                          </span>
                          <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-800 leading-tight">
                            {currentMilestone.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed mb-3 md:mb-4">
                        {currentMilestone.description}
                      </p>

                      {/* Mini Stats */}
                      <div className="flex gap-1 md:gap-2 flex-wrap">
                        <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-md lg:rounded-lg text-xs font-semibold">
                          {currentMilestone.stats.projects} Projects
                        </span>
                        <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-md lg:rounded-lg text-xs font-semibold">
                          {currentMilestone.stats.clients} Clients
                        </span>
                        <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-md lg:rounded-lg text-xs font-semibold">
                          {currentMilestone.stats.team} Team
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Section */}
                  <div className="bg-gray-50/50 rounded-xl lg:rounded-2xl p-3 md:p-4 lg:p-5 mb-4 md:mb-6 border border-orange-100">
                    <div className="flex justify-between items-center mb-3 md:mb-4">
                      <h5 className="text-sm md:text-base lg:text-lg font-semibold text-gray-800">
                        Complete Timeline
                      </h5>
                    </div>

                    {/* Fixed Height Timeline Container */}
                    <div
                      className="relative w-full"
                      style={{
                        height: "70px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        ref={scrollContainerRef}
                        className="flex gap-2 md:gap-3 overflow-x-auto scroll-smooth pb-2 h-full"
                      >
                        {milestones.map((milestone, index: number) => {
                          const isActive = index === currentIndex;
                          return (
                            <div
                              key={`timeline-${index}`}
                              className={`flex items-center gap-2 p-2 md:p-3 rounded-lg cursor-pointer transition-all duration-300 border-2 flex-shrink-0 ${
                                isActive
                                  ? "bg-gradient-to-br from-orange-100 to-red-50 border-orange-500"
                                  : "bg-white border-transparent hover:bg-orange-50 hover:border-orange-200"
                              }`}
                              style={{
                                width: "130px",
                                minWidth: "130px",
                                maxWidth: "130px",
                              }}
                              onClick={() => goToSlide(index)}
                            >
                              <div
                                className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm flex-shrink-0 transition-all duration-300 ${
                                  isActive
                                    ? "bg-gradient-to-br from-orange-500 to-red-600 text-white"
                                    : "bg-orange-100 text-orange-600"
                                }`}
                              >
                                <span>{milestone.icon}</span>
                              </div>

                              <div className="flex flex-col gap-1 overflow-hidden">
                                <span className="text-xs font-bold text-orange-600">
                                  {milestone.year}
                                </span>
                                <span className="text-xs font-semibold text-gray-800 leading-tight truncate">
                                  {milestone.title}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center justify-between mb-4 md:mb-6 gap-3">
                    <button
                      className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white flex items-center justify-center transition-all duration-300 text-base md:text-lg font-bold hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95 flex-shrink-0"
                      onClick={goToPrevious}
                      title="Previous Milestone"
                    >
                      ‹
                    </button>

                    <div className="flex gap-1 md:gap-2 justify-center flex-1">
                      {milestones.map((_, index: number) => (
                        <button
                          key={`indicator-${index}`}
                          className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                            index === currentIndex
                              ? "bg-gradient-to-br from-orange-500 to-red-600 scale-125"
                              : "bg-gray-300 hover:bg-orange-400 hover:scale-110"
                          }`}
                          onClick={() => goToSlide(index)}
                          title={`Go to ${milestones[index].year}`}
                        />
                      ))}
                    </div>

                    <button
                      className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white flex items-center justify-center transition-all duration-300 text-base md:text-lg font-bold hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95 flex-shrink-0"
                      onClick={goToNext}
                      title="Next Milestone"
                    >
                      ›
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="flex-1 h-1 md:h-1.5 bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full transition-all duration-500"
                        style={{
                          width: `${
                            ((currentIndex + 1) / milestones.length) * 100
                          }%`,
                        }}
                      />
                    </div>
                    <span className="text-xs md:text-sm text-gray-500 font-semibold flex-shrink-0 whitespace-nowrap">
                      {currentIndex + 1} of {milestones.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Image & Stats Section - Second on Mobile */}
              <div className="w-full lg:w-5/12 order-2">
                <div
                  className="bg-white/90 backdrop-blur-md rounded-2xl lg:rounded-3xl p-4 md:p-6 shadow-2xl border-2 border-white/20"
                  style={{
                    minHeight: "500px",
                    height: "auto",
                    position: "relative",
                  }}
                >
                  {/* Image */}
                  <div className="mb-4 md:mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                      alt="Our Journey"
                      className="w-full rounded-xl lg:rounded-2xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
                      style={{
                        height: "200px",
                        minHeight: "200px",
                        maxHeight: "200px",
                      }}
                    />
                  </div>

                  {/* Stats Section */}
                  <div className="bg-gray-50/50 backdrop-blur-md rounded-xl lg:rounded-2xl p-4 md:p-5 border border-orange-100">
                    <div className="grid grid-cols-3 gap-2 md:gap-4 mb-3 md:mb-4">
                      <div className="text-center">
                        <span className="block text-lg md:text-xl lg:text-2xl font-bold text-orange-500 mb-1 transition-all duration-300">
                          {currentMilestone.stats.projects}
                        </span>
                        <span className="text-xs md:text-sm text-gray-500 font-medium">
                          Projects
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="block text-lg md:text-xl lg:text-2xl font-bold text-orange-500 mb-1 transition-all duration-300">
                          {currentMilestone.stats.clients}
                        </span>
                        <span className="text-xs md:text-sm text-gray-500 font-medium">
                          Clients
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="block text-lg md:text-xl lg:text-2xl font-bold text-orange-500 mb-1 transition-all duration-300">
                          {currentMilestone.stats.team}
                        </span>
                        <span className="text-xs md:text-sm text-gray-500 font-medium">
                          Team Size
                        </span>
                      </div>
                    </div>

                    <div className="text-center mt-3 pt-3 border-t-2 border-orange-200">
                      <span
                        className="inline-block text-base md:text-lg lg:text-xl font-bold text-orange-500 px-3 md:px-4 py-2 rounded-full border-2 border-orange-300"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(241, 39, 17, 0.1))",
                        }}
                      >
                        {currentMilestone.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MileStone;
