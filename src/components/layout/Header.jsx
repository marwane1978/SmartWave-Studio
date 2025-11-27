import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          SmartWave
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-gray-700 font-medium">
          <Link to="/" onClick={() => setOpen(false)}>Accueil</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
