import React from "react";
import type { BlogSkeletonProps } from "../../types/type";

const BlogSkeleton: React.FC<BlogSkeletonProps> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="animate-pulse space-y-4">
          {/* Image Placeholder */}
          <div className="h-52 bg-gray-200 rounded-lg" />

          {/* Date Placeholder */}
          <div className="h-4 w-1/4 bg-gray-200 rounded" />

          {/* Title Placeholder */}
          <div className="space-y-2">
            <div className="h-4 w-4/5 bg-gray-200 rounded" />
            <div className="h-4 w-2/3 bg-gray-200 rounded" />
          </div>

          {/* Author + Meta Placeholder */}
          <div className="flex items-center space-x-4 mt-3">
            {/* Avatar */}
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <div className="space-y-1">
              <div className="h-3 w-24 bg-gray-200 rounded" />
              <div className="h-3 w-16 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSkeleton;
