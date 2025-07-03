let burgers = [];
let numBurgers = 5;

function setup() {
  createCanvas(800, 400);
  // Crear hamburguesas en diferentes posiciones iniciales
  for (let i = 0; i < numBurgers; i++) {
    burgers.push({
      x: random(width * 0.1, width * 0.9),
      y: height / 2,
      size: 50,
      speed: random(1, 3),
      direction: 1
    });
  }
}

function draw() {
  background(220);

  for (let burger of burgers) {
    // Actualizar posición
    burger.x += burger.speed * burger.direction;

    // Cambiar dirección si llega a los bordes
    if (burger.x > width - burger.size || burger.x < burger.size) {
      burger.direction *= -1;
    }

    drawBurger(burger.x, burger.y, burger.size);
  }
}

// Función para dibujar una hamburguesa simple
function drawBurger(x, y, size) {
  // Dibujar pan superior
  fill(255, 200, 100);
  ellipse(x, y - size * 0.4, size * 1.2, size * 0.4);
  
  // Pan inferior
  ellipse(x, y + size * 0.4, size * 1.2, size * 0.4);
  
  // Carne
  fill(139, 69, 19);
  rect(x - size * 0.6, y - size * 0.1, size * 1.2, size * 0.3, 10);
  
  // Vegetales (lechuga)
  fill(0, 128, 0);
  ellipse(x, y, size * 1.1, size * 0.4);
}