import FormularioContacto from "../components/FormularioContacto";

function Contacto() {
  return (
    <section className="pagina-contacto">
      <h1>Contacto</h1>

      <p className="introduccion-contacto">
        Completá el formulario para enviarnos tu consulta.
        Todos los campos son obligatorios.
      </p>

      <div className="contacto-columnas">
        <FormularioContacto />

        <aside className="ubicacion">
          <h2>Ubicación de referencia</h2>
          <p>Anozategui 159: Departamento 3F; Salta, Argentina.</p>
          <iframe
            title="Mapa de ubicación de referencia"
            src="https://maps.google.com/maps?q=Anzoategui%20159%2C%20Salta%2C%20Argentina&z=17&output=embed"
            loading="lazy"
          />
          <a
            href="https://www.google.com/maps/search/?api=1&query=Anzoategui%20159%2C%20Salta%2C%20Argentina"
            target="_blank"
            rel="noreferrer"
          >
            Abrir mapa en otra pestaña
          </a>
        </aside>
      </div>
    </section>
  );
}

export default Contacto;
