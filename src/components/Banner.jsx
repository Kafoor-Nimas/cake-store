import bannerImage from "../assets/banner7.webp"

const Banner = () => {
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-6">
      <div className="relative overflow-hidden rounded-3xl bg-purple-dark px-8 py-12 text-center md:text-left">
        <div className="relative z-10 md:max-w-xs">
          <h2 className="text-3xl font-bold text-white">
            Life is Better with Cake!
          </h2>
          <p className="mt-2 text-sm text-white/80">
            Order cake and make every moment sweeter.
          </p>
          <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-dark transition-colors hover:bg-lavender">
            Order Now
          </button>
        </div>

        <img src={bannerImage} alt="Banner" className="absolute bottom-0 right-0 hidden w-80  object-contain md:block" />
      </div>
    </section>
  );
};

export default Banner;
