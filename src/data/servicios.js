import desarrolloWeb from "../assets/desarrollo-web.svg";
import basesDeDatos from "../assets/bases-de-datos.svg";
import soporteTecnico from "../assets/soporte-tecnico.svg";

// Estos datos son locales: no se solicitan a una API.
export const servicios = [
  {
    id: 1,
    nombre: "Desarrollo web",
    descripcion: "Creación de sitios adaptables a computadoras y celulares, con navegación clara y formularios interactivos.",
    tecnologias: "HTML, CSS, JavaScript y React",
    imagen: desarrolloWeb,
  },
  {
    id: 2,
    nombre: "Bases de datos",
    descripcion: "Diseño y organización de bases de datos para guardar información y realizar consultas de forma ordenada.",
    tecnologias: "SQL y SQL Server",
    imagen: basesDeDatos,
  },
  {
    id: 3,
    nombre: "Soporte técnico",
    descripcion: "Asistencia para instalar programas, configurar equipos y resolver problemas de conectividad.",
    tecnologias: "Windows, hardware y redes",
    imagen: soporteTecnico,
  },
];
