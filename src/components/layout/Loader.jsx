export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative flex items-center justify-center">

        {/* Cercle animé */}
        <div className="w-40 h-40 border-4 border-blue-500/20 border-t-blue-400 rounded-full animate-spin-slow"></div>

        {/* Logo au centre */}
        <img
          src="/logo.png"
          alt="SmartWave Logo"
          className="absolute w-24 drop-shadow-lg"
        />
      </div>
    </div>
  );
}
