import { Cake, Salad, ChefHat, Truck } from "lucide-react";

const features = [
  {
    icon: Cake,
    title: "Freshly Baked",
    description: "Everyday fresh from our oven to you.",
  },
  {
    icon: Salad,
    title: "Premium Ingredients",
    description: "We use the finest quality ingredients.",
  },
  {
    icon: ChefHat,
    title: "100% Handmade",
    description: "Made with care by our bakers.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick & safe delivery at your doorstep.",
  },
];

const Features = () => {
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 rounded-3xl bg-lavender/40 px-8 py-10">
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col items-center text-center ">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-purple-dark shadow-sm">
              <Icon size={24} />
            </div>
            <h3 className="font-semibold text-gray-700">{title}</h3>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
