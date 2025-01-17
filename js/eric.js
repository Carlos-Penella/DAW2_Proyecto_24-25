
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
     unit = h * 0.05

     canvas.width = w
     canvas.height = h

     rejilla()
     techo()
}

function techo() {
ctx.strokeStyle = black;
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(100, h / 2);
ctx.lineTo(600, h / 2);
ctx.stroke();
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


