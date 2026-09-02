import { Handshake, Heart, Award } from "lucide-react";

import Img from "../assets/about2.webp";

const values = [
  {
    icon: Award,
    title: "Quality",
    description: "We never compromise on quality.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Baking is not just our business, it's our passion.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description: "Thousands trust us for their sweet celebrations.",
  },
];

const AboutUs = () => {
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-12 bg-lavender/40 rounded-3xl">
      <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-3">
        {/* Left Column : Text */}
        <div className="space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-purple">
            About Us
          </span>
          <h2 className="mt-4  text-3xl  text-gray-900 leading-tight">
            The Heart Behind Every Bake
          </h2>
          <p className="text-sm max-w-md text-gray-600 leading-relaxed">
            At Anti, we believe that the best moments in life are sweet. Our
            mission is to create baked goods that bring people together and make
            every moment special.
          </p>
          <button className="mt-2 rounded-full bg-purple-dark px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-purple">
            Learn More About Us
          </button>
        </div>
        {/* Center Column : Image */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-3xl shadow-md">
            <img
              src={Img}
              alt="Cake Image"
              className="h-[220px] w-full max-w-[340px] object-cover sm:h-[260px]"
            />
          </div>
        </div>
        {/* Right Column : Value */}
        <div className="space-y-5 mt-10">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex items-start gap-4 bg-white/30 p-4 rounded-xl shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lavender text-purple-dark">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 ">{title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
