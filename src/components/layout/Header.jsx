import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for header background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 h-20 flex transition-all duration-300
        ${isScrolled ? "backdrop-blur-lg bg-white/70 shadow-md" : "bg-white/40 backdrop-blur-md"}
      `}
    >
      <div className="w-full flex justify-between items-center px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 py-1">
          <img 
            src="/logo.png" 
            alt="SmartWave Logo" 
            className="w-36 md:w-38 h-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

          <Link to="/" className="relative group">
            Accueil
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link to="/services" className="relative group">
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link to="/contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <a
            href="https://wa.me/212767777768"
            target="_blank"
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-gray-700 text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Slide-in Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 p-6
          transform transition-transform duration-300 ease-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="text-3xl text-gray-600 mb-6"
        >
          ✕
        </button>

        {/* Menu Items */}
        <nav className="flex flex-col space-y-6 text-gray-700 text-lg font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
            Accueil
          </Link>

          <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
            Services
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
            Contact
          </Link>

          <a
            href="https://wa.me/212767777768"
            target="_blank"
            className="mt-4 py-3 text-center bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
