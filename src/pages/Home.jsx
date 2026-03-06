import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedVillas from "../components/FeaturedVillas";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <FeaturedVillas />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
