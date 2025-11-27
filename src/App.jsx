import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import Loader from "./components/layout/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLoading(false), 800);
    const t2 = setTimeout(() => setFade(true), 50);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <div className={`page-fade ${fade ? "page-fade-active" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}
