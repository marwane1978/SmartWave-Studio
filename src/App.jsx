import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import Loader from "./components/layout/Loader";

// Composant wrapper pour gérer la transition entre pages
function PageWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Ajoute la classe d'animation à chaque changement de page
    document.body.classList.add("page-transition");

    const timer = setTimeout(() => {
      document.body.classList.remove("page-transition");
    }, 500); // durée animation

    return () => clearTimeout(timer);
  }, [location]);

  return <>{children}</>;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  // Loader initial
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageWrapper>
      )}
    </Router>
  );
}
