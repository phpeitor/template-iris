# Reglas de desarrollo frontend

## Alcance

Template Iris es una plantilla de administración hospitalaria estática. Está compuesta por páginas HTML, hojas CSS, JavaScript vanilla y dependencias frontend distribuidas en `vendor/`. No hay framework, bundler, `package.json` ni servidor de aplicación en este repositorio.

La aplicación se debe probar mediante HTTP, preferentemente desde Apache. Abrir una página con `file://` puede impedir la carga de los layouts.

## Reglas de arquitectura

- Mantener los componentes compartidos en `layout/`.
- Usar los nombres existentes: `preloader`, `nav`, `chat`, `header`, `sidebar` y `footer`.
- En páginas del dashboard, declarar cada componente como un placeholder `data-layout`.
- Mantener `js/layout-loader.js` antes de todos los scripts que dependen de esos componentes.
- No incluir manualmente el contenido completo de un layout en una página.
- No cambiar `nav.html` por `mav.html`; el nombre correcto del archivo es `nav.html`.
- Mantener las rutas relativas (`./layout/...`, `./js/...`, `./vendor/...`) para permitir el despliegue en subdirectorios.
- Mantener intactas las pantallas independientes de autenticación y error salvo que el cambio solicitado las incluya expresamente.

## Reglas HTML

- Mantener `lang`, `charset`, viewport y una jerarquía HTML válida.
- Conservar el `id="main-wrapper"` en las páginas que usan el shell del dashboard.
- No duplicar `id` ni componentes globales al combinar layouts.
- Conservar los atributos `alt`, `aria-*`, `role` y estados accesibles existentes.
- Mantener los enlaces relativos y verificar que apunten a archivos existentes.
- No trasladar scripts específicos de una página a un archivo global.
- No incluir bloques `<script>` inline ni bloques `<style>` dentro de páginas HTML.
- Colocar la lógica específica en `js/pages/<pagina>.js` y los estilos específicos en `css/pages/<pagina>.css`.
- Evitar atributos `style` en HTML; usar clases semánticas en la hoja de estilos de la página.
- Evitar cambios masivos de formato que dificulten revisar el diff.

## Reglas del cargador de layouts

- `js/layout-loader.js` debe limitarse a cargar e insertar fragmentos de `layout/`.
- El cargador debe ejecutarse antes de `vendor/global/global.min.js`, `custom.min.js`, `deznav-init.js` y cualquier script que consulte el DOM del shell.
- Los errores de carga deben ser explícitos: registrar el error en consola y mostrar una alerta visible.
- No ocultar errores con un fallback que simule que el layout se cargó correctamente.
- Mantener la implementación compatible con el modo de ejecución actual del proyecto.
- Si se modifica el cargador, probar al menos `index.html` y una página con scripts específicos.

## Reglas de scripts

- Conservar los scripts originales de cada página y su orden relativo.
- Cargar primero las dependencias de terceros requeridas por el script de inicialización correspondiente.
- No eliminar scripts por parecer duplicados sin comprobar sus usos.
- Preferir las versiones locales de `vendor/`.
- Mantener `custom.min.js` y `deznav-init.js` en las páginas que originalmente los utilizaban.
- No añadir dependencias npm ni un proceso de compilación para resolver una necesidad de una sola página.
- Evitar `catch` amplios, silencios y estados de éxito falsos.

## Reglas CSS y UI

- Mantener los estilos principales en `css/style.css` y las hojas existentes en `css/`.
- Usar `css/pages/` para estilos exclusivos de una vista y enlazarlos desde el `<head>` de esa página.
- Reutilizar las clases Bootstrap y las clases de la plantilla antes de crear nuevas.
- Preservar el header, el sidebar, el preloader, el chat y el comportamiento responsive.
- Mantener visibles los estados de foco y selección en controles interactivos.
- Evitar estilos inline nuevos cuando una clase existente o una regla CSS compartida resuelva el caso.
- Verificar cambios visuales en escritorio y móvil.

## Flujo de cambios

1. Inspeccionar la página y sus scripts antes de editar.
2. Comprobar si existe un layout o patrón reutilizable.
3. Aplicar el cambio mínimo que complete el requisito.
4. No sobrescribir cambios de trabajo no relacionados.
5. Validar sintaxis, rutas y estructura HTML.
6. Probar la página mediante Apache y revisar la consola del navegador.

## QA mínima

- Confirmar que los placeholders se reemplazan y no quedan visibles.
- Confirmar que `#preloader`, `.nav-header`, `.chatbox`, `.header`, `.deznav` y `.footer` existen después de cargar.
- Confirmar que los scripts específicos de la página siguen ejecutándose.
- Confirmar que no hay errores 404 de layouts, scripts, CSS o imágenes.
- Ejecutar `node --check` sobre archivos JavaScript modificados cuando sea aplicable.
- Ejecutar `git diff --check` antes de finalizar.
