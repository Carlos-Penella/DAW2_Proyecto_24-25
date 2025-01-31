
window.onload = iniciar


let canvas = null
let ctx = null

//Colores
const degradadoClaro = '#909090'
const degradadoMedio = '#707070'
const degradadoOscuro = '#505050'
const colorDibujo = 'black'

//Grosor linea
const grosor = 2

//Constantes torre
const alturaTotal = 120
const anchura = 8
const finalTorre = 10
const inicioTorre = 20

//Constantes repisas
const repisas = 10
const anchoRepisa = 4

//Constantes movimiento
const intervaloMovimiento = 10
const distanciaMovimineto = 0.1

//Constantes auxiliares
const inicio = alturaTotal + inicioTorre
const alturaTorre = alturaTotal - finalTorre

function iniciar() {
    // recuperamos el lienzo del canvas y su ctxo... 
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")
    ctx.globalAlpha = 0.5

    w = canvas.clientWidth
    h = canvas.clientHeight
    unit = h * 0.02

    canvas.width = w
    canvas.height = h
    intervalo = setInterval(move, intervaloMovimiento)
    ctx.translate(0, canvas.height - inicio * unit)
    draw()
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height + alturaTotal * unit)
    ctx.save()
    ctx.translate(0, y)


    pintar()
    torreon()
    ctx.restore()
}

// REJILLA
function rejilla() {
    ctx.strokeStyle = black
    ctx.lineWidth = 1

    for (var y = finalTorre * unit; y <= h; y = y + unit) {
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

//Dibujo
function torreon() {
    let fila = 0 // Contador para las filas

    for (var y = finalTorre * unit; y < alturaTotal * unit; y += unit) {

        //Con esto vamos alternando las trazas para simular ladrillos
        let desplazamiento = (fila % 2 === 0) ? 0 : unit;

        //Dibujamos la linea entera horizontal
        ctx.beginPath()
        ctx.strokeStyle = colorDibujo
        ctx.lineWidth = grosor
        ctx.ellipse(anchura * unit / 2, y, anchura * unit / 2, unit / 3, 0, Math.PI, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath()
        //Dibujamos verticalmente 
        for (var x = 0; x < anchura * unit; x += 2 * unit) {
            ctx.beginPath()
            ctx.strokeStyle = colorDibujo
            ctx.lineWidth = grosor
            ctx.moveTo(x + desplazamiento, y - unit / 3)
            ctx.lineTo(x + desplazamiento, y + 2 * unit / 3)
            ctx.stroke()
            ctx.closePath()
        }

        fila++;
    }
    //Dibujamos la ultima linea 
    ctx.beginPath()
    ctx.strokeStyle = colorDibujo
    ctx.lineWidth = grosor
    ctx.moveTo(anchura * unit, finalTorre * unit)
    ctx.lineTo(anchura * unit, alturaTotal * unit)
    ctx.stroke()
    ctx.closePath()

    //Repisas
    for (var y = finalTorre * unit; y < alturaTotal * unit; y += (alturaTotal - finalTorre) / repisas * unit) {

        //Color repisas
        if (y > segundoCambio * unit)
            color = degradadoOscuro
        else
            color = degradadoMedio

        if (y == finalTorre * unit)
            color = degradadoClaro

        //Dibujamos e contorno y lo pintamos
        ctx.beginPath()
        ctx.strokeStyle = colorDibujo
        ctx.lineWidth = grosor
        ctx.moveTo(anchura * unit, y)
        ctx.lineTo((anchura + anchoRepisa) * unit, y)
        ctx.lineTo((anchura + anchoRepisa) * unit, y + unit / 2)
        ctx.lineTo(anchura * unit, y + unit / 2)
        ctx.lineTo(anchura * unit, y)
        ctx.fillStyle = color
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
        //Dibujamos un ladrillo en medio
        ctx.beginPath()
        ctx.moveTo((anchura + anchoRepisa / 2) * unit, y)
        ctx.lineTo((anchura + anchoRepisa / 2) * unit, y + unit / 2)
        ctx.stroke()
        ctx.closePath()
        //Unimos la pared con la repisa en color
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.moveTo(anchura * unit, y)
        ctx.lineTo(anchura * unit, y + unit / 2)
        ctx.stroke()
        //Color de la repias coincide con el de la torre

    }
}

//Colores
function pintar() {
    primerCambio = finalTorre + alturaTorre - alturaTorre / 3
    segundoCambio = finalTorre + alturaTorre / 3

    //Arriba izquiera de la torre
    ctx.beginPath()
    ctx.fillStyle = degradadoClaro
    ctx.moveTo(0, finalTorre * unit)
    ctx.lineTo(anchura * unit, finalTorre * unit)
    ctx.lineTo(0, segundoCambio * unit)
    ctx.lineTo(0, finalTorre * unit)
    ctx.fill()
    ctx.closePath()

    //Medio torre
    ctx.beginPath()
    ctx.fillStyle = degradadoMedio
    ctx.moveTo(anchura * unit, finalTorre * unit)
    ctx.lineTo(0, segundoCambio * unit)
    ctx.lineTo(0, primerCambio * unit)
    ctx.lineTo(anchura * unit, segundoCambio * unit)
    ctx.lineTo(anchura * unit, finalTorre * unit)
    ctx.fill()
    ctx.closePath()

    //Parte baja de la torre
    ctx.beginPath()
    ctx.fillStyle = degradadoOscuro
    ctx.moveTo(anchura * unit, segundoCambio * unit)
    ctx.lineTo(0, primerCambio * unit)
    ctx.lineTo(0, alturaTotal * unit)
    ctx.lineTo(anchura * unit, alturaTotal * unit)
    ctx.lineTo(anchura * unit, segundoCambio * unit)
    ctx.fill()
    ctx.closePath()
}

//Mover la torre
y = 0
function move() {
    y += unit * distanciaMovimineto
    draw()
    if (y > (alturaTotal * unit - canvas.height + (finalTorre / 2 + inicioTorre) * unit)) {
        clearInterval(intervalo)
    }
}