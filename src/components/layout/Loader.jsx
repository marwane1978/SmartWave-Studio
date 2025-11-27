export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0B1120]">
      <div className="relative flex items-center justify-center">
        {/* Cercle animé */}
        <div className="w-40 h-40 border-4 border-blue-500/30 border-t-blue-400 rounded-full animate-spin"></div>

        {/* Logo */}
        <img
          src="/logo.png"
          alt="SmartWave Logo"
          className="absolute w-24 h-24 object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
}
