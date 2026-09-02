import Cookie from "../assets/Cookies6.webp";
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
      </div>
    </section>
  );
};

export default PromoBanners;
