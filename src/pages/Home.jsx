import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />

      {/* ======= HERO SECTION PREMIUM ======= */}
      <main className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Création de sites web & solutions digitales modernes 🚀
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            SmartWave Studio aide les petites entreprises à obtenir des outils 
            modernes, simples et accessibles : sites web, ERP / POS, 
            automatisation et solutions digitales.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow hover:scale-105 transition"
            >
              Demander un devis
            </Link>

            <Link
              to="/services"
              className="px-6 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition"
            >
              Voir nos services
            </Link>
          </div>

        </div>
      </main>

      {/* ======= FIN HERO ======= */}

      <Footer />
    </>
  );
}
