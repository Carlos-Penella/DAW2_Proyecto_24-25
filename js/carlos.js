
function tierraToda() {
   
    suelo()
    for (let i = 0; i < 4; i++) {
        posX = Math.floor(Math.random() * (unit * 27 - -unit * 5)) + -unit * 5;
        posY = Math.floor(Math.random() * (-unit * 0.2 - unit * 3)) + unit * 3;
        flor(posX, posY);
    }

}

function suelo() {
    ctx.fillStyle = "#036403";
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 3 / 40 * unit;

    //Parte uno
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.quadraticCurveTo(30 + unit * 20, h - unit * 10, 20 + unit * 100, h);
    ctx.lineTo(10 + unit * 100, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    

    //cesped parte 1
    for (let i = 0; i < 200; i++) {
    ctx.beginPath();
    ctx.moveTo(20,750);
    ctx.lineTo(20,800);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.closePath();
    }


    // Parte dos

    ctx.fillStyle = "#8ec706";
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3 / 40 * unit;

    ctx.beginPath();
    ctx.moveTo(0, h - unit * 3);
    ctx.quadraticCurveTo(30 + unit * 40, h - unit * 2, 10 + unit * 100, h);
    ctx.lineTo(30 + unit * 100, h);
    ctx.lineTo(0, h);


    ctx.closePath();
    ctx.fill();
    ctx.stroke();


}

function flor(posX, posY) {
    //tallo
    ctx.beginPath();
    ctx.moveTo(unit * 11.5 + posX, h - unit * 5.5 + posY);
    ctx.lineTo(unit * 11.5 + posX, h - unit * 3 + posY);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green';
    ctx.stroke();
    ctx.closePath();

    //hoja
    ctx.beginPath();
    ctx.ellipse(unit * 12.1 + posX, h - unit * 4.3 + posY, unit / 3, unit / 1.5, -Math.PI / 1.5, 0, 6 * Math.PI);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath();


    //petalos
    const centerX = unit * 11.5 + posX;
    const centerY = unit * 44.2 + posY;
    const petalRadius = 10;

    for (let i = 0; i < 5; i++) {
        const angle = (i * 2 * Math.PI) / 5;
        const petalX = centerX + petalRadius * Math.cos(angle);
        const petalY = centerY + petalRadius * Math.sin(angle);

        ctx.beginPath();
        ctx.strokeStyle = "grey";
        ctx.arc(petalX, petalY, 7, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

    }

    //centro flor
    ctx.beginPath();
    ctx.arc(centerX, centerY, 7.5, 0, 2 * Math.PI);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();

}



