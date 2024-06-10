import React, { useState } from 'react';

const AdminPanel = () => {
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogDescription, setBlogDescription] = useState('');
  const [blogImage, setBlogImage] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectImage, setProjectImage] = useState('');

  const addBlog = () => {
    setBlogs([...blogs, { title: blogTitle, description: blogDescription, image: blogImage }]);
    setBlogTitle('');
    setBlogDescription('');
    setBlogImage('');
  };

  const addProject = () => {
    setProjects([...projects, { title: projectTitle, description: projectDescription, image: projectImage }]);
    setProjectTitle('');
    setProjectDescription('');
    setProjectImage('');
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Add Blog Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          className="border rounded w-full py-2 px-3 mb-4"
        />
        <input
          type="text"
          placeholder="Description"
          value={blogDescription}
          onChange={(e) => setBlogDescription(e.target.value)}
          className="border rounded w-full py-2 px-3 mb-4"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={blogImage}
          onChange={(e) => setBlogImage(e.target.value)}
          className="border rounded w-full py-2 px-3 mb-4"
        />
        <button onClick={addBlog} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Add Blog</button>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Add Project</h2>
        <input
          type="text"
          placeholder="Title"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          className="border rounded w-full py-2 px-3 mb-4"
        />
        <input
          type="text"
          placeholder="Description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          className="border rounded w-full py-2 px-3 mb-4"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={projectImage}
          onChange={(e) => setProjectImage(e.target.value)}
          className="border rounded w-full py-2 px-3 mb-4"
        />
        <button onClick={addProject} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Add Project</button>
      </section>
    </div>
  );
};

export default AdminPanel;
