import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-left">
          <img className="logo-header" src="/icono.jpeg" alt="Logo" />
          <div className="title-group">
            <h1 className="site-title">PetConnect</h1>
            <p className="site-slogan">Cuida, consiente y conecta</p>
          </div>
        </div>

        <div className="header-right">
          {/* Carrito */}
          <div className="cart-container">
            <span className="cart-count">0</span>
            <span role="img" aria-label="carrito" className="cart-icon">🛒</span>
          </div>

          {/* Botón de iniciar sesión */}
          <Link to="/login" className="login-btn">
            Iniciar sesión
          </Link>
        </div>
      </div>

      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/chatbot">Chatbot</Link></li>
        </ul>
      </nav>
    </header>
  );
}
