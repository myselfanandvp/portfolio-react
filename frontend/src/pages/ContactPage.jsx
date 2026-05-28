import PageTransition from "../components/PageTransition";
import BorderGlow from "../components/animations/GlowingBorder";

function ContactPage() {
  return (
    <PageTransition>

      {/* Contact Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 max-w-5xl mx-auto">

        {/* Cute Animated Badge */}
        <div className="mb-6 animate-bounce [animation-duration:3s]">
          <span className="inline-flex items-center gap-1.5 bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-900 text-purple-600 dark:text-purple-400 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-sm">
            👋 Let's build something cool!
          </span>
        </div>

        {/* Beautiful Gradient Title */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-emerald-500 dark:from-purple-400 dark:via-pink-400 dark:to-emerald-400 drop-shadow-sm pb-2 text-center">
          Get In Touch
        </h1>

        <p className="mt-4 max-w-xl text-center text-slate-600 dark:text-slate-300 font-medium text-base md:text-lg">
          Have an idea, want to collaborate, or looking for a full-stack engineer? Drop me a line!
        </p>

        <div className="mt-12 grid md:grid-cols-5 gap-8 w-full max-w-4xl items-start">

          {/* Quick Contact Info Cards */}
          <div className="md:col-span-2 space-y-4 w-full animate-in fade-in-0 slide-in-from-left-4 duration-500">
            <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-2xl shadow-md">
              <div className="text-xs font-bold text-purple-500 dark:text-purple-400 uppercase tracking-wider mb-1">Email Directly</div>
              <a href="mailto:mailanandvp@gmail.com" className="text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors break-all">
                mailanandvp@gmail.com
              </a>
            </div>

            <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-2xl shadow-md">
              <div className="text-xs font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-wider mb-1">Location</div>
              <div className="text-base font-semibold text-slate-800 dark:text-slate-200">
                Kerala, India
              </div>
            </div>

            <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-2xl shadow-md flex justify-around items-center">
              <a href="https://github.com/anandvp" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 group">
                <span className="text-xl group-hover:scale-110 transition-transform">💻</span>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-purple-500 transition-colors">GitHub</span>
              </a>
              <div className="w-px h-8 bg-slate-200 dark:bg-slate-800" />
              <a href="https://linkedin.com/in/anandvp" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 group">
                <span className="text-xl group-hover:scale-110 transition-transform">🌐</span>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-purple-500 transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Glassmorphic Contact Form */}
          <BorderGlow glowIntensity={80} className="md:col-span-3 w-full rounded-3xl overflow-hidden shadow-xl">
            <form className="bg-gray-100/100 dark:bg-slate-900/40 backdrop-blur-md  p-8 space-y-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">

              {/* Name Input */}
              <div className="group relative space-y-2">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 transition-colors duration-300 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-2xl bg-white/60 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-purple-400/20 dark:focus:ring-purple-500/20 focus:border-purple-500 dark:focus:border-purple-400 focus:-translate-y-0.5 transition-all duration-300 shadow-sm"
                />
              </div>

              {/* Email Input */}
              <div className="group relative space-y-2">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 transition-colors duration-300 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full px-4 py-3 rounded-2xl bg-white/60 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-purple-400/20 dark:focus:ring-purple-500/20 focus:border-purple-500 dark:focus:border-purple-400 focus:-translate-y-0.5 transition-all duration-300 shadow-sm"
                />
              </div>

              {/* Message Input */}
              <div className="group relative space-y-2">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 transition-colors duration-300 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 rounded-2xl bg-white/60 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-purple-400/20 dark:focus:ring-purple-500/20 focus:border-purple-500 dark:focus:border-purple-400 focus:-translate-y-0.5 transition-all duration-300 shadow-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={(e) => e.preventDefault()}
                className="w-full relative group overflow-hidden bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold py-3.5 rounded-2xl shadow-md hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-400/10 hover:scale-[1.015] active:scale-[0.985] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center gap-2 group-hover:translate-x-0.5 transition-transform duration-300">
                  Send Message
                  <span className="inline-block group-hover:rotate-12 transition-transform duration-300">✨</span>
                </span>
              </button>
            </form>
          </BorderGlow>

        </div>

        {/* Ambient Floating Icons */}
        <div className="absolute top-24 left-8 md:left-16 text-4xl pointer-events-none animate-float opacity-70 dark:opacity-80">
          ✉️
        </div>

        <div className="absolute bottom-32 left-10 md:left-20 text-3xl pointer-events-none animate-float [animation-delay:1.5s] opacity-60 dark:opacity-70">
          💬
        </div>

        <div className="absolute top-32 right-10 md:right-20 text-4xl pointer-events-none animate-float [animation-delay:0.7s] opacity-70 dark:opacity-80">
          🎈
        </div>

        <div className="absolute bottom-24 right-12 md:right-24 text-3xl pointer-events-none animate-float [animation-delay:2.2s] opacity-60 dark:opacity-70">
          📬
        </div>
      </section>

      {/* Embedded style block for custom animation handlers */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(3deg); }
          50% { transform: translateY(-12px) rotate(-3deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </PageTransition>
  );
}

export default ContactPage;
