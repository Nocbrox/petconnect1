import React, { useEffect, useState } from "react";
import { fetchCatalogo, agregarAlCarritoAPI } from "../api/products";
import ProductCard from "../Components/ProductCard";

export default function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCatalogo()
      .then(setProductos)
      .catch(err => {
        console.error(err);
        setError("No se pudo cargar el catálogo.");
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
      alert("No se pudo agregar al carrito.");
    }
  };

  return (
    <section className="catalogo">
      <h2 className="titulo">Catálogo</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="grid">
        {productos.map(p => (
          <ProductCard key={p.id} producto={p} onAdd={agregarAlCarrito} />
        ))}
      </div>
    </section>
  );
}
