import { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Row,
  Col,
  Card,
  Form,
} from "react-bootstrap";
import { siteConfig } from "./config/siteConfig";
import "./App.css";

/* ============ Iconos SVG inline (sin dependencias extra) ============ */

function ArrowRightIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ verticalAlign: "-2px", marginRight: 4 }}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function GeoAltIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function TelephoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

/* ============ Botón de tema (sol/luna) ============ */

function ThemeToggleButton({
  darkMode,
  onToggle,
  className = "",
}: {
  darkMode: boolean;
  onToggle: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={onToggle}
      aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={darkMode ? "Modo claro" : "Modo oscuro"}
    >
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

/* ============ Componente principal ============ */

function App() {
  const c = siteConfig;
  const [navExpanded, setNavExpanded] = useState(false);
  const [planSeleccionado, setPlanSeleccionado] = useState("");
  const [formNombre, setFormNombre] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMensaje, setFormMensaje] = useState("");
  const [formEnviado, setFormEnviado] = useState(false);

  // Detectar tema inicial: preferencia guardada o preferencia del sistema
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return stored ? stored === "dark" : prefersDark;
  });

  // Aplicar clase al <html> y persistir
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const scrollTo = (id: string) => {
    setNavExpanded(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const planNombre =
      c.servicios.planes.find((p) => p.id === planSeleccionado)?.nombre ??
      planSeleccionado;

    const mensaje = c.whatsapp.mensajeTemplate
      .replace("{nombre}", formNombre)
      .replace("{email}", formEmail || "")
      .replace("{plan}", planNombre)
      .replace("{mensaje}", formMensaje || "");

    const url = `https://wa.me/${c.whatsapp.numero}?text=${encodeURIComponent(mensaje)}`;

    // Click programático en un <a>: más fiable que window.open en móviles,
    // donde el bloqueador de popups suele bloquear la apertura desde un submit.
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    setFormEnviado(true);
  };

  return (
    <div className="theme-transition">
      {/* ============ NAVBAR ============ */}
      <Navbar
        expand="lg"
        expanded={navExpanded}
        onToggle={setNavExpanded}
        className="main-navbar"
        fixed="top"
      >
        <Container>
          <Navbar.Brand
            href="#inicio"
            className="brand"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("inicio");
            }}
          >
            <img
              src={c.empresa.logo}
              alt={`Logo ${c.empresa.nombre}`}
              className="brand-logo"
            />
            <span className="brand-text">
              <span className="brand-name">{c.empresa.nombre}</span>
              <span className="brand-slogan">{c.empresa.slogan}</span>
            </span>
          </Navbar.Brand>
          <div className="navbar-actions">
            <ThemeToggleButton
              darkMode={darkMode}
              onToggle={toggleTheme}
              className="d-lg-none"
            />
            <Navbar.Toggle aria-label="Abrir menú de navegación" />
          </div>
          <Navbar.Collapse>
            <Nav className="ms-auto align-items-lg-center nav-links">
              {c.nav.map((link) => (
                <Nav.Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href.replace("#", ""));
                  }}
                >
                  {link.label}
                </Nav.Link>
              ))}
              <ThemeToggleButton
                darkMode={darkMode}
                onToggle={toggleTheme}
                className="d-none d-lg-inline-flex"
              />
              <Button className="btn-cta" onClick={() => scrollTo("formulario")}>
                Contactanos
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ============ HERO ============ */}
      <section id="inicio" className="hero-section section">
        <div className="hero-bg-shape" />
        <Container className="hero-content text-center">
          <h1 className="hero-title">
            <span className="hero-line">{c.hero.tituloLinea1}</span>
            <span className="hero-line hero-highlight">
              {c.hero.tituloLinea2}
            </span>
          </h1>
          <p className="hero-description">{c.hero.descripcion}</p>
          <Button
            className="btn-primary-custom hero-cta"
            onClick={() => scrollTo("nosotros")}
          >
            {c.hero.ctaLabel}
            <ArrowRightIcon />
          </Button>
        </Container>
      </section>

      {/* ============ INTRO ============ */}
      <section id="intro" className="intro-section section">
        <Container className="text-center">
          <h2 className="intro-title animate-fade-in-up">{c.intro.titulo}</h2>
          <p className="intro-text animate-fade-in-up delay-1">
            {c.intro.texto}
          </p>
        </Container>
      </section>

      {/* ============ SOBRE NOSOTROS ============ */}
      <section id="nosotros" className="about-section section">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} className="about-image-col">
              <div className="about-image-wrapper animate-fade-in-up">
                <img
                  src={c.sobreNosotros.imagen}
                  alt={c.sobreNosotros.imagenAlt}
                  className="about-image"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-text-col">
                <h2 className="about-title animate-fade-in-up delay-1">
                  {c.sobreNosotros.titulo}
                </h2>
                <p className="about-text animate-fade-in-up delay-2">
                  {c.sobreNosotros.texto}
                </p>
                <div className="about-stats animate-fade-in-up delay-3">
                  {c.sobreNosotros.stats.map((stat) => (
                    <div key={stat.label} className="stat-chip">
                      <span className="stat-value">{stat.valor}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ============ SERVICIOS ============ */}
      <section id="servicios" className="services-section section">
        <Container>
          <div className="text-center mb-5">
            <h2 className="services-title animate-fade-in-up">
              {c.servicios.titulo}
            </h2>
            <p className="services-subtitle animate-fade-in-up delay-1">
              {c.servicios.subtitulo}
            </p>
          </div>
          <Row className="g-4">
            {c.servicios.planes.map((plan, i) => (
              <Col lg={4} md={6} key={plan.id}>
                <Card
                  className={`plan-card ${plan.destacado ? "plan-destacado" : ""} animate-fade-in-up`}
                  style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                >
                  {plan.destacado && (
                    <div className="plan-badge">Más popular</div>
                  )}
                  <Card.Body>
                    <Card.Title className="plan-name">{plan.nombre}</Card.Title>
                    <div className="plan-price-row">
                      <span className="plan-price">{plan.precio}</span>
                      {plan.precioNota && (
                        <span className="plan-price-nota">
                          {" "}
                          {plan.precioNota}
                        </span>
                      )}
                    </div>
                    <div className="plan-time">
                      <ClockIcon />
                      Tiempo estimado: {plan.tiempo}
                    </div>
                    <p className="plan-description">{plan.descripcion}</p>
                    <ul className="plan-features">
                      {plan.caracteristicas.map((feat) => (
                        <li key={feat}>
                          <span className="plan-check">
                            <CheckCircleIcon />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ============ CONTACTO ============ */}
      <section id="contacto" className="contact-section section">
        <Container>
          <div className="text-center mb-5">
            <h2 className="contact-title animate-fade-in-up">
              {c.contacto.titulo}
            </h2>
            <p className="contact-subtitle animate-fade-in-up delay-1">
              {c.contacto.subtitulo}
            </p>
          </div>
          <Row className="g-4">
            <Col lg={5}>
              <div className="contact-info-col">
                <div className="contact-item animate-fade-in-up delay-2">
                  <div className="contact-icon">
                    <GeoAltIcon />
                  </div>
                  <div>
                    <strong>Dirección</strong>
                    <p>{c.contacto.direccion}</p>
                  </div>
                </div>
                <div className="contact-item animate-fade-in-up delay-2">
                  <div className="contact-icon">
                    <TelephoneIcon />
                  </div>
                  <div>
                    <strong>Teléfono</strong>
                    <p>{c.contacto.telefono}</p>
                  </div>
                </div>
                <div className="contact-item animate-fade-in-up delay-2">
                  <div className="contact-icon">
                    <ChatIcon />
                  </div>
                  <div>
                    <strong>Celular / WhatsApp</strong>
                    <p>{c.contacto.whatsapp}</p>
                  </div>
                </div>
                <div className="contact-item animate-fade-in-up delay-2">
                  <div className="contact-icon">
                    <EnvelopeIcon />
                  </div>
                  <div>
                    <strong>Correo</strong>
                    <p>{c.contacto.email}</p>
                  </div>
                </div>
                <div className="contact-item animate-fade-in-up delay-2">
                  <div className="contact-icon">
                    <InstagramIcon />
                  </div>
                  <div>
                    <strong>Instagram</strong>
                    <p>{c.contacto.instagram}</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7} className="contact-map-col">
              <div className="map-wrapper animate-fade-in-up delay-3">
                <iframe
                  title="Ubicación en mapa"
                  src={c.contacto.mapaEmbedUrl}
                  width="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ============ FORMULARIO ============ */}
      <section id="formulario" className="form-section section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="form-card animate-fade-in-up">
                <h2 className="form-title">Envianos tu consulta</h2>
                <p className="form-subtitle">
                  Completá el formulario y se abrirá WhatsApp con su mensaje
                  listo para enviar. Usted decide si lo envia.
                </p>
                {formEnviado ? (
                  <div className="form-success">
                    <div className="form-success-icon">
                      <CheckCircleIcon />
                    </div>
                    <h3>{c.formulario.submitExito}</h3>
                    <p>
                      Con esta informacion tenemos suficiente para emprezar, te
                      responderemos a la brevedad.
                    </p>
                  </div>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label htmlFor="formNombre">
                            Nombre y apellido
                          </Form.Label>
                          <Form.Control
                            id="formNombre"
                            type="text"
                            placeholder="Tu nombre completo"
                            value={formNombre}
                            onChange={(e) => setFormNombre(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label htmlFor="formEmail">
                            Dirección de correo
                          </Form.Label>
                          <Form.Control
                            id="formEmail"
                            type="email"
                            placeholder="tu@email.com"
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label htmlFor="formPlan">
                            Tipo de plan
                          </Form.Label>
                          <Form.Select
                            id="formPlan"
                            value={planSeleccionado}
                            onChange={(e) =>
                              setPlanSeleccionado(e.target.value)
                            }
                            required
                          >
                            <option value="" disabled>
                              Seleccioná un plan
                            </option>
                            {c.servicios.planes.map((p) => (
                              <option key={p.id} value={p.id}>
                                {p.nombre} — {p.precio}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label htmlFor="formMensaje">
                            Tu mensaje
                          </Form.Label>
                          <Form.Control
                            id="formMensaje"
                            as="textarea"
                            rows={5}
                            placeholder={c.formulario.mensajePlaceholder}
                            value={formMensaje}
                            onChange={(e) => setFormMensaje(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} className="text-center">
                        <Button
                          type="submit"
                          className="btn-primary-custom form-submit"
                        >
                          {c.formulario.submitLabel}
                          <SendIcon />
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer-section">
        <Container>
          <Row className="g-4 align-items-center">
            <Col lg={4} md={6} className="text-center text-lg-start">
              <div className="footer-brand">
                <img src={c.empresa.logo} alt="" className="footer-logo" />
                <span className="footer-name">{c.empresa.nombre}</span>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <p className="footer-resumen">{c.footer.resumen}</p>
            </Col>
            <Col lg={4} md={12}>
              <Nav className="footer-nav justify-content-center justify-content-lg-end">
                {c.nav.map((link) => (
                  <Nav.Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href.replace("#", ""));
                    }}
                  >
                    {link.label}
                  </Nav.Link>
                ))}
              </Nav>
            </Col>
          </Row>
          <hr className="footer-divider" />
          <p className="footer-copyright text-center">
            © {new Date().getFullYear()} {c.empresa.nombre}.{" "}
            {c.footer.copyright}
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
