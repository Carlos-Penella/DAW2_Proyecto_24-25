let intervalo
const intervaloMovimiento = 12
const distanciaMovimineto = 0.1


let yMover = 0
let yPato = 0
count = 0
puntos = 0


const preguntas = [
     {
          pregunta: "¿Qué es HTML?",
          correcto: "Lenguaje de marcado",
          incorrecto: "Lenguaje de programación",
          incorrecto2: "Base de datos",
          incorrecto3: "Sistema operativo",
     },
     {
          pregunta: "¿Qué es CSS?",
          correcto: "Hojas de estilo",
          incorrecto: "Lenguaje de programación",
          incorrecto2: "Motor de base de datos",
          incorrecto3: "Servidor web",
     },
     {
          pregunta: "¿Qué es JavaScript?",
          correcto: "Lenguaje de scripting",
          incorrecto: "Lenguaje de marcado",
          incorrecto2: "Un framework",
          incorrecto3: "Un preprocesador",
     },
     {
          pregunta: "¿Qué es una API REST?",
          correcto: "Interfaz de programación basada en REST",
          incorrecto: "Modelo de base de datos",
          incorrecto2: "Un lenguaje de programación",
          incorrecto3: "Un sistema de archivos",
     },
     {
          pregunta: "¿Qué es AJAX?",
          correcto: "Técnica para cargar datos asíncronamente",
          incorrecto: "Librería de JavaScript",
          incorrecto2: "Un lenguaje de marcado",
          incorrecto3: "Un servidor web",
     },
     {
          pregunta: "¿Qué es React?",
          correcto: "Librería de JavaScript para interfaces de usuario",
          incorrecto: "Framework de CSS",
          incorrecto2: "Un lenguaje de programación",
          incorrecto3: "Una base de datos",
     },
     {
          pregunta: "¿Qué es Node.js?",
          correcto: "Entorno de ejecución de JavaScript en el servidor",
          incorrecto: "Librería de JavaScript",
          incorrecto2: "Framework de backend",
          incorrecto3: "Un sistema operativo",
     },
     {
          pregunta: "¿Qué es el Responsive Design?",
          correcto: "Diseño que se adapta a diferentes dispositivos",
          incorrecto: "Técnica de programación",
          incorrecto2: "Un framework de JavaScript",
          incorrecto3: "Método de optimización de bases de datos",
     },
     {
          pregunta: "¿Qué es un framework?",
          correcto: "Conjunto de herramientas y librerías para desarrollar aplicaciones",
          incorrecto: "Un lenguaje de marcado",
          incorrecto2: "Un sistema operativo",
          incorrecto3: "Una técnica de animación",
     },
     {
          pregunta: "¿Qué es SEO?",
          correcto: "Optimización para motores de búsqueda",
          incorrecto: "Un lenguaje de programación",
          incorrecto2: "Técnica de diseño web",
          incorrecto3: "Un servicio de alojamiento web",
     },
     {
          pregunta: "¿Qué es TypeScript?",
          correcto: "Superconjunto tipado de JavaScript",
          incorrecto: "Una nueva versión de JavaScript",
          incorrecto2: "Un framework de JavaScript",
          incorrecto3: "Un entorno de desarrollo",
     },
     {
          pregunta: "¿Qué es Webpack?",
          correcto: "Empaquetador de módulos",
          incorrecto: "Preprocesador de CSS",
          incorrecto2: "Transpilador de JavaScript",
          incorrecto3: "Gestor de dependencias",
     },
     {
          pregunta: "¿Qué es Babel?",
          correcto: "Transpilador de JavaScript",
          incorrecto: "Compilador de CSS",
          incorrecto2: "Empaquetador de módulos",
          incorrecto3: "Intérprete de código",
     },
     {
          pregunta: "¿Qué es GraphQL?",
          correcto: "Lenguaje de consulta para APIs",
          incorrecto: "Un framework para construir APIs",
          incorrecto2: "Un preprocesador de datos",
          incorrecto3: "Un sistema de gestión de bases de datos",
     },
     {
          pregunta: "¿Qué es Bootstrap?",
          correcto: "Framework de CSS para diseño responsivo",
          incorrecto: "Librería de JavaScript",
          incorrecto2: "Un preprocesador de CSS",
          incorrecto3: "Un motor de bases de datos",
     },
     {
          pregunta: "¿Qué es jQuery?",
          correcto: "Librería de JavaScript para facilitar el DOM",
          incorrecto: "Un framework de CSS",
          incorrecto2: "Un preprocesador de JavaScript",
          incorrecto3: "Un sistema de plantillas",
     },
     {
          pregunta: "¿Qué es SASS?",
          correcto: "Preprocesador de CSS",
          incorrecto: "Postprocesador de HTML",
          incorrecto2: "Una biblioteca de JavaScript",
          incorrecto3: "Un framework de diseño",
     },
     {
          pregunta: "¿Qué es JSON?",
          correcto: "Formato de intercambio de datos",
          incorrecto: "Un lenguaje de programación",
          incorrecto2: "Una base de datos",
          incorrecto3: "Un protocolo de comunicación",
     },
     {
          pregunta: "¿Qué es una API?",
          correcto: "Interfaz de programación de aplicaciones",
          incorrecto: "Una biblioteca de interfaces",
          incorrecto2: "Un sistema operativo",
          incorrecto3: "Un lenguaje de marcado",
     },
     {
          pregunta: "¿Qué es Git?",
          correcto: "Sistema de control de versiones",
          incorrecto: "Un lenguaje de programación",
          incorrecto2: "Una plataforma de despliegue",
          incorrecto3: "Un entorno de ejecución",
     }
];
function start() {

     intervalo = setInterval(move, intervaloMovimiento)
     ctx.translate(0, canvas.height - inicio * unit)
     // drawMovimiento()

     contador = setInterval(() => {
          clearInterval(intervalo)
          clearInterval(contador)
          resetQuestion()

     }, 750)

}

function drawMovimiento() {


     ctx.clearRect(0, 0, canvas.width, canvas.height + alturaTotal * unit)

     ctx.save()
     ctx.translate(0, yMover)
     torreon()  // pedro

     if (yMover > unit * 20) {
          techo(0, 92) // eric
     }

     castillo(unit * 3, 800) // raúl
     tierraToda()
     yPato += unit * 0.13

     pato(-80, unit * 50 - yPato) // pedro

     dibujarGlobo(240 ,unit * 85 - yPato, "red", "white", 6, unit * 14, unit * 95-yPato) // oumar

     ctx.restore()
}

// Función para actualizar el movimiento (hacia arriba o hacia abajo)
function updateMovement(delta) {
     yMover += unit * distanciaMovimineto * delta;
     drawMovimiento();

     if (yMover > alturaTotal * unit - canvas.height + (finalTorre / 2 + inicioTorre) * unit) {
          clearInterval(intervalo);
     }
}

function move() {
     updateMovement(1);
}

function moveAbajo() {
     updateMovement(-1);
}

// Función para restaurar la pregunta en el contenedor
function resetQuestion() {
     let contenedor = document.getElementById('preguntas');

     const preguntaElegida = preguntas[Math.floor(Math.random() * preguntas.length)];
     contenedor.innerHTML = `<h1>${preguntaElegida.pregunta}</h1>
     <button onclick="correcto()">${preguntaElegida.correcto}</button><br> <br>
     <button onclick="incorrecto()">${preguntaElegida.incorrecto}</button><br> <br>
     <button onclick="incorrecto()">${preguntaElegida.incorrecto2}</button><br> <br>
     <button onclick="incorrecto()">${preguntaElegida.incorrecto3}</button><br> <br>`;
}

// Función para manejar la respuesta y reiniciar el movimiento
function handleAnswer(moveFn) {

     document.getElementById('preguntas').innerHTML = "";

     if (puntos <= -1) {
          clearInterval(intervalo);
     } else {
          // Inicia el movimiento con la función move o moveAbajo
          intervalo = setInterval(moveFn, intervaloMovimiento);
     }


     // Reinicio tras un segundo
     contador = setInterval(() => {
          count++;
          if (count >= 1) {
               clearInterval(intervalo);
               clearInterval(contador);
               resetQuestion();
          }
     }, 1000);

     if (puntos >= 6) {
          clearInterval(intervalo);
          alert('¡Has ganado!')
          return
     }


}

function correcto() {
     handleAnswer(move);
     puntos++ 

}

function incorrecto() {
     handleAnswer(moveAbajo);
     puntos--
}
