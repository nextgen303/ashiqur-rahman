// src/pages/Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Sample blog data
const blogs = [
  {
    id: 1,
    title: 'Blog Post One',
    excerpt: 'This is a short description for blog post one.',
    image: 'https://i.pinimg.com/564x/bd/53/66/bd5366fc6adf20de0c45778e7218110b.jpg',
  },
  {
    id: 2,
    title: 'Blog Post Two',
    excerpt: 'This is a short description for blog post one.',
    image: 'https://i.pinimg.com/564x/92/db/4f/92db4f1026f395298352e299ce823484.jpg',
  },
  {
    id: 3,
    title: 'Blog Post Two',
    excerpt: 'This is a short description for blog post one.',
    image: 'https://i.pinimg.com/564x/61/b1/bc/61b1bce711f227e7c3d5a34d663b8df5.jpg',
  }
  // Add more blogs as needed
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 max-w-screen-xl">
      <h1 className="text-4xl font-bold my-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="border rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <Link
                to={`/blog/${blog.id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
