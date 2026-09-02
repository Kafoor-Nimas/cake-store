import { Award, Heart, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality",
    description: "We never compromise on quality.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Baking is not just our business, it's our passion.",
  },
  {
    icon: Award,
    title: "Trust",
    description: "Thousands trust us for their sweet celebrations.",
  },
];

const AboutUs = () => {
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-12">
        <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-3">

            {/* Left Column : Text */}
            <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">About Us</span>
                <h2 className="text-3xl fond-bold text-gray-900 leading-tight">The Heart Behind Every Bake</h2>
                <p className="text-sm text-gray-600 leading-relaxed">At Anti, we believe that the best moments in life are sweet. Our mission is to create baked goods that bring people together and make every moment special.</p>
                <button className="mt-2 rounded-full bg-purple-dark px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-purple">Learn More About Us</button>

            </div>
            {/* Center Column : Image */}
            {/* Right Column : Value */}


        </div>

    </section>
  )
}

export default AboutUs