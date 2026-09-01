import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const Main = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Cake store</h1>
    </div>
  );
};

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
