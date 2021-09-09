var saludarUsario = document.getElementById('bienvenida');
var mostrarResultados = document.getElementById('contenedorPrincipal');
var respuestasCorrectas = document.getElementById('respuestasCorrectas');
var respuestasIncorrectas= document.getElementById('respuestasIncorrectas');


var nombreUsuario = prompt("¿Cómo te llamas?");
saludarUsario.innerHTML = " Bienvenida " + nombreUsuario  ;

var iniciarPartida = parseInt(prompt("Vamos a jugar! \n ¿Eres mayor de edad? \n 1.Si \n 2.No"));


var continuarPartida = parseInt(prompt("Empieza a jugar nuestra trivia \n ¿Quieres iniciar la partida? \n 1.Si \n 2.No"));


mostrarResultados.style.display = '';
if (continuarPartida == 2) {
  mostrarResultados.innerHTML =  alert("Lamentamos que no desees jugar nuestra trivia");
}



function mostrarSeleccionado(event)
{
  event.preventDefault();
if (document.getElementById("miguelgrau").checked)
{
alert("Respuesta Incorrecta");
}
if (document.getElementById("simonbolivar").checked)
{
alert("Respuesta Incorrecta");
}
if (document.getElementById("sanmartin").checked)
{
alert("Respuesta Correcta");
}
}
function elegirRespuesta(event)
{
  event.preventDefault()
if (document.getElementById("pomadeayala").checked)
{
alert("Respuesta Incorrecta");
}
if (document.getElementById("juandiegoflores").checked)
{
alert("Respuesta Incorrecta");
}
if (document.getElementById("rosamerino").checked)
{
alert("Respuesta Correcta");
}
}

function seleccionarRespuesta(event)
{
  event.preventDefault()
if (document.getElementById("Palomas").checked)
{
alert("Respuesta Incorrecta");
}
if (document.getElementById("Huanay").checked)
{
alert("Respuesta Incorrecta");
}
if (document.getElementById("Parihuelas").checked)
{
alert("Respuesta Correcta");
}
}

function indicarRespuesta(event)
{
  event.preventDefault()
if (document.getElementById("Blasco Nuñez de Vela").checked)
{
alert("Respuesta Incorrecta");
}
if (document.getElementById("Abascal").checked)
{
alert("Respuesta Incorrecta");
}
if (document.getElementById("La Serna").checked)
{
alert("Respuesta Correcta");
}
}

function resultado(event)
 {
   event.preventDefault()
var p1, p2, p3, p4, nota;

<!-- 1ª pregunta -->
if (document.getElementById("sanmartin").checked==true) {p1=1}
else {p1=0}
<!-- 2ª pregunta -->
if (document.getElementById("rosamerino").checked==true) {p2=1}
else {p2=0}
<!-- 3ª pregunta -->
if (document.getElementById("Parihuelas").checked==true) {p3=1}
else {p3=0}
<!-- 4ª pregunta -->
if (document.getElementById("La Serna").checked==true) {p4=1}
else {p4=0}

nota=p1+p2+p3+p4;
alert(" Aciertos: " + nota);
resp=confirm("GRACIAS POR TU PARTICIPACION! LO HAS HECHO EXCELENTE!!");
if (resp==false) {document.forms[0].reset();location.reload()}
}

class Temporizador {
    constructor() {
        this.tiempo = 60;
    }

    getTime() {
        return this.tiempo;
    }

    init() {
        setInterval(() => {
            this.tiempo--;
            document.getElementById('countdown').innerHTML = this.tiempo;
        },1000);
    }
}

var temporizador = new Temporizador();
temporizador.init();
