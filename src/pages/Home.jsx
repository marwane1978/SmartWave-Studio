import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>
        <h2>Création de sites web & solutions digitales</h2>
        <p>
          SmartWave Studio aide les petites entreprises à obtenir des outils modernes,
          simples et accessibles : sites web, ERP / POS, automatisation et solutions digitales.
        </p>
      </main>
      <Footer />
    </>
  );
}
