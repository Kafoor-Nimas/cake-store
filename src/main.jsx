import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";

const Main = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
    </div>
  );
};

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
