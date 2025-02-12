function parteSuperior() {
    fondo();

    let posAlex = 750
    //Ejecutar palos
    palos(0, posAlex);
    palos(-unit * 1.2, posAlex);
    palos(unit * 32.7, posAlex);
    palos(unit * 33.7, posAlex);
    estanteria(0, posAlex);
    marcoBar();
    letrasMarco(0, posAlex);
    estrellasMarco(-unit * 1, posAlex);
    estrellasMarco(unit * 6, posAlex);

    //Ejecutar lamparas
   
    lampara13(0, posAlex);
    lampara13(unit * 24.3, posAlex);
    lampara2(0, posAlex);
    //Ejecutar luces de las lamparas
    luz13(0, posAlex);
    luz13(unit * 24.3, posAlex);
    luz2(0, posAlex);
    //Ejecutar botellas de la parte superior
    dibujarBotella(unit * 20, unit * 0.1);
    dibujarBotella(unit * 17, unit * 0.1);
    dibujarVaso(-unit * 1, -unit * 5.5);
    dibujarVaso(-unit * 3, -unit * 5.5);
    dibujarVaso(-unit * 5, -unit * 5.5);
    dibujarVaso(-unit * 9, -unit * 5.5);
    dibujarVaso(-unit * 11, -unit * 5.5);
    dibujarVaso(-unit * 10, -unit * 5.5);
    dibujarBotellaNueva(unit * 7.7, unit * 0.1);
    dibujarBotellaNueva(unit * 0.5, unit * 0.1);
    dibujarBotellaNueva(-unit * 3, unit * 0.1);
    dibujarBotellaDiferente(-unit * 3, -unit *6.7);
    dibujarBotellaDiferente(-unit * 1, -unit *6.7);
    dibujarBotellaPentagonal(unit*20, -unit *6.7)
    dibujarBotellaPentagonal(unit*16.5, -unit *6.7)
    dibujarBotellaPentagonal(unit*19, -unit *6.7)
    
    
    
    //Ejecutar parte de abajo
    sueloBar();
    sombraSuelo()
    partePrincipalMesa();
    parteArribaMesa();
    dibujarBotella2();
    dibujarVaso2();
    taburete(0, 0);
    taburete(125, 0);
    taburete(250, 0);
    taburete(375, 0);


}

//Alex
function fondo() {
    const gradient = ctx.createLinearGradient(0, 0, 0, unit * 60);
    gradient.addColorStop(0, 'rgba(177, 200, 86, 0.67)');
    gradient.addColorStop(1, 'transparent');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.fillRect(0, 0, unit * 40, unit * 50);
    ctx.closePath();
}

function dibujarBotellaNueva(posX, posY) {
    var botellaX = w / unit * 4.5 + posX;
    var botellaY = h - unit * 27.5 + posY;

    // Dibujar el cuerpo de la botella
    ctx.fillStyle = 'rgba(115, 0, 109, 0.8)';
    ctx.beginPath();
    ctx.moveTo(botellaX - unit, botellaY);
    ctx.lineTo(botellaX - unit * 0.8, botellaY - unit * 4);
    ctx.lineTo(botellaX + unit * 0.8, botellaY - unit * 4);
    ctx.lineTo(botellaX + unit, botellaY);
    ctx.fill();
    ctx.closePath();

    // Dibujar el cuello de la botella
    ctx.fillStyle = '#7c015f';
    ctx.beginPath();
    ctx.fillRect(botellaX - unit * 0.2, botellaY - unit * 4.5, unit * 0.4, unit * 1.5);
    ctx.closePath();

    // Dibujar la tapa de la botella
    ctx.fillStyle = '#c3008c';
    ctx.beginPath();
    ctx.fillRect(botellaX - unit * 0.25, botellaY - unit * 5, unit * 0.5, unit * 0.3);
    ctx.closePath();
}

function dibujarBotellaDiferente(posX, posY) {
    var botellaX = w / unit * 4.5 + posX;
    var botellaY = h - unit * 27.5 + posY;

    // Dibujar el cuerpo de la botella con una forma diferente
    ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
    ctx.beginPath();
    ctx.moveTo(botellaX - unit, botellaY);
    ctx.lineTo(botellaX - unit * 0.6, botellaY - unit * 3);
    ctx.lineTo(botellaX - unit * 0.4, botellaY - unit * 5);
    ctx.lineTo(botellaX + unit * 0.4, botellaY - unit * 5);
    ctx.lineTo(botellaX + unit * 0.6, botellaY - unit * 3);
    ctx.lineTo(botellaX + unit, botellaY);
    ctx.fill();
    ctx.closePath();

    // Dibujar el cuello de la botella
    ctx.fillStyle = 'rgba(200, 0, 0, 0.9)';
    ctx.beginPath();
    ctx.fillRect(botellaX - unit * 0.2, botellaY - unit * 5.5, unit * 0.4, unit * 1.5);
    ctx.closePath();

    // Dibujar la tapa de la botella
    ctx.fillStyle = 'rgba(128, 128, 0, 1)';
    ctx.beginPath();
    ctx.fillRect(botellaX - unit * 0.25, botellaY - unit * 6, unit * 0.5, unit * 0.3);
    ctx.closePath();
}


function dibujarBotellaPentagonal(posX, posY) {
    var botellaX = w / unit * 4.5 + posX;
    var botellaY = h - unit * 27.5 + posY;

    // Dibujar el cuerpo de la botella con forma pentagonal
    ctx.fillStyle = 'rgba(36, 84, 255, 0.8)';
    ctx.beginPath();
    ctx.moveTo(botellaX - unit, botellaY);
    ctx.lineTo(botellaX - unit * 0.8, botellaY - unit * 3);
    ctx.lineTo(botellaX, botellaY - unit * 5);
    ctx.lineTo(botellaX + unit * 0.8, botellaY - unit * 3);
    ctx.lineTo(botellaX + unit, botellaY);
    ctx.fill();
    ctx.closePath();

    // Dibujar el cuello de la botella
    ctx.fillStyle = 'rgba(0, 109, 192, 0.9)';
    ctx.beginPath();
    ctx.fillRect(botellaX - unit * 0.2, botellaY - unit * 5.5, unit * 0.4, unit * 1.5);
    ctx.closePath();

    // Dibujar la tapa de la botella
    ctx.fillStyle = 'rgb(0, 235, 235)';
    ctx.beginPath();
    ctx.fillRect(botellaX - unit * 0.25, botellaY - unit * 6, unit * 0.5, unit * 0.3);
    ctx.closePath();
}

function dibujarBotella(posX, posY) {

    // Posiciona la botella en el centro de la mesa
    var botellaX = w / unit * 4.5 + posX;
    var botellaY = h - unit * 27.5 + posY;

    // Dibujar el cuerpo de la botella
    ctx.fillStyle = 'rgba(0, 128, 0, 0.8)';
    ctx.beginPath();
    ctx.moveTo(botellaX - unit, botellaY);
    ctx.lineTo(botellaX - unit * 0.7, botellaY - unit * 5);
    ctx.lineTo(botellaX + unit * 0.7, botellaY - unit * 5);
    ctx.lineTo(botellaX + unit, botellaY);
    ctx.fill();
    ctx.closePath();


    ctx.fillStyle = 'rgba(0, 100, 0, 0.9)';
    ctx.beginPath();
    ctx.fillRect(botellaX - unit * 0.3, botellaY - unit * 5.5, unit * 0.6, unit * 2);
    ctx.closePath();

    ctx.fillStyle = 'rgba(128, 64, 0, 1)';
    ctx.beginPath();
    ctx.fillRect(botellaX - unit * 0.35, botellaY - unit * 6, unit * 0.7, unit * 0.4);
    ctx.closePath();
}

function dibujarVaso(posX, posY) {
    var vasoX = (w / 1.8) + (unit * 4) + posX;
    var vasoY = h - (unit * 22) + posY;

    // Dibujar el cuerpo del vaso (un azul más oscuro)
    ctx.fillStyle = 'rgba(70, 130, 180, 0.8)'; // Azul translúcido oscuro
    ctx.beginPath();
    ctx.rect(vasoX - unit * 0.7, vasoY - unit * 3, unit * 1.4, unit * 3);
    ctx.fill();
    ctx.closePath();

    // Dibujar el líquido del vaso en naranja
    ctx.fillStyle = 'rgba(55, 0, 255, 0.8)'; // Naranja translúcido
    ctx.beginPath();
    ctx.rect(vasoX - unit * 0.65, vasoY - unit * 2.5, unit * 1.3, unit * 2.5);
    ctx.fill();
    ctx.closePath();
}




////////////////////////////////////////////////////////////////////////
function lampara13(posX, posY) {

     // alert("LAMPARA 13" + posY)
    ctx.fillStyle = '#171a2a';
    ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
    //Primera lampara
    ctx.beginPath();
    ctx.moveTo(unit * 7.5 + posX, 0 + posY);
    ctx.lineTo(unit * 7.5 + posX, unit * 5 + posY);
    ctx.lineTo(unit * 6.5 + posX, unit * 5 + posY);
    ctx.lineTo(unit * 6.5 + posX, unit * 6 + posY);
    ctx.lineTo(unit * 8.5 + posX, unit * 6 + posY);
    ctx.lineTo(unit * 8.5 + posX, unit * 5 + posY);
    ctx.lineTo(unit * 7.5 + posX, unit * 5 + posY);
    ctx.moveTo(unit * 6.5 + posX, unit * 6 + posY);
    ctx.lineTo(unit * 5 + posX, unit * 8 + posY);
    ctx.lineTo(unit * 10 + posX, unit * 8 + posY);
    ctx.lineTo(unit * 8.5 + posX, unit * 6 + posY);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}
////////////////////////////////////////////////////////////////////////
function lampara2(posX, posY) {

    //Segunda lampara
    ctx.beginPath();
    ctx.moveTo(unit * 19.5, 0 + posY);
    ctx.lineTo(unit * 19.5, unit * 5 + posY);
    ctx.lineTo(unit * 18, unit * 5 + posY);
    ctx.lineTo(unit * 18, unit * 6 + posY);
    ctx.lineTo(unit * 21, unit * 6 + posY);
    ctx.lineTo(unit * 21, unit * 5 + posY);
    ctx.lineTo(unit * 19.5, unit * 5 + posY);
    ctx.moveTo(unit * 19, unit * 6 + posY);
    ctx.lineTo(unit * 17.5, unit * 8 + posY);
    ctx.lineTo(unit * 21.5, unit * 8 + posY);
    ctx.lineTo(unit * 20, unit * 6 + posY);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}
////////////////////////////////////////////////////////////////////////
function luz13(posX, posY) {
    const gradient = ctx.createLinearGradient(
        unit * 5 + posX, unit * 3,  // Punto inicial (arriba)
        unit * 5 + posX, unit * 18  // Punto final (abajo)
    );
    gradient.addColorStop(0, 'rgb(239, 229, 184)');
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.moveTo(unit * 5 + posX, unit * 8);
    ctx.lineTo(unit * 3 + posX, unit * 20);
    ctx.lineTo(unit * 12 + posX, unit * 20);
    ctx.lineTo(unit * 10 + posX, unit * 8);
    ctx.lineTo(unit * 5 + posX, unit * 8);
    ctx.fill();

    ctx.closePath();
}
////////////////////////////////////////////////////////////////////////
function luz2(posX, posY) {
    const gradient2 = ctx.createLinearGradient(
        unit * 17, unit * 5,
        unit * 17, unit * 20
    );

    gradient2.addColorStop(0, 'rgb(239, 229, 184)');
    gradient2.addColorStop(1, 'transparent');

    ctx.fillStyle = gradient2;
    ctx.beginPath();
    ctx.moveTo(unit * 17.5 + posX, unit * 8);
    ctx.lineTo(unit * 16 + posX, unit * 15);
    ctx.lineTo(unit * 23 + posX, unit * 15);
    ctx.lineTo(unit * 21.5 + posX, unit * 8);
    ctx.lineTo(unit * 17.5 + posX, unit * 8);
    ctx.fill();
    ctx.closePath();
}
////////////////////////////////////////////////////////////////////////
function palos(posX, posY) {

    ctx.fillStyle = "rgba(205,138,105,255)";

    ctx.beginPath();
    ctx.arc(unit * 3.3 + posX, unit * 9.5, unit * 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(unit * 3.3 + posX, unit * 22.5, unit * 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.fillRect(unit * 3 + posX, unit * 9.5, unit * 0.6, unit * 13);
    ctx.fill();
    ctx.closePath();

}
////////////////////////////////////////////////////////////////////////
function estanteria(posX, posY) {
    ctx.strokeStyle = "rgba(172,82,3,255)";
    ctx.fillStyle = "#171a2a";
    ctx.lineWidth = 7;

    ctx.beginPath();
    //Interior de la estanteria
    ctx.fillRect(unit * 6.3, unit * 9.3, unit * 26.5, unit * 13.5);
    //Borde exterior de la estanteria
    ctx.strokeRect(unit * 6.3, unit * 9.3, unit * 26.5, unit * 13.5);
    ctx.closePath();

    //Linea horizontal interior
    ctx.beginPath();
    ctx.moveTo(unit * 6.1, unit * 16);
    ctx.lineTo(unit * 33, unit * 16);
    ctx.stroke();
    ctx.closePath();

    //Linea vertical 1 interior
    ctx.beginPath();
    ctx.moveTo(unit * 13, unit * 9.1);
    ctx.lineTo(unit * 13, unit * 23);
    ctx.stroke();
    ctx.closePath();

    //Linea vertical 2 interior
    ctx.beginPath();
    ctx.moveTo(unit * 13 + unit * 13, unit * 9.1);
    ctx.lineTo(unit * 13 + unit * 13, unit * 23);
    ctx.stroke();
    ctx.closePath();


}
function marcoBar(posX, posY) {
    ctx.strokeStyle = "rgba(64,89,115,255)"
    ctx.fillStyle = "black"
    ctx.lineWidth = 8;

    ctx.beginPath();
    ctx.roundRect(unit * 15, unit * 10, unit * 9, unit * 5, [15]);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

function letrasMarco(posX, posY) {
    //Letra B
    ctx.beginPath();
    ctx.fillStyle = "#DAF7A6";
    ctx.font = "40px Arial";
    ctx.fillText("B", unit * 16.5 + posX, unit * 13.4 + posY);
    ctx.closePath();
    //Letra A
    ctx.beginPath();
    ctx.fillStyle = "#DAF7A6";
    ctx.font = "40px Arial";
    ctx.fillText("A", unit * 18.7 + posX, unit * 13.4 + posY);
    ctx.closePath();
    //Letra R
    ctx.beginPath();
    ctx.fillStyle = "#DAF7A6";
    ctx.font = "40px Arial";
    ctx.fillText("R", unit * 20.9 + posX, unit * 13.4 + posY);
    ctx
    ctx.closePath();
}

//Sacado de codepen
function estrellasMarco(posX, posY) {
    function drawStar(centerX, centerY, arms, innerRadius, outerRadius, startAngle, fillStyle, strokeStyle, lineWidth) {
        startAngle = (startAngle * Math.PI) / 180 || 0;
        var step = Math.PI / arms,
            angle = startAngle,
            hyp,
            x,
            y;

        ctx.strokeStyle = strokeStyle;
        ctx.fillStyle = fillStyle;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();

        for (var i = 0, len = 2 * arms; i < len; i++) {
            hyp = i & 1 ? innerRadius : outerRadius;
            x = centerX + Math.cos(angle) * hyp;
            y = centerY + Math.sin(angle) * hyp;
            angle += step;
            ctx.lineTo(x, y);
        }

        ctx.closePath();
        if (fillStyle) ctx.fill();
        if (strokeStyle) ctx.stroke();
    }

    // Llamadas para dibujar estrellas en el marco con menor tamaño
    drawStar(unit * 17 + posX, unit * 10.8 + posY, 4, 3, 8, 0, "yellow", "yellow", 1);
    drawStar(unit * 17 + posX, unit * 14.3 + posY, 4, 3, 8, 0, "yellow", "yellow", 1);
}


//DANIEL
   

let tabColor1 = 'rgba(234,207,188,255)'
let tabColor2 = 'rgba(172,82,3,255)'
let tabColor3 = 'rgba(197,125,14,255)'
// Suelo
function sueloBar() {
     console.log("SUELO BAR ")
    ctx.fillStyle = 'rgba(205,138,105,255)'; // Rojo
    ctx.fillRect(0, h - unit * 10, w, unit * 10); // Suelo

    console.log(h -unit + " " + w)
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

    ctx.fillStyle = 'rgba(192,153,111,255)';
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
    ctx.fillRect(50, h - 350+unit, w - 95, 200);
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

function dibujarBotella2() {
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

function dibujarVaso2() {
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


