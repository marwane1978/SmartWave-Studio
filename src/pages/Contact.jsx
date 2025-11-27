import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Contact() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white py-32 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Contactez-nous</h1>
        <p className="text-lg max-w-3xl mx-auto text-white/90">
          Une question ? Un projet ? SmartWave Studio est à votre écoute pour vous
          accompagner dans votre transformation digitale.
        </p>
      </section>

      {/* FORMULAIRE DE CONTACT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Formulaire */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>

            <form className="space-y-6">

              <div>
                <label className="block text-gray-700 font-medium mb-2">Nom complet</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Adresse email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  placeholder="Votre message..."
                  rows="5"
                  className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
              >
                Envoyer ✉️
              </button>

            </form>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/212767777768"
              target="_blank"
              className="block text-center mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
            >
              Contacter via WhatsApp 💬
            </a>
          </div>

          {/* Carte Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              title="map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=Rabat,+Morocco&key=YOUR_API_KEY"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
