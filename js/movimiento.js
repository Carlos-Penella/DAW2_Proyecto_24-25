let intervalo
const intervaloMovimiento = 12
const distanciaMovimineto = 0.1


let yMover = 0
let yPato = 0
let xPato = -80
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


     contador = setInterval(() => {
          clearInterval(intervalo)
          clearInterval(contador)
          resetQuestion()

     }, 750)

     globos(unit * 13, unit * 5) // oumar


}

function drawMovimiento() {

     ctx.clearRect(0, 0, canvas.width, canvas.height + alturaTotal * unit)

     ctx.save()
     ctx.translate(0, yMover)
     torreon()  // pedro

     if (yMover > unit * 20) {
          techo(0, 92) // eric
     }

     castillo(unit * 3, 850) // raúl     
     tierraToda() // carlos

     // Solo dibuja los globos si puntos no es 6
     if (puntos != 7) {
          dibujarGlobo(unit * 14, unit * 83 - yPato, "red", "white", 0) // oumar

          const globosConfig = [
               { x: 12.4, y: 84, color: "blue", speed: -0.1 },
               { x: 15.5, y: 86, color: "pink", speed: 0.1 },
               { x: 12, y: 90, color: "limegreen", speed: -0.2 },
               { x: 14.3, y: 91, color: "purple", speed: 0.009 },
               { x: 15.6, y: 94, color: "yellow", speed: 0.25 },
               { x: 13.3, y: 97, color: "orange", speed: -0.1 }
          ];

          globosConfig.forEach((globo, index) => {
               if (puntos >= index + 1) {
                    const escalon = index * 2;
                    dibujarGlobo(unit * globo.x, unit * (globo.y - escalon) - yPato, globo.color, "white", globo.speed);
               }
          });
     }

     pato(xPato, unit * 50 - yPato) // javier   

     ctx.restore()
}

// Función para actualizar el movimiento (hacia arriba o hacia abajo)
function updateMovement(delta) {
     yMover += unit * distanciaMovimineto * delta;
     yPato += unit * 0.13 * delta;
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
    
    // Definir las respuestas
    let respuestas = [
        { texto: preguntaElegida.correcto, accion: "correcto()" },
        { texto: preguntaElegida.incorrecto, accion: "incorrecto()" },
        { texto: preguntaElegida.incorrecto2, accion: "incorrecto()" },
        { texto: preguntaElegida.incorrecto3, accion: "incorrecto()" }
    ];

    // Mezclar las respuestas aleatoriamente
   //respuestas.sort(() => Math.random() - 0.5);

    // Construir el HTML
    let html = `<h1>${preguntaElegida.pregunta}</h1>`;
    respuestas.forEach(respuesta => {
        html += `<button onclick="${respuesta.accion}">${respuesta.texto}</button><br> <br>`;
    });
    contenedor.innerHTML = html;
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

     if (puntos == 6) {
          clearInterval(intervalo);
          clearInterval(contador);          

          document.getElementById('preguntas').innerHTML = "";
          
          // Intervalo para mover el pato hacia la izquierda
          const intervaloIzquierda = setInterval(() => {
               xPato -= 1;
                // ajusta el valor para obtener el desplazamiento deseado
               drawMovimiento();
          }, intervaloMovimiento);

          setTimeout(() => {
               clearInterval(intervaloIzquierda);
               
               ctx.clearRect(0, 0, canvas.width, canvas.height + alturaTotal * unit);

               const contenedor = document.getElementsByClassName("contenedor")[0];
               contenedor.style.backgroundColor = "white";

               parteSuperior();

               pato(unit *-1, unit*37);
          }, 900);

          return;
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
