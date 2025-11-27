import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Services() {
  return (
    <>
      <Header />

      <main className="px-10 py-10">
        <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
        <p className="text-gray-700">Page des services SmartWave Studio.</p>
      </main>

      <Footer />
    </>
  );
}
