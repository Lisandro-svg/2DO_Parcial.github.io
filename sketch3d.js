
let img; // Variable para la textura
let angle = 0; // Ángulo de rotación

function preload() {
  // Carga la textura (puedes usar cualquier URL o archivo local)
  img = loadImage('https://mir-s3-cdn-cf.behance.net/projects/404/a1b2e1174904085.Y3JvcCwxMzQ4LDEwNTQsMjkwLDIz.png');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  pixelDensity(1);
  noStroke();
}

function draw() {
  clear();

  // Para centrar la figura, podemos usar push() y translate()
  push(); 
  
  translate(0, 0, 0); // Esto centra la figura en la escena

  box(50);
  
  // Rotar la esfera
  rotateY(angle);
  rotateX(angle * 0.3);

  // Aplicar textura
  texture(img);

  // Dibujar la esfera
  sphere(150);

  pop(); // Restaurar la transformación
  angle += 0.01;
}