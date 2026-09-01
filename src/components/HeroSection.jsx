import { Play } from "lucide-react";
import cake1 from "../assets/cake7.png";

const HeroSection = () => {
  return (
    <section className="mx-auto max-w-[1450px] px-6 py-12 md:py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Left Side: Text Content */}
        <div>
          <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
            Baked with
            <br />
            <span className="text-purple">Love,</span>
            <br />
            Made for
            <br />
            <span className="text-purple">You!</span>
          </h1>

          <p className="mt-6 max-w-md text-gray-600">
            Every bite is a perfect blend of fresh ingredients and pure
            happiness.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-purple px-7 py-3.5 font-semibold text-white transition-colors hover:bg-purple-dark">
              Order Now
            </button>

            <button className="flex items-center gap-2 rounded-full border border-purple-dark/20 px-6 py-3.5 font-semibold text-purple-dark transition-colors hover:border-purple hover:text-purple-dark hover:bg-lavender/50">
              <Play size={16} className="fill-purple-dark text-purple-dark" />
              Our Menu
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative flex justify-center items-center">
          <div className="absolute -z-10  h-[420px] w-[420px] rounded-full bg-lavender md:h-[480px] md:w-[480px]">
            <img
              src={cake1}
              alt="cake"
              className="w-full max-w-md object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
