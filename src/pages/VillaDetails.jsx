import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { villas } from "../data/villas";
import Header from "../components/Header";
import Footer from "../components/Footer";

const VillaDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [villa, setVilla] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundVilla = villas.find((v) => v.id === parseInt(id));
    if (foundVilla) {
      setVilla(foundVilla);
      setIsLoading(false);
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading villa details...</p>
        </div>
      </div>
    );
  }

  if (!villa) {
    return null;
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? villa.images.length - 1 : prev - 1,
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === villa.images.length - 1 ? 0 : prev + 1,
    );
  };

  const callNow = () => {
    window.location.href = `tel:${villa.contact}`;
  };

  const getDirections = () => {
    window.open(villa.mapLink, "_blank");
  };

  return (
    <div className="w-full">
      <Header />

      <main className="pt-20">
        {/* Image Gallery */}
        <section className="relative h-96 md:h-screen bg-gray-900 overflow-hidden">
          <img
            src={villa.images[currentImageIndex]}
            alt={`${villa.name} - ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
            aria-label="Previous image"
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
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
            aria-label="Next image"
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

          {/* Image Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {villa.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-white w-8"
                    : "bg-white/50 w-2"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Rating Badge */}
          <div className="absolute top-6 right-6 bg-emerald-500 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 z-10">
            <span>⭐ {villa.rating}</span>
            <span className="text-sm">({villa.reviews} reviews)</span>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Header Info */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {villa.name}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg
                      className="w-5 h-5 text-amber-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-semibold">{villa.location}</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-amber-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{villa.rating}/5.0</span>
                    </div>
                    <span>•</span>
                    <span>{villa.reviews} reviews</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { icon: "🛏️", label: "Bedrooms", value: villa.bedrooms },
                  { icon: "🚿", label: "Bathrooms", value: villa.bathrooms },
                  { icon: "👥", label: "Capacity", value: villa.capacity },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg text-center"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-gray-600 text-sm font-semibold">
                      {stat.label}
                    </div>
                    <div className="text-2xl font-bold text-amber-700">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About This Villa
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {villa.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Villa Highlights
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {villa.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="bg-white border-2 border-amber-200 rounded-lg p-4 text-center hover:border-amber-400 transition-colors"
                    >
                      <p className="font-semibold text-gray-900">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {villa.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg"
                    >
                      <svg
                        className="w-5 h-5 text-amber-600 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-semibold text-gray-800">
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Location
                </h2>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.819066537226!2d77.1025!3d28.5921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd288411b46d%3A0xaff0b0b1251f5c63!2s${villa.location}!5e0!3m2!1sen!2sin!4v1234567890`}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="w-full"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="mt-4 text-gray-700 font-semibold text-lg">
                  Located in:{" "}
                  <span className="text-amber-600">{villa.location}</span>
                </p>
              </div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Price Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-amber-100">
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm mb-2">
                      Price per night
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-amber-600">
                        ₹{villa.price.toLocaleString()}
                      </span>
                      <span className="text-gray-500">/night</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-4">
                    <button
                      onClick={callNow}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call Now</span>
                    </button>

                    <button
                      onClick={getDirections}
                      className="w-full bg-white border-2 border-amber-600 text-amber-600 font-bold py-4 rounded-lg hover:bg-amber-50 transition-all flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span>Get Directions</span>
                    </button>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 pt-6 border-t-2 border-gray-200">
                    <p className="text-gray-600 text-sm mb-3">Direct Contact</p>
                    <a
                      href={`tel:${villa.contact}`}
                      className="text-2xl font-bold text-amber-600 hover:text-amber-700 transition-colors"
                    >
                      {villa.contact}
                    </a>
                  </div>

                  {/* Info */}
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-700">
                      ℹ️ <strong>No online payment needed!</strong> Contact us
                      directly to book your villa stay.
                    </p>
                  </div>
                </div>

                {/* Safety Info */}
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-green-900 mb-3">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Verified & Trusted</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>24/7 Customer Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Best Price Guarantee</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Easy Cancellation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Villas Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Explore More Villas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {villas
                .filter((v) => v.id !== villa.id)
                .slice(0, 3)
                .map((relatedVilla) => (
                  <div
                    key={relatedVilla.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  >
                    <img
                      src={relatedVilla.images[0]}
                      alt={relatedVilla.name}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {relatedVilla.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {relatedVilla.location}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-amber-600">
                          ₹{relatedVilla.price.toLocaleString()}
                        </span>
                        <button
                          onClick={() => navigate(`/villa/${relatedVilla.id}`)}
                          className="text-amber-600 hover:text-amber-700 font-bold text-sm"
                        >
                          View →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VillaDetails;
