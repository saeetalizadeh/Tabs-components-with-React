import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tabs.css";
import Tabs from "./Tabs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Tabs />
  </StrictMode>
);
