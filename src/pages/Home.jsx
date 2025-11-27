import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SEOHead from "../components/SEOHead";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <SEOHead
        title="SmartWave Studio - Création de Sites Web & Solutions Digitales"
        description="SmartWave Studio propose la création de sites web modernes, ERP / POS, automatisation et solutions digitales professionnelles pour petites entreprises."
        keywords="site web Maroc, SmartWave, ERP POS Maroc, création site web, automatisation, développeur web Maroc"
        url="https://smart-wave-studio.com"
        image="/og-image.png"
      />

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

            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="text-blue-600 text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sites web modernes
              </h3>
              <p className="text-gray-700">
                Création de sites vitrines, dynamiques ou e-commerce, adaptés aux besoins.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="text-purple-600 text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                ERP / POS – Gestion complète
              </h3>
              <p className="text-gray-700">
                Gestion stock, caisse, facturation, ventes, inventaires.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200">
              <div className="text-cyan-600 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Automatisation & bots
              </h3>
              <p className="text-gray-700">
                Automatisation des tâches, bots WhatsApp/Instagram, intégrations IA.
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
            Nous apportons à votre entreprise des solutions professionnelles et adaptées.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-blue-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Rapidité</h3>
              <p className="text-gray-700 text-sm">Livraison rapide et efficace.</p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-purple-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Solutions adaptées</h3>
              <p className="text-gray-700 text-sm">Nous analysons vos besoins réels.</p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-cyan-600 text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">Technologies modernes</h3>
              <p className="text-gray-700 text-sm">Outils récents, sécurité optimale.</p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-green-600 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Accompagnement humain</h3>
              <p className="text-gray-700 text-sm">Support rapide et humain.</p>
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
            Quelques projets récents développés par SmartWave Studio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
                className="w-full h-56 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900">Site professionnel</h3>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800"
                className="w-full h-56 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900">ERP / POS complet</h3>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src="https://images.unsplash.com/photo-1581093588401-22d70f7b3669?w=800"
                className="w-full h-56 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900">Automatisation chatbot</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Témoignages Clients</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <p className="italic">“Site moderne et très rapide.”</p>
              <h3 className="font-semibold mt-4">— Youssef</h3>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <p className="italic">“POS très efficace pour mon commerce.”</p>
              <h3 className="font-semibold mt-4">— Leila</h3>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <p className="italic">“Automatisation WhatsApp impeccable.”</p>
              <h3 className="font-semibold mt-4">— Hamza</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORK PROCESS ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Processus de Travail</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">📝</div>
              Analyse du besoin
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">🎨</div>
              Maquette & Validation
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">💻</div>
              Développement
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">🚀</div>
              Livraison & Support
            </div>

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-6">
            Prêt à booster votre business avec SmartWave ? 🚀
          </h2>

          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            Discutons de votre projet et construisons une solution performante.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">

            <a
              href="https://wa.me/212767777768"
              target="_blank"
              className="px-8 py-4 bg-green-500 text-white font-semibold rounded-xl shadow hover:bg-green-600 transition text-lg"
            >
              🚀 Discuter sur WhatsApp
            </a>

            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition text-lg"
            >
              ✉️ Contactez-nous
            </Link>

          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
            Questions fréquentes (FAQ)
          </h2>

          <div className="space-y-6">

            <details className="bg-gray-50 p-6 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-lg text-gray-900">
                Combien de temps pour créer un site web ?
              </summary>
              <p className="mt-3 text-gray-700">Entre 3 et 7 jours selon votre projet.</p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-lg text-gray-900">
                Proposez-vous un ERP / POS ?
              </summary>
              <p className="mt-3 text-gray-700">Oui, une solution complète et professionnelle.</p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-lg text-gray-900">
                Développez-vous des applications ?
              </summary>
              <p className="mt-3 text-gray-700">Oui, sur mesure selon vos besoins.</p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-lg text-gray-900">
                Maintenance incluse ?
              </summary>
              <p className="mt-3 text-gray-700">Oui, selon le package choisi.</p>
            </details>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
