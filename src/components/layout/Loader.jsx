import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 opacity-0 animate-fadeInOut">
      <div className="flex flex-col items-center justify-center">

        {/* Cercle animé */}
        <div className="relative w-24 h-24 mb-6">
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin-slow"></div>
        </div>

        {/* Logo */}
        <img
          src="/logo.png"
          alt="SmartWave"
          className="w-40 opacity-90 animate-pulse"
        />
      </div>
    </div>
  );
}
