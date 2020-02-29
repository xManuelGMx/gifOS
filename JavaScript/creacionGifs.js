//Capturar video desde el navegador
let video = document.querySelector("video");
function grabar() {
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
function capturar() {
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
    let imagen = document.querySelector(".capturar button img");
    imagen.src = "img/recording_dark.svg";
    imagen.style.filter = "contrast(0) brightness(0);";
    let botones = document.querySelectorAll(".capturar button");
    botones[0].style.background = "#FF6161";
    botones[1].style.background = "#FF6161";
    botones[1].innerHTML = "Listo";
    botones[0].setAttribute("onclick", "detener()");
    botones[1].setAttribute("onclick", "detener()");
}
function detener() {
    recorder.stopRecording(function() {
        let blob = recorder.blob;
        let url = URL.createObjectURL(blob);
        console.warn(url)
    });
}