// Variables
var colorCastillo = '#bc704f';
var lineaCastillo = '#673f2e';
var colorMontaña = '#036403';
var lineaMontaña = 'green';
var colorVentana = 'black';


// Castillo
function castillo(posX, posY) {
    /* ctx.strokeStyle = 'blue';
     ctx.lineWidth = 5;
     ctx.beginPath();
     ctx.strokeRect(unit * 15, h - unit * 30, unit * 20, unit * 20);
     ctx.closePath();*/
     ctx.lineWidth = 3;
     silueta(posX, posY);
     montañas(posX, posY);
     ventanas(posX, posY);
}


// Silueta del castillo
function silueta(posX, posY) {
     ctx.strokeStyle = lineaCastillo;
     ctx.lineWidth = 2;
     ctx.fillStyle = colorCastillo;

     parteDerecha(posX, posY);
     parteIzquierda(posX, posY);
     parteCentral(posX, posY);

}

function parteIzquierda(posX, posY) {
     // Torre castillo Arriba iqz
     ctx.beginPath();
     ctx.moveTo(20.5 * unit + posX, 30.3 * unit + posY);
     ctx.lineTo(19.5 * unit + posX, 30.3 * unit + posY); // Punto Apoyo
     ctx.lineTo(19.6 * unit + posX, 32.3 * unit + posY);
     ctx.lineTo(19.5 * unit + posX, 30.3 * unit + posY); // Punto Apoyo
     ctx.lineTo(17.9 * unit + posX, 30.3 * unit + posY);
     ctx.lineTo(17.8 * unit + posX, 32.57 * unit + posY);
     ctx.lineTo(22 * unit + posX, 32.57 * unit + posY);
     ctx.closePath();
     ctx.fill();
     ctx.stroke();

     // Muralla
     ctx.beginPath();
     ctx.moveTo(20.5 * unit + posX, 32.3 * unit + posY);
     ctx.lineTo(16 * unit + posX, 32.7 * unit + posY);
     ctx.lineTo(15.5 * unit + posX, 36.5 * unit + posY);
     ctx.lineTo(20.5 * unit + posX, 36.5 * unit + posY);
     ctx.closePath();
     ctx.fill();
     ctx.stroke();
}

function parteCentral(posX, posY) {
     // Torre castillo Detras
     ctx.beginPath();
     ctx.moveTo(22.8 * unit + posX, 29.5 * unit + posY);
     ctx.lineTo(22.8 * unit + posX, 28.2 * unit + posY);
     ctx.lineTo(23.2 * unit + posX, 28.1 * unit + posY); // Punto Apoyo
     ctx.lineTo(23.1 * unit + posX, 29.5 * unit + posY);
     ctx.lineTo(23.2 * unit + posX, 28.1 * unit + posY); // Punto Apoyo
     ctx.lineTo(24 * unit + posX, 28 * unit + posY); // Punto Apoyo 2
     ctx.lineTo(24 * unit + posX, 29.7 * unit + posY);
     ctx.lineTo(24 * unit + posX, 28 * unit + posY); // Punto Apoyo 2
     ctx.lineTo(24.5 * unit + posX, 28.1 * unit + posY);
     ctx.lineTo(24.9 * unit + posX, 27.9 * unit + posY);
     ctx.lineTo(24.9 * unit + posX, 27.5 * unit + posY);
     ctx.lineTo(25.3 * unit + posX, 27.5 * unit + posY);
     ctx.lineTo(25.3 * unit + posX, 31.5 * unit + posY); // toca con muralla central
     ctx.lineTo(25.3 * unit + posX, 27.8 * unit + posY);
     ctx.lineTo(25.8 * unit + posX, 28.1 * unit + posY);
     ctx.lineTo(25.8 * unit + posX, 27.9 * unit + posY);
     ctx.lineTo(26.1 * unit + posX, 28.1 * unit + posY);
     ctx.lineTo(26 * unit + posX, 34 * unit + posY);
     ctx.closePath();
     ctx.fill();
     ctx.stroke();

     // Torre castillo Alante
     ctx.beginPath();
     ctx.moveTo(20.5 * unit + posX, 34.5 * unit + posY);
     ctx.lineTo(20.5 * unit + posX, 29.6 * unit + posY);
     ctx.lineTo(23 * unit + posX, 29.5 * unit + posY); // Punto apoyo
     ctx.lineTo(23 * unit + posX, 34.5 * unit + posY);
     ctx.lineTo(23 * unit + posX, 29.5 * unit + posY); // Punto apoyo
     ctx.lineTo(24.4 * unit + posX, 29.8 * unit + posY);
     ctx.lineTo(24.4 * unit + posX, 40 * unit + posY);
     ctx.lineTo(20.5 * unit + posX, 34.5 * unit + posY);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();


     // Torre castillo Derecha
     ctx.beginPath();
     ctx.moveTo(25.7 * unit + posX, 31.1 * unit + posY);
     ctx.lineTo(25.8 * unit + posX, 29.1 * unit + posY);
     ctx.lineTo(27.6 * unit + posX, 29.1 * unit + posY); // Punto apoyo
     ctx.lineTo(27.6 * unit + posX, 32 * unit + posY);
     ctx.lineTo(27.6 * unit + posX, 29.1 * unit + posY); // Punto apoyo
     ctx.lineTo(28.9 * unit + posX, 29.2 * unit + posY);
     ctx.lineTo(28.9 * unit + posX, 29.8 * unit + posY); // Aqui empieza otro castillo
     ctx.lineTo(27.9 * unit + posX, 29.8 * unit + posY);
     ctx.lineTo(27.9 * unit + posX, 34 * unit + posY);
     ctx.closePath();
     ctx.fill();
     ctx.stroke();

     // Muralla
     ctx.beginPath();
     ctx.moveTo(23 * unit + posX, 36 * unit + posY);
     ctx.lineTo(23.5 * unit + posX, 31.1 * unit + posY);
     ctx.lineTo(24 * unit + posX, 31.1 * unit + posY);
     ctx.lineTo(24 * unit + posX, 31.6 * unit + posY);
     ctx.lineTo(24.25 * unit + posX, 31.6 * unit + posY);
     ctx.lineTo(24.3 * unit + posX, 31 * unit + posY);
     ctx.lineTo(24.9 * unit + posX, 31.1 * unit + posY);
     ctx.lineTo(24.9 * unit + posX, 31.5 * unit + posY);
     ctx.lineTo(25.5 * unit + posX, 31.5 * unit + posY);
     ctx.lineTo(25.6 * unit + posX, 31.1 * unit + posY);
     ctx.lineTo(26 * unit + posX, 31.1 * unit + posY);
     ctx.lineTo(26 * unit + posX, 31.6 * unit + posY);
     ctx.lineTo(26.3 * unit + posX, 31.6 * unit + posY);
     ctx.lineTo(26.3 * unit + posX, 31.3 * unit + posY);
     ctx.lineTo(27.1 * unit + posX, 31.4 * unit + posY);
     ctx.lineTo(27.1 * unit + posX, 31.8 * unit + posY);
     ctx.lineTo(28 * unit + posX, 32.2 * unit + posY); // Empieza muralla derecha
     ctx.lineTo(28.6 * unit + posX, 36 * unit + posY);
     ctx.closePath();
     ctx.fill();
     ctx.stroke();
}


function parteDerecha(posX, posY) {
     // Torre castillo abajo
     ctx.beginPath();
     ctx.moveTo(27 * unit + posX, 34 * unit + posY);
     ctx.lineTo(28.6 * unit + posX, 32.4 * unit + posY);
     ctx.lineTo(30.4 * unit + posX, 32.3 * unit + posY); // (Punto Apoyo)
     ctx.lineTo(30.5 * unit + posX, 34.2 * unit + posY);
     ctx.lineTo(30.7 * unit + posX, 32 * unit + posY); // (Punto Apoyo)
     ctx.lineTo(31.3 * unit + posX, 32.3 * unit + posY); // punto apouo 2
     ctx.lineTo(31.3 * unit + posX, 34.5 * unit + posY);
     ctx.lineTo(31.3 * unit + posX, 32.3 * unit + posY); // punto apouo 2
     ctx.lineTo(33 * unit + posX, 32.3 * unit + posY);
     ctx.lineTo(33 * unit + posX, 36 * unit + posY);
     ctx.closePath();
     ctx.fill();
     ctx.stroke();

     // Torre castillo Arriba
     ctx.beginPath();
     ctx.moveTo(27.9 * unit + posX, 32.5 * unit + posY);
     ctx.lineTo(27.9 * unit + posX, 29.8 * unit + posY);
     ctx.lineTo(28.9 * unit + posX, 29.8 * unit + posY);
     ctx.lineTo(30 * unit + posX, 29.8 * unit + posY); // Punto Apoyo
     ctx.lineTo(30.1 * unit + posX, 32.3 * unit + posY);
     ctx.lineTo(30 * unit + posX, 29.8 * unit + posY); // Punto Apoyo
     ctx.lineTo(30.7 * unit + posX, 30 * unit + posY);
     ctx.lineTo(30.7 * unit + posX, 32.1 * unit + posY);
     ctx.closePath();
     ctx.fill();
     ctx.stroke();

     // Muralla
     ctx.beginPath();
     ctx.moveTo(28.6 * unit + posX, 36 * unit + posY);
     ctx.lineTo(28 * unit + posX, 32.2 * unit + posY);
     ctx.lineTo(28.6 * unit + posX, 32.4 * unit + posY);
     ctx.lineTo(28.6 * unit + posX, 33 * unit + posY);
     ctx.lineTo(28.8 * unit + posX, 33.1 * unit + posY);
     ctx.lineTo(29 * unit + posX, 32.7 * unit + posY);
     ctx.lineTo(29.5 * unit + posX, 32.9 * unit + posY);
     ctx.lineTo(29.8 * unit + posX, 33.9 * unit + posY);
     ctx.lineTo(30.5 * unit + posX, 34.2 * unit + posY); // Punto apoyo
     ctx.lineTo(30.5 * unit + posX, 35.8 * unit + posY);
     ctx.lineTo(30.5 * unit + posX, 34.2 * unit + posY); // Punto apoyo 
     ctx.lineTo(31.4 * unit + posX, 34.5 * unit + posY); // Punto apoyo 2
     ctx.lineTo(31.5 * unit + posX, 35.8 * unit + posY);
     ctx.lineTo(31.4 * unit + posX, 34.5 * unit + posY); // Punto apoyo 2
     ctx.lineTo(32.6 * unit + posX, 34.2 * unit + posY); // Punto apoyo 3
     ctx.lineTo(32.8 * unit + posX, 36.2 * unit + posY);
     ctx.lineTo(32.6 * unit + posX, 34.2 * unit + posY); // Punto apoyo 3
     ctx.lineTo(34.1 * unit + posX, 34.6 * unit + posY);
     ctx.lineTo(34.3 * unit + posX, 38.3 * unit + posY);
     //ctx.closePath();
     ctx.fill();
     ctx.stroke();
}

function montañas(posX, posY) {
     // Configuración del trazo
     ctx.strokeStyle = lineaMontaña;
     ctx.fillStyle = colorMontaña;

     ctx.beginPath();
     ctx.moveTo(13.3 * unit + posX, 37.6 * unit + posY);
     ctx.lineTo(13.3 * unit + posX, 50 * unit + posY);
     ctx.lineTo(37 * unit + posX, 50 * unit + posY);
     ctx.lineTo(37 * unit + posX, 37.6 * unit + posY);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     // Ultima Montaña derecha
     ctx.beginPath();
     ctx.moveTo(18 * unit + posX, 39 * unit + posY);
     ctx.quadraticCurveTo(28 * unit + posX, 33 * unit + posY, 37 * unit + posX, 37.8 * unit + posY);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     // montaña 3
     ctx.beginPath();
     ctx.moveTo(26 * unit + posX, 38 * unit + posY);
     ctx.quadraticCurveTo(21 * unit + posX, 33 * unit + posY, 33 * unit + posX, 37 * unit + posY);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();


     ctx.beginPath();
     ctx.moveTo(18.8 * unit + posX, 36 * unit + posY);
     ctx.quadraticCurveTo(21.5 * unit + posX, 31.3 * unit + posY, 28 * unit + posX, 38.5 * unit + posY);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     

     ctx.beginPath();
     ctx.moveTo(20 * unit + posX, 40 * unit + posY);
     ctx.quadraticCurveTo(25 * unit + posX, 35.5 * unit + posY, 32.5 * unit + posX, 36.8 * unit + posY);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();     

     // Montaña 1 Izq
     ctx.beginPath();
     ctx.moveTo(0 * unit + posX, 50 * unit + posY);
     ctx.quadraticCurveTo(15 * unit + posX, 28 * unit + posY, 30 * unit + posX, 38.5 * unit + posY);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.moveTo(13 * unit + posX, 50 * unit + posY);
     ctx.quadraticCurveTo(15 * unit + posX, 38 * unit + posY, 30 * unit + posX, 38.5 * unit + posY);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.moveTo(30 * unit + posX, 38.5 * unit + posY);
     ctx.quadraticCurveTo(38 * unit + posX, 38 * unit + posY, 50 * unit + posX, 45 * unit + posY);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();
}


function ventanas(posX, posY) {
     ctx.beginPath();

     // Color de la ventana (debe coincidir con el neón)
     ctx.fillStyle = colorVentana;

     // Dibujar la ventana
     ctx.fillRect(unit * 18.6 + posX, unit * 31 + posY, unit * 0.3, unit * 0.5)

     // Dibujar la ventana
     ctx.fillRect(unit * 21.2 + posX, unit * 32 + posY, unit * 0.3, unit * 0.8)

     // Dibujar la ventana
     ctx.fillRect(unit * 22.1 + posX, unit * 31.8 + posY, unit * 0.3, unit * 0.8)

     // Dibujar la ventana
     ctx.fillRect(unit * 26.6 + posX, unit * 30.8 + posY, unit * 0.3, unit * 0.4)

}