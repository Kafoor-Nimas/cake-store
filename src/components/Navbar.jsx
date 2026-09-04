import { Menu, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = ["Home", "Menu", "About Us", "Our Story", "Blog", "Contact"];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <header className="w-full border-b border-gray-300 shadow-md sticky top-0 z-50 bg-white">
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 ">
        <a href="/" className="font-script text-3xl text-purple-dark">
          Anti
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="transition-colors hover:text-purple-dark hover:underline"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <button className="text-gray-700 hover:text-purple-dark">
            <User size={20} />
          </button>

          <button className="relative text-gray-700 hover:text-purple-dark">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-400 text-[10px] font-semibold text-white">
              3
            </span>
          </button>

          <button className="hidden md:block rounded-full bg-purple px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-dark ">
            Order Now
          </button>

          {/* Humburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-purple-dark md:hidden focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col items-start justify-center gap-4 text-sm font-medium text-gray-700 ">
            {navLinks.map((link) => (
              <li key={link} className="border-b border-gray-100 last:border-0">
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="block py-1 transition-colors hover:text-purple-dark "
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          
        </div>
      )}
    </header>
  );
};

export default Navbar;
