import img from "../assets/cat1.jpg";

const categories = [
  { name: "Cakes", icon: "🎂" },
  { name: "Cupcakes", icon: "🧁" },
  { name: "Cookies", icon: "🍪" },
  { name: "Brownies", icon: "🍫" },
  { name: "Pastries", icon: "🥐" },
  { name: "Doughnuts", icon: "🍩" },
];

const Categories = () => {
  return (
    <div className="mx-auto mx-w-[1500px] px-6 py-10">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* Left Side : text + category */}
        <div>
          <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            Crafted for Every Craving
          </h2>
          <p className="mt-4 max-w-md text-gray-500">
            Explore our wide range of baked goodies made just for you.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="flex flex-col items-center gap-2 rounded-2xl bg-lavender/50 px-4 py-5 text-center transition-colors hover:bg-lavender"
              >
                <span className="w-22">{cat.icon}</span>
                <span className="text-xs font-semibold text-gray-800">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="rounded-full bg-purple px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-dark">
              View Full Menu
            </button>
          </div>
        </div>
        {/* Righ Side : image */}
        <div className="overflow-hidden rounded-3xl shadow-md">
          <img
            src={img}
            alt="cake making"
            className=" h-[320px] md:h-[400px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
