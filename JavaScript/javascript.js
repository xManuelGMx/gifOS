// Menú desplegable de los temas
function mostrar() {
    let menuTemasActual = document.getElementById("temas").style.display;
    let menuTemasMostrar = "flex";
    let menuTemasEsconder = "none";
    if(menuTemasActual !== menuTemasMostrar){
        document.getElementById("temas").style.setProperty('display',menuTemasMostrar);
    }else{
        document.getElementById("temas").style.setProperty('display',menuTemasEsconder);
    }
}
// Tema oscuro de la página (swicth)
function night(){
    let root = document.documentElement;
    // ---colorFondo------------------------------------------------------------------
    root.style.setProperty('--colorFondo',"#110938");
    // ---colorBarraSecundario------------------------------------------------------------------
    root.style.setProperty('--colorBarraSecundario',"#EE3EFE");
    // ---colorBarraPrimario------------------------------------------------------------------
    root.style.setProperty('--colorBarraPrimario',"#2E32FB");
    // ---colorBoton1------------------------------------------------------------------
    root.style.setProperty('--colorBoton1',"#EE3EFE");
    // ---colorBoton1Borde1------------------------------------------------------------------
    root.style.setProperty('--colorBoton1Borde1',"#A72CB3");
    // ---colorVentanaBorde1------------------------------------------------------------------
    root.style.setProperty('--colorVentanaBorde1',"#8F8F8F");
    // ---colorBoton2Borde1------------------------------------------------------------------
    root.style.setProperty('--colorBoton2Borde1',"#2124B3");
    // ---colorBoton2Fondo------------------------------------------------------------------
    root.style.setProperty('--colorBoton2Fondo',"#2E32FB");
    // ---colorDivisionBorde------------------------------------------------------------------
    root.style.setProperty('--colorDivisionBorde',"#2E32FB");
    // ---colorDivisionBorde2------------------------------------------------------------------
    root.style.setProperty('--colorDivisionBorde2',"#110038");
    // ---colorGifBorde1------------------------------------------------------------------
    root.style.setProperty('--colorGifBorde1',"#5C5C5C");
    // ---colorTexto------------------------------------------------------------------
    root.style.setProperty('--colorTexto',"#FFFFFF");
    // ---colorTextoBoton------------------------------------------------------------------
    root.style.setProperty('--colorTextoBoton',"#8F8F8F");
    // ---fondoVentana------------------------------------------------------------------
    root.style.setProperty('--fondoVentana',"#B4B4B4");
    // ---Imágenes------------------------------------------------------------------
    document.getElementById("logo").src = "gifOS_UI 3/assets/gifOF_logo_dark.png";
    document.getElementById("lista").style.setProperty('filter',"invert(1)");
    document.getElementById("lupa").style.setProperty('filter',"contrast(0.3)");
}
function day() {
    let root = document.documentElement;
    // ---colorFondo------------------------------------------------------------------
    root.style.setProperty('--colorFondo',"#FEF4FD");
    // ---colorBarraSecundario------------------------------------------------------------------
    root.style.setProperty('--colorBarraSecundario',"#F7C9F3");
    // ---colorBarraPrimario------------------------------------------------------------------
    root.style.setProperty('--colorBarraPrimario',"#4180F6");
    // ---colorBoton1------------------------------------------------------------------
    root.style.setProperty('--colorBoton1',"#F7C9F3");
    // ---colorBoton1Borde1------------------------------------------------------------------
    root.style.setProperty('--colorBoton1Borde1',"#997D97");
    // ---colorVentanaBorde1------------------------------------------------------------------
    root.style.setProperty('--colorVentanaBorde1',"#B4B4B4");
    // ---colorBoton2Borde1------------------------------------------------------------------
    root.style.setProperty('--colorBoton2Borde1',"#284F99");
    // ---colorBoton2Fondo------------------------------------------------------------------
    root.style.setProperty('--colorBoton2Fondo',"#4180F6");
    // ---colorDivisionBorde------------------------------------------------------------------
    root.style.setProperty('--colorDivisionBorde',"#E6BBE2");
    // ---colorDivisionBorde2------------------------------------------------------------------
    root.style.setProperty('--colorDivisionBorde2',"#80687D");
    // ---colorGifBorde1------------------------------------------------------------------
    root.style.setProperty('--colorGifBorde1',"#B4B4B4");
    // ---colorTexto------------------------------------------------------------------
    root.style.setProperty('--colorTexto',"#110038");
    // ---colorTextoBoton------------------------------------------------------------------
    root.style.setProperty('--colorTextoBoton',"#B4B4B4");
    // ---fondoVentana------------------------------------------------------------------
    root.style.setProperty('--fondoVentana',"#E6E6E6");
    // ---Imágenes------------------------------------------------------------------
    document.getElementById("logo").src = "gifOS_UI 3/assets/gifOF_logo.png";
    document.getElementById("lista").style.setProperty('filter',"invert(0)");
    document.getElementById("lupa").style.setProperty('filter',"contrast(1)");
}
// Mostar sugerencias de búsqueda
function comprobar(){
    let input = document.forms.buscador.buscar.value;
    if(input.length > 0){
        document.getElementById("sugerenciasBuscador").style.setProperty('visibility',"visible");
        document.getElementById("buscador").style.setProperty('background-color',"var(--colorBoton1)");
        document.getElementById("lupa").style.setProperty('filter',"contrast(0) brightness(0)");
        document.getElementById("texto").style.setProperty('color',"var(--colorTexto)");
    }else{
        document.getElementById("sugerenciasBuscador").style.setProperty('visibility',"hidden");
        document.getElementById("buscador").style.setProperty('background-color',"var(--fondoVentana)");
        document.getElementById("lupa").style.setProperty('filter',"none");
        document.getElementById("texto").style.removeProperty('color');
    }
}
// Buscador de gifs
async function buscarGifs(){
    localStorage.setItem("Input",document.forms.buscador.buscar.value);
    let input = localStorage.getItem("Input");
    // Redireccionar página
    if(window.location.pathname !== "/busqueda.html"){
        window.location="busqueda.html";
    }else{
        document.querySelector('.barraDivision').innerText = "Resultado de búsqueda: "+input;
        // GET de los gifs al API
        await fetch("https://api.giphy.com/v1/gifs/search?q="+input+"&api_key=p2qSK25QMBISYURSDjGYHQUzTn1gSLYD&limit=20")
        .then(res => res.json())
        .then(res => res.data)
        .then(array => array.map(function(e){ return e.id}))
        .then(urls =>{
            let i = 0;
            urls.forEach(id => {
                let img = document.createElement('img');
                img.src = "https://media.giphy.com/media/"+id+"/giphy.gif";
                img.style.position = "absolute";
                img.style.width = "100%";
                img.style.height = "100%";
                img.style.zIndex = 0;
                document.querySelectorAll("div.img")[i].appendChild(img);
                i++;
            });
        })
        .catch(console.error);
    }
}
//Ir a crear gif
function crearGif() {
    if(window.location.pathname !== "/creacionGif.html"){
        window.location = "creacionGif.html";
    }
}
// Devuelta al index.html
function inicio() {
    window.location = "index.html";
}
//Capturar video desde el navegador
function grabar() {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: { max: 480 }
        }
    })
    .then(function(stream) {
        video.srcObject = stream;
        video.play();
    })
}