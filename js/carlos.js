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
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.fillRect(0, h-unit*10, unit*70, unit*70);
    ctx.closePath();
}