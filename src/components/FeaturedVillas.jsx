import { useState, useEffect } from "react";
import VillaCard from "./VillaCard";
import { villas } from "../data/villas";

const FeaturedVillas = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const timers = villas.map((_, idx) =>
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, idx]);
      }, idx * 150),
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <section
      id="villas"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-amber-50/40 to-white relative overflow-hidden"
    >
      {/* Premium Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl hidden md:block"></div>

      <div className="max-w-7xl mx-auto">
        {/* Premium Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="px-6 py-2 bg-white backdrop-blur border border-amber-300 rounded-full shadow-sm">
              <span className="text-amber-400 font-black text-xs tracking-widest uppercase">
                ✨ CURATED COLLECTION
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-4 sm:mb-6 md:mb-8 leading-tight">
            EXPLORE OUR{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              SIGNATURE VILLAS
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light tracking-wide">
            Handpicked masterpieces of luxury architecture and design, each
            villa crafted to exceed expectations
          </p>
        </div>

        {/* Villa Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {villas.map((villa, index) => (
            <div
              key={villa.id}
              className={`transform transition-all duration-700 ${
                visibleCards.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <VillaCard villa={villa} />
            </div>
          ))}
        </div>

        {/* Premium Statistics Section */}
        <div className="bg-white border border-amber-200 rounded-2xl p-8 sm:p-12 md:p-16 mb-12 md:mb-16 backdrop-blur shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {[
              { icon: "�", number: "50+", label: "Premium Villas" },
              { icon: "👥", number: "10K+", label: "Royal Guests" },
              { icon: "⭐", number: "4.9/5", label: "Excellence" },
              { icon: "🌍", number: "8", label: "Elite Locations" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </p>
                <p className="text-amber-700 font-bold text-xs sm:text-sm md:text-lg tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVillas;
