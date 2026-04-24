"use client";

import { useState } from "react";
import BlogCard from "../../../components/BlogCard";

const blogs = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
];

export default function Blog() {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, blogs.length));
  };

  return (
    <div className="w-full min-h-screen flex flex-col gap-24 bg-black px-6 py-16 md:px-16 lg:px-24">
      <h1 className="w-full text-center text-[#51b957] text-4xl md:text-6xl lg:text-7xl font-bold">
        BLOG
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        {blogs.slice(0, visibleCount).map((blog) => (
          <BlogCard key={blog.id} id={blog.id} />
        ))}
      </div>

      {visibleCount < blogs.length && (
        <div className="flex justify-center">
          <button
            onClick={loadMore}
            className="w-60 md:w-72 h-12 bg-[#51b957] cursor-pointer text-lg md:text-xl tracking-wide text-white rounded-2xl flex items-center justify-center hover:bg-[#3b913f] transition"
          >
            UČITAJ VIŠE
          </button>
        </div>
      )}
    </div>
  );
}
