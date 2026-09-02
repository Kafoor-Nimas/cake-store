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
    <section className="bg-purple">
      <div className="ms-auto grid max-w-[1500px] grid-cols-2 px-6 py-10 md:grid-cols-4">
        {items.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-center gap-4">
            <Icon size={28} className="shrink-0 text-white" />
            <div>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <p className="text-xs text-white/70">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
