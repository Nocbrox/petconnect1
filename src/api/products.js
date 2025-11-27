const BASE = "https://petconnect.page.gd";

export async function fetchDestacados() {
  try {
    const res = await fetch(`${BASE}/api/productos_destacados.php`, {
      credentials: "include"
    });
    if (!res.ok) throw new Error("Error al obtener destacados");
    return await res.json();
  } catch (err) {
    throw err;
  }
}

export async function fetchCatalogo() {
  try {
    const res = await fetch(`${BASE}/api/productos_catalogo.php`, {
      credentials: "include"
    });
    if (!res.ok) throw new Error("Error al obtener catálogo");
    return await res.json();
  } catch (err) {
    throw err;
  }
}

export async function fetchProducto(id) {
  try {
    const res = await fetch(`${BASE}/api/producto.php?id=${encodeURIComponent(id)}`, {
      credentials: "include"
    });
    if (!res.ok) throw new Error("Error al obtener producto");
    return await res.json();
  } catch (err) {
    throw err;
  }
}

export async function agregarAlCarritoAPI(producto_id, cantidad = 1) {
  try {
    const form = new FormData();
    form.append("producto_id", producto_id);
    form.append("cantidad", cantidad);
    const res = await fetch(`${BASE}/page/agregar_al_carrito.php`, {
      method: "POST",
      body: form,
      credentials: "include"
    });
    if (!res.ok) throw new Error("No se pudo agregar al carrito");
    return await res.text();
  } catch (err) {
    throw err;
  }
}
