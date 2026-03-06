import { useState, useEffect } from "react";

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const reviews = [
    {
      id: 1,
      author: "Priya Sharma",
      rating: 5,
      text: "Absolutely stunning villa with impeccable service. The sunset views are breathtaking and the staff was incredibly attentive. This is luxury redefined - from the elegant interiors to the pristine gardens, every detail exceeded our expectations!",
      location: "Mumbai",
      date: "February 2026",
    },
    {
      id: 2,
      author: "Rajesh Kumar",
      rating: 5,
      text: "Best vacation experience of our lives! The villa's amenities are truly world-class and the location is simply perfect. From the moment we arrived, we felt like royalty. The private pool, gourmet kitchen, and panoramic views made our stay unforgettable!",
      location: "Bangalore",
      date: "January 2026",
    },
    {
      id: 3,
      author: "Anjali Patel",
      rating: 5,
      text: "An exceptional experience that surpassed all our expectations! The architectural beauty, luxurious rooms, and personalized service created the perfect retreat. Every morning felt like a dream waking up to those mountain views. We're already planning our next visit!",
      location: "Pune",
      date: "December 2025",
    },
    {
      id: 4,
      author: "Vikram Singh",
      rating: 5,
      text: "The perfect romantic getaway! Our anniversary celebration here was magical. The private infinity pool, beautifully landscaped gardens, and attentive staff made every moment special. The attention to detail in every aspect is truly commendable!",
      location: "Delhi",
      date: "November 2025",
    },
    {
      id: 5,
      author: "Neha Gupta",
      rating: 5,
      text: "This beachfront villa offers an experience beyond compare. Waking up to the sound of waves and stepping onto our private beach was pure bliss. The modern amenities combined with natural beauty create an unforgettable luxury escape. Worth every moment!",
      location: "Goa",
      date: "October 2025",
    },
  ];

  // Auto-scroll reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
      setIsTransitioning(false);
    }, 300);
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <section id="reviews" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Premium Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-500/20 to-emerald-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/20 to-amber-500/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <div className="px-6 py-2.5 bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-300 rounded-full shadow-sm">
              <span className="text-transparent bg-gradient-to-r from-amber-600 to-emerald-600 bg-clip-text font-black text-xs tracking-widest uppercase">
                ⭐ GUEST EXPERIENCES
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 sm:mb-4 leading-tight">
            HEAR FROM OUR{" "}
            <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-emerald-600 bg-clip-text text-transparent">
              HAPPY GUESTS
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Real stories from guests who experienced luxury living
          </p>
        </div>

        {/* Single Review Card with Auto-Scroll */}
        <div className="relative">
          {/* Main Review Card */}
          <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="bg-gradient-to-br from-white via-amber-50/30 to-emerald-50/30 border-2 border-amber-200/50 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl shadow-amber-200/20 relative overflow-hidden">
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-6xl sm:text-8xl text-amber-300/20 font-serif">
                "
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center gap-2 mb-6 sm:mb-8">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="text-3xl sm:text-4xl text-amber-400 drop-shadow-sm"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-8 sm:mb-10 text-center font-light italic relative z-10">
                "{currentReview.text}"
              </blockquote>

              {/* Author Info */}
              <div className="text-center border-t border-amber-200/50 pt-6 sm:pt-8">
                <h4 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                  {currentReview.author}
                </h4>
                <div className="flex items-center justify-center gap-3 text-sm sm:text-base text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {currentReview.location}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {currentReview.date}
                  </span>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="flex justify-center mt-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-2 rounded-full shadow-lg shadow-emerald-200">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-bold text-white tracking-wide">VERIFIED GUEST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 mt-10 sm:mt-12">
            <button
              onClick={handlePrev}
              className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-white rounded-full hover:shadow-2xl hover:shadow-amber-400/60 transition-all transform hover:scale-110 active:scale-95 border-2 border-white shadow-lg group overflow-hidden"
              aria-label="Previous review"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Page Indicators */}
            <div className="flex gap-2.5">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentReviewIndex(idx);
                      setIsTransitioning(false);
                    }, 300);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    currentReviewIndex === idx
                      ? "w-12 bg-gradient-to-r from-amber-500 via-amber-600 to-emerald-500 shadow-lg"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-2xl hover:shadow-emerald-400/60 transition-all transform hover:scale-110 active:scale-95 border-2 border-white shadow-lg group overflow-hidden"
              aria-label="Next review"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="text-center mt-6">
            <p className="text-sm text-slate-500 font-medium">
              Review <span className="text-amber-600 font-bold">{currentReviewIndex + 1}</span> of <span className="font-bold">{reviews.length}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
