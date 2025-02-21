const patoYellow = "#FFD700";
const patoOrange = "#FFA500";

function pato(posX, posY) {
     patas(posX, posY);

     cabeza(posX, posY);
     cuerpo(posX, posY);
     cola(posX, posY);
     pico(posX, posY);
     ojo(posX, posY);

}

function cabeza(posX, posY) {   
         
     ctx.beginPath();

     ctx.strokeRect(unit * 15 + posX, h - unit * 10 + posY, unit * 6, unit * 8);
     ctx.closePath();

     ctx.beginPath();
     ctx.fillStyle = patoYellow;
     
     

     // El centro del círculo estará en las coordenadas x=700, y=100
     // Su radio será de 50
     // Dado que va de 0 a Math.PI*2 lo dibujará entero... 
     ctx.arc(unit * 17.5 + posX, unit * 42 + posY, unit * 1.5, 0, Math.PI * 2, true);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();
}

function ojo(posX, posY) {

     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.fillStyle = "white";
     // El centro del círculo estará en las coordenadas x=700, y=100
     // Su radio será de 50
     // Dado que va de 0 a Math.PI*2 lo dibujará entero... 
     ctx.arc(unit * 17.5 + posX, unit * 41.6 + posY, unit * 0.7, 0, Math.PI * 2, true);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.strokeStyle = "black";

     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.fillStyle = "black";
     // El centro del círculo estará en las coordenadas x=700, y=100
     // Su radio será de 50
     // Dado que va de 0 a Math.PI*2 lo dibujará entero... 
     ctx.arc(unit * 17.5 + posX, unit * 41.8 + posY, unit * 0.5, 0, Math.PI * 2, true);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.strokeStyle = "white";
     ctx.fillStyle = "white";
     // El centro del círculo estará en las coordenadas x=700, y=100
     // Su radio será de 50
     // Dado que va de 0 a Math.PI*2 lo dibujará entero... 
     ctx.arc(unit * 17.5 + posX, unit * 41.5 + posY, unit * 0.15, 0, Math.PI * 2, true);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.strokeStyle = "white";
     ctx.fillStyle = "white";
     // El centro del círculo estará en las coordenadas x=700, y=100
     // Su radio será de 50
     // Dado que va de 0 a Math.PI*2 lo dibujará entero... 
     ctx.arc(unit * 17.3 + posX, unit * 41.9 + posY, unit * 0.1, 0, Math.PI * 2, true);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.strokeStyle = "white";
     ctx.fillStyle = "white";
     // El centro del círculo estará en las coordenadas x=700, y=100
     // Su radio será de 50
     // Dado que va de 0 a Math.PI*2 lo dibujará entero... 
     ctx.arc(unit * 17.7 + posX, unit * 42 + posY, unit * 0.1, 0, Math.PI * 2, true);
     ctx.fill();
     ctx.stroke();

     ctx.closePath();
}


function pico(posX, posY) {
     /* alto PICO */

     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.fillStyle = patoOrange;

     ctx.lineWidth = 4;
     let startX = unit * 15.8 + posX;
     let startY = unit * 42.6 + posY;

     let endX = unit * 14.9 + posX;
     let endY = unit * 42.75 + posY;

     // Punto de control para invertir la curva hacia abajo
     let controlX = (startX + endX) / 2.1; // Coordenada X intermedia
     let controlY = startY + unit * -0.1;   // Bajamos el punto de control

     // Mover al punto inicial
     ctx.moveTo(unit * 16 + posX, unit * 42.35 + posY);
     ctx.quadraticCurveTo(controlX, controlY, endX, endY);

     ctx.stroke();
     ctx.fill();

     //cerca del ojo
     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.lineWidth = 2;

     let start2X = unit * 15.9 + posX;
     let start2Y = unit * 42.3 + posY;

     let end2X = unit * 17.1 + posX;
     let end2Y = unit * 42.85 + posY;

     let control2X = (start2X + end2X) / 2;
     let control2Y = start2Y + unit * -0.4;

     ctx.lineTo(start2X, start2Y);
     ctx.quadraticCurveTo(control2X, control2Y, end2X, end2Y);
     ctx.stroke();

     //Bajo pico
     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.lineWidth = 2;
     ctx.fillStyle = patoOrange;
     // Coordenadas de los puntos para la curva cuadrática
     let start4X = unit * 14.8 + posX; // Punto inicial en X

     let start4Y = unit * 42.8 + posY; // Punto inicial en Y

     let end4X = unit * 17.1 + posX;   // Punto final en X

     let end4Y = unit * 42.8 + posY;   // Punto final en Y


     let control4X = (start4X + end4X) / 2; // Coordenada X intermedia
     let control4Y = start4Y + unit * 0.9;   // Bajamos el punto de control

     ctx.moveTo(start4X, start4Y);
     ctx.quadraticCurveTo(control4X, control4Y, end4X, end4Y);
     ctx.fill();
     ctx.stroke();

     //triangulo pico relleno

     ctx.beginPath();
     ctx.strokeStyle = patoOrange;
     ctx.fillStyle = patoOrange;
     ctx.lineWidth = 2;

     // Coordenadas del triángulo
     ctx.moveTo(unit * 15 + posX, unit * 42.7 + posY); // Punto 1
     ctx.lineTo(unit * 16.4 + posX, unit * 43 + posY); // Punto 2
     ctx.lineTo(unit * 15.9 + posX, unit * 42.5 + posY); // Punto 3
     ctx.fill();
     ctx.closePath(); // Cierra el triángulo automáticamente

     ctx.stroke(); // Traza el contorno del triángulo

     //circulo raro
     ctx.beginPath();
     ctx.strokeStyle = patoOrange;
     ctx.fillStyle = patoOrange;
     ctx.lineWidth = 2;
     // El centro del círculo estará en las coordenadas x=700, y=100
     // Su radio será de 50
     // Dado que va de 0 a Math.PI*2 lo dibujará entero... 
     ctx.arc(unit * 16.3 + posX, unit * 42.7 + posY, unit * 0.4, 0, Math.PI * 2, true);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();



     //circulo raro
     ctx.beginPath();
     ctx.strokeStyle = patoOrange;
     ctx.fillStyle = patoOrange;
     ctx.lineWidth = 2;
     // El centro del círculo estará en las coordenadas x=700, y=100
     // Su radio será de 50
     // Dado que va de 0 a Math.PI*2 lo dibujará entero... 
     ctx.arc(unit * 16 + posX, unit * 42.7 + posY, unit * 0.35, 0, Math.PI * 2, true);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();





     //circulo raro
     ctx.beginPath();
     ctx.strokeStyle = patoOrange;
     ctx.fillStyle = patoOrange;
     ctx.lineWidth = 2;
     // El centro del círculo estará en las coordenadas x=700, y=100
     // Su radio será de 50
     // Dado que va de 0 a Math.PI*2 lo dibujará entero... 
     ctx.arc(unit * 16.7 + posX, unit * 42.8 + posY, unit * 0.15, 0, Math.PI * 2, true);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();



     //boca pico
     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.lineWidth = 2;
     ctx.fillStyle = patoOrange;
     // Coordenadas de los puntos para la curva cuadrática
     let start5X = unit * 14.9 + posX; // Punto inicial en X

     let start5Y = unit * 42.5 + posY; // Punto inicial en Y

     let end5X = unit * 17 + posX;   // Punto final en X

     let end5Y = unit * 42.7 + posY;   // Punto final en Y


     let control5X = (start5X + end5X) / 2.1; // Coordenada X intermedia
     let control5Y = start5Y + unit * 0.7;   // Bajamos el punto de control

     ctx.moveTo(start5X, start5Y);
     ctx.quadraticCurveTo(control5X, control5Y, end5X, end5Y);
     ctx.fill();
     ctx.stroke();



     /* NARIZ */
     ctx.beginPath();

     ctx.fillStyle = "black";
     ctx.arc(unit * 16.4 + posX, unit * 42.5 + posY, unit * 0.05, 0, Math.PI * 2, true);

     ctx.stroke();
     ctx.closePath();
}


function patas(posX, posY) {

     ctx.strokeStyle = "black";
     ctx.fillStyle = patoOrange;

     ctx.lineWidth = 2;

     // PRIMERA
     ctx.beginPath();
     // Coordenadas de los puntos para la curva cuadrática
     let startX = unit * 16.7 + posX; // Punto inicial en X
     let startY = unit * 46.4 + posY; // Punto inicial en Y
     let endX = unit * 16.15 + posX;   // Punto final en X
     let endY = unit * 46.85 + posY;   // Punto final en Y
     // Punto de control para invertir la curva hacia abajo
     let controlX = (startX + endX) / 2; // Coordenada X intermedia
     let controlY = startY + unit * 1;   // Bajamos el punto de control
     // Mover al punto inicial
     ctx.moveTo(startX, startY);
     // Dibujar la curva cuadrática
     ctx.quadraticCurveTo(controlX, controlY, endX, endY);
     // Dibujar el trazo
     ctx.stroke();

     // SEGUNDA
     // ctx.beginPath();
     let start3X = unit * 17.5 + posX; // Punto inicial en X
     let start3Y = unit * 46.3 + posY; // Punto inicial en Y
     let end3X = unit * 17.2 + posX;   // Punto final en X
     let end3Y = unit * 47.3 + posY;   // Punto final en Y

     let control3X = (start3X + end3X) / 2; // Coordenada X intermedia
     let control3Y = start3Y + unit * 1;   // Bajamos el punto de control

     // ctx.moveTo(start3X, start3Y);
     ctx.lineTo(end3X, end3Y);
     // ctx.quadraticCurveTo(control3X, control3Y, end3X, end3Y);
     ctx.quadraticCurveTo(control3X, control3Y, start3X, start3Y);

     ctx.lineTo(startX, startY)

     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     let start2X = unit * 19.3 + posX; // Punto inicial en X
     let start2Y = unit * 46.4 + posY; // Punto inicial en Y
     let end2X = unit * 18.9 + posX;   // Punto final en X
     let end2Y = unit * 47.5 + posY;   // Punto final en Y

     let control2X = (start2X + end2X) / 2; // Coordenada X intermedia
     let control2Y = start2Y + unit * 1;   // Bajamos el punto de control

     ctx.moveTo(end2X, end2Y);
     ctx.quadraticCurveTo(control2X, control2Y, start2X, start2Y);
     ctx.lineTo(start2X, start2Y)

     // ctx.beginPath();
     let start1X = unit * 18.6 + posX; // Punto inicial en X
     let start1Y = unit * 46.5 + posY; // Punto inicial en Y
     let end1X = unit * 18 + posX;   // Punto final en X
     let end1Y = unit * 46.95 + posY;   // Punto final en Y

     let control1X = (start1X + end1X) / 2; // Coordenada X intermedia
     let control1Y = start1Y + unit * 1;   // Bajamos el punto de control

     ctx.lineTo(start1X, start1Y);
     ctx.quadraticCurveTo(control1X, control1Y, end1X, end1Y);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();


    pezunas(posX, posY)


}



function pezunas (posX, posY){

     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.fillStyle = patoOrange;
     // El centro del círculo estará en las coordenadas x=700, y=100
     // Su radio será de 50
     // Dado que va de 0 a Math.PI*2 lo dibujará entero... 
     ctx.arc(unit * 18 + posX, unit * 47.2 + posY, unit * 0.2, 0, Math.PI * 2, true);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.fillStyle = patoOrange;
     ctx.arc(unit * 18.4 + posX, unit * 47.3 + posY, unit * 0.25, 0, Math.PI * 2, true);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.fillStyle = patoOrange;
     ctx.arc(unit * 18.8 + posX, unit * 47.3 + posY, unit * 0.2, 0, Math.PI * 2, true);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.fillStyle = patoOrange;
     ctx.arc(unit * 17 + posX, unit * 47.2 + posY, unit * 0.2, 0, Math.PI * 2, true);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.fillStyle = patoOrange;
     ctx.arc(unit * 16.5 + posX, unit * 47.2 + posY, unit * 0.25, 0, Math.PI * 2, true);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.fillStyle = patoOrange;
     ctx.arc(unit * 16.1 + posX, unit * 47.1 + posY, unit * 0.2, 0, Math.PI * 2, true);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();
}

function cuerpo(posX, posY) {
     ctx.beginPath();
     ctx.strokeStyle = 'black';
     ctx.fillStyle = patoYellow;

     ctx.lineWidth = 4;
     let cp1x = unit * 15 + posX;
     let cp1y = unit * 44 + posY;

     let cp2x = unit * 15.5 + posX;
     let cp2y = unit * 46 + posY;

     ctx.moveTo(unit * 17 + posX, unit * 43.5 + posY);

     // ctx.lineTo(unit*17+posX, unit*47+posY);
     ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, unit * 17 + posX, unit * 46.5 + posY);


     let cl2x = unit * 21 + posX;
     let cl2y = unit * 44 + posY;

     let cl1x = unit * 22.5 + posX;
     let cl1y = unit * 47 + posY;

     // ctx.moveTo(unit*18+posX, unit*43.5+posY);
     ctx.moveTo(unit * 17 + posX, unit * 46.5 + posY);
     // ctx.bezierCurveTo(cl1x, cl1y, cl2x, cl2y, unit*17+posX, unit*46.5+posY);
     ctx.bezierCurveTo(cl1x, cl1y, cl2x, cl2y, unit * 18 + posX, unit * 43.5 + posY);
     ctx.lineTo(unit * 17 + posX, unit * 43.5 + posY);

     ctx.stroke();
     ctx.fill();




     //pelo debajo del cuello
     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.lineWidth = 2;
     // El centro del círculo estará en las coordenadas x=700, y=100
     // Su radio será de 50
     // Dado que va de 0 a Math.PI*2 lo dibujará entero... 
     ctx.arc(unit * 17 + posX, unit * 44.1 + posY, unit * 0.4, Math.PI*1.4, Math.PI * 2, true);
     ctx.stroke();
     ctx.closePath();


     //pelo cerca de la cola
     ctx.beginPath();
     ctx.strokeStyle = "black";

     // El centro del círculo estará en las coordenadas x=700, y=100
     // Su radio será de 50
     // Dado que va de 0 a Math.PI*2 lo dibujará entero... 
     ctx.arc(unit * 19.9 + posX, unit * 44.9+ posY, unit * 0.65,  Math.PI*0.4, Math.PI * 2, true);
     ctx.stroke();
     ctx.closePath();


     //pelo en el medio del cuerpo
     ctx.beginPath();
     ctx.strokeStyle = "black";

     // El centro del círculo estará en las coordenadas x=700, y=100
     // Su radio será de 50
     // Dado que va de 0 a Math.PI*2 lo dibujará entero... 
     ctx.arc(unit * 18.2 + posX, unit * 45 + posY, unit * 0.8, Math.PI/1, Math.PI * 2, true);
     ctx.stroke();
     ctx.closePath();




     ctx.beginPath();
     ctx.strokeStyle = "black";

     // El centro del círculo estará en las coordenadas x=700, y=100
     // Su radio será de 50
     // Dado que va de 0 a Math.PI*2 lo dibujará entero... 
     ctx.arc(unit * 18.8 + posX, unit * 45.9 + posY, unit * 0.7, Math.PI*0.7 , Math.PI * 2, true);
     ctx.stroke();
     ctx.closePath();


}

function cola(posX, posY) {

     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.fillStyle = patoYellow;
     ctx.lineWidth = 2;

     // Coordenadas del triángulo
     ctx.moveTo(unit * 20.1 + posX, unit * 44.4 + posY); // Punto 1
     ctx.lineTo(unit * 20.6 + posX, unit * 45 + posY); // Punto 2
     ctx.lineTo(unit * 20.8 + posX, unit * 44.6 + posY); // Punto 3
     ctx.fill();
     ctx.closePath(); // Cierra el triángulo automáticamente

     ctx.stroke(); // Traza el contorno del triángulo



     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.fillStyle = patoYellow;
     ctx.lineWidth = 2;

     // Coordenadas del triángulo
     ctx.moveTo(unit * 19.7 + posX, unit * 44.1 + posY); // Punto 1
     ctx.lineTo(unit * 20.2 + posX, unit * 44.5 + posY); // Punto 2
     ctx.lineTo(unit * 20.5 + posX, unit * 44 + posY); // Punto 3
     ctx.fill();
     ctx.closePath(); // Cierra el triángulo automáticamente

     ctx.stroke(); // Traza el contorno del triángulo

}