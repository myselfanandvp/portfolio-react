import PageTransition from "../components/PageTransition";
import BorderGlow from "../components/animations/GlowingBorder";
import ProfileCard from "../components/ProfileCard";
import { Link } from "react-router-dom";
import Heropic from "../assets/Titlepic.jpeg"
function LandingPage() {
  return (
    <PageTransition>

      {/* Hero Section Container */}
      <section className="relative z-10 flex items-center justify-center min-h-screen px-6 max-w-6xl mx-auto py-20 lg:py-0">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

          {/* LEFT SIDE: Heading & Text Content (Occupies 7 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

            {/* Cute Animated Badge */}
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-105">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wide uppercase bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Available for Freelance & Full-Time Roles
              </span>
            </div>

            {/* Beautiful Gradient Title */}
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 drop-shadow-sm pb-2">
              Hi, I'm Anand V P <br />
              <span className="text-3xl md:text-5xl xl:text-6xl font-extrabold opacity-90">
                Full-Stack Developer
              </span>
            </h1>

            {/* Elegant Subtext */}
            <p className="mt-6 max-w-2xl text-base md:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              Building responsive, robust, and user-centric web applications.
              Specializing in end-to-end development with clean architecture and smooth interactions.
            </p>

            {/* Modern Interactive CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center z-20">
              <Link
                to="/projects"
                className="group relative inline-flex items-center justify-center bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-indigo-500/10 dark:shadow-none hover:shadow-indigo-500/20 transition-all duration-300"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-indigo-500/10 dark:shadow-none hover:shadow-indigo-500/20 transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Profile Card Provision (Occupies 5 columns on desktop) */}
          <div className="p-5 lg:col-span-5 flex justify-center items-center order-1 lg:order-2 w-full">

            <div className="flex p-2  items-center justify-center  group">

              {/* PLACEHOLDER: Replace this entire inner block with your actual <ProfileCard /> component */}
              <ProfileCard
                name="Anand.V.P"
                title="Software Engineer"
                handle="javicodes"
                status="Online"
                contactText="Contact Me"
                avatarUrl={Heropic}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={true}
                behindGlowColor="rgba(45, 27, 105, 0.75)"
                iconUrl="/assets/demo/iconpattern.png"
                behindGlowEnabled={true}
                innerGradient="linear-gradient(145deg, rgba(22, 24, 45, 0.95) 0%, rgba(15, 35, 70, 0.82) 45%, rgba(45, 27, 105, 0.72) 100%)"


              />
            </div>

          </div>

        </div>

        {/* Floating Emojis with Custom CSS Keyframes */}
        <div className="absolute top-24 left-8 md:left-16 text-4xl pointer-events-none animate-float opacity-70 dark:opacity-80">
          💻
        </div>

        <div className="absolute bottom-32 left-10 md:left-20 text-3xl pointer-events-none animate-float [animation-delay:1.5s] opacity-60 dark:opacity-70">
          🌐
        </div>

        <div className="absolute top-32 right-10 md:right-20 text-4xl pointer-events-none animate-float [animation-delay:0.7s] opacity-70 dark:opacity-80">
          ⚡
        </div>

        <div className="absolute bottom-24 right-12 md:right-24 text-3xl pointer-events-none animate-float [animation-delay:2.2s] opacity-60 dark:opacity-70">
          🚀
        </div>
      </section>

      {/* Required CSS Injection for the cute floating effect */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(3deg); }
          50% { transform: translateY(-12px) rotate(-3deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </PageTransition >
  );
}

export default LandingPage;
