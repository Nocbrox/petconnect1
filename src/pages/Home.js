import React, { useEffect, useState } from "react";
import { fetchDestacados, agregarAlCarritoAPI } from "../api/products";
import ProductCard from "../Components/ProductCard";

export default function Home() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDestacados()
      .then(setProductos)
      .catch(err => {
        console.error(err);
        setError("No se pudieron cargar los productos. Revisa tu backend.");
      });
  }, []);

  const agregarAlCarrito = async (id) => {
    try {
      await agregarAlCarritoAPI(id, 1);
      const contador = document.getElementById("contador-carrito");
      if (contador) contador.textContent = String(Number(contador.textContent || "0") + 1);
      alert("Producto agregado al carrito");
    } catch (err) {
      console.error(err);
      alert("No se pudo agregar al carrito. Revisa el backend.");
    }
  };

  return (
    <section>
      <div className="hero">
        <h2>Cuida, consiente y conecta con tu mascota 🐶🐱</h2>
        <p>Encuentra todo lo que necesitas para su bienestar en un solo lugar.</p>
        <a href="/catalogo" className="btn">Ver catálogo</a>
      </div>

      <section className="destacados">
        <h3>Productos destacados</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="grid">
          {productos.map(p => (
            <ProductCard key={p.id} producto={p} onAdd={agregarAlCarrito} />
          ))}
        </div>
      </section>

      <section className="chatbot">
        <h3>¿Tienes dudas sobre tu mascota?</h3>
        <p>Nuestro Chat-Bot te brinda asesoría al instante o te conecta con un especialista.</p>
        <a href="/chatbot" className="btn">Habla con nuestro asistente</a>
      </section>
    </section>
  );
}
