import React, { useEffect, useState } from "react";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Al cargar, revisar si había modo oscuro activado
  useEffect(() => {
    const saved = localStorage.getItem("modoOscuro") === "true";
    setDarkMode(saved);

    if (saved) {
      document.body.classList.add("dark-mode");
    }
  }, []);

  // actualizar body cuando cambia darkMode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("modoOscuro", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("modoOscuro", "false");
    }
  }, [darkMode]);

  return (
    <footer className="footer">
      <p>© 2025 PetConnect | Todos los derechos reservados</p>

      {/* Botón modo oscuro */}
      <button 
        className="modo-oscuro-btn" 
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </footer>
  );
};

export default Footer;
