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
var light = true;
function night(){
    light = false;
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
    // ---Menú temas------------------------------------------------------------------
    let botonDay = document.querySelector("button.day");
    botonDay.style.background = "#F0F0F0";
    botonDay.style.border = "1px solid #808080";
    botonDay.style.boxShadow = "inset -1px -1px 0 0 #B4B4B4, inset 1px 1px 0 0 #FFFFFF";
    let botonNight = document.querySelector("button.night");
    botonNight.style.background = "#2E32FB";
    botonNight.style.border = "1px solid rgba(51,53,143,0.20)";
    botonNight.style.boxShadow = "inset -1px -1px 0 0 #E6DCE4, inset 1px 1px 0 0 #FFFFFF";
    // ---Imágenes------------------------------------------------------------------
    document.getElementById("logo").src = "img/gifOF_logo_dark.png";
    document.getElementById("lista").style.setProperty('filter',"invert(1)");
    let input = document.forms.buscador.buscar.value;
    if(input.length > 0){
        document.getElementById("lupa").setAttribute("src", "img/lupa_light.svg");
    }else{
        document.getElementById("lupa").setAttribute("src", "img/Combined Shape.svg");
    }
}
function day() {
    light = true;
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
    // ---Menú temas------------------------------------------------------------------
    let botonNight = document.querySelector("button.night");
    botonNight.style.background = "#F0F0F0";
    botonNight.style.border = "1px solid #808080";
    botonNight.style.boxShadow = "inset -1px -1px 0 0 #B4B4B4, inset 1px 1px 0 0 #FFFFFF";
    let botonDay = document.querySelector("button.day");
    botonDay.removeAttribute("style");
    // ---Imágenes------------------------------------------------------------------
    document.getElementById("logo").src = "img/gifOF_logo.png";
    document.getElementById("lista").style.setProperty('filter',"invert(0)");
    let input = document.forms.buscador.buscar.value;
    if(input.length > 0){
        document.getElementById("lupa").setAttribute("src", "img/lupa.svg");
    }else{
        document.getElementById("lupa").setAttribute("src", "img/lupa_inactive.svg");
    }
}
// Mostar sugerencias de búsqueda
function comprobar(){
    let input = document.forms.buscador.buscar.value;
    if(input.length > 0){
        document.getElementById("sugerenciasBuscador").style.setProperty('visibility',"visible");
        document.getElementById("buscador").style.setProperty('background-color',"var(--colorBoton1)");
        document.getElementById("texto").style.setProperty('color',"var(--colorTexto)");
        if(light){
            document.getElementById("lupa").setAttribute("src", "img/lupa.svg");
        }else{
            document.getElementById("lupa").setAttribute("src", "img/lupa_light.svg");
        }
    }else{
        document.getElementById("sugerenciasBuscador").style.setProperty('visibility',"hidden");
        document.getElementById("buscador").style.setProperty('background-color',"var(--fondoVentana)");
        document.getElementById("texto").style.removeProperty('color');
        if(light){
            document.getElementById("lupa").setAttribute("src", "img/lupa_inactive.svg");
        }else{
            document.getElementById("lupa").setAttribute("src", "img/Combined Shape.svg");
        }
    }
}
//Ir a crear gif
function crearGif() {
    if(window.location.pathname.slice(-17) !== "/creacionGif.html"){
        window.location = "creacionGif.html";
    }
}
// Devuelta al index.html
function index() {
    window.location = "index.html";
    console.log("inicio");
}
function inicio() {
    document.querySelector("body").scrollIntoView({
        behavior: "smooth"
    })
}
// Historial de búsqueda
let historial = [];
function guardar() {
    let box = document.querySelector("div.historial");
    let boton = document.createElement("button");
    boton.classList.add("boton2");
    if (historial.length < 20) {
        historial.unshift(input)
    }else{
        historial.pop();
        historial.unshift(input);
    }
    boton.innerText = "#"+input;
    boton.setAttribute("onclick", "volverBuscar('"+input+"')");
    box.appendChild(boton);
}
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        if (window.location.pathname.slice(-11) === "/index.html" || window.location.pathname === "/") {
            document.querySelector("button.top").style.transform = "translateY(0px)"
        }
    }else{
        if (window.location.pathname.slice(-11) === "/index.html" || window.location.pathname === "/") {
            document.querySelector("button.top").style.transform = "translateY(100px)"
        }
    }
})