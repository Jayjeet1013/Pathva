import Image from "next/image";
import React from "react";

const testimonies = [
  {
    name: "Arjun Patel",
    position: "Travel Blogger & Enthusiast",
    image: "/image/man1.jpg",
    quote:
      "PathvaiAI transformed my travel planning experience. The personalized recommendations and real-time updates are a game-changer!",
  },
  {
    name: "Sanya Verma",
    position: "Adventure Travel Specialist",
    image: "/image/man2.jpg",
    quote:
      "The interactive map and destination database provided by PathvaiAI made it so easy to find and explore new travel spots. Highly impressed!",
  },
  {
    name: "Rajiv Mehta",
    position: "Travel Agency Owner",
    image: "/image/man4.jpg",
    quote:
      "PathvaiAI has streamlined our travel planning process. The comprehensive data and 24/7 support have been invaluable for both us and our clients.",
  },
];

const Testimonial21 = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            Trusted by <span className="text-blue-600">travel enthusiasts</span>{" "}
            around the world
          </h2>
        </div>

        <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
          {testimonies.map((testimony, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white rounded-md shadow"
            >
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <Image
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src={testimony.image}
                    alt="Avatar"
                    width={96}
                    height={96}
                  />
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">{testimony.quote}</p>
                </blockquote>
                <p className="text-base font-semibold text-black mt-9">
                  {testimony.name}
                </p>
                <p className="mt-1 text-base text-gray-600">
                  {testimony.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial21;
