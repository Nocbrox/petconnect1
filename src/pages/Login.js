import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la lógica de login más tarde
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-wrapper">
      <h2>Iniciar Sesión</h2>
      {message && <p style={{ color: 'red' }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="login-input"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="login-input"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">
          Iniciar Sesión
        </button>
      </form>
      <p>
        ¿No tienes cuenta?{" "}
        <Link to="/register" className="registro-link">
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
}
