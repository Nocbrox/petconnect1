import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost/petconnect/api/productos_destacados.php")
      .then(res => res.json())
      .then(data => setProductos(data));
  }, []);

  const agregarAlCarrito = async (id) => {
    const formData = new FormData();
    formData.append("producto_id", id);
    formData.append("cantidad", 1);

    const res = await fetch("http://localhost/petconnect/page/agregar_al_carrito.php", {
      method: "POST",
      body: formData,
      credentials: "include"
    });

    if (res.ok) alert("Producto agregado al carrito");
  };

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <h2>Cuida, consiente y conecta con tu mascota 🐶🐱</h2>
        <p>Encuentra todo lo que necesitas para su bienestar en un solo lugar.</p>
        <a href="/catalogo" className="btn">Ver catálogo</a>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="destacados">
        <h3>Productos destacados</h3>

        <div className="grid">
          {productos.map(prod => (
            <ProductCard
              key={prod.id}
              producto={prod}
              onAdd={agregarAlCarrito}
            />
          ))}
        </div>
      </section>

      {/* CHATBOT */}
      <section className="chatbot">
        <h3>¿Tienes dudas sobre tu mascota?</h3>
        <p>Nuestro Chat-Bot te brinda asesoría al instante o te conecta con un especialista.</p>
        <a href="/chatbot" className="btn">Habla con nuestro asistente</a>
      </section>
    </main>
  );
}
