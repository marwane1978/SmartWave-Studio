export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Colonne 1 : Logo + description */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            SmartWave Studio
          </h3>
          <p className="text-gray-400">
            Solutions digitales modernes pour petites entreprises :
            sites web, ERP / POS, automatisation et outils professionnels.
          </p>
        </div>

        {/* Colonne 2 : Liens rapides */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Liens rapides
          </h4>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-white">Accueil</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Colonne 3 : Réseaux + WhatsApp */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Contact & Réseaux
          </h4>

          <ul className="space-y-3">
            <li>Email : <a href="mailto:msouaf@msn.com" className="hover:text-white">msouaf@msn.com</a></li>
            <li>Téléphone : <span className="hover:text-white">+212 7 67 77 77 68</span></li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a href="https://wa.me/212767777768" target="_blank" className="text-green-400 text-3xl hover:scale-110 transition">
              💬
            </a>
            <a href="#" className="text-blue-400 text-3xl hover:scale-110 transition">
              📘
            </a>
            <a href="#" className="text-pink-400 text-3xl hover:scale-110 transition">
              📸
            </a>
          </div>

          <a
            href="https://wa.me/212767777768"
            target="_blank"
            className="inline-block mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
          >
            Contact WhatsApp
          </a>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} SmartWave Studio — Tous droits réservés.
      </div>
    </footer>
  );
}
