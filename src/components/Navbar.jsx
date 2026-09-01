import { ShoppingBag, User } from "lucide-react";

const navLinks = ["Home", "Menu", "About Us", "Our Story", "Blog", "Contact"];
const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5">
        <a
          href="/"
          className="font-script text-3xl items-center justify-center text-purple-dark"
        >
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

          <button className="rounded-full bg-purple px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-dark ">
            Order Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
