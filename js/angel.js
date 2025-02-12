document.addEventListener("DOMContentLoaded", iniciarAnimacion);

let lienzo, contexto, ancho, alto, unidad;
let anguloSol = 0;
const nubes = [];

function iniciarAnimacion() {
    inicializarLienzo();
    crearNubes();
    animar();
}

//Inicializa el lienzo y ajusta medidas
function inicializarLienzo() {
    lienzo = document.getElementById("canvas");
    contexto = lienzo.getContext("2d");

    ancho = lienzo.width = lienzo.parentElement.clientWidth;
    alto = lienzo.height = lienzo.parentElement.clientHeight;
    unidad = alto * 0.02;
}

// Crea las nubes iniciales con separación
function crearNubes() {
    for (let i = 0; i < 5; i++) {
        let nube = generarNube();
        nube.x = i * (ancho / 5) + Math.random() * unidad * 10; // Más separación
        nube.y += Math.random() * unidad * 3; // Variar posición en altura
        nubes.push(nube);
    }
}

//Dibuja el cielo con un degradado azul
function dibujarCielo() {
    const fondo = contexto.createLinearGradient(0, 0, 0, alto);
    fondo.addColorStop(0, "#87CEEB");
    fondo.addColorStop(1, "#1E3A5F");
    contexto.fillStyle = fondo;
    contexto.fillRect(0, 0, ancho, alto);
}

// El sol
function dibujarSol() {
    const x = ancho * 0.75 + Math.sin(anguloSol) * unidad * 1.5;  // 🔥 **Movido a la derecha**
    const y = alto * 0.2 + Math.cos(anguloSol) * unidad * 1.2;
    anguloSol += 0.005;

    const gradiente = contexto.createRadialGradient(x, y, unidad, x, y, unidad * 4);
    gradiente.addColorStop(0, "yellow");
    gradiente.addColorStop(0.5, "orange");
    gradiente.addColorStop(1, "rgba(255, 165, 0, 0.3)");

    contexto.fillStyle = gradiente;
    contexto.beginPath();
    contexto.arc(x, y, unidad * 3, 0, Math.PI * 2);
    contexto.fill();
}

// Genera las nubes
function generarNube() {
    return {
        x: Math.random() * ancho,
        y: Math.random() * alto * 0.6,
        tamano: Math.random() * unidad * 1.5 + unidad * 2,
        velocidad: Math.random() * 0.2 + 0.1,
    };
}

// Dibujar  nubes
function dibujarNube(nube) {
    const x = nube.x;
    const y = nube.y;
    const t = nube.tamano;

    const gradiente = contexto.createRadialGradient(x, y, unidad, x, y, t);
    gradiente.addColorStop(0, "rgba(255, 255, 255, 0.9)");
    gradiente.addColorStop(1, "rgba(255, 255, 255, 0.5)");
    contexto.fillStyle = gradiente;

    //Dibujo cada parte de la nube
    contexto.beginPath();
    contexto.arc(x - t * 0.4, y, t * 0.4, 0, Math.PI * 2);
    contexto.fill();
    contexto.closePath();

    contexto.beginPath();
    contexto.arc(x, y - t * 0.2, t * 0.5, 0, Math.PI * 2);
    contexto.fill();
    contexto.closePath();

    contexto.beginPath();
    contexto.arc(x + t * 0.4, y, t * 0.4, 0, Math.PI * 2);
    contexto.fill();
    contexto.closePath();

    contexto.beginPath();
    contexto.arc(x - t * 0.2, y + t * 0.2, t * 0.3, 0, Math.PI * 2);
    contexto.fill();
    contexto.closePath();

    contexto.beginPath();
    contexto.arc(x + t * 0.2, y + t * 0.2, t * 0.3, 0, Math.PI * 2);
    contexto.fill();
    contexto.closePath();
}

//Mueve las nubes
function actualizarNubes() {
    for (let nube of nubes) {
        nube.x += nube.velocidad;
        if (nube.x > ancho + 50) {
            nube.x = -50;
            nube.y = Math.random() * alto * 0.6;
        }
    }
}


function animar() {
    contexto.clearRect(0, 0, ancho, alto);
    dibujarCielo();
    dibujarSol();
    for (let nube of nubes) {
        dibujarNube(nube);
    }
    actualizarNubes();
    requestAnimationFrame(animar);
}
