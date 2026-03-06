import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../asserts/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 shadow-lg border-b border-amber-200 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md transition-all duration-300 border border-amber-200">
              <img
                src={logo}
                alt="My Villa logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent leading-tight">
                MY VILLA
              </span>
              <span className="text-[10px] sm:text-xs text-amber-600 font-bold tracking-widest">
                PREMIUM ESTATES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10">
            {["Home", "Villas", "Contact"].map((item, idx) => (
              <Link
                key={idx}
                to={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                className="text-slate-700 hover:text-amber-600 font-semibold text-sm tracking-wide transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <svg
              className="w-6 h-6 text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-3 border-t border-amber-200 pt-4 mb-16 bg-white">
            {["Home", "Villas", "Contact"].map((item, idx) => (
              <Link
                key={idx}
                to={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                className="block px-4 py-3 text-slate-700 hover:bg-amber-100 rounded-lg font-semibold transition-colors"
              >
                {item}
              </Link>
            ))}
            <a
              href="https://wa.me/919876543210?text=Hello! I'm interested in learning more about your premium villas."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-black rounded-lg hover:shadow-lg transition-all transform active:scale-95 text-sm tracking-wider uppercase mt-4"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.149l-.335-.17-3.468.664.676-3.264-.196-.315a9.9 9.9 0 011.51-4.383A9.9 9.9 0 0112.05 1.001c2.733 0 5.313 1.065 7.242 2.994 1.929 1.928 2.994 4.508 2.994 7.242 0 5.45-4.436 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.176-1.237-6.167-3.482-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
