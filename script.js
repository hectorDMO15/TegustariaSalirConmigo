document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-random');

  if (btn) {
    const moveButton = () => {
      const maxWidth = window.innerWidth - btn.offsetWidth - 20;
      const maxHeight = window.innerHeight - btn.offsetHeight - 20;
      btn.style.left = `${Math.random() * maxWidth}px`;
      btn.style.top = `${Math.random() * maxHeight}px`;
    };

    btn.addEventListener('mouseover', moveButton);
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      moveButton();
    });

    btn.style.position = 'absolute';
  }
});

