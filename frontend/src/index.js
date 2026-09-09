import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

// Aplica el tema antes de montar React para evitar parpadeos entre modos.
try {
  const savedTheme = window.localStorage.getItem("portfolio-theme");
  const initialTheme = savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : "dark";

  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(initialTheme);
  document.documentElement.dataset.theme = initialTheme;
} catch {
  document.documentElement.classList.add("dark");
  document.documentElement.dataset.theme = "dark";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
