// Blog.js

import React from "react";
import { Link } from "react-router-dom";

// Sample blog data
// Blog.js

export const blogs = [
  {
    id: 1,
    title: "Mastering React Hooks",
    excerpt:
      "Explore advanced techniques with React hooks for state management and side effects.",
    image: "https://i.ibb.co/DYxtCJq/img-1.png",
    date: "12 April 2024",
    content: `
      <p>In this comprehensive guide, we delve deep into mastering React hooks. Covering advanced techniques for state management and handling side effects, you'll learn how to leverage useState, useEffect, useContext, and more effectively.</p>
      <p>Topics covered include:</p>
      <ul>
        <li>Understanding the useState hook for managing component state</li>
        <li>Effectively using useEffect for handling side effects</li>
        <li>Context API and how to manage global state with useContext</li>
        <li>Custom hooks and their role in code reusability</li>
      </ul>
      <p>By the end of this guide, you'll be equipped with the knowledge to build complex React applications using hooks, enhancing both performance and code maintainability.</p>
    `,
    features: [
      "State management with useState",
      "Side effects with useEffect",
      "Global state with useContext",
    ],
  },
  {
    id: 2,
    title: "CSS Grid: The Complete Guide",
    excerpt:
      "Learn everything you need to know about CSS Grid Layouts and create stunning web designs.",
    image: "https://i.ibb.co/3C5HvxC/img-2.png",
    date: "10 April 2024",
    content: `
      <p>CSS Grid Layouts offer a powerful way to design web layouts with precision and flexibility. This guide covers everything from the basics to advanced techniques, ensuring you master CSS Grids for modern web design.</p>
      <p>Key topics covered:</p>
      <ul>
        <li>Understanding the grid container and grid items</li>
        <li>Creating responsive layouts with auto-fit and minmax</li>
        <li>Using grid-template-areas for complex layout structures</li>
        <li>Advanced techniques like grid-gap, grid-auto-flow, and more</li>
      </ul>
      <p>Whether you're a beginner or looking to enhance your skills, CSS Grid: The Complete Guide will empower you to create visually stunning and responsive web designs.</p>
    `,
    features: [
      "Basic to advanced grid layout techniques",
      "Responsive design with CSS Grid",
      "Creating complex layouts",
    ],
  },
  {
    id: 3,
    title: "Modern JavaScript ES6+ Features",
    excerpt:
      "Discover the latest features in JavaScript ES6 and beyond, including async/await and destructuring.",
    image: "https://i.ibb.co/Ms4qyXp/img-3.png",
    date: "8 April 2024",
    content: `
      <p>JavaScript ES6 introduced several new features and enhancements that significantly improve developer productivity and code readability. This guide explores the key features of ES6 and beyond.</p>
      <p>Topics include:</p>
      <ul>
        <li>Arrow functions and their advantages over traditional function syntax</li>
        <li>Template literals for more readable string interpolation</li>
        <li>Async/await for asynchronous programming</li>
        <li>Destructuring assignments and their role in simplifying object and array manipulations</li>
      </ul>
      <p>Stay ahead in JavaScript development by mastering these essential features and leveraging them in your projects effectively.</p>
    `,
    features: [
      "Arrow functions and template literals",
      "Async/await for asynchronous programming",
      "Destructuring assignments",
    ],
  },
  {
    id: 4,
    title: "Node.js RESTful API Best Practices",
    excerpt:
      "Learn industry best practices for building RESTful APIs with Node.js and Express.",
    image: "https://i.ibb.co/6Wfjf2w/img-4.png",
    date: "6 April 2024",
    content: `
      <p>Building RESTful APIs with Node.js and Express.js is a fundamental skill for backend developers. This guide covers best practices, design patterns, and tips for creating scalable and maintainable APIs.</p>
      <p>Key topics covered:</p>
      <ul>
        <li>Setting up a Node.js server with Express</li>
        <li>Routing and middleware for handling requests</li>
        <li>CRUD operations with MongoDB using Mongoose</li>
        <li>Authentication and authorization strategies</li>
      </ul>
      <p>Whether you're starting with Node.js or looking to refine your API development skills, this guide provides practical insights and techniques.</p>
    `,
    features: [
      "Setting up Node.js with Express",
      "CRUD operations with MongoDB",
      "Authentication and authorization",
    ],
  },
  {
    id: 5,
    title: "TypeScript Fundamentals",
    excerpt:
      "Get started with TypeScript and leverage its powerful static typing features for cleaner code.",
    image: "https://i.ibb.co/3yvZBpm/img-5.png",
    date: "4 April 2024",
    content: `
      <p>TypeScript is a superset of JavaScript that adds static types to the language, enhancing code quality and developer productivity. This guide covers the fundamentals of TypeScript and its key features.</p>
      <p>Topics include:</p>
      <ul>
        <li>Understanding TypeScript syntax and type annotations</li>
        <li>Type inference and how it simplifies code development</li>
        <li>Interfaces and classes for defining custom types and structures</li>
        <li>TypeScript compiler and configuration</li>
      </ul>
      <p>Start writing more reliable and scalable JavaScript applications with TypeScript's powerful features and static type checking.</p>
    `,
    features: [
      "TypeScript syntax and type annotations",
      "Interfaces and classes",
      "Type inference",
    ],
  },
  {
    id: 6,
    title: "Git and GitHub Essentials",
    excerpt:
      "Master version control with Git and GitHub, including branching, merging, and pull requests.",
    image: "https://i.ibb.co/gDdnJb5/img-6.png",
    date: "2 April 2024",
    content: `
      <p>Git is the industry-standard version control system used by developers worldwide. This guide covers essential Git commands, GitHub features, and best practices for collaborative software development.</p>
      <p>Key topics covered:</p>
      <br/>
      <ul>
        <li>1. Setting up a Git repository and initializing version control</li>

        <li>2. Branching, merging, and resolving conflicts</li>
        <li>3. Pull requests and code review workflows on GitHub</li>
        <li> 4. Collaboration strategies and team workflows</li>
      </ul>
      <br/>
      <p>Enhance your development workflow and collaboration skills with Git and GitHub Essentials, ensuring efficient and error-free code management.</p>
    `,
    features: [
      "Setting up Git repositories",
      "Branching and merging",
      "Collaborative workflows with GitHub",
    ],
  },
];

const Blog = () => {
  return (
    <div className="text-gray-200 h-full py-12 pb-20">
      <div className="mx-auto px-4 max-w-7xl">
        <h1 className="text-4xl font-bold text-black mb-8">
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
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
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
      </div>
    </div>
  );
};

export default Blog;