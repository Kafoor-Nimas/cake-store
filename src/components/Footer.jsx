import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = ["Home", "Menu", "About Us", "Our Story"];
const customerService = [
  "FAQs",
  "Shipping Policy",
  "Return Policy",
  "Terms & Conditions",
];

const Footer = () => {
  return (
    <footer className="bg-lavender/30 px-6 py-4 text-gray-600 border-t border-gray-100">
      <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-4">
        <div>
          <p className="font-script text-3xl font-bold text-purple-dark">
            Anti
          </p>
          <p className="mt-3 max-w-xs text-sm text-gray-500">
            Baking happiness every day, handmade with love.
          </p>
          <div className="mt-5 flex gap-4 text-gray-600">
            <a href="#" className="hover:text-purple-dark transition-colors">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="hover:text-purple-dark transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-purple-dark transition-colors">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-purple-dark transition-colors">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-purple-dark transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Customer Service</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {customerService.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-purple-dark transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-500">
            <li className="flex items-center gap-2.5">
              <MapPin size={16} className="shrink-0 " />
              <span>129/5 Polonnaruwa</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 " />
              <span>+94 778945679</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 " />
              <span>info@anti.com</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock size={16} className="shrink-0 " />
              <span>8:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1500px] border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
        © 2026 Anti Bakery. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
