function techo() {
     ctx.strokeStyle = black;
     ctx.lineWidth = 6;

     //poste

     ctx.beginPath();
     ctx.moveTo(unit*4, unit*1);
     ctx.lineTo(unit*4, unit*3);
     ctx.stroke();
     ctx.closePath();

     //tejado

     ctx.beginPath();
     ctx.moveTo(unit*4, unit*3);
     ctx.lineTo(unit*8, unit*10);    
     ctx.lineTo(unit*-1, unit*10);  
     ctx.lineTo(unit*4, unit*3);
     ctx.fillStyle = 'red';
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     //bandera

     ctx.beginPath();
     ctx.moveTo(unit*4, unit*1);
     ctx.lineTo(unit*4, unit*0);
     ctx.lineTo(unit*8, unit*2);
     ctx.lineTo(unit*5, unit*1);
     ctx.lineTo(unit*4, unit*1);
     ctx.stroke();
     ctx.closePath();


     //cuerpo

     ctx.beginPath();
     ctx.moveTo(unit*7, unit*10);
     ctx.lineTo(unit*7, unit*16);
     ctx.lineTo(unit*0, unit*16);
     ctx.lineTo(unit*0, unit*10);
     ctx.stroke();
     ctx.closePath();

     //ventana

     ctx.beginPath();
     ctx.moveTo(unit*5, unit*15);
     ctx.lineTo(unit*5, unit*11);
     ctx.lineTo(unit*2, unit*11);
     ctx.lineTo(unit*2, unit*15);
     ctx.lineTo(unit*5, unit*15);
     ctx.stroke();
     ctx.closePath();

}