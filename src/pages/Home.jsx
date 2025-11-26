import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="px-6 py-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Création de sites web & solutions digitales 🚀
        </h2>

        <p className="text-lg leading-relaxed text-gray-700">
          SmartWave Studio aide les petites entreprises à obtenir des outils modernes,
          simples et accessibles : sites web, ERP / POS, automatisation et solutions
          digitales.
        </p>
      </main>

      <Footer />
    </>
  );
}
