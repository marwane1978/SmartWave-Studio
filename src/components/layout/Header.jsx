import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          SmartWave
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>

          {/* Bouton WhatsApp */}
          <a
            href="https://wa.me/212767777768"
            target="_blank"
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </nav>

        {/* Bouton mobile menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-4 text-gray-700 font-medium">
          <Link 
            to="/" 
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            Accueil
          </Link>

          <Link 
            to="/services" 
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            Services
          </Link>

          <Link 
            to="/contact" 
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            Contact
          </Link>

          <a
            href="https://wa.me/212767777768"
            target="_blank"
            className="block py-3 text-center bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
