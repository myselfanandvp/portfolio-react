import PageTransition from "../components/PageTransition";
import ChromaGrid from "../components/animations/ChromaGrid";
import Brilworx from "../assets/Brilworx.png"
import Manjaro from "../assets/Manjaro.png"
import Netflix from "../assets/Netflix.png"
import Olx from "../assets/Olx.png"
import Wavelift from "../assets/Wavelift.png"
import Website from "../assets/OfficalWebsite.png"
function ProjectsPage() {
  const items = [
    {
      image: Wavelift,
      title: "WaveLift Audio E-Commerce Platform",
      subtitle: "A premium, full-stack headphone buying marketplace featuring dynamic filtering and a seamless checkout experience.",
      handle: "@wavelift",
      // Vibrant Neon Fuchsia to Amethyst Violet
      borderColor: "#ec4899",
      gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
      url: "https://www.wavelift.dpdns.org/",
    },
    {
      image: Manjaro,
      title: "Manjaro Landing Page Clone",
      subtitle: "Fully responsive modern UI clone developed using HTML & Tailwind CSS",
      handle: "@manjaroclone",
      // Deep Emerald Teal to Ocean Blue
      borderColor: "#0ea5e9",
      gradient: "linear-gradient(135deg, #059669 0%, #0ea5e9 100%)",
      url: "https://myselfanandvp.github.io/Manjaro_org_clone/",
    },
    {
      image: Brilworx,
      title: "Brilworx Corporate Website",
      subtitle: "Responsive business website crafted using HTML and Tailwind CSS",
      handle: "@brilworx",
      // Sunset Coral to Radiant Amber
      borderColor: "#f43f5e",
      gradient: "linear-gradient(135deg, #f43f5e 0%, #f59e0b 100%)",
      url: "https://myselfanandvp.github.io/-Brilworx/",
    },
    {
      image: Netflix,
      title: "Netflix UI Clone",
      subtitle: "Interactive streaming platform clone powered by React.js and Firebase",
      handle: "@netflixclone",
      // Crimson Ruby Red to Deep Wine
      borderColor: "#ef4444",
      gradient: "linear-gradient(135deg, #dc2626 0%, #4c0519 100%)",
      url: "https://github.com/myselfanandvp/Netflix-clone",
    },
    {
      image: Olx,
      title: "OLX Marketplace Clone",
      subtitle: "Responsive marketplace application using React.js and Firebase backend",
      handle: "@olxclone",
      // Electric Cyan to Royal Indigo Blue
      borderColor: "#3b82f6",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
      url: "https://github.com/myselfanandvp/olx-clone",
    },
    {
      image: Website,
      title: "My Official Website",
      subtitle: "Personal portfolio website hosted on GitHub Pages, showcasing my projects, skills, tech stack, and contact information with a clean responsive design.",
      handle: "@OfficialWebsite",
      // Neon Purple to Deep Cosmic Indigo
      borderColor: "#a855f7",
      gradient: "linear-gradient(135deg, #a855f7 0%, #312e81 100%)",
      url: "https://myselfanandvp.github.io/officialwebsite/",
    },
  ];
  return (
    <PageTransition>
      {/* Main Page Layout Wrapper */}
      <section className="relative z-10 flex flex-col items-center min-h-[calc(100vh-80px)] px-4 sm:px-6 py-16 md:py-24 max-w-6xl mx-auto w-full overflow-hidden">

        {/* Header content grouped to preserve vertical flow */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 md:mb-16">
          {/* Cute Animated Badge */}
          <div className="mb-6 animate-bounce [animation-duration:3s]">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-sm">
              🚀 My creations
            </span>
          </div>

          {/* Beautiful Gradient Title */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-rose-500 dark:from-blue-400 dark:via-purple-400 dark:to-rose-400 drop-shadow-sm pb-2">
            Featured Work
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-400 font-medium text-base md:text-lg">
            A selection of enterprise application solutions, custom automation pipelines, and core full-stack builds.
          </p>
        </div>

        <div style={{ height: 'auto', position: 'relative' }}>
          <ChromaGrid
            items={items}
            radius={300}
            damping={0.8}
            fadeOut={1.2}
            ease="power3.out"
          />
        </div>

        {/* Ambient Floating Icons - Hidden on small screens to avoid clipping/clutter */}
        <div className="hidden sm:block absolute top-24 left-4 md:left-8 text-4xl pointer-events-none animate-float opacity-20 dark:opacity-30">🛠️</div>
        <div className="hidden sm:block absolute bottom-32 left-6 md:left-12 text-3xl pointer-events-none animate-float [animation-delay:1.5s] opacity-20 dark:opacity-30">📦</div>
        <div className="hidden sm:block absolute top-32 right-6 md:right-12 text-4xl pointer-events-none animate-float [animation-delay:0.7s] opacity-20 dark:opacity-30">💎</div>
        <div className="hidden sm:block absolute bottom-24 right-8 md:right-16 text-3xl pointer-events-none animate-float [animation-delay:2.2s] opacity-20 dark:opacity-30">🔧</div>
      </section>
    </PageTransition >
  );
}

export default ProjectsPage;
