
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
     start()     
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