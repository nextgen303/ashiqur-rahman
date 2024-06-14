import React from "react";
import { Link } from "react-router-dom";

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "Mastering React Hooks",
    excerpt:
      "Explore advanced techniques with React hooks for state management and side effects.",
    image: "https://i.ibb.co/DYxtCJq/img-1.png",
    date: "12 April 2024",
  },
  {
    id: 2,
    title: "CSS Grid: The Complete Guide",
    excerpt:
      "Learn everything you need to know about CSS Grid Layouts and create stunning web designs.",
    image: "https://i.ibb.co/3C5HvxC/img-2.png",
    date: "10 April 2024",
  },
  {
    id: 3,
    title: "Modern JavaScript ES6+ Features",
    excerpt:
      "Discover the latest features in JavaScript ES6 and beyond, including async/await and destructuring.",
    image: "https://i.ibb.co/Ms4qyXp/img-3.png",
    date: "8 April 2024",
  },
  {
    id: 4,
    title: "Node.js RESTful API Best Practices",
    excerpt:
      "Learn industry best practices for building RESTful APIs with Node.js and Express.",
    image: "https://i.ibb.co/6Wfjf2w/img-4.png",
    date: "6 April 2024",
  },
  {
    id: 5,
    title: "TypeScript Fundamentals",
    excerpt:
      "Get started with TypeScript and leverage its powerful static typing features for cleaner code.",
    image: "https://i.ibb.co/3yvZBpm/img-5.png",
    date: "4 April 2024",
  },
  {
    id: 6,
    title: "Git and GitHub Essentials",
    excerpt:
      "Master version control with Git and GitHub, including branching, merging, and pull requests.",
    image: "https://i.ibb.co/gDdnJb5/img-6.png",
    date: "2 April 2024",
  },
];

const Blog = () => {
  return (
    <div className=" text-gray-200 h-full py-12 pb-20">
      <div className=" mx-auto px-4 max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-200 mb-8">
          Latest Blog Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-100 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">{blog.date}</p>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-purple-500 hover:text-purple-700"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="flex flex-col justify-center mx-auto  bg-white text-black mt-12 ">
          <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
            {/* Blog post */}
            <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
              <a className="relative block group" href="#0">
                <div
                  className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                  aria-hidden="true"
                ></div>
                <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                  <img
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                    src="https://preview.cruip.com/open-pro/images/blog-post-01.jpg"
                    width="540"
                    height="303"
                    alt="Blog post"
                  />
                </figure>
              </a>
              <div>
                <header>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a
                          className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Product
                        </a>
                      </li>
                      <li className="m-1">
                        <a
                          className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Engineering
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                    <a
                      className="hover:text-gray-100 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Designing a functional workflow at home.
                    </a>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 flex-grow">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
                <footer className="flex items-center mt-4">
                  <a href="#0">
                    <img
                      className="rounded-full flex-shrink-0 mr-4"
                      src="https://preview.cruip.com/open-pro/images/news-author-04.jpg"
                      width="40"
                      height="40"
                      alt="Author 04"
                    />
                  </a>
                  <div>
                    <a
                      className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Chris Solerieu
                    </a>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Jan 19, 2020</span>
                  </div>
                </footer>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
