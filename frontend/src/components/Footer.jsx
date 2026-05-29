import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/myselfanandvp", icon: FaGithub },
    {
      name: "LinkedIn", url: "https://www.linkedin.com/in/myselfanandvp/", icon: FaLinkedin
    },
    { name: "Twitter", url: "https://x.com/meAnandvp", icon: FaTwitter },
  ];

  return (
    <footer className="z-50 relative w-full border-t border-slate-200/60 dark:border-slate-800/50 bg-transparent backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-slate-200/40 dark:border-slate-800/40">

          {/* Left Side: Branding & Status */}
          <div className="flex flex-col gap-2">
            <span className="text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400">
              Anand V P
            </span>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
              Crafting robust full-stack applications with clean architecture and seamless UX.
            </p>

            {/* Live Status Indicator */}
            <div className="mt-2 inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-900/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                Open to new opportunities
              </span>
            </div>
          </div>

          {/* Right Side: Quick Navigation & Socials */}
          <div className="flex flex-wrap gap-12">
            {/* Links Group */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Navigation
              </span>
              <nav className="flex flex-col gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
                <Link to="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</Link>
                <Link to="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</Link>
              </nav>
            </div>

            {/* Socials Group */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect
              </span>
              <div className="flex flex-col gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                    >
                      <span className="text-xs grayscale group-hover:grayscale-0 transition-all">
                        <Icon />
                      </span>
                      {social.name}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs font-medium text-slate-400 dark:text-slate-500">
          <div>
            © {currentYear} Anand V P. All rights reserved.
          </div>
          <div className="flex gap-4">
            <span>Built with React & Tailwind</span>
            <span>•</span>
            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent font-bold">
              Designed to Inspire
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
