window.onload = draw


let canvas = null
let ctx = null

let black = 'black'
let white = 'white'
let blue = '#61b8ee'

let grey = '#d3d3d3'

function draw() {
     // recuperamos el lienzo del canvas y su ctxo... 
     canvas = document.getElementById("canvas")
     ctx = canvas.getContext("2d")
     ctx.globalAlpha = 0.5

     w = canvas.clientWidth
     h = canvas.clientHeight
     unit = h * 0.03

     canvas.width = w
     canvas.height = h

     rejilla()
     suelo()
}

function suelo() {
    ctx.fillStyle = "#8ec416";
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3 / 40 * unit;
    ctx.beginPath();
    ctx.moveTo(posX + 0, h - unit * 5);
    for (posX = 0; posX < posFINAL + unit * 15; posX += 20 * unit) {
        ctx.quadraticCurveTo(posX + unit * 4, unit * 13, posX + unit * 10, h - unit * 5);
        ctx.quadraticCurveTo(posX + unit * 16, unit * 17, posX + unit * 20, h - unit * 5);
    }
    ctx.lineTo(posX + unit * 20, h);
    ctx.lineTo(0, h);
    ctx.lineTo(0, h - unit * 5);

    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
}
