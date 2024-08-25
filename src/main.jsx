import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Sample from "./components/sample";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Sample></Sample>
  </StrictMode>
);
