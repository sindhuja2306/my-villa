const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white via-amber-50/40 to-white text-slate-900 relative overflow-hidden border-t border-amber-200">
      {/* Premium Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-xl">
                  <span className="text-slate-900 font-black text-lg">✨</span>
                </div>
                <div>
                  <h3 className="font-black text-xl bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                    MY VILLA
                  </h3>
                  <p className="text-amber-500 text-xs font-black tracking-widest">
                    PREMIUM ESTATES
                  </p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 font-light">
                Discover the epitome of luxury living with our curated
                collection of signature villas in the world's most prestigious
                locations.
              </p>
              <div className="flex gap-4">
                {["f", "i", "t", "l"].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 bg-gradient-to-r from-amber-600/30 to-amber-500/30 hover:from-amber-600/60 hover:to-amber-500/60 backdrop-blur rounded-lg flex items-center justify-center transition-all transform hover:scale-110 border border-amber-500/50"
                  >
                    <span className="text-amber-400 font-bold">
                      {social.toUpperCase()}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-black mb-8 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                QUICK LINKS
              </h4>
              <ul className="space-y-4">
                {["Home", "Villas", "About", "Contact"].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-slate-600 hover:text-amber-600 transition-colors font-semibold text-sm tracking-wide relative group"
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Villas */}
            <div>
              <h4 className="text-lg font-black mb-8 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                DESTINATIONS
              </h4>
              <ul className="space-y-4">
                {["Tirupati City", "Goa Coast", "Himachal", "Bangalore"].map(
                  (prop, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-slate-600 hover:text-amber-600 transition-colors font-semibold text-sm tracking-wide relative group"
                      >
                        {prop}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact Info - Enhanced Premium UI */}
            <div>
              <h4 className="text-lg font-black mb-8 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                GET IN TOUCH
              </h4>
              <div className="space-y-4">
                {/* Address Card */}
                <div className="bg-gradient-to-br from-amber-50 to-white p-4 rounded-xl border border-amber-200 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-200/50 transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <span className="text-white text-lg">📍</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-amber-600 font-bold mb-1">
                        ADDRESS
                      </p>
                      <p className="text-sm text-slate-700 font-semibold leading-relaxed">
                        123 Hill Road,
                        <br />
                        Ooty, TN 643001
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <a
                  href="tel:+919876543210"
                  className="block bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <span className="text-white text-lg">📞</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-blue-600 font-bold mb-1">
                        CALL US
                      </p>
                      <p className="text-sm font-black text-slate-700">
                        +91 9876 543210
                      </p>
                    </div>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/919876543210?text=Hello! I'm interested in learning more about your premium villas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-br from-green-50 to-white p-4 rounded-xl border border-green-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <span className="text-white text-lg">💬</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-green-600 font-bold mb-1">
                        WHATSAPP
                      </p>
                      <p className="text-sm font-black text-slate-700">
                        Chat with Us Now
                      </p>
                    </div>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:info@myvilla.com"
                  className="block bg-gradient-to-br from-purple-50 to-white p-4 rounded-xl border border-purple-200 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-200/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <span className="text-white text-lg">✉️</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-purple-600 font-bold mb-1">
                        EMAIL
                      </p>
                      <p className="text-sm font-black text-slate-700">
                        info@myvilla.com
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-amber-200 mb-8"></div>

          {/* Premium Newsletter */}
          <div className="mb-12 bg-white border border-amber-200 p-12 rounded-2xl backdrop-blur shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  EXCLUSIVE OFFERS
                </h3>
                <p className="text-slate-600 font-light tracking-wide">
                  Subscribe to receive premium villa offers and luxury travel
                  inspiration
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your Elite Email"
                  className="flex-1 px-6 py-3 bg-white border border-amber-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors backdrop-blur font-light"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-black rounded-lg hover:shadow-lg hover:shadow-amber-300 transition-all transform hover:scale-105 uppercase tracking-wide text-sm">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p className="text-slate-500 font-light tracking-wide">
              © 2026 MY VILLA - PREMIUM ESTATES. All rights reserved.
            </p>

            <div className="flex gap-8">
              {["Privacy Policy", "Terms", "Cookies"].map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-slate-500 hover:text-amber-600 transition-colors font-semibold tracking-wide"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Scroll to Top Button */}
        <div className="fixed bottom-8 right-8 z-40">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-14 h-14 bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 rounded-full shadow-2xl shadow-amber-500/50 hover:shadow-amber-400/70 transition-all transform hover:scale-110 flex items-center justify-center group font-black"
            aria-label="Scroll to top"
          >
            <svg
              className="w-6 h-6 group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7-7m0 0l-7 7m7-7v12"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
