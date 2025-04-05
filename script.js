const text = document.getElementById('hello');

function explode() {
  text.classList.add('boom');
  setTimeout(() => {
    text.classList.remove('boom');
  }, 500);
}

function loopExplosion() {
  setTimeout(() => {
    explode();
    loopExplosion();
  }, 2000); // tiap 2 detik
}

loopExplosion();
