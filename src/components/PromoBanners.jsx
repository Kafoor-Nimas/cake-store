import Cookie from "../assets/Cookies6.webp";
import CakeSlice from "../assets/CakeSlice3.webp";
const PromoBanners = () => {
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-10">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Left Side */}
        <div className="relative overflow-hidden rounded-3xl bg-purple px-8 py-10">
          <div className="relative z-10 max-w-[60%]">
            <h3 className="text-3xl font-bold leading-tight text-white">
              Sweet Delights
            </h3>
            <p className="mt-1 text-lg font-semibold uppercase tracking-wide text-white/90">
              For Every Moment
            </p>
            <p className="mt-4 text-sm text-white/80">
              From classic cakes to decadent cookies, we have treats for every
              craving.
            </p>
            <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-dark transition-colors hover:bg-lavender">
              Explore Menu
            </button>
          </div>
          <img
            src={Cookie}
            alt="Cookies"
            className="absolute -right-4 xl:bottom-0 w-52 object-contain md:w-60 bottom-6"
          />
        </div>

        {/* Right Side */}
        <div className="relative overflow-hidden rounded-3xl bg-pink-200 px-8 py-10">
          <div className="relative z-10 max-w-[55%] mt-14 lg:mt-2">
            <p className="text-lg font-semibold text-gray-700">
              Deal of the Day
            </p>
            <p className="mt-2 text-4xl font-semibold text-rose-400">20%OFF</p>
            <p className="mt-1 font-semibold text-gray-800 text-lg">
              On All Pastries
            </p>
            <button className="mt-6 rounded-full bg-rose-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-600">
              Grab the Deal
            </button>
          </div>

          <img
            src={CakeSlice}
            alt="Cake Slice"
            className="absolute -right-2 lg:bottom-8 bottom-18 w-50 object-contain md:w-60"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
