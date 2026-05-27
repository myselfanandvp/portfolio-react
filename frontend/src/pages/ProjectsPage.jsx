import PageTransition from "../components/PageTransition";
import BorderGlow from "../components/animations/GlowingBorder";

function ProjectsPage() {
  const projects = [
    {
      title: "Legal Claim Administration Platform",
      description: "An enterprise-grade platform supporting multi-role legal claim workflows and insurance settlements. Built core schemas and engineered parameterized SQL views to cut report generation overheads by 40%.",
      tags: ["Python", "Django DRF", "MS SQL Server", "JWT Auth"],
      emoji: "⚖️",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
      link: "#"
    },
    {
      title: "Automated Data Ingestion Engine",
      description: "A configurable ETL data-loading pipeline that parses bulk client datasets into normalized database systems. Implemented robust schema-validation and error logging, reducing load failure rates by over 90%.",
      tags: ["Python", "Pandas", "ETL", "MS SQL Server"],
      emoji: "📊",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      link: "#"
    },
    {
      title: "ListenSphere E-Commerce System",
      description: "A premium, responsive audio-focused e-commerce application focusing on intuitive modern product discovery, shopping cart logic, and interactive interactive client UI states.",
      tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "Vite"],
      emoji: "🎧",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
      link: "#"
    },
    {
      title: "High-Fidelity Netflix Sandbox",
      description: "A technical close-clone of Netflix's core interface handling asynchronous media library retrieval, real-time updates, and user session accounts.",
      tags: ["React.js", "Firebase", "Context API", "TMDB API"],
      emoji: "🎬",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      link: "#"
    },
  ];

  return (
    <PageTransition>

      {/* Projects Content Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 py-24 max-w-6xl mx-auto w-full">

        {/* Cute Animated Badge */}
        <div className="mb-6 animate-bounce [animation-duration:3s]">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-sm">
            🚀 My creations
          </span>
        </div>

        {/* Beautiful Gradient Title */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-rose-500 dark:from-blue-400 dark:via-purple-400 dark:to-rose-400 drop-shadow-sm pb-2 text-center">
          Featured Work
        </h1>

        <p className="mt-4 max-w-xl text-center text-slate-600 dark:text-slate-400 font-medium text-base md:text-lg mb-12">
          A selection of enterprise application solutions, custom automation pipelines, and core full-stack builds.
        </p>

        {/* Proportional Layout Grid */}
        <div className="grid md:grid-cols-2 gap-8 w-full items-stretch z-20">
          {projects.map((project, idx) => (
            <BorderGlow
              key={idx}
              className="flex p-2 flex-col h-full bg-transparent w-full"
              glowRadius={30}
            >
              {/* FIXED INNER CARD LAYER */}
              <div className="group/card p-6 flex flex-col flex-1 w-full bg-white dark:bg-slate-900/90 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800/80 hover:border-slate-200 dark:hover:border-slate-700/80 transition-all duration-300">

                {/* Project Image Wrapper with Zoom Hover */}
                {project.image && (
                  <div className="w-full mb-5 rounded-xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-950 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                    />

                    {/* Floating Floating Icon Badge inside image frame */}
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md flex items-center justify-center text-xl shadow-md border border-slate-200/50 dark:border-slate-700/50">
                      {project.emoji}
                    </div>
                  </div>
                )}

                {/* Project Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 group-hover/card:text-indigo-600 dark:group-hover/card:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm font-normal text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Badges & Action Button */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover/card:translate-x-1.5 transition-transform duration-300"
                  >
                    Explore Project <span className="ml-1 text-xs transition-transform group-hover/card:translate-x-0.5">→</span>
                  </a>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>

        {/* Ambient Floating Icons */}
        <div className="absolute top-24 left-8 md:left-16 text-4xl pointer-events-none animate-float opacity-30">🛠️</div>
        <div className="absolute bottom-32 left-10 md:left-20 text-3xl pointer-events-none animate-float [animation-delay:1.5s] opacity-30">📦</div>
        <div className="absolute top-32 right-10 md:right-20 text-4xl pointer-events-none animate-float [animation-delay:0.7s] opacity-30">💎</div>
        <div className="absolute bottom-24 right-12 md:right-24 text-3xl pointer-events-none animate-float [animation-delay:2.2s] opacity-30">🔧</div>
      </section>
    </PageTransition>
  );
}

export default ProjectsPage;
