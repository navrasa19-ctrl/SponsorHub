import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import FeaturedOpportunities from "../components/FeaturedOpportunities";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import SponsorPopup from "../components/SponsorPopup";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("sponsorPopupShown");

    if (!alreadyShown) {
      setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("sponsorPopupShown", "true");
      }, 1200);
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <SponsorPopup
        open={showPopup}
        onClose={() => setShowPopup(false)}
        onGetStarted={() => {
          setShowPopup(false);
          navigate("/signup");
        }}
      />
      <main>
        <Navbar />
        <HeroSection />
        <CategoriesSection />
        <FeaturedOpportunities />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}