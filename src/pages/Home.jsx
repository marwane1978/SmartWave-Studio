import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* ================= HERO SECTION ================= */}
      <main className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Création de sites web & solutions digitales modernes 🚀
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            SmartWave Studio aide les petites entreprises à obtenir des outils modernes,
            simples et accessibles : sites web, ERP / POS, automatisation et solutions
            digitales.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <a
              href="#contact"
              className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow hover:shadow-xl transition"
            >
              Demander un devis
            </a>

            <a
              href="/services"
              className="bg-blue-500/30 border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-500/40 transition"
            >
              Voir nos services
            </a>
          </div>
        </div>
      </main>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Services</h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            SmartWave propose des solutions modernes, simples et accessibles
            pour aider les entreprises à digitaliser leurs opérations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="text-blue-600 text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sites web modernes
              </h3>
              <p className="text-gray-700">
                Création de sites web vitrines, dynamiques ou e-commerce, adaptés à vos besoins.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="text-purple-600 text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                ERP / POS – Gestion complète
              </h3>
              <p className="text-gray-700">
                Solutions de gestion de stock, caisse, facturation et suivi des ventes.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200">
              <div className="text-cyan-600 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Automatisation & bots
              </h3>
              <p className="text-gray-700">
                Automatisation des tâches, bots WhatsApp/Instagram, et intégrations intelligentes.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
