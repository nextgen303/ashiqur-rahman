import React from "react";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, Tech Solutions Inc.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    content:
      "Working with your team has been an absolute pleasure. Your dedication to our project and your innovative solutions have significantly boosted our productivity and efficiency. Looking forward to continuing our collaboration!",
  },
  {
    name: "Emily Johnson",
    role: "Marketing Manager, Global Tech Innovators",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    content:
      "I'm impressed with the level of professionalism and expertise your team brought to the table. From start to finish, you've demonstrated a deep understanding of our needs and delivered results beyond our expectations. Highly recommended!",
  },
  {
    name: "Michael Brown",
    role: "CTO, Digital Ventures LLC",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    content:
      "Your team's IT consultation services have been invaluable to our company. The strategic insights and practical solutions you provided helped us streamline operations and achieve significant cost savings. Thank you for your exceptional support!",
  },
];

const Testimonial = () => {
  return (
    <div className=" rounded-bl-[20px] rounded-br-[20px] pb-20">
      <div className="max-w-screen-2xl px-20 max-xl:px-10 max-sm:!px-3 mx-auto">
        <div className="text-gray-600 dark:text-gray-300 pt-8" id="testimonials">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="mb-10 space-y-4 px-6 md:px-0">
              <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                Hear from our happy customers.
              </h2>
            </div>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
                >
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={testimonial.avatar}
                      alt="user avatar"
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">{testimonial.name}</h6>
                      <p className="text-sm text-gray-500 dark:text-gray-300">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="mt-8">{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Testimonial;
