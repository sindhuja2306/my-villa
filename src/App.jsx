import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VillaDetails from "./pages/VillaDetails";
import WhatsAppContact from "./components/WhatsAppContact";
import logo from "./asserts/logo.png";
import "./App.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <img src={logo} alt="Logo" className="w-64 h-auto animate-pulse" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Router>
        <WhatsAppContact />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/villa/:id" element={<VillaDetails />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
