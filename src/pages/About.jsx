// src/pages/About.jsx
import React from "react";
import Footer from "../components/Footer";
// import profilePic from '/path/to/profile-pic.jpg'; // Update with your profile picture path

const About = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center my-8">
            {/* <img
            src={profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          /> */}
            <h1 className="text-4xl font-bold mb-2">About Me</h1>
            <p className="text-xl text-gray-600 mb-4">
              I am a passionate frontend web developer with experience in
              creating dynamic and responsive web applications.
            </p>
          </div>

          <section className="my-8">
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            <p className="text-gray-600 mb-4">
              Describe your journey as a web developer here. You can talk about
              how you started, your experiences, and your achievements.
            </p>
            <p className="text-gray-600 mb-4">
              Share more details about your background, education, and the
              technologies you are most passionate about.
            </p>
          </section>

          <section className="my-8">
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            <p className="text-gray-600 mb-4">
              Describe your journey as a web developer here. You can talk about
              how you started, your experiences, and your achievements.
            </p>
            <p className="text-gray-600 mb-4">
              Share more details about your background, education, and the
              technologies you are most passionate about.
            </p>
          </section>

          <section className="my-8">
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            <p className="text-gray-600 mb-4">
              Describe your journey as a web developer here. You can talk about
              how you started, your experiences, and your achievements.
            </p>
            <p className="text-gray-600 mb-4">
              Share more details about your background, education, and the
              technologies you are most passionate about.
            </p>
          </section>

          <section className="my-8">
            <h2 className="text-3xl font-bold mb-4">Hobbies & Interests</h2>
            <p className="text-gray-600 mb-4">
              Mention any hobbies or interests you have outside of web
              development. This could be anything from reading, traveling,
              coding personal projects, etc.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
