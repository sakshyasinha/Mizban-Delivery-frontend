import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CourierProvider } from "./context/CourierContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CourierProvider>
        <App />
      </CourierProvider>
    </BrowserRouter>
  </StrictMode>,
);
