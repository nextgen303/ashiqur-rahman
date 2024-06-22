import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-white mb-[350px]">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center mb-12">

          <h1 className="text-4xl font-bold mb-2">About Me</h1>
          <p className="text-xl text-gray-600 text-center">
            I am a passionate frontend web developer with experience in
            creating dynamic and responsive web applications.
          </p>
        </div>

        <section className="mb-12">
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

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Hobbies & Interests</h2>
          <p className="text-gray-600 mb-4">
            Mention any hobbies or interests you have outside of web
            development. This could be anything from reading, traveling,
            coding personal projects, etc.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>HTML5, CSS3, JavaScript</li>
            <li>React.js, Next.js</li>
            <li>Tailwind CSS, Bootstrap</li>
            <li>Git, GitHub</li>
            <li>Responsive Design</li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
