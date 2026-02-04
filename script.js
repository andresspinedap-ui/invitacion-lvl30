function showScreen(number) {
  const screens = document.querySelectorAll('.screen');

  screens.forEach(screen => {
    screen.classList.remove('active');
  });

  document.getElementById(`screen-${number}`)
    .classList.add('active');
}

function toggleInfo() {
  const info = document.getElementById('extra-info');

  info.classList.toggle('hidden');
}
