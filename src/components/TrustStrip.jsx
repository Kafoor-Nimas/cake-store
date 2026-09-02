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
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4 md:py-10">
        {items.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3">
            <Icon size={26} className="shrink-0 text-white" />
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-white">{title}</h3>
              <p className="text-[11px] sm:text-xs text-white/70">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;