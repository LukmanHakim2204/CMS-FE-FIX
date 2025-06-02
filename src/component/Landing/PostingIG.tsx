import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useCallback } from "react";

// Simple axios implementation for the artifact environment
const axios = {
  get: async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return { data };
  },
  isAxiosError: (
    error: unknown
  ): error is {
    response?: { data?: { message?: string } };
    message: string;
  } => {
    return typeof error === "object" && error !== null && "response" in error;
  },
};

// Type untuk response API yang mungkin berbeda format
interface ApiResponse {
  data?: InstagramPost[];
  posts?: InstagramPost[];
  items?: InstagramPost[];
}

interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  caption?: string;
  permalink: string;
}

function PostingIG() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const postsPerSlide = 6;
  const totalSlides = Math.ceil(posts.length / postsPerSlide);

  const getCurrentSlideItems = useCallback(() => {
    const startIndex = currentSlide * postsPerSlide;
    const endIndex = Math.min(startIndex + postsPerSlide, posts.length);
    const items = posts.slice(startIndex, endIndex);

    return items;
  }, [currentSlide, posts, postsPerSlide]);

  // Fetch posts on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Coba ambil data dari API terlebih dahulu
        const response = await axios.get(
          "http://127.0.0.1:8000/api/instagram-posts"
        );

        // Cek berbagai format response yang mungkin
        let postsData: InstagramPost[] | null = null;

        if (Array.isArray(response.data)) {
          postsData = response.data as InstagramPost[];
        } else if (
          response.data &&
          Array.isArray((response.data as ApiResponse).data)
        ) {
          postsData = (response.data as ApiResponse).data as InstagramPost[];
        } else if (
          response.data &&
          Array.isArray((response.data as ApiResponse).posts)
        ) {
          postsData = (response.data as ApiResponse).posts as InstagramPost[];
        } else if (
          response.data &&
          (response.data as ApiResponse).items &&
          Array.isArray((response.data as ApiResponse).items)
        ) {
          postsData = (response.data as ApiResponse).items as InstagramPost[];
        } else {
          throw new Error(
            `Invalid response format. Received: ${JSON.stringify(
              response.data
            ).substring(0, 200)}...`
          );
        }

        if (postsData && postsData.length > 0) {
          setPosts(postsData);
        } else {
          setPosts([]);
        }
      } catch (err) {
        const errorMessage =
          axios.isAxiosError(err) && err.response
            ? err.response.data?.message || err.message
            : err instanceof Error
            ? err.message
            : "Failed to load posts";
        setError(`Failed to load Instagram posts: ${errorMessage}`);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Animation effect for posts - runs when slide changes
  useEffect(() => {
    if (posts.length > 0) {
      // Reset all cards first
      const cards = document.querySelectorAll("[data-fade-in]");
      cards.forEach((card) => {
        (card as HTMLElement).style.opacity = "0";
        (card as HTMLElement).style.transform = "translateY(16px)";
      });

      // Apply animation with delay
      setTimeout(() => {
        cards.forEach((card, index) => {
          setTimeout(() => {
            (card as HTMLElement).style.opacity = "1";
            (card as HTMLElement).style.transform = "translateY(0px)";
          }, index * 100);
        });
      }, 50);
    }
  }, [posts, currentSlide]);

  // Effect untuk tracking perubahan slide
  useEffect(() => {
    // Effect untuk tracking perubahan slide jika diperlukan
    // Bisa ditambahkan analytics atau tracking lainnya di sini
  }, [currentSlide, totalSlides, getCurrentSlideItems]);

  const truncateCaption = (caption: string, maxLength: number = 80) => {
    return caption.length <= maxLength
      ? caption
      : caption.slice(0, maxLength) + "...";
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const goToPrevious = () => {
    const newSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
    setCurrentSlide(newSlide);
  };

  const goToNext = () => {
    const newSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(newSlide);
  };

  const retryFetch = async () => {
    setError(null);
    setLoading(true);

    try {
      // Coba API lagi
      const response = await axios.get(
        "http://127.0.0.1:8000/api/instagram-posts"
      );

      // Cek berbagai format response yang mungkin
      let postsData: InstagramPost[] | null = null;

      if (Array.isArray(response.data)) {
        postsData = response.data as InstagramPost[];
      } else if (
        response.data &&
        Array.isArray((response.data as ApiResponse).data)
      ) {
        postsData = (response.data as ApiResponse).data as InstagramPost[];
      } else if (
        response.data &&
        Array.isArray((response.data as ApiResponse).posts)
      ) {
        postsData = (response.data as ApiResponse).posts as InstagramPost[];
      } else if (
        response.data &&
        (response.data as ApiResponse).items &&
        Array.isArray((response.data as ApiResponse).items)
      ) {
        postsData = (response.data as ApiResponse).items as InstagramPost[];
      } else {
        throw new Error(
          `Invalid response format. Received: ${JSON.stringify(
            response.data
          ).substring(0, 200)}...`
        );
      }

      if (postsData && postsData.length > 0) {
        setPosts(postsData);
      } else {
        setPosts([]);
      }
    } catch (err) {
      const errorMessage =
        axios.isAxiosError(err) && err.response
          ? err.response.data?.message || err.message
          : err instanceof Error
          ? err.message
          : "Failed to load posts";
      setError(`Failed to load Instagram posts: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-80 gap-5">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin"></div>
        <p className="text-gray-500 text-base">Loading Instagram posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-80 gap-5">
        <div className="text-red-500 text-center">
          <p className="text-lg font-semibold mb-2">⚠️ Error Loading Posts</p>
          <p className="text-sm">{error}</p>
        </div>
        <button
          onClick={retryFetch}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-80 gap-5">
        <p className="text-gray-500 text-center">📭 No Instagram posts found</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-10 bg-gray-50 min-h-screen">
      {/* Feed Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-3 flex items-center justify-center gap-4">
          <FontAwesomeIcon icon={faCamera} />
          Our Instagram Posts
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          Ikuti perjalanan kami melalui momen istimewa yang tercipta dari kerja
          keras & kreativitas.
        </p>
        <span className="bg-gradient-to-r from-yellow-400 to-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold inline-block">
          {posts.length} Posts
        </span>
      </div>

      {/* Carousel Container */}
      <div className="relative mt-10 bg-white rounded-2xl p-8 shadow-xl overflow-hidden">
        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 min-h-[400px]">
          {getCurrentSlideItems().map((post, index) => (
            <div
              key={`${post.id}-${currentSlide}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl relative flex flex-col opacity-0 translate-y-4"
              data-fade-in
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: "translateY(16px)",
                opacity: 0,
                transition: "all 0.3s ease",
              }}
            >
              {/* Post Image Container */}
              <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
                <img
                  src={
                    post.media_type === "VIDEO"
                      ? post.thumbnail_url || post.media_url
                      : post.media_url
                  }
                  alt={post.caption || "Instagram Post"}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x400?text=Image+Not+Found";
                  }}
                />

                {/* Media Type Badge */}
                <div
                  className={`absolute top-2 right-2 px-2 py-1 rounded-lg text-xs font-medium backdrop-blur-sm ${
                    post.media_type === "VIDEO"
                      ? "bg-pink-500/90 text-white"
                      : post.media_type === "CAROUSEL_ALBUM"
                      ? "bg-purple-500/90 text-white"
                      : "bg-black/70 text-white"
                  }`}
                >
                  {post.media_type === "VIDEO"
                    ? "🎥"
                    : post.media_type === "CAROUSEL_ALBUM"
                    ? "📱"
                    : "📷"}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                {post.caption && (
                  <p className="text-gray-800 text-sm leading-relaxed mb-3 flex-1">
                    {truncateCaption(post.caption, 100)}
                  </p>
                )}

                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-yellow-400 to-red-500 text-white text-xs font-semibold px-3 py-2 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-1 justify-center self-end"
                >
                  View Post <span className="text-base">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        {totalSlides > 1 && (
          <div className="flex items-center justify-center gap-8 mt-8">
            <button
              className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 text-white border-none cursor-pointer flex items-center justify-center transition-all duration-300 text-lg font-bold shadow-lg hover:scale-110 hover:shadow-xl"
              onClick={goToPrevious}
            >
              ‹
            </button>

            {/* Carousel Indicators */}
            <div className="flex gap-3 items-center">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gradient-to-r from-yellow-400 to-red-500 scale-125 shadow-md"
                      : "bg-yellow-400/30 hover:bg-yellow-400/50"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            <button
              className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 text-white border-none cursor-pointer flex items-center justify-center transition-all duration-300 text-lg font-bold shadow-lg hover:scale-110 hover:shadow-xl"
              onClick={goToNext}
            >
              ›
            </button>
          </div>
        )}

        {/* Slide Info */}
        <div className="text-center mt-5 text-gray-500 text-sm">
          Slide {currentSlide + 1} of {totalSlides} • Showing{" "}
          {getCurrentSlideItems().length} posts
        </div>
      </div>
    </div>
  );
}

export default PostingIG;
