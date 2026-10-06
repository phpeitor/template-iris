(function () {
    var placeholders = document.querySelectorAll('[data-layout]');

    function loadLayout(element) {
        var name = element.getAttribute('data-layout');
        var request = new XMLHttpRequest();

        request.open('GET', './layout/' + name + '.html', false);
        request.send();

        if (request.status < 200 || request.status >= 300) {
            throw new Error('No se pudo cargar el layout "' + name + '" (' + request.status + ').');
        }

        element.outerHTML = request.responseText;
    }

    try {
        Array.prototype.forEach.call(placeholders, loadLayout);
    } catch (error) {
        console.error('Error al cargar los layouts:', error);
        document.body.insertAdjacentHTML(
            'afterbegin',
            '<div class="alert alert-danger m-3" role="alert">No se pudo cargar la interfaz. Revisa la consola para más detalles.</div>'
        );
    }
}());
