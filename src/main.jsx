import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import PromoBanners from "./components/PromoBanners";
import Bestsellers from "./components/Bestsellers";

const Main = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <PromoBanners />
      <Bestsellers />
    </div>
  );
};

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
