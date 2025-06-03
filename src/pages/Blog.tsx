import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../component/Footer";
import Header from "../component/Header";
import BlogHeader from "../component/Blog/BlogHeader";
import BlogPostsList from "../component/Blog/BlogPostList";
import BlogPagination from "../component/Blog/BlogPagination";
import { useBlog } from "../hooks/useBlog";

const Blog: React.FC = () => {
  const {
    posts,
    loading,
    error,
    currentPage,
    pagination,
    goToPage,
    nextPage,
    prevPage,
    refresh,
  } = useBlog({ limit: 9 });

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

  return (
    <>
      <Header />

      <BlogHeader />

      {/* Blog Posts Section */}
      <section id="blog-posts" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogPostsList
            posts={posts}
            loading={loading}
            error={error}
            onRetry={refresh}
          />
        </div>
      </section>

      {/* Pagination */}
      {pagination && (
        <BlogPagination
          pagination={pagination}
          currentPage={currentPage}
          onPageChange={goToPage}
          onNextPage={nextPage}
          onPrevPage={prevPage}
          loading={loading}
        />
      )}

      <Footer />
    </>
  );
};

export default Blog;
