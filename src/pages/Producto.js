import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducto, agregarAlCarritoAPI } from "../api/products";

export default function Producto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducto(id)
      .then(setProducto)
      .catch(err => {
        console.error(err);
        setError("No se pudo cargar el producto.");
      });
  }, [id]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!producto) return <p>Cargando...</p>;

  const agregar = async () => {
    try {
      await agregarAlCarritoAPI(producto.id, 1);
      const contador = document.getElementById("contador-carrito");
      if (contador) contador.textContent = String(Number(contador.textContent || "0") + 1);
      alert("Producto agregado al carrito");
    } catch (err) {
      console.error(err);
      alert("No se pudo agregar al carrito.");
    }
  };

  return (
    <article>
      <h2>{producto.nombre}</h2>
      <img src={`/img/${producto.url}`} alt={producto.nombre} style={{ maxWidth: 400 }} />
      <p>Precio: ${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <button className="catalogo-btn" onClick={agregar}>Agregar al carrito</button>
    </article>
  );
}
