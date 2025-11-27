import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Services() {
  return (
    <>
      <Header />

      {/* HERO / TITRE */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white py-32 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Nos Services</h1>
        <p className="text-lg max-w-3xl mx-auto text-white/90">
          SmartWave Studio vous accompagne avec des solutions digitales modernes,
          simples et accessibles, adaptées aux besoins de votre entreprise.
        </p>
      </section>

      {/* GRID DES SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sites web professionnels
              </h3>
              <p className="text-gray-700">
                Création de sites modernes, rapides et responsives pour mettre en
                valeur votre activité. Vitrine, blog, e-commerce… tout est possible.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                ERP / POS — Gestion complète
              </h3>
              <p className="text-gray-700">
                Solutions de gestion stock, caisse, facturation, suivi des ventes et
                inventaires, adaptées aux commerces et PME.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Automatisation & Bots IA
              </h3>
              <p className="text-gray-700">
                Bots WhatsApp/Instagram, réponses automatiques, suivi client et
                intégrations intelligentes pour réduire le travail manuel.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Applications métiers
              </h3>
              <p className="text-gray-700">
                Développement d’applications sur mesure pour automatiser vos processus
                internes ou offrir de nouveaux services à vos clients.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Tableaux de bord & Data Analytics
              </h3>
              <p className="text-gray-700">
                Création de dashboards PowerBI / Google Data Studio pour suivre vos
                ventes, votre activité et votre performance en temps réel.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Maintenance & Support
              </h3>
              <p className="text-gray-700">
                Assistance continue, mises à jour, optimisation, hébergement,
                résolution des problèmes techniques et accompagnement longue durée.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href="https://wa.me/212767777768"
              target="_blank"
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow hover:bg-blue-700 transition"
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
