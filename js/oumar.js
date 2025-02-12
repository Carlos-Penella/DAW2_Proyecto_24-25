//js oumar.js
// Función para dibujar un globo con inclinación
function dibujarGlobo(miX, miY, colorPrincipal, colorReflejo, inclinacion) {
     ctx.save();

     // Hilo del globo 
     ctx.beginPath();
     // ctx.moveTo(0, 0);
     // ctx.lineTo(0, 2.5 * unit);
     ctx.moveTo(miX, miY);
     ctx.lineTo(unit * 14, unit * 95-yPato);
     ctx.strokeStyle = "black";
     ctx.stroke();
     ctx.closePath();


     // Trasladar al punto de origen del globo
     ctx.translate(miX, miY);
     ctx.rotate(inclinacion);


     // Parte superior
     ctx.beginPath();
     ctx.fillStyle = colorPrincipal;
     ctx.strokeStyle = colorPrincipal;
     ctx.arc(0, 0, unit, 0, Math.PI, true);
     ctx.stroke();
     ctx.fill();

     // Lado izquierdo
     ctx.moveTo(-unit, 0);
     ctx.quadraticCurveTo(-unit, unit * 0.5, 0, unit * 1.5);
     ctx.stroke();

     // Lado derecho
     ctx.moveTo(0, unit * 1.5);
     ctx.quadraticCurveTo(unit, unit * 0.5, unit, 0);
     ctx.lineTo(-unit, 0);
     ctx.stroke();
     ctx.fill();
     ctx.closePath();

     // Reflejo
     ctx.beginPath();
     ctx.fillStyle = colorReflejo;
     ctx.ellipse(-unit * 0.6, -unit * 0.2, 10, 3, 5, 10, Math.PI * 2);
     ctx.fill();
     ctx.strokeStyle = colorReflejo;
     ctx.stroke();

     ctx.restore();


}

// Función para dibujar un punto verde en el centro del canvas
function dibujarPuntoVerde() {
     ctx.beginPath();
     ctx.arc(unit * 18, unit * 42, 5, 0, Math.PI * 2, true); // Radio de 5 para el punto
     ctx.closePath();
}

// Función principal para dibujar múltiples globos
function globos(posX = 0, posY = 0) {
     colores = [
          { principal: "green", reflejo: "lightgreen" },
          { principal: "blue", reflejo: "lightblue" },
          { principal: "pink", reflejo: "lightyellow" },
          { principal: "limegreen", reflejo: "lightgreen" },
          { principal: "violet", reflejo: "white" },
          { principal: "yellow", reflejo: "white" },
          { principal: "orange", reflejo: "white" },
          { principal: "purple", reflejo: "white" },
          { principal: "cyan", reflejo: "white" },
          { principal: "red", reflejo: "white" }
     ];
     posiciones = [
          { x: 18, y: unit*5 },
          { x: 20, y: unit*5 },
          { x: 16.5, y: unit*5 },
          { x: 18.4, y: unit*5 },
          { x: 20.5, y: unit*5 },
          { x: 15.6, y: unit*5 },
          { x: 17.7, y: unit*5 },
          { x: 16.3, y: unit*5 },
          { x: 19.5, y: unit*5 },
          { x: 18, y: unit*5 }
     ];

     inclinaciones = [
          Math.PI / 0,  // 15 grados
          -Math.PI / 18, // -10 grados
          Math.PI / 19,   // 20 grados
          -Math.PI / 15, // -12 grados
          Math.PI / 10,  // 18 grados
          0,             // Sin inclinación
          Math.PI / 8,   // 22.5 grados
          -Math.PI / 6,  // -30 grados
          Math.PI / 20,  // 7 grados
          -Math.PI / -0  // -13 grados
     ];



     indiceGlobo = 0;    

   

}
function apareceGlobo() {

     // Obtener datos del globo actual
     const { x, y } = posiciones[indiceGlobo];
     const { principal, reflejo } = colores[indiceGlobo];
     const inclinacion = inclinaciones[indiceGlobo];

     // Dibujar el globo en la posición correcta
     dibujarGlobo(unit * x, unit * y, principal, reflejo, inclinacion);
     // Avanzar al siguiente globo para la próxima vez
     indiceGlobo++;
}
