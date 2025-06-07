// components/BlogCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import type { BlogCardProps } from "../../types/type";

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  // Early return if post is not available
  if (!post) {
    return (
      <div className="w-full p-3">
        <div className="bg-gray-200 animate-pulse rounded-xl w-full h-80"></div>
      </div>
    );
  }

  const formatDate = (dateString: string | null | undefined): string => {
    if (!dateString) return "Date not available";

    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Invalid date";

      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (error) {
      console.error("Date formatting error:", error);
      return "Date error";
    }
  };

  const getImageUrl = (thumbnail: string | null | undefined): string => {
    if (!thumbnail) return "/assets/img/blog/blog-placeholder.jpg";

    if (thumbnail.startsWith("http")) {
      return thumbnail;
    }
    return `http://localhost:8000/storage/${thumbnail}`;
  };

  const getAuthorAvatar = (authorName: string | null | undefined): string => {
    const name = authorName || "Anonymous";
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
      name
    )}&background=random&size=40`;
  };

  // Safe property access with fallbacks - TYPE SAFE VERSION
  const getCategoryName = (): string => {
    // Check for category_id first (as per your original code)
    if (post.category?.name) {
      return post.category.name;
    }

    // Type-safe property checking without 'any'
    if (
      "category" in post &&
      post.category &&
      typeof post.category === "object" &&
      "name" in post.category &&
      typeof post.category.name === "string"
    ) {
      return post.category.name;
    }

    return "Uncategorized";
  };

  const getAuthorName = (): string => {
    // Check for author_id first (as per your original code)
    if (post.author?.name) {
      return post.author.name;
    }

    // Type-safe property checking without 'any'
    if (
      "author" in post &&
      post.author &&
      typeof post.author === "object" &&
      "name" in post.author &&
      typeof post.author.name === "string"
    ) {
      return post.author.name;
    }

    return "Anonymous";
  };

  const categoryName = getCategoryName();
  const authorName = getAuthorName();
  const publishedDate =
    post.published_at || post.created_at || new Date().toISOString();
  const postTitle = post.title || "Untitled Post";
  const postSlug = post.slug || "#";
  const postThumbnail = post.thumbnail;

  return (
    <div className="w-full p-3">
      <article className="bg-white shadow-sm rounded-xl overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300 border border-gray-100">
        {/* Image Container - Fixed Height */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src={getImageUrl(postThumbnail)}
            alt={postTitle}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/assets/img/blog/blog-placeholder.jpg";
            }}
          />
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/90 text-gray-700 backdrop-blur-sm">
              {categoryName}
            </span>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-grow p-4">
          {/* Title - Fixed Height with Line Clamp */}
          <div className="mb-3 flex-grow">
            <h2 className="text-lg font-semibold leading-tight mb-2">
              <Link
                to={`/blog/${postSlug}`}
                className="text-gray-900 hover:text-blue-600 transition-colors duration-200 line-clamp-2 block"
                title={postTitle}
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  minHeight: "3rem", // Ensures consistent height
                }}
              >
                {postTitle}
              </Link>
            </h2>
          </div>

          {/* Author Info - Fixed at Bottom */}
          <div className="flex items-center pt-3 border-t border-gray-100">
            <img
              src={getAuthorAvatar(authorName)}
              alt={authorName}
              className="w-8 h-8 rounded-full mr-3 flex-shrink-0"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = getAuthorAvatar("User");
              }}
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900 truncate">
                {authorName}
              </p>
              <p className="text-xs text-gray-500">
                <time dateTime={publishedDate}>
                  {formatDate(publishedDate)}
                </time>
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogCard;
