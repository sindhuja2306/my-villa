import { useState } from "react";
import { Link } from "react-router-dom";

const VillaCard = ({ villa }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) =>
      prev === 0 ? villa.images.length - 1 : prev - 1,
    );
  };

  const handleNextImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) =>
      prev === villa.images.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <Link to={`/villa/${villa.id}`} className="group h-full cursor-pointer">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-amber-200 transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col border border-amber-200 hover:border-amber-400 backdrop-blur">
        {/* Premium Image Container */}
        <div className="relative h-60 sm:h-80 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
          <img
            src={villa.images[currentImageIndex]}
            alt={villa.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-125" : "scale-100"}`}
          />

          {/* Premium Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"></div>

          {/* Luxury Rating Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-5 py-2 rounded-full font-black shadow-lg flex items-center gap-2 transform transition-all hover:scale-110 backdrop-blur border border-amber-200">
            <span>⭐ {villa.rating}</span>
          </div>

          {/* Luxury Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full border border-amber-300">
            <span className="text-amber-700 text-xs font-black tracking-widest">
              LUXURY
            </span>
          </div>

          {/* Navigation Arrows */}
          {villa.images.length > 1 && isHovered && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-600/90 hover:bg-amber-500 text-white p-3 rounded-full transition-all transform hover:scale-125 shadow-lg backdrop-blur"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(true)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-600/90 hover:bg-amber-500 text-white p-3 rounded-full transition-all transform hover:scale-125 shadow-lg backdrop-blur"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(true)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Image Counter */}
          {villa.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-amber-700 text-xs font-bold border border-amber-300">
              {currentImageIndex + 1} / {villa.images.length}
            </div>
          )}
        </div>

        {/* Premium Content */}
        <div className="flex-grow p-4 sm:p-8 flex flex-col bg-white">
          {/* Location */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">📍</span>
            <span className="text-amber-700 font-bold text-sm tracking-wide">
              {villa.location}
            </span>
          </div>

          {/* Villa Name */}
          <h3 className="text-lg sm:text-2xl font-black text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
            {villa.name}
          </h3>

          {/* Price */}
          <div className="mb-6 pb-6 border-b border-amber-600/30">
            <p className="text-slate-500 text-xs mb-1 font-bold tracking-widest uppercase">
              Starting Price
            </p>
            <p className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              ₹{villa.price.toLocaleString()}
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="flex-grow mb-6">
            <p className="text-amber-600 font-black text-xs mb-3 tracking-widest uppercase">
              Premium Amenities
            </p>
            <div className="grid grid-cols-3 gap-2">
              {villa.amenities.slice(0, 3).map((amenity, idx) => (
                <div
                  key={idx}
                  className="text-center p-2 bg-amber-50 border border-amber-200 rounded-lg hover:bg-amber-100 transition-colors"
                >
                  <p className="text-amber-700 text-xs font-bold truncate">
                    {amenity}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-black rounded-lg hover:shadow-lg hover:shadow-amber-300 transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wide text-xs sm:text-sm">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default VillaCard;
