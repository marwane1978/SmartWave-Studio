import { useEffect, useState } from "react";
import { getServices } from "../api/base44";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices().then(data => {
      setServices(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p className="text-center py-10">Chargement des services…</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Nos Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map(service => (
          <div 
            key={service.id}
            className="p-6 bg-white shadow-lg rounded-xl border border-gray-100 hover:shadow-2xl transition"
          >
            {/* Icon */}
            {service.icon && (
              <div className="text-5xl text-blue-600 mb-4">
                <i className={service.icon}></i>
              </div>
            )}

            <h3 className="text-2xl font-semibold mb-3">{service.name}</h3>

            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
