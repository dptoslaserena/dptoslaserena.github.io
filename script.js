
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
