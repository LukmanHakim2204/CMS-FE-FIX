import React from "react";
import type { BlogPostsListProps } from "../../types/type";
import BlogCard from "./BlogCard";
import BlogSkeleton from "./BlogSkeleton";

const BlogPostsList: React.FC<BlogPostsListProps> = ({
  posts,
  loading,
  error,
  onRetry,
}) => {
  if (loading) {
    return <BlogSkeleton />;
  }

  if (error) {
    return (
      <div className="w-full">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded text-center max-w-2xl mx-auto">
          <h4 className="text-lg font-semibold mb-2">
            Oops! Something went wrong
          </h4>
          <p className="mb-3">{error}</p>
          <hr className="border-red-300 my-3" />
          <button
            className="px-4 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded transition"
            onClick={onRetry}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full text-center mt-10">
        <h3 className="text-xl font-semibold">No posts found</h3>
        <p className="text-gray-500">
          There are no blog posts available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPostsList;
