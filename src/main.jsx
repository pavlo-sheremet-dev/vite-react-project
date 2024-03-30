import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "modern-normalize";

const elem = document.getElementById("root");

ReactDOM.createRoot(elem).render(
  // <React.StrictMode>

  <App />

  // </React.StrictMode>
);
