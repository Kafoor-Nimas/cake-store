import { ShieldCheck, PackageCheck, Headset, RotateCcw } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "100% secure & trusted",
  },
  {
    icon: PackageCheck,
    title: "Hygienic Packaging",
    description: "Packed with care",
  },
  {
    icon: Headset,
    title: "Customer Support",
    description: "We're here to help",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Hassle-free returns",
  },
];

const TrustStrip = () => {
  return (
    <section className="bg-purple my-8">
      <div className="mx-auto grid max-w-[1500px]   grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 py-8  md:py-10">
        {items.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
              <Icon
                size={22}
                className="text-white transition-transform duration-300 group-hover:rotate-6"
              />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-white">
                {title}
              </h3>
              <p className="text-[11px] sm:text-xs text-white/70">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
