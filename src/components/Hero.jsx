import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-white">
      {/* Premium Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.vecteezy.com/system/resources/previews/060/508/214/large_2x/modern-villa-with-a-pool-surrounded-by-lush-greenery-and-a-clear-blue-sky-photo.jpeg"
          alt="Mountain Villa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/45 to-white/75"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/40 to-transparent"></div>
      </div>

      {/* Animated Premium Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float-delay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full text-center">
        <div
          className={`transform transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Premium Badge */}
          <div className="inline-block mb-8">
            <div className="px-8 py-3 bg-white/75 backdrop-blur-md border border-amber-300 rounded-full shadow-sm">
              <span className="text-amber-700 text-sm font-black tracking-widest uppercase">
                LUXURY HILL ESTATES
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-tight">
            DISCOVER YOUR
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent drop-shadow-sm">
              ROYAL VILLA
            </span>
          </h1>

          {/* Premium Tagline */}
          <p className="text-xl md:text-2xl text-slate-700 mb-12 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            Elevate Your Lifestyle With Exquisite Luxury Villas Nestled in the
            Finest Natural Settings
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              to="/#villas"
              className="group px-12 py-5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white font-black text-lg rounded-lg hover:shadow-xl hover:shadow-amber-300 transition-all transform hover:scale-105 tracking-wide uppercase"
            >
              EXPLORE VILLAS
              <span className="ml-3 group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </Link>

            <a
              href="#contact"
              className="group px-12 py-5 bg-white/70 border-2 border-amber-500 text-amber-700 font-black text-lg rounded-lg hover:bg-amber-50 transition-all transform hover:scale-105 backdrop-blur tracking-wide uppercase"
            >
              📞 CONTACT US
            </a>
          </div>

          {/* Luxury Features */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
            {[
              { icon: "🏰", text: "Premium Villas" },
              { icon: "⭐", text: "5-Star Rated" },
              { icon: "🌿", text: "Eco Luxury" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-md border border-amber-200 p-4 rounded-lg hover:bg-white transition-all shadow-sm"
              >
                <div className="text-3xl mb-2">{feature.icon}</div>
                <p className="text-amber-700 font-bold text-xs tracking-widest uppercase">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-8 h-8 text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
