function techo() {
     ctx.strokeStyle = black;
     ctx.lineWidth = 3;

     //poste

     ctx.beginPath();
     ctx.moveTo(unit * 4, unit * 0.5);
     ctx.lineTo(unit * 4, unit * 3);
     ctx.stroke();
     ctx.closePath();

     //bandera

     ctx.beginPath();
     ctx.moveTo(unit * 4, unit * 1);
     ctx.bezierCurveTo(unit * 4.5, unit * 0.5, unit * 5.5, unit * 1.5, unit * 8, unit * 1);
     ctx.lineTo(unit * 8, unit * 2.5);
     ctx.bezierCurveTo(unit * 6, unit * 3, unit * 6, unit * 2, unit * 4, unit * 2.5);
     ctx.lineTo(unit * 4, unit * 1);
     ctx.stroke();
     ctx.closePath();

     //ventana

     ctx.beginPath();
     ctx.moveTo(unit * 6, unit * 15);
     ctx.lineTo(unit * 6, unit * 11);
     ctx.lineTo(unit * 2, unit * 11);
     ctx.lineTo(unit * 2, unit * 15);
     ctx.lineTo(unit * 6, unit * 15);
     ctx.stroke();
     ctx.closePath();

     //cuerpo
   
     ctx.beginPath();
     ctx.moveTo(unit * 8, unit * 10);
     ctx.lineTo(unit * 8, unit * 16);
     ctx.stroke();    
     ctx.closePath();

     //Puerta    

     ctx.fillStyle = 'brown';
     ctx.beginPath();
     ctx.moveTo(unit * 6, unit * 16);
     ctx.lineTo(unit * 6, unit * 11);
     ctx.lineTo(unit * 2, unit * 11);
     ctx.lineTo(unit * 2, unit * 16);
     ctx.lineTo(unit * 6, unit * 16);
     ctx.stroke();
     ctx.fill();
     ctx.closePath();     

     // ladrillos

     ctx.strokeStyle = 'black';
     ctx.lineWidth = 1;

     fila = 0  // Contador para las filas
     for (y = unit * 10; y <= unit * 15; y += unit) {

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

     //tejado

     ctx.lineWidth = 3;
     ctx.beginPath();
     ctx.moveTo(unit * 4, unit * 3);
     ctx.lineTo(unit * 9, unit * 10);
     ctx.lineTo(unit * -1, unit * 10);
     ctx.lineTo(unit * 4, unit * 3);
     ctx.fillStyle = 'red';
     ctx.fill();
     ctx.stroke();
     ctx.closePath();
}
