import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import Magnetic from '../components/MagnetEffect';
import { HiOutlineHome } from 'react-icons/hi2';

const blogs = [
  {
    id: 1,
    title: 'Web Development Roadmap 2024',
    image: 'https://i.pinimg.com/564x/bd/53/66/bd5366fc6adf20de0c45778e7218110b.jpg',
    content: `As we step into 2024, the web development landscape continues to evolve at a rapid pace. This roadmap aims to guide aspiring and experienced developers alike through the essential skills and technologies to focus on for the coming year.

### 1. Core Fundamentals
#### HTML & CSS
Mastering HTML5 and CSS3 is the foundation of web development. Understand semantic markup, accessibility, and responsive design principles to create robust web pages.

#### JavaScript
JavaScript remains a critical skill for web developers. In 2024, focus on ES6+ features, asynchronous programming with Promises and async/await, and the latest updates in the language.

### 2. Frontend Frameworks & Libraries
#### React.js
React.js continues to dominate the frontend landscape. Learn about React hooks, context API, and the latest React features. State management with Redux or Context API is also crucial.

#### Vue.js & Angular
While React is prevalent, Vue.js and Angular remain important. Vue 3’s composition API and Angular’s robust architecture are key areas to explore.

### 3. Backend Development
#### Node.js
Node.js is indispensable for backend development. Understand Express.js for building RESTful APIs and dive into serverless architecture with AWS Lambda or Azure Functions.

#### Databases
Learn both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Firebase) databases. GraphQL is also gaining traction for its flexible querying capabilities.

### 4. DevOps & CI/CD
Continuous Integration and Continuous Deployment (CI/CD) are crucial for modern web development. Familiarize yourself with tools like Jenkins, GitHub Actions, and Docker for containerization.

### 5. Version Control
Proficiency in Git is non-negotiable. Understanding branching strategies, pull requests, and collaboration via platforms like GitHub or GitLab is essential.

### 6. Testing
Automated testing ensures code reliability. Learn about unit testing with Jest, integration testing, and end-to-end testing with tools like Cypress.

### 7. Security
Web security is paramount. Understand common vulnerabilities (e.g., XSS, CSRF) and implement security best practices in your applications.

### 8. Performance Optimization
Performance is key to user experience. Learn about lazy loading, code splitting, and optimizing images and assets.

### 9. Emerging Trends
#### WebAssembly
WebAssembly (Wasm) allows high-performance code execution in the browser. Explore its use cases and how it can complement JavaScript.
<br/>
#### Jamstack
Jamstack architecture (JavaScript, APIs, Markup) is gaining popularity for its scalability and performance benefits. Understand static site generators like Gatsby and Next.js.

### 10. Soft Skills
Beyond technical skills, effective communication, teamwork, and problem-solving abilities are crucial. Invest time in developing these soft skills to enhance your career prospects.

By following this roadmap, you can stay ahead in the ever-changing field of web development and build cutting-edge applications in 2024.`,
    features: ['HTML & CSS', 'JavaScript', 'React.js', 'Node.js', 'Git', 'Testing', 'Security']
  },
  {
    id: 2,
    title: 'Blog Post Two',
    image: 'https://i.pinimg.com/564x/92/db/4f/92db4f1026f395298352e299ce823484.jpg',
    content: 'This is the detailed content for blog post two.',
    features: ['Feature A', 'Feature B', 'Feature C']
  },
  {
    id: 3,
    title: 'Blog Post Three',
    image: 'https://i.pinimg.com/564x/61/b1/bc/61b1bce711f227e7c3d5a34d663b8df5.jpg',
    content: 'This is the detailed content for blog post three.',
    features: ['Feature A', 'Feature B', 'Feature C']
  },
];


const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const blog = blogs.find((b) => b.id === parseInt(id));

  useEffect(() => {
    if (blog) {
      const shuffledBlogs = shuffleArray(blogs.filter((b) => b.id !== blog.id));
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

  return (
    <div className="bg-[#ffffff] z-50">
      <div className="max-w-screen-2xl mx-auto pt-2 px-20 max-md:px-3">
        <div className="bg-[#ffffff81] rounded-lg py-4">
          <div className="links flex items-center justify-between gap-5">
            <div className="flex items-center gap-3">
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
          </div>

          <h1 className="text-8xl font-extrabold max-sm:text-4xl max-sm:mb-3 text-center pt-12">
            {blog.title}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 mt-24">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 max-sm:h-full object-cover rounded-md"
            />
            <div>
              <p className="text-xl text-gray-700 mb-4">{blog.content}</p>
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
                      {relatedBlog.content.slice(0, 100)}...
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
    </div>
  );
};

export default BlogDetails;

