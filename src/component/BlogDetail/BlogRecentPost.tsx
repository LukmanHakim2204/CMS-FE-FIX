// component/BlogDetails/RecentPosts.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import type { RecentPost } from "../../types/type";

export default function BlogRecentPosts() {
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8000/api/posts/recent"
        );
        setRecentPosts(response.data.data);
        setError(null);
      } catch (err) {
        setError("Failed to load recent posts.");
        console.error(err);
      } finally {
        setLoading(false);
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
    if (!thumbnail) return "/assets/img/blog/blog-recent-1.jpg";
    if (thumbnail.startsWith("http")) return thumbnail;
    return `http://localhost:8000/storage/${thumbnail}`;
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Recent Posts
        </h3>
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex space-x-3 animate-pulse">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Recent Posts
        </h3>
        <div className="flex items-center justify-center py-8">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 text-red-400">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-red-600 text-sm font-medium">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (recentPosts.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Recent Posts
        </h3>
        <div className="flex items-center justify-center py-8">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 text-gray-400">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1.5.858L10 13.858l-4.5 3A1 1 0 014 16V4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-500 text-sm">No recent posts available</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      {/* Widget Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200 relative">
        Recent Posts
        <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600 rounded-full"></span>
      </h3>

      {/* Recent Posts List */}
      <div className="space-y-4">
        {recentPosts.map((post, index) => (
          <article
            key={post.id}
            className="group flex space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            {/* Post Thumbnail */}
            <div className="flex-shrink-0">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={getImageUrl(post.thumbnail)}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/assets/img/blog/blog-recent-1.jpg";
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200"></div>
              </div>
            </div>

            {/* Post Content */}
            <div className="flex-1 min-w-0">
              {/* Post Title */}
              <h4 className="mb-2">
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors duration-200 leading-tight"
                  title={post.title}
                >
                  {post.title}
                </Link>
              </h4>

              {/* Post Date */}
              <time
                dateTime={post.published_at}
                className="text-xs text-gray-500 font-medium"
              >
                {formatDate(post.published_at)}
              </time>
            </div>

            {/* Read More Arrow (appears on hover) */}
            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="w-6 h-6 text-blue-600 flex items-center justify-center">
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View All Posts Link */}
      {recentPosts.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-100">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 group"
          >
            View all posts
            <svg
              className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
      )}
    </div>
  );
}
