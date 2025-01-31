let intervalo
const intervaloMovimiento = 10
const distanciaMovimineto = 0.1
let yMover = 0

function start() {
     intervalo = setInterval(move, intervaloMovimiento)
     ctx.translate(0, canvas.height - inicio * unit)
     drawMovimiento()
}

function drawMovimiento() {
     // ctx.clearRect(0, 0, canvas.width, canvas.height + alturaTotal * unit)
     // Función que borre solo la torre 
     ctx.save()
     ctx.translate(0, yMover)
     torreon()  // pedro

     if (yMover > unit * 34) {
          techo(0, 0) // eric
     }

     // castillo(45,0) // raúl
     ctx.restore()
}



function move() {
     yMover += unit * distanciaMovimineto
     drawMovimiento()
     if (yMover > alturaTotal * unit - canvas.height + (finalTorre / 2 + inicioTorre) * unit) {
          clearInterval(intervalo)
          console.log('para')
     }
}
