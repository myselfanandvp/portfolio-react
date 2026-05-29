import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const darkMode = useSelector((state) => state.theme.darkMode);

  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-transparent transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-xl font-black tracking-tight text-slate-900 dark:text-white hover:opacity-90 transition"
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              Portfolio
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700 dark:text-slate-300">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`relative px-1 py-2 transition-colors duration-200 ${isActive
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "hover:text-indigo-500 dark:hover:text-indigo-400"
                    }`}
                >
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full animate-pulse" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-4">

          {/* CTA */}
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-indigo-500/10"
          >
            <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 scale-[1.5] animate-[spin_5s_linear_infinite]" />

            <span className="relative z-10 px-5 py-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 transition-colors duration-300 w-full h-full flex items-center justify-center">
              Let's Talk ✨
            </span>
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle Theme"
            className="group relative p-3 rounded-2xl bg-transparent border border-white/10 text-slate-700 dark:text-amber-400 backdrop-blur-md hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 active:scale-95"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-400/0 to-indigo-500/0 group-hover:from-amber-400/5 group-hover:to-indigo-500/5 dark:group-hover:from-amber-400/10 dark:group-hover:to-purple-500/10 transition-all duration-500" />

            <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">

              {/* Sun Icon */}
              <svg
                className={`absolute w-5 h-5 transition-all duration-500 transform ease-out ${darkMode
                  ? "scale-0 rotate-90 opacity-0"
                  : "scale-100 rotate-0 opacity-100 group-hover:rotate-45"
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              {/* Moon Icon */}
              <svg
                className={`absolute w-5 h-5 text-indigo-400 transition-all duration-500 transform ease-out ${darkMode
                  ? "scale-100 rotate-0 opacity-100 group-hover:-rotate-12"
                  : "scale-0 -rotate-90 opacity-0"
                  }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">

          {/* Theme Toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-2xl bg-transparent border border-white/10 backdrop-blur-md text-base"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          {/* Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-white/10 transition"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden border-b border-white/10 bg-transparent backdrop-blur-xl transition-all duration-300 ease-in-out ${open
          ? "max-h-screen opacity-100 visible"
          : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
      >
        <ul className="px-6 py-5 space-y-4 text-base font-bold text-slate-700 dark:text-slate-300">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-1 transition-colors ${isActive
                    ? "text-indigo-600 dark:text-indigo-400"
                    : ""
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          <li className="pt-4 border-t border-white/10">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-3 rounded-2xl font-bold text-sm shadow-md"
            >
              Let's Talk ✨
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
