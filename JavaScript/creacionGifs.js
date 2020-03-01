//Capturar video desde el navegador
let video = document.querySelector("video");
function capturar() {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
    })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(console.error);
    let info = document.querySelector("div.container");
    info.removeAttribute("style");
    let capturador = document.querySelector("div.captura");
    capturador.removeAttribute("style");
}
// Cancelar grabación :v
function cancelar() {
    document.querySelector(".container").remove();
}
// Comenzar grabación
function grabar() {
    recorder = RecordRTC(video.srcObject, {
        type: 'gif',
        frameRate: 1,
        quality: 10,
        width: 360,
        hidden: 240,
        onGifRecordingStarted: () => {
            console.log('started');
        }
    });
    recorder.startRecording();
    start()
    let imagen = document.querySelector(".capturar button img");
    imagen.src = "img/recording_dark.svg";
    imagen.style.filter = "contrast(0) brightness(0);";
    let botones = document.querySelectorAll(".capturar button");
    botones[0].style.background = "#FF6161";
    botones[1].style.background = "#FF6161";
    botones[1].innerHTML = "Listo";
    botones[0].setAttribute("onclick", "detener()");
    botones[1].setAttribute("onclick", "detener()");
    document.querySelector("div.duracion").removeAttribute("style");
}
function detener() {
    recorder.stopRecording(function() {
        let blob = recorder.blob;
        let url = URL.createObjectURL(blob);
        console.warn(blob);
        console.warn(url);
    });
    stop();
}
// Cronometro
window.onload = function() {
    pantalla = document.getElementById("screen");
}
var isMarch = false; 
var acumularTime = 0; 
function start () {
    if (isMarch == false) { 
        timeInicial = new Date();
        control = setInterval(cronometro,10);
        isMarch = true;
    }
    console.log("Inicio");
}
function cronometro () { 
    timeActual = new Date();
    acumularTime = timeActual - timeInicial;
    acumularTime2 = new Date();
    acumularTime2.setTime(acumularTime); 
    cc = Math.round(acumularTime2.getMilliseconds()/10);
    ss = acumularTime2.getSeconds();
    mm = acumularTime2.getMinutes();
    hh = acumularTime2.getHours()-19;
    if (cc < 10) {cc = "0"+cc;}
    if (ss < 10) {ss = "0"+ss;} 
    if (mm < 10) {mm = "0"+mm;}
    if (hh < 10) {hh = "0"+hh;}
    pantalla.innerHTML = hh+":"+mm+":"+ss+":"+cc;
}
function stop () { 
    if (isMarch == true) {
        clearInterval(control);
        isMarch = false;
    }
    console.log("Fin");
}