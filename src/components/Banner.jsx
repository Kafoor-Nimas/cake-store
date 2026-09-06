import bannerImage from "../assets/banner7.webp";

const Banner = () => {
  return (
    <section className="mx-auto max-w-[1500px] px-8 py-6">
      <div className="relative overflow-hidden rounded-3xl bg-purple-dark px-12 py-12 text-center md:text-left">
        <div className="relative z-10 md:max-w-s ">
          <h2 className="text-md sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-white ">
            Planning a Celebration? Enjoy 10% Off <br /> Your First Milestone
            Cake.
          </h2>
          <p className="mt-2 text-sm sm:text-lg text-white/80 max-w-2xl xl:max-w-full">
            Enjoy 10% OFF your very first celebratory cake order with our
            complimentary greeting card.
          </p>
          <button className="mt-6 rounded-full bg-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-md font-semibold text-purple-dark transition-colors hover:bg-lavender">
            Claim Offer Now
          </button>
        </div>

        <img
          src={bannerImage}
          alt="Banner"
          className="absolute bottom-0 right-0  hidden w-80  object-contain md:block mr-4 opacity-30 lg:opacity-100"
        />
      </div>
    </section>
  );
};

export default Banner;
