// src/pages/BlogDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// Sample blog data (same as above, or you can fetch from an API)
const blogs = [
  {
    id: 1,
    title: 'Blog Post One',
    image: '/path/to/image1.jpg',
    content: 'This is the detailed content for blog post one.',
    features: ['Feature 1', 'Feature 2', 'Feature 3']
  },
  {
    id: 2,
    title: 'Blog Post Two',
    image: '/path/to/image2.jpg',
    content: 'This is the detailed content for blog post two.',
    features: ['Feature A', 'Feature B', 'Feature C']
  }
  // Add more blogs as needed
];

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="container mx-auto px-4">Blog post not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center mb-4 text-blue-500 hover:text-blue-700"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>
      <h1 className="text-4xl font-bold my-8">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-md mb-4" />
      <p className="text-gray-600 mb-4">{blog.content}</p>
      <h3 className="text-2xl font-semibold mb-2">Features:</h3>
      <ul className="list-disc list-inside">
        {blog.features.map((feature, index) => (
          <li key={index} className="text-gray-600">{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
