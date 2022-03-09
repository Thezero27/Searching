let canciones = ["media/gritos.mp3"];

var cont = 0;
var reproducir = false;

var audio = document.querySelector("#audio");
audio.setAttribute("src", canciones[cont]);

$(document).ready(function () {
    $("#play").click( () => { 
        Reproducir();
        reproducir = true;
    })
    $("#ventana").click( () => {
        Reproducir();
        reproducir = true;
    })
})//Fin Document Ready




function Reproducir() {
    audio.play();
}