import React from "react";
import { blogs } from "../pages/Blog";

const HomeBlog = () => {
  return (
    <div className="bg-[#F3F3F5] py-12">
      <div className="max-w-screen-2xl px-20 max-xl:px-10 max-sm:px-3 mx-auto">
        <h1 className="text-4xl font-bold text-center pb-5">Latest Blogs</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {blogs.slice(3).map((blog) => (
            <div key={blog.id} className="relative bg-white rounded-lg shadow-md">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-1">{blog.excerpt}</p>
                <p className="text-sm text-gray-500">{blog.date}</p>
                <a
                  href={`/blog/${blog.id}`}
                  className="text-purple-500 hover:text-purple-700 mt-4 block"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
