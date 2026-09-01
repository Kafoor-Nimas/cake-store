const navLinks = ["Home", , "Menu", "About Us", "Our Story", "Blog", "Contact"];
const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
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
      </nav>
    </header>
  );
};

export default Navbar;
