import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="relative min-h-screen bg-[#FFF7ED] overflow-x-hidden">
      {/* Global Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-peach/25 rounded-full blur-3xl" />
      </div>

      <Navbar />

      <SponsorPopup
        open={showPopup}
        onClose={() => setShowPopup(false)}
        onGetStarted={() => {
          setShowPopup(false);
          navigate("/signup");
        }}
      />

      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedOpportunities />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}