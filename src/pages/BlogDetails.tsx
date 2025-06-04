// BlogDetails.tsx
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios, { AxiosError } from "axios";
import BlogDetailHeader from "../component/BlogDetail/BlogDetailHeader";
import Header from "../component/Header";
import type { Post } from "../types/type";

export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isLoadingRecent, setIsLoadingRecent] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"recent" | "search">("recent");

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

  // Fetch post data
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8000/api/post/${slug}`
        );
        setPost(response.data.data);
        setError(null);
      } catch (err) {
        if (err instanceof AxiosError) {
          setError(
            err.response?.data?.message || err.message || "Failed to fetch post"
          );
        } else {
          setError("An unexpected error occurred");
        }
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  // Fetch recent posts
  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        setIsLoadingRecent(true);
        const response = await axios.get(
          `http://localhost:8000/api/posts/recent?limit=5`
        );
        setRecentPosts(response.data.data || []);
      } catch (err) {
        console.error("Error fetching recent posts:", err);
        setRecentPosts([]);
      } finally {
        setIsLoadingRecent(false);
      }
    };

    fetchRecentPosts();
  }, []);

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getImageUrl = (thumbnail: string | null): string => {
    if (!thumbnail) return "/assets/img/blog/blog-1.jpg";
    if (thumbnail.startsWith("http")) return thumbnail;
    return `http://localhost:8000/storage/${thumbnail}`;
  };

  // Search functionality
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setActiveTab("recent");
      return;
    }

    try {
      setIsSearching(true);
      setActiveTab("search");
      const response = await axios.get(
        `http://localhost:8000/api/posts/search?q=${encodeURIComponent(
          searchQuery
        )}&limit=10&sort=relevance`
      );

      setSearchResults(response.data.data || []);
    } catch (err) {
      console.error("Search error:", err);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Auto switch to recent posts when search is cleared
    if (!value.trim()) {
      setActiveTab("recent");
      setSearchResults([]);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setActiveTab("recent");
  };

  // Loading state
  if (loading) {
    return (
      <>
        <Header />
        <BlogDetailHeader />
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="animate-pulse">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main content skeleton */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-gray-200 h-96 rounded-lg"></div>
                  <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                  </div>
                </div>
                {/* Sidebar skeleton */}
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Error state
  if (error) {
    return (
      <>
        <Header />
        <BlogDetailHeader />
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error</h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>{error}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // No post found
  if (!post) {
    return (
      <>
        <Header />
        <BlogDetailHeader />
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Post Not Found
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>The requested post could not be found.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <BlogDetailHeader />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article
                className="bg-white rounded-lg shadow-sm overflow-hidden"
                data-aos="fade-up"
              >
                {/* Featured Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={getImageUrl(post.thumbnail)}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/assets/img/blog/blog-1.jpg";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  {/* Title */}
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {post.title}
                  </h1>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">
                        {post.author_id?.name || "Anonymous"}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <time dateTime={post.published_at}>
                        {formatDate(post.published_at)}
                      </time>
                    </div>
                    {post.category_id?.name && (
                      <div className="flex items-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {post.category_id.name}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Post Content */}
                  <div className="prose prose-lg max-w-none">
                    {post.description && (
                      <div
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.description }}
                      />
                    )}
                  </div>

                  {/* Tags */}
                  {post.tags_id && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center flex-wrap gap-2">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-500 font-medium">
                          Tags:
                        </span>
                        <Link
                          to="#"
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                        >
                          {post.tags_id.name}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author Widget */}
              <div
                className="bg-white rounded-lg shadow-sm p-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <img
                      src="/assets/img/blog/blog-author.jpg"
                      alt={post.author_id?.name || "Author"}
                      className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {post.author_id?.name || "Jane Smith"}
                  </h3>
                  <div className="flex justify-center space-x-3 mb-4">
                    <a
                      href="https://www.tiktok.com/@bararecaofficial"
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/barareca/"
                      className="text-gray-400 hover:text-pink-600 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.988-5.367 11.988-11.988C24.005 5.367 18.638.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.864 3.708 13.713 3.708 12.416s.49-2.448 1.418-3.323C6.001 8.165 7.152 7.675 8.449 7.675s2.448.49 3.323 1.418c.927.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.927-2.026 1.418-3.323 1.418zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.927-.928-1.418-2.079-1.418-3.376s.49-2.448 1.418-3.323c.875-.927 2.026-1.418 3.323-1.418s2.448.49 3.323 1.418c.927.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.927-2.026 1.418-3.323 1.418z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Percaya bahwa setiap tulisan bisa menginspirasi, membuka
                    wawasan, dan membawa perubahan positif dalam kehidupan
                    pembacanya.
                  </p>
                </div>
              </div>

              {/* Integrated Search & Recent Posts Widget */}
              <div
                className="bg-white rounded-lg shadow-sm p-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* Header with Search */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200 relative">
                    {activeTab === "search" ? "Search Results" : "Recent Posts"}
                    <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600 rounded-full"></span>
                  </h3>

                  {/* Search Form */}
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchInputChange}
                      placeholder="Search posts..."
                      className="w-full px-4 py-3 pr-20 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                      {searchQuery && (
                        <button
                          type="button"
                          onClick={clearSearch}
                          className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      )}
                      <button
                        type="submit"
                        disabled={isSearching || !searchQuery.trim()}
                        className="text-gray-400 hover:text-gray-600 transition-colors duration-200 disabled:opacity-50"
                      >
                        {isSearching ? (
                          <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </form>
                </div>

                {/* Content Area */}
                <div className="space-y-4">
                  {/* Search Results */}
                  {activeTab === "search" && (
                    <>
                      {isSearching ? (
                        <div className="text-center py-8">
                          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-3"></div>
                          <p className="text-sm text-gray-500">Searching...</p>
                        </div>
                      ) : searchResults.length > 0 ? (
                        <>
                          <div className="text-sm text-gray-600 mb-4 font-medium">
                            Found {searchResults.length} result
                            {searchResults.length !== 1 ? "s" : ""} for "
                            {searchQuery}"
                          </div>
                          {searchResults.map((result) => (
                            <Link
                              key={result.id}
                              to={`/blog/${result.slug}`}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group border border-transparent hover:border-gray-200"
                            >
                              <div className="flex-shrink-0">
                                <img
                                  src={getImageUrl(result.thumbnail)}
                                  alt={result.title}
                                  className="w-16 h-16 rounded-lg object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "/assets/img/blog/blog-1.jpg";
                                  }}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2 transition-colors duration-200 mb-1">
                                  {result.title}
                                </h4>
                                <div className="flex items-center justify-between">
                                  <p className="text-xs text-gray-500">
                                    {formatDate(result.published_at)}
                                  </p>
                                  {result.category_id?.name && (
                                    <span className="inline-block px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">
                                      {result.category_id.name}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </>
                      ) : (
                        <div className="text-center py-8">
                          <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
                            <svg fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-gray-500 mb-1">
                            No posts found for "{searchQuery}"
                          </p>
                          <p className="text-xs text-gray-400">
                            Try different keywords
                          </p>
                        </div>
                      )}
                    </>
                  )}

                  {/* Recent Posts */}
                  {activeTab === "recent" && (
                    <>
                      {isLoadingRecent ? (
                        <div className="space-y-4">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="flex items-start space-x-3 p-3 animate-pulse"
                            >
                              <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-lg"></div>
                              <div className="flex-1 space-y-2">
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : recentPosts.length > 0 ? (
                        recentPosts.map((recentPost) => (
                          <Link
                            key={recentPost.id}
                            to={`/blog/${recentPost.slug}`}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group border border-transparent hover:border-gray-200"
                          >
                            <div className="flex-shrink-0">
                              <img
                                src={getImageUrl(recentPost.thumbnail)}
                                alt={recentPost.title}
                                className="w-16 h-16 rounded-lg object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "/assets/img/blog/blog-1.jpg";
                                }}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2 transition-colors duration-200 mb-1">
                                {recentPost.title}
                              </h4>
                              <div className="flex items-center justify-between">
                                <p className="text-xs text-gray-500">
                                  {formatDate(recentPost.published_at)}
                                </p>
                                {recentPost.category_id?.name && (
                                  <span className="inline-block px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">
                                    {recentPost.category_id.name}
                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))
                      ) : (
                        <div className="text-center py-8">
                          <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
                            <svg fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H7z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-gray-500">
                            No recent posts available
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Navigation Buttons */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    {activeTab === "search" && searchResults.length > 0 ? (
                      <button
                        onClick={() => setActiveTab("recent")}
                        className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
                      >
                        ← Back to Recent Posts
                      </button>
                    ) : (
                      <div></div>
                    )}
                    <Link
                      to="/blog"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue rounded-lg transition-colors duration-200"
                    >
                      View All Posts
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tags Widget */}
              <div
                className="bg-white rounded-lg shadow-sm p-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200 relative">
                  Tags
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600 rounded-full"></span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags_id ? (
                    <Link
                      to="#"
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-200"
                    >
                      {post.tags_id.name}
                    </Link>
                  ) : (
                    <>
                      <Link
                        to="#"
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                      >
                        App
                      </Link>
                      <Link
                        to="#"
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                      >
                        IT
                      </Link>
                      <Link
                        to="#"
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                      >
                        Business
                      </Link>
                      <Link
                        to="#"
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                      >
                        Design
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
