# Roles y contexto del proyecto

Guía de trabajo para mantener coherente Template Iris, una plantilla de administración hospitalaria estática.

## Contexto del proyecto

- Es un dashboard frontend estático basado en HTML, CSS y JavaScript vanilla.
- No utiliza framework frontend, bundler, backend ni proceso de compilación.
- Las páginas se sirven desde Apache o cualquier servidor HTTP estático.
- Las dependencias frontend están incluidas localmente en `vendor/`.
- El contenido de la interfaz está principalmente en inglés.
- La carga de componentes compartidos se realiza con `js/layout-loader.js`.

## Estructura real

- `index.html`: dashboard principal.
- `*.html`: páginas del dashboard, formularios, tablas, gráficos, aplicaciones, widgets y pantallas auxiliares.
- `layout/`: fragmentos HTML compartidos por las páginas del dashboard:
  - `preloader.html`
  - `nav.html`
  - `chat.html`
  - `header.html`
  - `sidebar.html`
  - `footer.html`
- `js/layout-loader.js`: reemplaza los placeholders `data-layout` por los fragmentos de `layout/`.
- `js/custom.min.js`: comportamiento común de la plantilla.
- `js/deznav-init.js`: inicialización de la configuración de navegación.
- `js/dashboard/`, `js/plugins-init/` y otros scripts: comportamiento específico de cada página.
- `css/`: hojas de estilo de la plantilla.
- `vendor/`: librerías JavaScript, CSS y plugins distribuidos localmente.
- `images/`: logos, avatares, iconos e imágenes de contenido.
- `README.md`: documentación de instalación, arquitectura y desarrollo.
- `.ia-context/`: contexto y reglas para asistentes de desarrollo.

## Roles recomendados

### Agent HTML / Layout

Responsable de la estructura de las páginas y de la integración de layouts.

Debe:

- Mantener `<!DOCTYPE html>`, el viewport y la estructura HTML válida.
- Usar placeholders con el formato `<div data-layout="nombre"></div>` en las páginas que utilizan el shell del dashboard.
- Mantener el orden del shell: `preloader`, `main-wrapper`, `nav`, `chat`, `header`, `sidebar`, contenido y `footer`.
- No copiar el contenido de `layout/` dentro de cada página.
- Mantener los scripts propios de cada página en su archivo HTML.
- Cargar `js/layout-loader.js` antes de los scripts que dependen del layout.
- No modificar las pantallas de login, error, recuperación o bloqueo para convertirlas en dashboard si no corresponde a su diseño.

### Agent CSS / UI

Responsable de la apariencia visual y del responsive design.

Debe:

- Priorizar las clases y variables ya existentes en `css/style.css`.
- Mantener la compatibilidad con Bootstrap y los plugins incluidos en `vendor/`.
- Preservar el layout responsive, el menú lateral, el header fijo y el preloader.
- Evitar estilos inline salvo que sean necesarios para datos dinámicos o ya formen parte del patrón existente.
- Mantener estados `hover`, `focus`, activos y deshabilitados visibles.
- Verificar los cambios en resoluciones de escritorio y móvil.
- No introducir frameworks ni dependencias nuevas para cambios visuales puntuales.

### Agent JavaScript

Responsable del comportamiento compartido y específico de las páginas.

Debe:

- Mantener JavaScript compatible con los navegadores soportados por la plantilla.
- Cargar los layouts antes de ejecutar scripts que consultan elementos como `#main-wrapper`, `#menu`, `.header` o `.deznav`.
- Conservar los scripts específicos de cada página y su orden original.
- Validar que los elementos requeridos existan antes de usarlos cuando se modifique el HTML.
- Informar errores de carga de layouts o scripts en consola y mediante una señal visible para el usuario.
- Evitar catches amplios, fallos silenciosos y valores por defecto que oculten errores.
- Reutilizar las librerías locales antes de añadir código o dependencias nuevas.

### Agent Docs / IA Context

Responsable de mantener esta documentación alineada con el repositorio.

Debe:

- Documentar únicamente archivos, rutas y tecnologías existentes.
- Actualizar las reglas si cambia la arquitectura de layouts o la forma de servir las páginas.
- Mantener los ejemplos y comandos compatibles con Apache y Windows cuando aplique.
- No describir un backend, un sistema de build o funcionalidades que no estén implementados.

## Checklist final

- La página se abre mediante HTTP desde Apache o un servidor estático.
- Los seis layouts compartidos aparecen una sola vez donde corresponda.
- No quedan bloques duplicados de `preloader`, navegación, chat, header, sidebar o footer.
- Los scripts específicos de la página siguen presentes y en su orden original.
- No hay errores de red ni errores JavaScript en la consola.
- Los enlaces, imágenes, estilos y plugins cargan con rutas relativas válidas.
- La página conserva su comportamiento y su diseño responsive.
