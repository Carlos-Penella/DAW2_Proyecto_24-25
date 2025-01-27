function techo() {

     gris = '#909090';
     rojo = '#aa0000';
     marron = '#7b4b1e'; 
     amarillo ='#d1bc00'

     ctx.strokeStyle = black;
     ctx.lineWidth = 3;

     //poste

     ctx.beginPath();
     ctx.strokeStyle = marron;
     ctx.moveTo(unit * 4, unit * 0.5);
     ctx.lineTo(unit * 4, unit * 3);
     ctx.stroke();
     ctx.closePath();



     //bandera

     ctx.beginPath();
     ctx.strokeStyle = amarillo;
     ctx.fillStyle = amarillo;
     ctx.moveTo(unit * 4, unit * 1);
     ctx.bezierCurveTo(unit * 4.5, unit * 0.3, unit * 5.5, unit * 1.5, unit * 9, unit * 1);
     ctx.lineTo(unit * 9, unit * 2.5);
     ctx.bezierCurveTo(unit * 6, unit * 3.5, unit * 6, unit * 2, unit * 4, unit * 2.5);
     ctx.lineTo(unit * 4, unit * 1);
     ctx.stroke();
     ctx.fill();
     ctx.closePath();    

     //cuerpo
   
     ctx.strokeStyle = gris;
     ctx.fillStyle = gris;
     ctx.beginPath();
     ctx.moveTo(unit * 8, unit * 10);
     ctx.lineTo(unit * 0, unit * 10);
     ctx.lineTo(unit * 0, unit * 18);
     ctx.lineTo(unit * 8, unit * 18);
     ctx.lineTo(unit * 8, unit * 10); 
     ctx.fill();
     ctx.stroke();
     ctx.closePath();   
    

     // ladrillos

     ctx.strokeStyle = 'black';     
     ctx.lineWidth = 1.6;
     

     fila = 0  // Contador para las filas
     for (y = unit * 10; y <= unit * 17; y += unit) {

          //Con esto vamos alternando las trazas para simular ladrillos
          let desplazamiento = (fila % 2 == 0) ? 0 : unit

          //Dibujamos la linea entera horizontal
          ctx.beginPath();
          ctx.ellipse(unit * 4, y, unit * 4, unit / 3, 0, Math.PI, 2 * Math.PI);
          ctx.stroke();

          //Dibujamos verticalmente 
          for (x = 0; x <= unit * 7; x += 2 * unit) {
               ctx.beginPath();
               ctx.moveTo(x + desplazamiento, y - unit / 3);
               ctx.lineTo(x + desplazamiento, y + 2 * unit / 3);
               ctx.stroke();            
               
               
          }
          fila++
     }      

     //Puerta

     ctx.lineWidth = 9;
     ctx.strokeStyle = marron;
     ctx.fillStyle = 'black';
     ctx.beginPath();
     ctx.moveTo(unit * 7.5, unit * 17.3);
     ctx.lineTo(unit * 7.5, unit * 11);
     ctx.lineTo(unit * 5, unit * 10.5);
     ctx.lineTo(unit * 5, unit * 17.5);
     ctx.lineTo(unit * 7.5, unit * 17);
     ctx.stroke();
     ctx.fill();
     ctx.closePath();

     //tejado

     ctx.lineWidth = 3;
     ctx.strokeStyle = rojo;
     ctx.beginPath();
     ctx.moveTo(unit * 4, unit * 3);
     ctx.lineTo(unit * 9, unit * 10);
     ctx.lineTo(unit * -1, unit * 10);
     ctx.lineTo(unit * 4, unit * 3);
     ctx.fillStyle = rojo;
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

}

function sol() {
     ctx.strokeStyle = 'yellow';
     ctx.fillStyle = 'yellow';
     ctx.beginPath();
     ctx.arc(unit * 40, unit * 0, unit * 7, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.fill();
     ctx.closePath();

     // Lineas del sol
     const numLines = 17;
     const angleStep = (2 * Math.PI) / numLines;
     const lineLength = unit * 11;
     for (let i = 0; i < numLines; i++) {
          const angle = i * angleStep;
          const startX = unit * 40 + Math.cos(angle) * unit * 6;
          const startY = unit * 0 + Math.sin(angle) * unit * 6;
          const endX = unit * 40 + Math.cos(angle) * lineLength;
          const endY = unit * 0 + Math.sin(angle) * lineLength;
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.stroke();
          ctx.closePath();
     }
}