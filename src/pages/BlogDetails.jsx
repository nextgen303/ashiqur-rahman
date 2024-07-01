import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi";
import { GoShareAndroid } from "react-icons/go";
import Magnetic from "../components/MagnetEffect";
import { blogs } from "../pages/Blog";
import { FiArrowUpRight } from "react-icons/fi";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const blog = blogs.find((b) => b.id === parseInt(id));

  useEffect(() => {
    if (blog) {
      const shuffledBlogs = blogs
        .filter((b) => b.id !== blog.id)
        .sort(() => 0.5 - Math.random());
      setRelatedBlogs(shuffledBlogs.slice(0, 3));
    }
  }, [id]);

  if (!blog) {
    return (
      <div className="mx-auto text-[5vw] font-semibold flex flex-col items-center justify-center h-screen">
        <h1>404!</h1>
        <h4>Blog post not found</h4>
      </div>
    );
  }

  // Function to strip HTML tags for excerpt
  const stripHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: "Check out this blog post!",
          url: window.location.href,
        });
        console.log("Share was successful.");
      } catch (error) {
        console.log("Sharing failed:", error);
      }
    } else {
      console.log("Web Share API is not supported in this browser.");
    }
  };

  return (
    <div className="bg-[#ffffff] z-50 relative">
      <div className="max-w-screen-2xl mx-auto px-20 max-md:px-3 relative">
        <div className="mx-auto bg-white flex items-center justify-between fixed max-w-screen-2xl px-20 max-md:px-3 py-3 left-0 right-0 z-50">
          <div className="flex items-center gap-3 ">
            <Magnetic>
              <button
                onClick={() => navigate(-1)}
                className="w-8 h-8 bg-black/10 text-2xl flex items-center justify-center text-black p-[6px] rounded-full hover:bg-[#9DA0A3] hover:text-black duration-150"
              >
                <MdOutlineArrowBackIosNew />
              </button>
            </Magnetic>
            <Magnetic>
              <a
                className="text-xl flex items-center gap-1 bg-black/10 text-black px-5 py-1 rounded-full hover:bg-[#9DA0A3] duration-150"
                href="/"
              >
                <HiOutlineHome /> <span className="text-[16px]">Home</span>
              </a>
            </Magnetic>
          </div>

          <div className="link">
            <Magnetic>
              <a
                className="text-2xl hover:text-[#9DA0A3] duration-150"
                onClick={handleShare}
                href="#"
              >
                <GoShareAndroid />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="fixed max-md:px-3 px-20 bottom-[20px] max-md:bottom-[15px]  right-0 z-50">
          <a
            href="/blog"
            className=" flex items-center gap-2 justify-end bg-[#88FE02] hover:bg-black transition-all duration-200 hover:text-white px-4 py-1 text-center text-[16px] max-md:text-[16px] font-medium rounded-md"
          >
            All Blogs
            <span className="text-[18px] mt-1">
              <FiArrowUpRight />
            </span>
          </a>
        </div>

        <h1 className="text-8xl font-extrabold max-sm:text-4xl max-sm:mb-3 w-[80%] mx-auto text-center pt-28">
          {blog.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 mt-24">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 max-sm:h-full object-cover rounded-md"
          />
          <div>
            <div
              className="text-xl text-gray-700 mb-4"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
            <h3 className="text-2xl font-semibold mb-2">Features:</h3>
            <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
              {blog.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8 mt-32">
          <h3 className="text-6xl font-semibold mb-12">Related Blog Posts:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedBlogs.map((relatedBlog) => (
              <div
                key={relatedBlog.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={relatedBlog.image}
                  alt={relatedBlog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">
                    {relatedBlog.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {stripHTML(relatedBlog.content).slice(0, 200)}...
                  </p>
                  <a
                    href={`/blog/${relatedBlog.id}`}
                    className="inline-block text-blue-500 hover:underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
