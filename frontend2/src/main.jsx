import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ContextoProductos from "./contextos/ContextoProductos.jsx";
import "primereact/resources/primereact.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextoProductos>
        <App />
      </ContextoProductos>
    </BrowserRouter>
  </StrictMode>,
);
