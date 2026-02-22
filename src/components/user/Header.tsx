import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-gray-100 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/brand_logo.png"
            alt="logo"
            className="w-16 h-12 md:w-32 md:h-20 rounded-xl object-strech group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium text-sm uppercase tracking-wider transition-colors duration-300 ${
                isActive ? "text-secondary" : "text-gray-600 hover:text-primary"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              `font-medium text-sm uppercase tracking-wider transition-colors duration-300 ${
                isActive ? "text-secondary" : "text-gray-600 hover:text-primary"
              }`
            }
          >
            Events
          </NavLink>

          <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
            <Link
              to="/login"
              className="text-primary font-semibold hover:text-secondary transition-colors"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-800 hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/events"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-800 hover:text-primary"
          >
            Events
          </Link>

          <div className="h-px bg-gray-100 my-2" />

          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="text-gray-800 font-medium hover:text-primary"
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="block bg-primary text-white px-4 py-3 rounded-xl text-center font-medium hover:bg-secondary transition-colors shadow-md"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
