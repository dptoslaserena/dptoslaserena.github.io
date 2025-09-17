
const btn = document.getElementById('btn-mas6');
const modal = document.getElementById('modal-mas6');
const span = modal.querySelector('.close');

btn.addEventListener('click', (e) => {
  e.preventDefault(); // no sigue el link
  modal.style.display = 'flex'; // mostrar modal
});

span.addEventListener('click', () => {
  modal.style.display = 'none'; // cerrar al hacer click en la X
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none'; // cerrar al click fuera del contenido
});


const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
  const images = slider.querySelectorAll('img');
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');

  let current = 0;

  function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    showImage(current);
  });
});
// Crear mapa centrado en coordenadas iniciales
var map = L.map('map').setView([-29.922921626875542, -71.27639819522727], 16);  

// Cargar tiles de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors'
}).addTo(map);

// Lista de los 4 condominios con coordenadas
var condominios = [
  { nombre: "Condominio Oceanic", coords: [-29.920940078467044, -71.27643362067033], idSeccion: "a1" },
  { nombre: "Condominio Reinos de Holanda", coords: [-29.924418830510216, -71.27608490708619], idSeccion: "a2" },, 
  { nombre: "Condominio Reinos de Italia", coords: [-29.926062795364118, -71.27649598651989], idSeccion: "a3" },
  { nombre: "Condominio Serena Pacífico", coords: [-29.92376431818598, -71.27657730979459], idSeccion: "a4" }
];

// Agregar marcadores al mapa
condominios.forEach(c => {
  L.marker(c.coords)
    .addTo(map)
    .bindPopup(`<b>${c.nombre}</b><br>
                 <a href=#${c.idSeccion}>
                    Ver más detalles
                  </a> `);
});

// Ajustar el mapa para mostrar todos los marcadores
var grupo = L.featureGroup(condominios.map(c => L.marker(c.coords)));
map.fitBounds(grupo.getBounds().pad(0.3));

// Para que no moleste el mapa al scrollear, desactiva el drag si lo pones con un dedo
map.dragging.disable();
map.on('touchstart', function(e) {
  if (e.originalEvent.touches.length == 2) map.dragging.enable();
});
map.on('touchend', function(e) {
  map.dragging.disable();
});

