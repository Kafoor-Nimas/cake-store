import { Play } from "lucide-react";
import cake1 from "../assets/cake7.png";
// import heart from "../assets/hero.jpg";

const HeroSection = () => {
  return (
    <section className="mx-auto max-w-[1250px] px-6 py-8 md:py-16 overflow-hidden">
      <div className="grid items-center gap-8 md:grid-cols-[1.15fr_1fr]">
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
            Baked with
            <br />
            <span className="text-purple">Love,</span>
            <br />
            Made for
            <br />
            <span className="text-purple">You!</span>
          </h1>
          {/* <img
            src={heart}
            alt=""
            className="absolute -right-10 top-4 w-10 hidden md:block rotate-6"
          /> */}

          <p className="mt-4 md:mt-6 max-w-md mx-auto md:mx-0 text-gray-600 text-sm md:text-base">
            Every bite is a perfect blend of fresh ingredients and pure
            happiness.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <button className="rounded-full bg-purple px-7 py-3.5 font-semibold text-white transition-colors hover:bg-purple-dark">
              Order Now
            </button>

            <button className="flex items-center gap-2 rounded-full border border-purple-dark/20 px-6 py-3.5 font-semibold text-purple-dark transition-colors hover:border-purple bg-lavender/90">
              <Play size={16} className="fill-purple-dark text-purple-dark" />
              Our Menu
            </button>
          </div>
        </div>

        {/* Right Side: Responsive Circle Container */}
        <div className="relative flex justify-center items-center py-6">
          <div className="relative flex items-center justify-center h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] rounded-full bg-lavender">
            <img
              src={cake1}
              alt="Cake"
              className="w-full max-w-[260px] sm:max-w-xs md:max-w-md object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
