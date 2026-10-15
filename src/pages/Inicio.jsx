import { useEffect, useState } from "react";

function Inicio() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // La consulta se realiza cuando se monta esta página.
  useEffect(() => {
    const controlador = new AbortController();
    let activo = true;
    const tiempoLimite = setTimeout(() => controlador.abort(), 15000);

    async function obtenerProductos() {
      try {
        const respuesta = await fetch(
          "https://dummyjson.com/products/category/laptops?limit=6",
          { signal: controlador.signal },
        );

        if (!respuesta.ok) {
          throw new Error("No se pudo consultar la API.");
        }

        const datos = await respuesta.json();
        if (!Array.isArray(datos.products)) {
          throw new Error("La respuesta no contiene productos.");
        }

        if (activo) setProductos(datos.products);
      } catch {
        if (activo) {
          setError("No pudimos cargar los productos. Revisá tu conexión e intentá nuevamente.");
        }
      } finally {
        clearTimeout(tiempoLimite);
        if (activo) setCargando(false);
      }
    }

    obtenerProductos();

    // Cancela la petición si salimos de Inicio antes de que termine.
    return () => {
      activo = false;
      clearTimeout(tiempoLimite);
      controlador.abort();
    };
  }, []);

  return (
    <section className="pagina-catalogo">
      <h1>Inicio</h1>
      <p className="introduccion-contacto">
        Explorá equipos tecnológicos para estudiar, trabajar y crear.
      </p>
      <h2>Notebooks destacadas</h2>
      <p className="nota-catalogo">
        Catálogo de demostración: los datos y las imágenes provienen de DummyJSON.
        Los precios son de ejemplo, expresados en USD.
      </p>

      {cargando && <p role="status">Cargando productos...</p>}
      {error && (
        <div className="aviso-formulario" role="alert">
          <p>{error}</p>
          <button className="boton-enviar" onClick={() => window.location.reload()}>
            Volver a intentar
          </button>
        </div>
      )}
      {!cargando && !error && productos.length === 0 && (
        <p>No hay productos disponibles en este momento.</p>
      )}

      <div className="grilla-tarjetas">
        {productos.map((producto) => (
          <article className="tarjeta" key={producto.id}>
            <img src={producto.thumbnail} alt={producto.title} loading="lazy" />
            <div className="tarjeta-contenido">
              <h3>{producto.title}</h3>
              <p>{producto.description}</p>
              <p><strong>Marca:</strong> {producto.brand || "Sin especificar"}</p>
              <p><strong>Categoría:</strong> {producto.category}</p>
              <p className="precio">
                <strong>Precio:</strong> USD {Number(producto.price).toFixed(2)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Inicio;
