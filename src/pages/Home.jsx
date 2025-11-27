import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

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
            <Link
              to="/contact"
              className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow hover:shadow-xl transition"
            >
              Demander un devis
            </Link>

            <Link
              to="/services"
              className="bg-blue-500/30 border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-500/40 transition"
            >
              Voir nos services
            </Link>
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

      {/* ================= WHY US SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pourquoi choisir SmartWave ?
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Nous apportons à votre entreprise des solutions professionnelles,
            modernes et accessibles, adaptées à vos besoins réels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Avantage 1 */}
            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-blue-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Rapidité</h3>
              <p className="text-gray-700 text-sm">
                Développement rapide et efficace, sans compromettre la qualité.
              </p>
            </div>

            {/* Avantage 2 */}
            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-purple-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Solutions adaptées</h3>
              <p className="text-gray-700 text-sm">
                Nous analysons vos besoins et proposons des solutions sur mesure.
              </p>
            </div>

            {/* Avantage 3 */}
            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-cyan-600 text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">Technologies modernes</h3>
              <p className="text-gray-700 text-sm">
                Nous utilisons les outils les plus récents pour garantir performance et sécurité.
              </p>
            </div>

            {/* Avantage 4 */}
            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-green-600 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Accompagnement humain</h3>
              <p className="text-gray-700 text-sm">
                Vous n’êtes jamais seul : support continu et assistance rapide.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Portfolio – Nos Réalisations
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Quelques exemples de projets récents développés par SmartWave Studio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Projet 1 */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
                alt="Projet site web"
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900">
                  Site web professionnel
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Développement d’un site vitrine moderne et responsive.
                </p>
              </div>
            </div>

            {/* Projet 2 */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800"
                alt="ERP POS"
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900">
                  ERP / POS complet
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Solution de gestion stock / caisse pour un client commerce.
                </p>
              </div>
            </div>

            {/* Projet 3 */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img 
                src="https://images.unsplash.com/photo-1581093588401-22d70f7b3669?w=800"
                alt="Automatisation"
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900">
                  Automatisation chatbot
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Automatisation WhatsApp pour réponses automatiques + gestion demandes.
                </p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-12">
            <a
              href="https://wa.me/212767777768"
              target="_blank"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
            >
              Discuter de votre projet 📞
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
