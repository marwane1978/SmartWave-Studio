export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-content">

        {/* LOGO */}
        <img
          src="/logo.png"
          alt="SmartWave Logo"
          className="loader-logo"
        />

        {/* CERCLE 1 */}
        <span className="circle circle1"></span>

        {/* CERCLE 2 */}
        <span className="circle circle2"></span>
      </div>
    </div>
  );
}
