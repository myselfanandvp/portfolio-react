import SplashCursor from "./animations/SplashCursor";
function AppBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gray-100 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-50">

      {/* Background Effect Layer */}


      {/* Content Layer */}
      <SplashCursor DENSITY_DISSIPATION={9}
        VELOCITY_DISSIPATION={1.5}
        PRESSURE={0.05}
        CURL={3}
        SPLAT_RADIUS={0.08}
        SPLAT_FORCE={9000}
        COLOR_UPDATE_SPEED={22}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#e25822" />

      {children}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(3deg); }
          50% { transform: translateY(-12px) rotate(-3deg); }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default AppBackground;
