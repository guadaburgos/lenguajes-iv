import { servicios } from "../data/servicios";

function Servicios() {
  return (
    <section className="pagina-catalogo">
      <h1>Servicios</h1>
      <p className="introduccion-contacto">
        Soluciones y habilidades para acompañar tus proyectos tecnológicos.
      </p>
      <div className="grilla-tarjetas">
        {servicios.map((servicio) => (
          <article className="tarjeta" key={servicio.id}>
            <img src={servicio.imagen} alt={servicio.nombre} loading="lazy" />
            <div className="tarjeta-contenido">
              <h2>{servicio.nombre}</h2>
              <p>{servicio.descripcion}</p>
              <p><strong>Tecnologías:</strong> {servicio.tecnologias}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
