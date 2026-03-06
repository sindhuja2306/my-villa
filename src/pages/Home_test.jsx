import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedVillas from "../components/FeaturedVillas";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedVillas />
      <Footer />
    </div>
  );
};

export default Home;
