
window.onload = draw


let canvas = null
let ctx = null

let black = 'black'
let white = 'white'
let blue = '#61b8ee'

function draw() {
     // recuperamos el lienzo del canvas y su ctxo... 
     canvas = document.getElementById("canvas")
     ctx = canvas.getContext("2d")
     ctx.globalAlpha = 0.5

     w = canvas.clientWidth
     h = canvas.clientHeight
     unit = h * 0.02

     canvas.width = w
     canvas.height = h

     nubes()
     suelo()
     castillo()
     torreon()
     pato()
     globos()
     rejilla()
}

// REJILLA
function rejilla() {
     ctx.strokeStyle = black
     ctx.lineWidth = 1

     for (var y = 0; y <= h; y = y + unit) {
          ctx.beginPath()
          ctx.moveTo(0, y)
          ctx.lineTo(w, y)
          ctx.stroke();
     }

     for (var x = 0; x <= w; x = x + unit) {
          ctx.strokeStyle = black
          ctx.beginPath()
          ctx.moveTo(x, 0)
          ctx.lineTo(x, h)
          ctx.stroke();
     }
}


function torreon() {
     ctx.fillStyle = 'red';
     ctx.beginPath();
     ctx.fillRect(0, unit*10, unit*7, unit*100);
     ctx.closePath();
}

function pato() {
     ctx.fillStyle = 'yellow';
     ctx.beginPath();
     ctx.fillRect(unit*15, h-unit*10, unit*6, unit*8);
     ctx.closePath();
}

function castillo() {
     ctx.fillStyle = 'blue';
     ctx.beginPath();
     ctx.fillRect(unit*15, h-unit*30, unit*20, unit*20);
     ctx.closePath();
}

function suelo() {
     ctx.fillStyle = 'green';
     ctx.beginPath();
     ctx.fillRect(0, h-unit*10, unit*70, unit*70);
     ctx.closePath();
}


function globos() {
     ctx.fillStyle = 'pink';
     ctx.beginPath();
     ctx.fillRect(unit*15, h-unit*18, unit*6, unit*8);
     ctx.closePath();
}






