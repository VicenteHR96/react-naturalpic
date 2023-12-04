import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PhotoProvider from "./contexts/PhotoProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PhotoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PhotoProvider>
  </React.StrictMode>
);
