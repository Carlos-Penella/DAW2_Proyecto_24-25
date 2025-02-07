const degradadoClaro = '#909090'
const degradadoMedio = '#707070'
const degradadoOscuro = '#505050'
const colorDibujo = 'black'
const grosor = 2

const alturaTotal = 100
const anchura = 8
const finalTorre = 18
const inicioTorre = 0
const repisas = 8
const anchoRepisa = 4

const inicio = alturaTotal + inicioTorre
const alturaTorre = alturaTotal - finalTorre

const primerCambio = finalTorre + alturaTorre - alturaTorre / 3
const segundoCambio = finalTorre + alturaTorre / 3

function torreon() {

    ctx.beginPath()
    ctx.fillStyle = degradadoClaro
    ctx.moveTo(0, finalTorre * unit)
    ctx.lineTo(anchura * unit, finalTorre * unit)
    ctx.lineTo(0, segundoCambio * unit)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = degradadoMedio
    ctx.moveTo(anchura * unit, finalTorre * unit)
    ctx.lineTo(0, segundoCambio * unit)
    ctx.lineTo(0, primerCambio * unit)
    ctx.lineTo(anchura * unit, segundoCambio * unit)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = degradadoOscuro
    ctx.moveTo(anchura * unit, segundoCambio * unit)
    ctx.lineTo(0, primerCambio * unit)
    ctx.lineTo(0, alturaTotal * unit)
    ctx.lineTo(anchura * unit, alturaTotal * unit)
    ctx.fill()
    ctx.closePath()

    let fila = 0
    for (let y = finalTorre * unit; y < alturaTotal * unit; y += unit) {
        let desplazamiento = (fila % 2 === 0) ? 0 : unit
        ctx.beginPath()
        ctx.strokeStyle = colorDibujo
        ctx.lineWidth = grosor
        ctx.ellipse(anchura * unit / 2, y, anchura * unit / 2, unit / 3, 0, Math.PI, 2 * Math.PI)
        ctx.stroke()
        ctx.closePath()
        for (let x = 0; x < anchura * unit; x += 2 * unit) {
            ctx.beginPath()
            ctx.moveTo(x + desplazamiento, y - unit / 3)
            ctx.lineTo(x + desplazamiento, y + 2 * unit / 3)
            ctx.stroke()
            ctx.closePath()
        }
        fila++
    }
    ctx.beginPath()
    ctx.strokeStyle = colorDibujo
    ctx.lineWidth = grosor
    ctx.moveTo(anchura * unit, finalTorre * unit)
    ctx.lineTo(anchura * unit, alturaTotal * unit)
    ctx.stroke()
    ctx.closePath()

    for (let y = finalTorre * unit; y < alturaTotal * unit; y += (alturaTotal - finalTorre) / repisas * unit) {
        let color = y > segundoCambio * unit ? degradadoOscuro : degradadoMedio
        if (y == finalTorre * unit) color = degradadoClaro

        ctx.beginPath()
        ctx.fillStyle = color
        ctx.strokeStyle = colorDibujo
        ctx.lineWidth = grosor
        ctx.moveTo(anchura * unit, y)
        ctx.lineTo((anchura + anchoRepisa) * unit, y)
        ctx.lineTo((anchura + anchoRepisa) * unit, y + unit / 2)
        ctx.lineTo(anchura * unit, y + unit / 2)
        ctx.fill()
        ctx.stroke()
        ctx.closePath()

        ctx.beginPath()
        ctx.moveTo((anchura + anchoRepisa / 2) * unit, y)
        ctx.lineTo((anchura + anchoRepisa / 2) * unit, y + unit / 2)
        ctx.stroke()
        ctx.closePath()

        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.moveTo(anchura * unit, y)
        ctx.lineTo(anchura * unit, y + unit / 2)
        ctx.stroke()
        ctx.closePath()
    }
}
