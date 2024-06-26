import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../pages/Blog";

const HomeBlog = () => {
  return (
    <div className="bg-[#F3F3F5]">
      <div className="max-w-screen-2xl px-20 max-xl:px-10 max-sm:!px-3 mx-auto">
        <div className="flex justify-center items-center">
          <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9  w-full px-3 sm:w-auto">
            <div
              role="main"
              className="flex flex-col items-center justify-center"
            >
              <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
                This Week Blogs
              </h1>
              <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
                If you're looking for random paragraphs, you've come to the
                right place. When a random word or a random sentence isn't quite
                enough
              </p>
            </div>
            <div className="lg:flex items-stretch md:mt-12 mt-8">
              <div className="lg:w-1/2">
                <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                  {blogs.slice(0, 2).map((blog) => (
                    <div
                      className="sm:w-1/2 relative max-sm:mb-4"
                      key={blog.id}
                    >
                      <div className="">
                        <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                          {blog.date}
                        </p>
                        <div className="absolute bottom-0 left-0 p-6">
                          <h2 className="text-xl font-semibold 5 text-white">
                            {blog.title}
                          </h2>
                          <p className="text-base leading-4 text-white mt-2  line-clamp-1">
                            {blog.excerpt}
                          </p>
                          <Link
                            to={`/blog/${blog.id}`}
                            className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                          >
                            <p className="pr-2 text-sm font-medium leading-none ">
                              Read More
                            </p>
                            <svg
                              className="fill-stroke"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.75 12.5L10.25 8L5.75 3.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                      <img
                        src={blog.image}
                        className="w-full rounded-lg"
                        alt={blog.title}
                      />
                    </div>
                  ))}
                </div>
                <div className="relative">
                  {blogs.slice(2, 3).map((blog) => (
                    <div key={blog.id}>
                      <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                        {blog.date}
                      </p>
                      <div className="absolute bottom-0 left-0 md:p-10 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">
                          {blog.title}
                        </h2>
                        <p className="text-base leading-4 text-white mt-2  line-clamp-1">
                          {blog.excerpt}
                        </p>
                        <Link
                          to={`/blog/${blog.id}`}
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">
                            Read More
                          </p>
                          <svg
                            className="fill-stroke"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 12.5L10.25 8L5.75 3.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                  <img
                    src={blogs[2].image}
                    alt={blogs[2].title}
                    className="w-full mt-8 md:mt-6 hidden sm:block rounded-lg"
                  />
                  <img
                    className="w-full mt-4 sm:hidden rounded-lg"
                    src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
                    alt={blogs[2].title}
                  />
                </div>
              </div>
              <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                <div className="relative">
                  {blogs.slice(3, 4).map((blog) => (
                    <div key={blog.id}>
                      <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                        {blog.date}
                      </p>
                      <div className="absolute bottom-0 left-0 md:p-10 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">
                          {blog.title}
                        </h2>
                        <p className="text-base leading-4 text-white mt-2 line-clamp-1">
                          {blog.excerpt}
                        </p>
                        <Link
                          to={`/blog/${blog.id}`}
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">
                            Read More
                          </p>
                          <svg
                            className="fill-stroke"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 12.5L10.25 8L5.75 3.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                  <img
                    src={blogs[3].image}
                    alt={blogs[3].title}
                    className="w-full sm:block hidden rounded-lg"
                  />
                  <img
                    className="w-full sm:hidden rounded-lg"
                    src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                    alt={blogs[3].title}
                  />
                </div>
                <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                  {blogs.slice(4, 6).map((blog) => (
                    <div className="relative w-full sm:mt-0 mt-4" key={blog.id}>
                      <div>
                        <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                          {blog.date}
                        </p>
                        <div className="absolute bottom-0 left-0 p-6">
                          <h2 className="text-xl font-semibold 5 text-white">
                            {blog.title}
                          </h2>
                          <p className="text-base leading-4 text-white mt-2  line-clamp-1">
                            {blog.excerpt}
                          </p>
                          <Link
                            to={`/blog/${blog.id}`}
                            className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                          >
                            <p className="pr-2 text-sm font-medium leading-none">
                              Read More
                            </p>
                            <svg
                              className="fill-stroke"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.75 12.5L10.25 8L5.75 3.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                      <img
                        src={blog.image}
                        className="w-full rounded-lg"
                        alt={blog.title}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
