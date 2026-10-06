const scripts = [
    './vendor/global/global.min.js',
    './vendor/bootstrap-select/dist/js/bootstrap-select.min.js',
    './vendor/chart.js/Chart.bundle.min.js',
    './js/custom.min.js',
    './js/deznav-init.js',
    './vendor/owl-carousel/owl.carousel.js',
    './vendor/apexchart/apexchart.js',
    './js/dashboard/dashboard-1.js'
];

const layouts = document.querySelectorAll('[data-layout]');

async function loadLayout(element) {
    const name = element.dataset.layout;
    const response = await fetch(`./layout/${name}.html`);

    if (!response.ok) {
        throw new Error(`No se pudo cargar el layout "${name}" (${response.status}).`);
    }

    element.outerHTML = await response.text();
}

function loadScript(source) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = source;
        script.onload = resolve;
        script.onerror = () => reject(new Error(`No se pudo cargar el script "${source}".`));
        document.body.appendChild(script);
    });
}

async function initializePage() {
    await Promise.all(Array.from(layouts, loadLayout));

    for (const source of scripts) {
        await loadScript(source);
    }
}

initializePage().catch((error) => {
    console.error('Error al inicializar la página:', error);
    document.body.insertAdjacentHTML(
        'afterbegin',
        '<div class="alert alert-danger m-3" role="alert">No se pudo cargar la interfaz. Revisa la consola para más detalles.</div>'
    );
});
