//Capturar video desde el navegador
let video = document.querySelector("video");
function grabar() {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
    })
    .then(function(stream) {
        video.srcObject = stream;
        video.play();
    })
    .catch(console.error)
    let info = document.querySelector("div.container");
    info.removeAttribute("style");
    let capturador = document.querySelector("div.captura");
    capturador.removeAttribute("style");
}
// Cancelar grabación :v
function cancelar() {
    document.querySelector(".container").remove()
}