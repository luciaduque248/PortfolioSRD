import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  ExternalLink,
  Github,
  X,
  ShieldCheck,
  Building2,
  CheckCircle2,
  CreditCard,
} from "lucide-react";

import { projects } from "../data/mock";

/* =========================================================
   PALETA DE COLORES POR CATEGORÍA
========================================================= */

const COLOR_PALETTE = [
  "bg-blue-500/80",
  "bg-purple-500/80",
  "bg-green-500/80",
  "bg-pink-500/80",
  "bg-yellow-500/80",
  "bg-red-500/80",
  "bg-indigo-500/80",
  "bg-cyan-500/80",
  "bg-emerald-500/80",
  "bg-orange-500/80",
];

/* =========================================================
   FUNCIONALIDADES DEL PROYECTO EMPRESARIAL AGROINNOVA
========================================================= */

const AGROINNOVA_FEATURES = [
  "Marketplace y catálogo de productos",
  "Gestión de productos y emprendimientos",
  "Carrito y flujo completo de compra",
  "Administración de pedidos",
  "Autenticación y gestión de usuarios",
  "Sistema de permisos y roles",
  "Clientes, emprendedores y mentores",
  "Coordinadores y administradores",
  "Procesos de incubación de emprendimientos",
  "Gestión de etapas y actividades",
  "Evaluaciones y seguimiento",
  "Dashboards administrativos",
  "Integración con APIs REST",
  "Firebase Authentication",
  "Integración con Mercado Pago",
  "Facturación electrónica",
];

/* =========================================================
   COMPONENTE
========================================================= */

const Projects = () => {
  /* =======================================================
     ESTADOS
  ======================================================= */

  const [activeFilter, setActiveFilter] =
    useState("All");

  const [currentPage, setCurrentPage] =
    useState(1);

  const [
    demoModalProject,
    setDemoModalProject,
  ] = useState(null);

  const ITEMS_PER_PAGE = 6;

  /* =======================================================
     REFS
  ======================================================= */

  const titleRef = useRef(null);

  /* =======================================================
     CATEGORÍAS
  ======================================================= */

  const categories = [
    "All",
    ...Array.from(
      new Set(
        projects.map(
          (project) =>
            project.category
        )
      )
    ),
  ];

  /* =======================================================
     COLORES ESTABLES POR CATEGORÍA
  ======================================================= */

  const categoryColors = useMemo(
    () => {
      const map = {};

      let colorIndex = 0;

      projects.forEach(
        (project) => {
          const category =
            project.category;

          if (!map[category]) {
            map[category] =
              COLOR_PALETTE[
              colorIndex %
              COLOR_PALETTE.length
              ];

            colorIndex++;
          }
        }
      );

      return map;
    },
    []
  );

  /* =======================================================
     FILTRO
  ======================================================= */

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
        (project) =>
          project.category ===
          activeFilter
      );

  /* =======================================================
     PAGINACIÓN
  ======================================================= */

  const totalPages = Math.ceil(
    filteredProjects.length /
    ITEMS_PER_PAGE
  );

  const paginatedProjects =
    filteredProjects.slice(
      (currentPage - 1) *
      ITEMS_PER_PAGE,

      currentPage *
      ITEMS_PER_PAGE
    );

  const goToPage = (page) => {
    setCurrentPage(page);

    titleRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =======================================================
     CAMBIAR FILTRO
  ======================================================= */

  const handleFilterChange = (
    category
  ) => {
    setActiveFilter(category);

    setCurrentPage(1);
  };

  /* =======================================================
     ABRIR DEMO
  ======================================================= */

  const openProjectDemo = (
    project
  ) => {
    if (!project.demoUrl) {
      return;
    }

    /*
     * AgroInnova requiere aviso previo
     * porque corresponde a una adaptación
     * pública de un proyecto empresarial.
     */
    if (
      project.requiresDemoNotice
    ) {
      setDemoModalProject(
        project
      );

      return;
    }

    window.open(
      project.demoUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* =======================================================
     CERRAR MODAL
  ======================================================= */

  const closeDemoModal = () => {
    setDemoModalProject(null);
  };

  /* =======================================================
     CONTINUAR AL DEMO
  ======================================================= */

  const continueToDemo = () => {
    if (
      !demoModalProject?.demoUrl
    ) {
      return;
    }

    window.open(
      demoModalProject.demoUrl,
      "_blank",
      "noopener,noreferrer"
    );

    setDemoModalProject(null);
  };

  /* =======================================================
     CERRAR MODAL CON ESC
  ======================================================= */

  useEffect(() => {
    if (!demoModalProject) {
      return;
    }

    const handleEscape = (
      event
    ) => {
      if (
        event.key === "Escape"
      ) {
        closeDemoModal();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [demoModalProject]);

  /* =======================================================
     BLOQUEAR SCROLL CUANDO EL MODAL ESTÁ ABIERTO
  ======================================================= */

  useEffect(() => {
    if (demoModalProject) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "";
    }

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [demoModalProject]);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      <section
        id="proyectos"
        className="py-20 bg-gray-900"
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* =============================================
              HEADER
          ============================================= */}

          <div
            ref={titleRef}
            className="text-center mb-16"
          >
            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                mb-6
              "
            >
              <span
                className="
                  bg-gradient-to-r
                  from-blue-400
                  via-purple-500
                  to-blue-600
                  bg-clip-text
                  text-transparent
                "
              >
                Proyectos
              </span>
            </h2>

            <p
              className="
                text-xl
                text-gray-400
                max-w-2xl
                mx-auto
              "
            >
              Una selección de
              proyectos que reflejan
              mi experiencia creando
              soluciones digitales,
              interfaces y productos
              web.
            </p>

            <div
              className="
                w-24
                h-1
                bg-gradient-to-r
                from-blue-500
                to-purple-500
                mx-auto
                rounded-full
                mt-6
              "
            />
          </div>

          {/* =============================================
              FILTROS
          ============================================= */}

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-4
              mb-12
            "
          >
            {categories.map(
              (category) => (
                <button
                  type="button"
                  key={category}
                  onClick={() =>
                    handleFilterChange(
                      category
                    )
                  }
                  className={`
                    px-6
                    py-3
                    rounded-lg
                    font-medium
                    transition-all
                    duration-300

                    ${activeFilter ===
                      category
                      ? `
                          bg-gradient-to-r
                          from-blue-500
                          to-purple-600
                          text-white
                          scale-105
                        `
                      : `
                          bg-gray-800/50
                          text-gray-300
                          hover:bg-gray-700/50
                        `
                    }
                  `}
                >
                  {category}
                </button>
              )
            )}
          </div>

          {/* =============================================
              GRID DE PROYECTOS
          ============================================= */}

          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-2
              gap-8
            "
          >
            {paginatedProjects.map(
              (
                project,
                index
              ) => {
                const categoryColor =
                  categoryColors[
                  project.category
                  ];

                return (
                  <article
                    key={
                      project.id
                    }
                    className="
                      group
                      bg-gray-800/30
                      backdrop-blur-sm
                      rounded-xl
                      overflow-hidden
                      border
                      border-gray-700/30
                      hover:border-purple-500/40
                      transition-all
                      duration-500
                      hover:scale-[1.02]
                      hover:shadow-2xl
                      hover:shadow-purple-500/10
                    "
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {/* =================================
                        IMAGEN
                    ================================= */}

                    <div
                      className="
                        relative
                        overflow-hidden
                      "
                    >
                      <img
                        src={
                          project.image
                        }
                        alt={
                          project.name
                        }
                        className="
                          w-full
                          h-48
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-110
                        "
                      />

                      {/* Categoría */}

                      <div
                        className="
                          absolute
                          top-4
                          left-4
                        "
                      >
                        <span
                          className={`
                            px-3
                            py-1
                            text-white
                            text-xs
                            font-medium
                            rounded-full
                            backdrop-blur-sm
                            ${categoryColor}
                          `}
                        >
                          {
                            project.category
                          }
                        </span>
                      </div>

                      {/* Etiqueta proyecto demo */}

                      {project.requiresDemoNotice && (
                        <div
                          className="
                            absolute
                            top-4
                            right-4
                          "
                        >
                          <span
                            className="
                              flex
                              items-center
                              gap-1.5
                              px-3
                              py-1
                              bg-gray-950/80
                              border
                              border-purple-400/40
                              text-purple-200
                              text-xs
                              font-medium
                              rounded-full
                              backdrop-blur-sm
                            "
                          >
                            <Building2
                              size={
                                13
                              }
                            />

                            Proyecto
                            empresarial
                          </span>
                        </div>
                      )}

                      {/* Overlay */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gray-950/50
                          opacity-0
                          group-hover:opacity-100
                          transition-all
                          duration-300
                        "
                      />

                      {/* Links hover */}

                      <div
                        className="
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center
                          space-x-4
                          opacity-0
                          group-hover:opacity-100
                          transition-all
                          duration-300
                        "
                      >
                        {/* Demo */}

                        <button
                          type="button"
                          onClick={() =>
                            openProjectDemo(
                              project
                            )
                          }
                          className="
                            p-3
                            bg-blue-500
                            hover:bg-blue-600
                            rounded-full
                            transition-transform
                            hover:scale-110
                            cursor-pointer
                          "
                          aria-label={`Ver demo de ${project.name}`}
                          title="Ver demo"
                        >
                          <ExternalLink
                            className="
                              h-5
                              w-5
                              text-white
                            "
                          />
                        </button>

                        {/* GitHub */}

                        {project.githubUrl ? (
                          <a
                            href={
                              project.githubUrl
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              p-3
                              bg-gray-700
                              hover:bg-gray-600
                              rounded-full
                              transition-transform
                              hover:scale-110
                            "
                            aria-label={`Ver código de ${project.name}`}
                            title="Ver código"
                          >
                            <Github
                              className="
                                h-5
                                w-5
                                text-white
                              "
                            />
                          </a>
                        ) : (
                          <span
                            className="
                              p-3
                              bg-gray-800
                              rounded-full
                              opacity-80
                            "
                            title="Código privado"
                          >
                            <Github
                              className="
                                h-5
                                w-5
                                text-gray-400
                              "
                            />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* =================================
                        INFORMACIÓN
                    ================================= */}

                    <div
                      className="
                        p-6
                        space-y-4
                      "
                    >
                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-3
                        "
                      >
                        <h3
                          className="
                            text-xl
                            font-bold
                            text-white
                            group-hover:text-blue-400
                            transition-colors
                          "
                        >
                          {
                            project.name
                          }
                        </h3>

                        {project.requiresDemoNotice && (
                          <span
                            className="
                              flex-shrink-0
                              px-2.5
                              py-1
                              bg-purple-500/10
                              border
                              border-purple-500/30
                              text-purple-300
                              text-[10px]
                              uppercase
                              tracking-wider
                              font-semibold
                              rounded-md
                            "
                          >
                            Demo
                          </span>
                        )}
                      </div>

                      <p
                        className="
                          text-gray-400
                          text-sm
                          leading-relaxed
                        "
                      >
                        {
                          project.description
                        }
                      </p>

                      {/* Tecnologías */}

                      <div
                        className="
                          flex
                          flex-wrap
                          gap-2
                        "
                      >
                        {project.technologies.map(
                          (
                            tech,
                            i
                          ) => (
                            <span
                              key={
                                i
                              }
                              className="
                                px-3
                                py-1
                                bg-blue-500/20
                                text-blue-300
                                text-xs
                                rounded-full
                                border
                                border-blue-500/30
                              "
                            >
                              {
                                tech
                              }
                            </span>
                          )
                        )}
                      </div>

                      {/* =================================
                          BOTONES
                      ================================= */}

                      <div
                        className="
                          flex
                          space-x-4
                          pt-4
                        "
                      >
                        <button
                          type="button"
                          onClick={() =>
                            openProjectDemo(
                              project
                            )
                          }
                          className="
                            flex-1
                            px-4
                            py-2
                            bg-gradient-to-r
                            from-blue-500
                            to-purple-600
                            hover:from-blue-600
                            hover:to-purple-700
                            text-white
                            text-sm
                            font-medium
                            rounded-lg
                            text-center
                            transition-all
                            cursor-pointer
                          "
                        >
                          Ver Demo
                        </button>

                        {project.githubUrl ? (
                          <a
                            href={
                              project.githubUrl
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              flex-1
                              px-4
                              py-2
                              bg-gray-700/50
                              hover:bg-gray-700
                              text-gray-300
                              text-sm
                              rounded-lg
                              text-center
                              transition-colors
                            "
                          >
                            Código
                          </a>
                        ) : (
                          <span
                            className="
                              flex-1
                              px-4
                              py-2
                              bg-gray-800/60
                              text-gray-400
                              text-sm
                              rounded-lg
                              text-center
                              border
                              border-gray-700/50
                            "
                          >
                            Código privado
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                );
              }
            )}
          </div>

          {/* =============================================
              PAGINACIÓN
          ============================================= */}

          {totalPages > 1 && (
            <div
              className="
                flex
                justify-center
                gap-2
                mt-12
              "
            >
              <button
                type="button"
                onClick={() =>
                  goToPage(
                    Math.max(
                      currentPage -
                      1,
                      1
                    )
                  )
                }
                disabled={
                  currentPage ===
                  1
                }
                className="
                  px-4
                  py-2
                  bg-gray-800/60
                  text-gray-300
                  rounded-lg
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  hover:bg-gray-700/60
                  transition-colors
                "
              >
                Anterior
              </button>

              {Array.from({
                length:
                  totalPages,
              }).map(
                (_, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() =>
                      goToPage(
                        i + 1
                      )
                    }
                    className={`
                      px-4
                      py-2
                      rounded-lg
                      transition-colors

                      ${currentPage ===
                        i + 1
                        ? `
                            bg-gradient-to-r
                            from-blue-500
                            to-purple-600
                            text-white
                          `
                        : `
                            bg-gray-800/50
                            text-gray-300
                            hover:bg-gray-700/60
                          `
                      }
                    `}
                  >
                    {i + 1}
                  </button>
                )
              )}

              <button
                type="button"
                onClick={() =>
                  goToPage(
                    Math.min(
                      currentPage +
                      1,
                      totalPages
                    )
                  )
                }
                disabled={
                  currentPage ===
                  totalPages
                }
                className="
                  px-4
                  py-2
                  bg-gray-800/60
                  text-gray-300
                  rounded-lg
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  hover:bg-gray-700/60
                  transition-colors
                "
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          MODAL AGROINNOVA
      ===================================================== */}

      {demoModalProject && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/80
            backdrop-blur-md
            px-4
            py-6
          "
          onClick={
            closeDemoModal
          }
          role="dialog"
          aria-modal="true"
          aria-labelledby="agroinnova-demo-title"
        >
          <div
            className="
              relative
              w-full
              max-w-3xl
              max-h-[90vh]
              overflow-y-auto
              bg-gray-900
              border
              border-gray-700
              rounded-2xl
              shadow-2xl
              shadow-purple-950/40
            "
            onClick={(
              event
            ) =>
              event.stopPropagation()
            }
          >
            {/* Barra superior */}

            <div
              className="
                h-1.5
                bg-gradient-to-r
                from-blue-500
                via-purple-500
                to-blue-600
              "
            />

            <div
              className="
                p-6
                sm:p-8
              "
            >
              {/* ===========================================
                  HEADER DEL MODAL
              =========================================== */}

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-5
                "
              >
                <div>
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-3
                      py-1
                      mb-4
                      text-xs
                      font-semibold
                      tracking-wide
                      uppercase
                      rounded-full
                      bg-purple-500/15
                      text-purple-300
                      border
                      border-purple-500/30
                    "
                  >
                    <Building2
                      size={14}
                    />

                    Proyecto
                    empresarial ·
                    Demo
                  </span>

                  <h3
                    id="agroinnova-demo-title"
                    className="
                      text-2xl
                      sm:text-3xl
                      font-bold
                      text-white
                    "
                  >
                    Antes de explorar
                    AgroInnova
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-gray-500
                    "
                  >
                    Información
                    importante sobre
                    esta versión
                    pública.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={
                    closeDemoModal
                  }
                  className="
                    flex-shrink-0
                    p-2
                    text-gray-400
                    hover:text-white
                    hover:bg-gray-800
                    rounded-lg
                    transition-colors
                    cursor-pointer
                  "
                  aria-label="Cerrar"
                >
                  <X
                    size={22}
                  />
                </button>
              </div>

              {/* ===========================================
                  INTRODUCCIÓN
              =========================================== */}

              <div
                className="
                  mt-6
                  text-gray-300
                  leading-relaxed
                  space-y-4
                "
              >
                <p>
                  <strong className="text-white">
                    AgroInnova
                  </strong>{" "}
                  fue desarrollado
                  como parte de un
                  proyecto real para
                  una empresa. La
                  versión que estás a
                  punto de visitar es
                  una adaptación
                  preparada
                  exclusivamente para
                  mi portafolio.
                </p>

                <p>
                  La plataforma
                  original contemplaba
                  una arquitectura y
                  un conjunto de
                  funcionalidades más
                  amplios que los
                  disponibles en esta
                  demostración pública.
                </p>
              </div>

              {/* ===========================================
                  FUNCIONALIDADES
              =========================================== */}

              <div className="mt-7">
                <h4
                  className="
                    flex
                    items-center
                    gap-2
                    text-white
                    font-semibold
                    text-lg
                    mb-4
                  "
                >
                  <CheckCircle2
                    size={19}
                    className="text-purple-400"
                  />

                  Alcance de la
                  plataforma
                </h4>

                <div
                  className="
                    grid
                    sm:grid-cols-2
                    gap-x-6
                    gap-y-3
                  "
                >
                  {AGROINNOVA_FEATURES.map(
                    (
                      feature
                    ) => (
                      <div
                        key={
                          feature
                        }
                        className="
                          flex
                          items-start
                          gap-3
                          text-sm
                          text-gray-300
                        "
                      >
                        <span
                          className="
                            mt-[7px]
                            w-1.5
                            h-1.5
                            rounded-full
                            bg-purple-400
                            flex-shrink-0
                          "
                        />

                        <span>
                          {
                            feature
                          }
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* ===========================================
                  CONFIDENCIALIDAD
              =========================================== */}

              <div
                className="
                  mt-8
                  p-5
                  rounded-xl
                  bg-blue-500/10
                  border
                  border-blue-500/25
                "
              >
                <div
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >
                  <ShieldCheck
                    className="
                      flex-shrink-0
                      mt-0.5
                      text-blue-300
                    "
                    size={22}
                  />

                  <div>
                    <h4
                      className="
                        text-blue-100
                        font-semibold
                      "
                    >
                      Confidencialidad
                      y seguridad
                    </h4>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-relaxed
                        text-blue-100/80
                      "
                    >
                      Por razones de
                      confidencialidad,
                      protección de
                      datos y
                      seguridad, esta
                      versión no utiliza
                      información real
                      de la empresa,
                      credenciales,
                      servicios privados
                      ni infraestructura
                      de producción.
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-relaxed
                        text-blue-100/80
                      "
                    >
                      Algunas
                      integraciones se
                      sustituyeron por
                      datos locales y
                      flujos simulados
                      para conservar la
                      experiencia de
                      navegación y
                      permitir evaluar
                      el trabajo
                      frontend.
                    </p>
                  </div>
                </div>
              </div>

              {/* ===========================================
                  PAGOS
              =========================================== */}

              <div
                className="
                  mt-4
                  p-5
                  rounded-xl
                  bg-emerald-500/10
                  border
                  border-emerald-500/25
                "
              >
                <div
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >
                  <CreditCard
                    className="
                      flex-shrink-0
                      mt-0.5
                      text-emerald-300
                    "
                    size={22}
                  />

                  <div>
                    <h4
                      className="
                        font-semibold
                        text-emerald-200
                      "
                    >
                      Compras y pagos
                    </h4>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-relaxed
                        text-emerald-100/80
                      "
                    >
                      El proyecto
                      empresarial
                      contemplaba
                      integración con
                      Mercado Pago,
                      gestión de
                      órdenes y
                      facturación.
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-relaxed
                        text-emerald-100/80
                      "
                    >
                      En esta
                      demostración el
                      checkout es
                      únicamente
                      simulado.{" "}
                      <strong className="text-emerald-200">
                        No se realizan
                        cobros,
                        transacciones
                        ni facturas
                        reales.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* ===========================================
                  QUÉ SE PUEDE PROBAR
              =========================================== */}

              <div
                className="
                  mt-6
                  p-5
                  bg-gray-800/60
                  rounded-xl
                  border
                  border-gray-700
                "
              >
                <h4
                  className="
                    font-semibold
                    text-white
                  "
                >
                  ¿Qué puedes explorar
                  en esta demo?
                </h4>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-gray-400
                  "
                >
                  Puedes navegar por
                  la interfaz pública,
                  consultar productos,
                  explorar categorías,
                  abrir el detalle de
                  productos, agregar
                  artículos al carrito
                  y recorrer un flujo
                  completo de checkout
                  demostrativo sin
                  necesidad de
                  utilizar una cuenta
                  empresarial ni
                  servicios privados.
                </p>
              </div>

              {/* ===========================================
                  BOTONES
              =========================================== */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-3
                  mt-8
                "
              >
                <button
                  type="button"
                  onClick={
                    continueToDemo
                  }
                  className="
                    flex-1
                    px-6
                    py-3
                    bg-gradient-to-r
                    from-blue-500
                    to-purple-600
                    hover:from-blue-600
                    hover:to-purple-700
                    text-white
                    font-semibold
                    rounded-xl
                    transition-all
                    duration-300
                    cursor-pointer
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  Entiendo, ver demo

                  <ExternalLink
                    size={17}
                  />
                </button>

                <button
                  type="button"
                  onClick={
                    closeDemoModal
                  }
                  className="
                    px-6
                    py-3
                    bg-gray-800
                    hover:bg-gray-700
                    border
                    border-gray-700
                    text-gray-300
                    font-medium
                    rounded-xl
                    transition-colors
                    cursor-pointer
                  "
                >
                  Volver al
                  portafolio
                </button>
              </div>

              {/* ===========================================
                  PIE
              =========================================== */}

              <p
                className="
                  mt-5
                  text-xs
                  text-center
                  text-gray-500
                "
              >
                El código fuente de
                esta adaptación se
                mantiene privado.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;