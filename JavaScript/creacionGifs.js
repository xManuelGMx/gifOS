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
            console.log('Inicio');
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

    document.querySelector("div.captura div.barraTitulo").innerHTML = 'Capturando Tu Guifo<img src="img/button3.svg" alt="Botón eliminar" width="16" height="16">';
}
let blob;
let gifActual;
let form;
let url;
function detener() {
    recorder.stopRecording(function() {
        blob = recorder.getBlob();
        form = new FormData();
        form.append('file', blob, 'myGif.gif');
        gifActual = form.get('file');
        url = URL.createObjectURL(gifActual);
        
        // Colocar gif
        let img = document.createElement('img');
        img.src = url;
        img.style.position = "absolute";
        img.style.height = "100%";

        let divVideo = document.querySelector("div.video");
        let video = document.querySelector("video")
        divVideo.insertBefore(img, video);

        document.querySelector("button.repeat").setAttribute("style", "display: block");
        document.querySelector("button.upload").setAttribute("style", "display: block");
        document.querySelector("div.captura div.capturar button:nth-child(1)").setAttribute("style", "display: none");
        document.querySelector("div.captura div.capturar button:nth-child(2)").setAttribute("style", "display: none");

        document.querySelector("div.captura div.barraTitulo").innerHTML = "Vista Previa";
    });
    console.log("Fin");
}
// crear campo del gif
window.onload = () => {
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "cont") {
            let divLista = document.querySelector("section.mis div.lista");
            let divGif = document.createElement("div");
            divGif.setAttribute("class", "gif");
            let divImg = document.createElement("div");
            divImg.setAttribute("class", "img");
            
            let img = document.createElement('img');
            img.style.position = "absolute";
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.zIndex = 0;
            img.alt = "Gif"+(i+1);
            img.src = "https://media.giphy.com/media/"+localStorage.getItem("Gif"+i)+"/giphy.gif";
            
            divLista.insertBefore(divGif, document.querySelectorAll("section.mis div.gif")[0])
            divGif.appendChild(divImg);
            divImg.appendChild(img)
        }
    }
}
function repetir() {
    // Reset
    let imagen = document.querySelector(".capturar button img");
    imagen.src = "img/camera.svg";
    imagen.style.filter = "contrast(0) brightness(0);";
    let botones = document.querySelectorAll(".capturar button");
    botones[0].style.background = "#FF6161";
    botones[1].style.background = "#FF6161";
    botones[1].innerHTML = "Capturar";
    botones[0].setAttribute("onclick", "grabar()");
    botones[1].setAttribute("onclick", "grabar()");
    document.querySelector("button.repeat").setAttribute("style", "display: none");
    document.querySelector("button.upload").setAttribute("style", "display: none");
    document.querySelector("div.captura div.capturar button:nth-child(1)").setAttribute("style", "display: block");
    document.querySelector("div.captura div.capturar button:nth-child(2)").setAttribute("style", "display: block");
    document.querySelector("div.video img").remove();
    capturar();
}
let cont = localStorage.getItem("cont")
function guardar() {
    if (window.location.pathname.slice(-17) === "/creacionGif.html") {
        fetch("https://upload.giphy.com/v1/gifs?api_key=p2qSK25QMBISYURSDjGYHQUzTn1gSLYD", {method: "POST", body: form})
        .then(res => res.json())
        .then(json => json.data.id)
        .then(id => localStorage.setItem("Gif"+cont,id))
        .catch(err => console.error("Error al hacer upload: "+err.message))
        localStorage.setItem("cont", ++cont)

        video.remove();
        document.querySelector("div.captura div.barraTitulo").innerHTML = 'Subiendo Guifo<img src="img/button3.svg" alt="Botón eliminar" width="16" height="16">';
        let divVideo = document.querySelector("div.video");
        let img = document.querySelector("div.video img");
        img.src = "img/globe_img.png";
        img.style.width = "auto";
        img.style.height = "3em";
        img.style.opacity = "1";
        img.style.transform = "translateY(-45px)";
        divVideo.setAttribute("style", "background-color: white");
        document.querySelector("button.upload").remove();
        document.querySelector("button.repeat").innerHTML = "Cancelar";
    
        let span = document.createElement("span");
        span.classList.add("text");
        span.innerHTML = "Estamos subiendo tu guifo…";
        document.querySelector("div.video").appendChild(span);
    
        setTimeout(() => {
            document.querySelector("div.captura").remove();
            document.querySelector("div.exito").removeAttribute("style");
            document.querySelector("div.vistaPrevia div.img img").src = url;
        },3000);

    }
}
function copy() {
    // Crea un campo de texto "oculto"
    var aux = document.createElement("input");
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", url);
    // Añade el campo a la página
    document.body.appendChild(aux);
    // Selecciona el contenido del campo
    aux.select();
    // Copia el texto seleccionado
    document.execCommand("copy");
    // Elimina el campo de la página
    document.body.removeChild(aux);
}
function download() {
    alert("Proximamente!!")
}
function recargar() {
    window.location.reload();
}
