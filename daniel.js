
let tabColor1 = 'rgba(234,207,188,255)'
let tabColor2 = 'rgba(172,82,3,255)'
let tabColor3 = 'rgba(197,125,14,255)'

function barBajo() {
     sueloBar();
     sombraSuelo()
     partePrincipalMesa();
     parteArribaMesa();
     dibujarBotella();
     dibujarVaso();
    taburete(0, 0);    // Taburete 1
    taburete(125, 0);
    taburete(250, 0);
    taburete(375, 0);
}

// Suelo
function sueloBar() {
    ctx.fillStyle = 'rgba(205,138,105,255)'; // Rojo
    ctx.fillRect(0, h - unit * 10, w, unit * 10); // Suelo
}

function sombraSuelo() {
    ctx.fillStyle = 'rgba(172,92,89,255)';
    ctx.beginPath();
    // ctx.fillRect(sombraX, sombraY, sombraAncho, sombraAltura); // Dibujar la sombra
    //ctx.ellipse(w/2, h-unit*9, w/2-unit*2, 3*unit, 0, 0, Math.PI*2);
    ctx.ellipse(w / 2, h - unit * 8.5, w / 2 - unit, unit, 0, 0, Math.PI * 2);
    // ctx.ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.fill()
    ctx.closePath();
}

function parteArribaMesa() {
    //Parte de arriba

    ctx.fillStyle = 'rgba(192,153,111,255)'; // Rojo
    ctx.beginPath();
    ctx.fillRect(unit * 2.5, h - unit * 22, w - unit * 5, unit * 2);
    ctx.arc(unit * 2.5, h - unit * 21, unit, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(w - unit * 2.5, h - unit * 21, unit, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath();

}

function partePrincipalMesa() {
    //Parte principal

    ctx.fillStyle = 'rgba(64,89,115,255)'; 
    ctx.fillRect(50, h - 350, w - 95, 200);

}

function taburete(posicionX, posicionY) {
    // Asiento del taburete
    ctx.fillStyle = tabColor1; // Color del asiento
    ctx.beginPath();
    ctx.fillRect(posicionX + unit * 6.5, posicionY + h - unit * 18, unit * 3.5, unit * 0.8);
    ctx.arc(posicionX + unit * 6.5, posicionY + h - unit * 17.6, unit * 0.4, 0, Math.PI * 2)
    ctx.arc(posicionX + unit * 10.2, posicionY + h - unit * 17.6, unit * 0.4, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath();

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 4;

    ctx.fillStyle = tabColor3;

    // Pata 2
    ctx.beginPath();
    ctx.moveTo(posicionX + unit * 9, posicionY + h - unit * 17.2); // Parte superior de la pata
    ctx.lineTo(posicionX + unit * 10.5, posicionY + h - unit * 8); // Parte inferior izquierda
    ctx.lineTo(posicionX + unit * 11, posicionY + h - unit * 8); // Parte inferior derecha
    ctx.lineTo(posicionX + unit * 10, posicionY + h - unit * 17.2); // Parte superior derecha
    ctx.lineTo(posicionX + unit * 9, posicionY + h - unit * 17.2);
    ctx.fill();
    ctx.closePath();

    // Pata 4
    ctx.beginPath();
    ctx.moveTo(posicionX + unit * 8, posicionY + h - unit * 17.2);
    ctx.lineTo(posicionX + unit * 7.5, posicionY + h - unit * 8);
    ctx.lineTo(posicionX + unit * 8, posicionY + h - unit * 8);
    ctx.lineTo(posicionX + unit * 8.5, posicionY + h - unit * 17.2);
    ctx.lineTo(posicionX + unit * 8, posicionY + h - unit * 17.2);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = tabColor2;

    // Pata 1
    ctx.beginPath();
    ctx.moveTo(posicionX + unit * 7, posicionY + h - unit * 17.2);
    ctx.lineTo(posicionX + unit * 6, posicionY + h - unit * 8);
    ctx.lineTo(posicionX + unit * 6.2, posicionY + h - unit * 8);
    ctx.lineTo(posicionX + unit * 7.8, posicionY + h - unit * 17.2);
    ctx.lineTo(posicionX + unit * 7, posicionY + h - unit * 17.2);
    ctx.fill();
    ctx.closePath();

    // Pata 3
    ctx.beginPath();
    ctx.moveTo(posicionX + unit * 8.5, posicionY + h - unit * 17.2);
    ctx.lineTo(posicionX + unit * 8.7, posicionY + h - unit * 8);
    ctx.lineTo(posicionX + unit * 9.2, posicionY + h - unit * 8);
    ctx.lineTo(posicionX + unit * 9.2, posicionY + h - unit * 17.2);
    ctx.lineTo(posicionX + unit * 9, posicionY + h - unit * 17.2);
    ctx.fill();
    ctx.closePath();

    // Pata horizontal
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(195,121,3,255)';
    ctx.lineWidth = 5;
    ctx.moveTo(posicionX + unit * 7, posicionY + h - unit * 12);
    ctx.lineTo(posicionX + unit * 10, posicionY + h - unit * 12);
    ctx.stroke();
    ctx.closePath();
}

function dibujarBotella() {
    ctx.save();

    // Posiciona la botella en el centro de la mesa
    var botellaX = w / 1.3;
    var botellaY = h - unit * 22;

    // Dibujar el cuerpo de la botella
    ctx.fillStyle = 'rgba(0, 128, 0, 0.8)'; 
    ctx.beginPath();
    ctx.moveTo(botellaX - unit, botellaY);
    ctx.lineTo(botellaX - unit * 0.7, botellaY - unit * 5); 
    ctx.lineTo(botellaX + unit * 0.7, botellaY - unit * 5);
    ctx.lineTo(botellaX + unit, botellaY);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'rgba(0, 100, 0, 0.9)'; 
    ctx.beginPath();
    ctx.fillRect(botellaX - unit * 0.3, botellaY - unit * 5.5, unit * 0.6, unit * 2);

    ctx.fillStyle = 'rgba(128, 64, 0, 1)';
    ctx.beginPath();
    ctx.fillRect(botellaX - unit * 0.35, botellaY - unit * 6, unit * 0.7, unit * 0.4);

    ctx.restore();
}

function dibujarVaso() {
    ctx.save();

    var vasoX = w / 1.8 + unit * 4; 
    var vasoY = h - unit * 22;

    // Dibujar el cuerpo del vaso (un azul más oscuro)
    ctx.fillStyle = 'rgba(70, 130, 180, 0.8)'; // Azul translúcido oscuro
    ctx.beginPath();
    ctx.rect(vasoX - unit * 0.7, vasoY - unit * 3, unit * 1.4, unit * 3);
    ctx.fill();
    ctx.closePath();

    // Dibujar el líquido del vaso en naranja
    ctx.fillStyle = 'rgba(255, 165, 0, 0.8)'; // Naranja translúcido
    ctx.beginPath();
    ctx.rect(vasoX - unit * 0.65, vasoY - unit * 1.5, unit * 1.3, unit * 1.5);
    ctx.fill();
    ctx.closePath();

    ctx.restore();
}