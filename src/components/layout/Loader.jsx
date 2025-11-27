export default function Loader() {
  return (
    <div className="
      fixed inset-0 flex items-center justify-center 
      bg-gradient-to-br from-blue-900 via-purple-900 to-black 
      animate-fadeInOut z-50
    ">

      {/* Aura lumineuse */}
      <div className="
        absolute w-64 h-64 
        bg-blue-500/20 blur-3xl rounded-full 
        animate-pulseSmooth
      "></div>

      {/* Cercle animé */}
      <div className="
        w-40 h-40 
        border-4 border-blue-400/40 
        rounded-full animate-spin-slow absolute
      "></div>

      {/* Logo */}
      <img
        src="/logo.png"
        alt="SmartWave Logo"
        className="relative w-32 animate-pulseSmooth select-none pointer-events-none"
        draggable="false"
      />
    </div>
  );
}
