function techo(posx, posy) {

     gris = '#909090';
     rojo = '#aa0000';
     marron = '#7b4b1e';
     amarillo = '#d1bc00'
    
     ctx.lineWidth = 1.7;

     //poste

     ctx.beginPath();
     ctx.strokeStyle = marron;
     ctx.moveTo(posx + unit * 4, posy + unit * 0.5);
     ctx.lineTo(posx + unit * 4, posy + unit * 3);
     ctx.stroke();
     ctx.closePath();

     //bandera

     ctx.beginPath();
     ctx.strokeStyle = amarillo;
     ctx.fillStyle = amarillo;
     ctx.moveTo(posx + unit * 4, posy + unit * 1);
     ctx.bezierCurveTo(posx + unit * 4.5, posy + unit * 0.3, posx + unit * 5.5, posy + unit * 1.5, posx + unit * 9, posy + unit * 1);
     ctx.lineTo(posx + unit * 9, posy + unit * 2.5);
     ctx.bezierCurveTo(posx + unit * 6, posy + unit * 3.5, posx + unit * 6, posy + unit * 2, posx + unit * 4, posy + unit * 2.5);
     ctx.lineTo(posx + unit * 4, posy + unit * 1);
     ctx.stroke();
     ctx.fill();         
     ctx.closePath();

     //cuerpo

     ctx.strokeStyle = gris;
     ctx.fillStyle = gris;
     ctx.beginPath();
     ctx.moveTo(posx + unit * 8, posy + unit * 10);
     ctx.lineTo(posx + unit * 0, posy + unit * 10);
     ctx.lineTo(posx + unit * 0, posy + unit * 18);
     ctx.lineTo(posx + unit * 8, posy + unit * 18);
     ctx.lineTo(posx + unit * 8, posy + unit * 10);
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     // ladrillos

     ctx.strokeStyle = 'black';
     ctx.lineWidth = 1.7;

     fila = 0  // Contador para las filas
     for (y = posy + unit * 10; y <= posy + unit * 18; y += unit) {

          //Con esto vamos alternando las trazas para simular ladrillos
          let desplazamiento = (fila % 2 == 0) ? 0 : unit

          //Dibujamos la linea entera horizontal
          ctx.beginPath();
          ctx.ellipse(posx + unit * 4, y, unit * 4, unit / 3, 0, Math.PI, 2 * Math.PI);
          ctx.stroke();

          //Dibujamos verticalmente 
          for (x = posx; x <= posx + unit * 7; x += 2 * unit) {
               ctx.beginPath();
               ctx.moveTo(x + desplazamiento, y - unit / 3);
               ctx.lineTo(x + desplazamiento, y + 2 * unit / 3);
               ctx.stroke();
          }
          fila++
     }

     //Puerta

     ctx.lineWidth = 6;
     ctx.strokeStyle = marron;
     ctx.fillStyle = 'black';
     ctx.beginPath();
     ctx.moveTo(posx + unit * 7.5, posy + unit * 17.3);
     ctx.lineTo(posx + unit * 7.5, posy + unit * 11);
     ctx.lineTo(posx + unit * 5.5, posy + unit * 10.5);
     ctx.lineTo(posx + unit * 5.5, posy + unit * 17.5);
     ctx.lineTo(posx + unit * 7.5, posy + unit * 17);
     ctx.stroke();
     ctx.fill();
     ctx.closePath();

     // Ventana
     ctx.fillStyle = amarillo
     ctx.strokeStyle = 'black'
     ctx.lineWidth = 1.7
     ctx.beginPath()
     ctx.rect(posx + unit * 1.5, posy + unit * 12, unit * 2, unit * 2)
     ctx.fill()
     ctx.stroke()

     // Ventana lineas
     ctx.beginPath()
     ctx.moveTo(posx + unit * 2.5, posy + unit * 12)
     ctx.lineTo(posx + unit * 2.5, posy + unit * 14)
     ctx.moveTo(posx + unit * 1.5, posy + unit * 13)
     ctx.lineTo(posx + unit * 3.5, posy + unit * 13)
     ctx.stroke()

     //tejado    
     ctx.strokeStyle = rojo;
     ctx.beginPath();
     ctx.moveTo(posx + unit * 4, posy + unit * 3);
     ctx.lineTo(posx + unit * 9, posy + unit * 10);
     ctx.lineTo(posx + unit * -1, posy + unit * 10);
     ctx.lineTo(posx + unit * 4, posy + unit * 3);
     ctx.fillStyle = rojo;
     ctx.fill();
     ctx.stroke();
     ctx.closePath();
}