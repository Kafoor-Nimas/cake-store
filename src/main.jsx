import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import PromoBanners from "./components/PromoBanners";
import Bestsellers from "./components/Bestsellers";
import AboutUs from "./components/AboutUs";
import TrustStrip from "./components/TrustStrip";
import Categories from "./components/Categories";

const Main = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <PromoBanners />
      <Bestsellers />
      <AboutUs />
      <TrustStrip />
      <Categories/>
    </div>
  );
};

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
