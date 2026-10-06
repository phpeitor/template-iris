# Template Iris 👁️

[![forthebadge](http://forthebadge.com/images/badges/validated-html5.svg)](https://www.linkedin.com/in/drphp/)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://www.linkedin.com/in/drphp/)

<a href="https://www.instagram.com/amvsoft.tech/">
  <img src="https://cdn.dribbble.com/userupload/4915989/file/original-5c5ccba126ca40cc5235ed4e76901405.jpg?resize=1024x768&vertical=center" alt="Instagram" width="600">
</a>

## Descripción

Template Iris es una plantilla de administración hospitalaria construida como una aplicación web estática. El proyecto utiliza HTML, CSS y JavaScript vanilla, junto con las dependencias incluidas en `vendor/`. No requiere un proceso de compilación ni un backend para visualizar las páginas.

## Requisitos

- Apache HTTP Server o cualquier servidor web estático.
- Un navegador moderno con soporte para `fetch`, `XMLHttpRequest` y JavaScript.
- Git, si se desea clonar el repositorio.

## Puesta en marcha

### Clonar el proyecto

```bash
git clone https://github.com/phpeitor/template-iris.git
cd template-iris
```

### Servir la aplicación

No se recomienda abrir los archivos directamente con `file://`, porque el navegador puede bloquear la carga de los layouts. Configura el directorio como un sitio de Apache y accede a `index.html` mediante HTTP:

```text
http://localhost/template-iris/
```

En un entorno local con Apache, la raíz publicada debe apuntar a la carpeta del proyecto. También puede utilizarse cualquier servidor estático equivalente.

## Arquitectura

Las páginas del dashboard reutilizan los componentes comunes ubicados en [`layout/`](./layout/):

- `preloader.html`: indicador de carga inicial.
- `nav.html`: navegación principal y marca.
- `chat.html`: panel de chat.
- `header.html`: barra superior.
- `sidebar.html`: menú lateral.
- `footer.html`: pie de página.

Cada página declara placeholders `data-layout` y carga [`js/layout-loader.js`](./js/layout-loader.js). El loader reemplaza esos placeholders por el HTML correspondiente antes de ejecutar los scripts originales de la página. Los scripts compartidos y los scripts específicos permanecen definidos en cada documento HTML para preservar el comportamiento de cada pantalla.

Las páginas de autenticación y error son excepciones: mantienen su estructura independiente porque no utilizan el shell del dashboard.

## Estructura relevante

```text
.
├── css/                 # Estilos de la plantilla
├── images/              # Imágenes, logos y avatares
├── js/                  # Lógica común, inicialización y scripts de páginas
├── layout/              # Fragmentos HTML reutilizables
├── vendor/              # Dependencias frontend distribuidas localmente
├── index.html           # Dashboard principal
└── *.html               # Vistas del dashboard y páginas auxiliares
```

## Desarrollo

1. Mantén los componentes compartidos en `layout/`; no los dupliques dentro de las páginas.
2. Conserva los scripts propios de cada página en el mismo HTML que los utiliza.
3. Carga `js/layout-loader.js` antes de los scripts que dependen de elementos del layout.
4. Usa rutas relativas para que las páginas funcionen bajo cualquier subdirectorio del servidor.
5. Verifica cada página modificada desde Apache y revisa la consola del navegador ante errores de carga.

## Validación rápida

Después de modificar un layout o una página:

1. Abre la página mediante HTTP, no mediante `file://`.
2. Confirma que aparecen el encabezado, el menú lateral, el chat y el pie de página.
3. Comprueba que los controles propios de la página siguen funcionando.
4. Revisa que no existan errores de red ni errores JavaScript en la consola.

## Licencia y atribución

Consulta la información de licencia incluida en el repositorio y conserva las atribuciones de los recursos de terceros al redistribuir la plantilla.
