// script.js - Filtrado de departamentos por cantidad de personas
// Guarda en la misma carpeta y asegúrate de enlazarlo en index.html (ya lo está).

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('filterForm');
  const peopleInput = document.getElementById('people');
  const clearBtn = document.getElementById('clearFilter');
  const cards = Array.from(document.querySelectorAll('#cardsGrid .card'));
  const noResults = document.getElementById('noResults');

  function filterByPeople(count) {
    let visibleCount = 0;
    cards.forEach(card => {
      const min = parseInt(card.dataset.min, 10);
      const max = parseInt(card.dataset.max, 10);
      // Mostrar si count está entre min y max inclusive
      if (!isNaN(min) && !isNaN(max) && count >= min && count <= max) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    // Mostrar mensaje si no hay resultados
    if (visibleCount === 0) {
      noResults.hidden = false;
    } else {
      noResults.hidden = true;
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = parseInt(peopleInput.value, 10);
    if (isNaN(value) || value < 1) {
      alert('Por favor ingresa una cantidad válida de personas.');
      return;
    }
    filterByPeople(value);
    // Añadimos foco al primer card visible para accesibilidad
    const firstVisible = document.querySelector('#cardsGrid .card:not(.hidden)');
    if (firstVisible) firstVisible.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  clearBtn.addEventListener('click', () => {
    // mostrar todos
    cards.forEach(c => c.classList.remove('hidden'));
    noResults.hidden = true;
    peopleInput.value = '';
  });

  // Opcional: filtrar dinámicamente al escribir (descomenta si lo quieres)
  // peopleInput.addEventListener('input', () => {
  //   const v = parseInt(peopleInput.value, 10);
  //   if (!isNaN(v)) filterByPeople(v);
  // });
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
