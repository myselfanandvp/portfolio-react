import PageTransition from "../components/PageTransition";
import { Link } from "react-router-dom";
import ModelViewer from "../components/animations/ModelViewer";

function LandingPage() {
  return (
    <PageTransition>
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 max-w-8xl mx-auto">

        {/* Main Container */}
        <div className="w-full max-w-7xl mx-auto z-10">

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT CONTENT */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-sm hover:scale-105 transition duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span className="text-xs md:text-sm font-semibold tracking-wide uppercase bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  Available for Freelance & Full-Time Roles
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  Hi, I'm Anand V P
                </span>
                <br />
                <span className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl text-slate-800 dark:text-white font-extrabold">
                  Full-Stack Developer
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Building responsive, robust, and user-centric web applications.
                Specializing in end-to-end development with clean architecture
                and smooth interactions.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold shadow-lg hover:scale-105 transition duration-300"
                >
                  View Projects
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-slate-900 dark:text-white font-semibold hover:scale-105 transition duration-300"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE MODEL */}
            <div className="flex items-center justify-center w-full order-1 lg:order-2">
              {/* Aspect-ratio keeps the canvas stable, max-w prevents it from getting too enormous on ultra-wide screens */}
              <div className="w-full max-w-[650px] aspect-square sm:aspect-[4/3] lg:aspect-[4/3] xl:aspect-square flex items-center justify-center">
                <ModelViewer
                  width="100%"
                  height="100%"
                  autoRotate={true}
                  url="table_with_a_laptop.glb"
                  minDistance={1.5}
                  maxDistance={8}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Floating Icons */}
        <div className="hidden md:block absolute top-24 left-10 text-4xl animate-float opacity-70 pointer-events-none">
          💻
        </div>

        <div className="hidden md:block absolute bottom-28 left-16 text-3xl animate-float [animation-delay:1.5s] opacity-60 pointer-events-none">
          🌐
        </div>

        <div className="hidden md:block absolute top-32 right-12 text-4xl animate-float [animation-delay:0.7s] opacity-70 pointer-events-none">
          ⚡
        </div>

        <div className="hidden md:block absolute bottom-24 right-16 text-3xl animate-float [animation-delay:2s] opacity-60 pointer-events-none">
          🚀
        </div>
      </section>
    </PageTransition>
  );
}

export default LandingPage;
