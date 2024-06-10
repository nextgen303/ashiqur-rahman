import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BlogSlider = ({ blogs }) => {
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-arrow-prev`}
        style={{ ...style, display: "block", right: "30px" }}
        onClick={onClick}
      >
        <FaArrowLeft className="text-3xl text-gray-800" />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-arrow-next`}
        style={{ ...style, display: "block", right: "30px" }}
        onClick={onClick}
      >
        <FaArrowRight className="text-3xl text-gray-800" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Recent Blogs</h2>
      <Slider {...settings}>
        {blogs.map((blog) => (
          <div key={blog.id} className="p-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <a
                  href={`/blog/${blog.id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogSlider;
