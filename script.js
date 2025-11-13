// Obtener canvas y contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Ajustar tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Variables del loader
let cargando = true;
let progreso = 0;

// Función que dibuja el loader
function dibujarLoader() {
  // Fondo negro
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Texto "Cargando..."
  ctx.fillStyle = '#fff';
  ctx.font = '30px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Cargando...', canvas.width / 2, canvas.height / 2 - 50);

  // Barra gris de fondo
  ctx.fillStyle = '#333';
  ctx.fillRect(canvas.width / 2 - 150, canvas.height / 2, 300, 30);

  // Barra verde de progreso
  ctx.fillStyle = '#0f0';
  ctx.fillRect(canvas.width / 2 - 150, canvas.height / 2, 300 * progreso, 30);

  // Porcentaje
  ctx.fillText(Math.floor(progreso * 100) + '%', canvas.width / 2, canvas.height / 2 + 60);
}

// Incrementar progreso cada 20ms durante 2 segundos
let intervalo = setInterval(() => {
  progreso += 0.01;
  dibujarLoader();

  if (progreso >= 1) {
    clearInterval(intervalo);
    cargando = false;
    iniciarJuego();
  }
}, 20);

// Función que inicia el juego
function iniciarJuego() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#fff';
  ctx.font = '40px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('¡JUEGO INICIADO!', canvas.width / 2, canvas.height / 2);

  //------------Lógica del juego--------------//
}