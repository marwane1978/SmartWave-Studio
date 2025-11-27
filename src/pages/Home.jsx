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

            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="text-blue-600 text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sites web modernes
              </h3>
              <p className="text-gray-700">
                Création de sites web vitrines, dynamiques ou e-commerce, adaptés à vos besoins.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="text-purple-600 text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                ERP / POS – Gestion complète
              </h3>
              <p className="text-gray-700">
                Solutions de gestion stock, caisse, facturation et suivi des ventes.
              </p>
            </div>

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

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-blue-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Rapidité</h3>
              <p className="text-gray-700 text-sm">
                Développement rapide et efficace, sans compromettre la qualité.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-purple-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Solutions adaptées</h3>
              <p className="text-gray-700 text-sm">
                Nous analysons vos besoins et proposons des solutions sur mesure.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-cyan-600 text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">Technologies modernes</h3>
              <p className="text-gray-700 text-sm">
                Nous utilisons les outils les plus récents pour garantir performance et sécurité.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-green-600 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Accompagnement humain</h3>
              <p className="text-gray-700 text-sm">
                Support continu et assistance rapide, avec une approche humaine.
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

            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
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

            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800"
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

            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img 
                src="https://images.unsplash.com/photo-1581093588401-22d70f7b3669?w=800"
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900">
                  Automatisation chatbot
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Automatisation WhatsApp + gestion des demandes.
                </p>
              </div>
            </div>

          </div>

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

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Témoignages Clients
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Ils nous ont fait confiance pour leurs solutions digitales.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <p className="text-gray-700 italic mb-4">
                “Excellent travail ! Mon site web est rapide et moderne.”
              </p>
              <h3 className="font-semibold text-gray-900">— Youssef</h3>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <p className="text-gray-700 italic mb-4">
                “Le POS a révolutionné la gestion de mon commerce.”
              </p>
              <h3 className="font-semibold text-gray-900">— Leila</h3>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <p className="text-gray-700 italic mb-4">
                “Automatisation WhatsApp impeccable, très professionnelle.”
              </p>
              <h3 className="font-semibold text-gray-900">— Hamza</h3>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WORK PROCESS SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Notre Processus de Travail
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Un processus clair, rapide et efficace pour garantir un résultat professionnel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">1. Analyse du besoin</h3>
              <p className="text-gray-700 text-sm">
                Nous discutons de votre projet, objectifs et besoins spécifiques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">2. Maquette & Validation</h3>
              <p className="text-gray-700 text-sm">
                Création d’un design préliminaire et validation avec vous.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">3. Développement</h3>
              <p className="text-gray-700 text-sm">
                Développement rapide, moderne et conforme aux standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">4. Livraison & Support</h3>
              <p className="text-gray-700 text-sm">
                Livraison du projet + support technique et mises à jour.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
            Questions fréquentes (FAQ)
          </h2>

          <div className="space-y-6">

            <details className="bg-gray-50 p-6 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-lg text-gray-900">
                Combien de temps faut-il pour créer un site web ?
              </summary>
              <p className="mt-3 text-gray-700">
                Généralement entre 3 et 7 jours selon la complexité du projet.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-lg text-gray-900">
                Proposez-vous des solutions ERP / POS complètes ?
              </summary>
              <p className="mt-3 text-gray-700">
                Oui, SmartWave fournit des solutions professionnelles de gestion stock, 
                facturation, caisse, ventes, inventaires…
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-lg text-gray-900">
                Faites-vous des applications sur mesure ?
              </summary>
              <p className="mt-3 text-gray-700">
                Oui, nous développons des applications internes ou orientées client,
                adaptées à vos besoins exacts.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-lg text-gray-900">
                Y a-t-il une maintenance après livraison ?
              </summary>
              <p className="mt-3 text-gray-700">
                Oui, SmartWave propose des packages de support et de maintenance continue.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-lg text-gray-900">
                Comment vous contacter rapidement ?
              </summary>
              <p className="mt-3 text-gray-700">
                Le plus rapide : WhatsApp  
                <a href="https://wa.me/212767777768" className="text-blue-600 underline">
                  +212 7 67 77 77 68
                </a>
              </p>
            </details>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
