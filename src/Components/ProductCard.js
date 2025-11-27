import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ producto, onAdd }) {
  return (
    <div className="card">
      <img src={`./../assets/media/img/${producto.url}`} alt={`Imagen de ${producto.nombre}`} />
      <p>
        <strong>{producto.nombre}</strong><br />
        ${producto.precio}
      </p>
      <div className="botones">
        <Link to={`/producto/${producto.id}`} className="btn">Ver más</Link>
        <button className="catalogo-btn" onClick={() => onAdd(producto.id)}>Agregar al carrito</button>
      </div>
    </div>
  );
}
