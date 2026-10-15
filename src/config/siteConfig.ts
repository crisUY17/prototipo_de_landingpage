/**
 * ==============================================================
 *  ARCHIVO DE CONFIGURACION DEL SITIO - EDITA AQUI TU INFO
 * ==============================================================
 *  Todo el contenido personalizable de la landing page vive en
 *  este unico archivo. Los componentes leen desde aca, por lo
 *  que se puede reutilizar la misma web para otras empresas solo
 *  reemplazando estos valores.
 *
 *  Las secciones marcadas con [INFO] son las que se debe editar.
 * ==============================================================
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Plan {
  id: string;
  nombre: string;
  precio: string;
  precioNota?: string;
  tiempo: string;
  descripcion: string;
  caracteristicas: string[];
  destacado?: boolean;
}

export interface SiteConfig {
  empresa: {
    /** [INFO] Nombre de tu empresa (aparece en navbar, hero y footer) */
    nombre: string;
    /** [INFO] Tagline corto que acompaña al logo en el navbar */
    slogan: string;
    /** [INFO] URL del logo (coloca el archivo en /public y pon aquí "/mi-logo.png") */
    logo: string;
    // Ruta del logo — cambiá por '/logo.svg' o la ruta de tu imagen en /public
  };
  nav: NavLink[];
  hero: {
    /** [INFO] Título principal con la misión (línea 1) */
    tituloLinea1: string;
    /** [INFO] Título principal (línea 2) */
    tituloLinea2: string;
    /** [INFO] Párrafo corto de presentación */
    descripcion: string;
    /** [INFO] Texto del botón que lleva a la sección "Sobre nosotros" */
    ctaLabel: string;
  };
  intro: {
    /** [INFO] Título grande de la sección de texto */
    titulo: string;
    /** [INFO] Texto de la sección */
    texto: string;
  };
  sobreNosotros: {
    /** [INFO] Título de la sección */
    titulo: string;
    /** [INFO] Párrafo descriptivo */
    texto: string;
    /** [INFO] URL de la imagen (coloca el archivo en /public y pon aquí "/imagen.jpg") */
    imagen: string;
    /** [INFO] Texto alternativo accesible de la imagen */
    imagenAlt: string;
    /** [INFO] Estadísticas o datos clave (se muestran como chips) */
    stats: { valor: string; label: string }[];
  };
  servicios: {
    /** [INFO] Título grande de la sección */
    titulo: string;
    /** [INFO] Subtítulo bajo el título */
    subtitulo: string;
    /** [INFO] Lista de planes (ya vienen precargados con la tabla de referencia) */
    planes: Plan[];
  };
  contacto: {
    /** [INFO] Título de la sección de contacto */
    titulo: string;
    /** [INFO] Subtítulo */
    subtitulo: string;
    /** [INFO] Dirección física */
    direccion: string;
    /** [INFO] Teléfono fijo */
    telefono: string;
    /** [INFO] Celular / WhatsApp */
    whatsapp: string;
    /** [INFO] Correo electrónico */
    email: string;
    /** [INFO] Usuario de Instagram (sin @) */
    instagram: string;
    /** [INFO] URL del perfil de Instagram */
    instagramUrl: string;
    /** [INFO] URL de embed de Google Maps (buscá "compartir" > "insertar un mapa" en Google Maps) */
    mapaEmbedUrl: string;
    /** [INFO] URL de dirección de Google Maps */
    mapaDireccionUrl: string;
  };
  formulario: {
    /** [INFO] Texto de ayuda gris del textarea */
    mensajePlaceholder: string;
    /** [INFO] Texto del botón de envío */
    submitLabel: string;
    /** [INFO] Texto que aparece tras enviar (sin backend: es una confirmación visual) */
    submitExito: string;
  };
  footer: {
    /** [INFO] Texto resumen del pie de página */
    resumen: string;
    /** [INFO] Texto de copyright */
    copyright: string;
  };
  whatsapp: {
    /** [INFO] Número de WhatsApp en formato internacional sin + ni espacios (ej: 54911XXXXXXXX) */
    numero: string;
    /** [INFO] Plantilla del mensaje. Variables: {nombre}, {email}, {plan}, {mensaje} */
    mensajeTemplate: string;
  };
}

/** ===========================================
 * Aquí comienza la configuración editable del sitio
 * ===========================================*/

export const siteConfig: SiteConfig = {
  empresa: {
    nombre: "TU EMPRESA",
    slogan: "Diseño & Desarrollo Web",
    logo: "./logo.svg",
  },
  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Donde encontrarnos", href: "#contacto" },
  ],
  hero: {
    tituloLinea1: "Creamos páginas web que",
    tituloLinea2: "hacen crecer tu negocio",
    descripcion:
      "Diseñamos y desarrollamos landing pages modernas, rápidas y optimizadas para que tu empresa destaque en internet.",
    ctaLabel: "Conocer la empresa",
  },
  intro: {
    titulo: "Soluciones digitales a tu medida",
    texto:
      "Somos un equipo de desarrollo web especializado en crear experiencias digitales atractivas y funcionales. Combinamos diseño moderno con código limpio para entregar proyectos que generan resultados reales para tu negocio.",
  },
  sobreNosotros: {
    titulo: "Sobre nosotros",
    texto:
      "Somos un estudio de desarrollo web apasionado por crear soluciones digitales que marquen la diferencia. Con experiencia en diseño y desarrollo front-end, ayudamos a empresas de todos los tamaños a tener presencia profesional en internet, cuidando cada detalle del diseño y la experiencia de usuario.",
    imagen: "./favicon.svg",
    imagenAlt: "Equipo de trabajo",
    stats: [
      { valor: "1", label: "Proyecto entregado" },
      { valor: "100%", label: "Clientes satisfechos" },
      { valor: "3 dias", label: "De experiencia" },
    ],
  },
  servicios: {
    titulo: "Qué hacemos",
    subtitulo: "Elige el plan que mejor se adapte a tu proyecto",
    planes: [
      {
        id: "basico",
        nombre: "Landing básico",
        precio: "USD 150",
        tiempo: "3 a 5 días hábiles",
        descripcion: "Landing simple, rápida y optimizada con dominio propio.",
        caracteristicas: [
          "Hosting por un año",
          "Dominio personalizado",
          "Soporte por 3 meses",
          "Sin complicaciones",
        ],
      },
      {
        id: "medida",
        nombre: "Landing a medida",
        precio: "USD 250",
        tiempo: "2 a 3 semanas",
        descripcion:
          "Landing hecho a gusto del cliente, con diseño propio y optimizado.",
        caracteristicas: [
          "Hosting por un año",
          "Dominio personalizado",
          "Soporte por 3 meses",
          "Branding completo de la empresa",
          "Secciones a elección",
        ],
        destacado: true,
      },
      {
        id: "personalizado",
        nombre: "Página a medida",
        precio: "Presupuestado",
        tiempo: "A definir según alcance",
        descripcion:
          "Si su proyecto necesita algo único diseñamos una solución adaptada a su negocio.",
        caracteristicas: [
          "Lo anterior",
          "Funcionalidades más complejas a medida",
        ],
      },
    ],
  },
  contacto: {
    titulo: "Contacto y dónde encontrarnos",
    subtitulo: "Estamos para ayudarte, escribinos sin compromiso",
    direccion: "Calle Falsa 123, Ciudad",
    telefono: "25080000",
    whatsapp: "(+598) 99 123 456",
    email: "info@tuempresa.com",
    instagram: "@tuempresa",
    instagramUrl: "https://instagram.com/tuempresa",
    mapaEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.1424412068116!2d-56.121542513728734!3d-34.90089476892191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81370227632f%3A0xec0e1af88b388c6a!2sPlaya%20Buceo!5e0!3m2!1ses-419!2suy!4v1791985916946!5m2!1ses-419!2suy",
    mapaDireccionUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.1424412068116!2d-56.121542513728734!3d-34.90089476892191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81370227632f%3A0xec0e1af88b388c6a!2sPlaya%20Buceo!5e0!3m2!1ses-419!2suy!4v1791985916946!5m2!1ses-419!2suy",
  },
  formulario: {
    mensajePlaceholder:
      "Contanos sobre tu proyecto: tipo de negocio, qué es lo que buscás y plazos estimados.",
    submitLabel: "Enviar consulta",
    submitExito: "¡Gracias! Continua tu consulta por WhatsApp.",
  },
  footer: {
    resumen:
      "Diseño y desarrollo de páginas web modernas y optimizadas para empresas que quieren destacar en internet.",
    copyright: "Todos los derechos reservados.",
  },
  whatsapp: {
    numero: "59892099594",
    mensajeTemplate: `Hola, soy *{nombre}*.
Mi correo es {email}.
Estoy interesado en el plan: *{plan}*.
{mensaje}`,
  },
};
