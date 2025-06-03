// components/BlogHeader.tsx
import React from "react";
import { Link } from "react-router-dom";
import type { BlogHeaderProps } from "../../types/type";

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title = "Blog",
  description = "Temukan beragam wawasan, berita terkini, dan kisah menarik yang dikemas secara informatif dan inspiratif. Kami menghadirkan konten yang relevan untuk memperluas pengetahuan, memicu ide baru, dan memperkaya perspektif Anda.",
  backgroundImage,
  backgroundType = "gradient",
}) => {
  const getBackgroundStyle = () => {
    switch (backgroundType) {
      case "image":
        return {
          backgroundImage: backgroundImage
            ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
            : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/img/blog/blog-hero-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        };
      case "video":
      case "gradient":
      default:
        return {};
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${
        backgroundType === "gradient"
          ? "bg-gradient-to-br from-orange-700 to-orange-600"
          : ""
      } text-white py-24`}
      data-aos="fade"
      style={getBackgroundStyle()}
    >
      {/* Video Background */}
      {backgroundType === "video" && (
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/assets/video/blog-hero.mp4" type="video/mp4" />
            <source src="/assets/video/blog-hero.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      )}

      {/* Optional Floating Shapes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-8 h-8 bg-white bg-opacity-10 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-6 h-6 bg-white bg-opacity-10 rounded-full animate-ping" />
        <div className="absolute top-20 right-1/4 w-4 h-4 bg-white bg-opacity-20 rounded-full animate-bounce" />
      </div>

      {/* Optional Particle Effects */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white bg-opacity-10 rounded-full animate-pulse`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="relative z-20 container mx-auto px-4 text-center max-w-4xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="inline-block border-b-4 border-white pb-1">
            {title}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-6">{description}</p>

        {/* Breadcrumbs */}
        <nav className="flex justify-center items-center space-x-2 text-sm text-white/70">
          <Link to="/" className="hover:text-white flex items-center gap-1">
            <i className="bi bi-house-door" />
            Home
          </Link>
          <span>/</span>
          <span className="text-white">Blog</span>
        </nav>
      </div>
    </div>
  );
};

export default BlogHeader;
