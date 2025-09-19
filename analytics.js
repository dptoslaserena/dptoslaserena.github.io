// ----   Eventos Claves   ---


document.addEventListener('DOMContentLoaded', function() {

    // Evento clave: botón "WhatsApp: Escribinos"
    const btnWhatsApp = document.getElementById('WhatsApp');
    if(btn){
        btn.addEventListener('click', function() {
            gtag('event', 'WhatsApp', {
                'method': 'boton_home'
            });
        });
    }

    // Evento clave: botón "Slider"
 // Todos los botones con clase .prev y .next
    const botones = document.querySelectorAll('.prev, .next');

    botones.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Tomamos el tipo de evento según la clase del botón
            const tipo = btn.classList.contains('prev') ? 'click_prev' : 'click_next';

            gtag('event', tipo, {
                'method': 'slider_home' // opcional: indica de dónde viene
            });
        });
    });
});
