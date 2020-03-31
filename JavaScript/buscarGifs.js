let sug1 = "Link";
let sug2 = "Avengers";
let sug3 = "Halo";
let sug4 = "Assassin's Creed";
// Ver más
function ver(numSug) {
    switch (numSug) {
        case 1:
            input = sug1;
            buscarGifs();
            break;
        case 2:
            input = sug2;
            buscarGifs();
            break;
        case 3:
            input = sug3;
            buscarGifs();
            break;
        case 4:
            input = sug4;
            buscarGifs();
            break;
        default:
            break;
    }
}
// Volver a buscar (historial)
function volverBuscar(e) {
    input = e;
    document.querySelector("input").value = "";
    buscarGifs();
}
window.onload = () => {
    // Trending------------------
    // Obtener gifs
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=p2qSK25QMBISYURSDjGYHQUzTn1gSLYD&limit=20")
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
            document.querySelectorAll("section.tendencias div.img")[i].appendChild(img);
            i++;
        });
    })
    .catch(console.error);
    // Obtener títulos
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=p2qSK25QMBISYURSDjGYHQUzTn1gSLYD&limit=20")
    .then(res => res.json())
    .then(res => res.data)
    .then(array => array.map(function(e){ return e.title}))
    .then(titulos =>{
        let i = 0;
        titulos.forEach(titulo => {
            let indice = titulo.search("GIF");
            texto = titulo.slice(0,indice);
            document.querySelectorAll("section.tendencias div.gif div.tags")[i].innerText = texto;
            i++;
        });
    })
    .catch(console.error);
    // Sugerencias------------------
    // Obtener gifs
    fetch("https://api.giphy.com/v1/gifs/search?q="+sug1+"&api_key=p2qSK25QMBISYURSDjGYHQUzTn1gSLYD&limit=1")
    .then(res => res.json())
    .then(res => res.data[0].id)
    .then(id =>{
            let img = document.createElement('img');
            img.src = "https://media.giphy.com/media/"+id+"/giphy.gif";
            img.style.position = "absolute";
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.zIndex = 0;
            document.querySelectorAll("section.sugerencia div.img")[0].appendChild(img);
    })
    .catch(console.error);
    // Obtener títulos
    fetch("https://api.giphy.com/v1/gifs/search?q="+sug1+"&api_key=p2qSK25QMBISYURSDjGYHQUzTn1gSLYD&limit=1")
    .then(res => res.json())
    .then(res => res.data[0].title)
    .then(titulo =>{
            let indice = titulo.search("GIF");
            texto = titulo.slice(0,indice);
            document.querySelectorAll("section.sugerencia div.gif div.barraTitulo")[0].innerHTML = texto+'<img src="img/button3.svg" alt="Botón eliminar" width="16" height="16">';
    })
    .catch(console.error);
    // ------------------------------------------------------------------
    // Obtener gifs
    fetch("https://api.giphy.com/v1/gifs/search?q="+sug2+"&api_key=p2qSK25QMBISYURSDjGYHQUzTn1gSLYD&limit=1")
    .then(res => res.json())
    .then(res => res.data[0].id)
    .then(id =>{
            let img = document.createElement('img');
            img.src = "https://media.giphy.com/media/"+id+"/giphy.gif";
            img.style.position = "absolute";
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.zIndex = 0;
            document.querySelectorAll("section.sugerencia div.img")[1].appendChild(img);
    })
    .catch(console.error);
    // Obtener títulos
    fetch("https://api.giphy.com/v1/gifs/search?q="+sug2+"&api_key=p2qSK25QMBISYURSDjGYHQUzTn1gSLYD&limit=1")
    .then(res => res.json())
    .then(res => res.data[0].title)
    .then(titulo =>{
            let indice = titulo.search("GIF");
            texto = titulo.slice(0,indice);
            document.querySelectorAll("section.sugerencia div.gif div.barraTitulo")[1].innerHTML = texto+'<img src="img/button3.svg" alt="Botón eliminar" width="16" height="16">';
    })
    .catch(console.error);
    // ------------------------------------------------------------------
    // Obtener gifs
    fetch("https://api.giphy.com/v1/gifs/search?q="+sug3+"&api_key=p2qSK25QMBISYURSDjGYHQUzTn1gSLYD&limit=1")
    .then(res => res.json())
    .then(res => res.data[0].id)
    .then(id =>{
            let img = document.createElement('img');
            img.src = "https://media.giphy.com/media/"+id+"/giphy.gif";
            img.style.position = "absolute";
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.zIndex = 0;
            document.querySelectorAll("section.sugerencia div.img")[2].appendChild(img);
    })
    .catch(console.error);
    // Obtener títulos
    fetch("https://api.giphy.com/v1/gifs/search?q="+sug3+"&api_key=p2qSK25QMBISYURSDjGYHQUzTn1gSLYD&limit=1")
    .then(res => res.json())
    .then(res => res.data[0].title)
    .then(titulo =>{
            let indice = titulo.search("GIF");
            texto = titulo.slice(0,indice);
            document.querySelectorAll("section.sugerencia div.gif div.barraTitulo")[2].innerHTML = texto+'<img src="img/button3.svg" alt="Botón eliminar" width="16" height="16">';
    })
    .catch(console.error);
    // ------------------------------------------------------------------
    // Obtener gifs
    fetch("https://api.giphy.com/v1/gifs/search?q="+sug4+"&api_key=p2qSK25QMBISYURSDjGYHQUzTn1gSLYD&limit=1")
    .then(res => res.json())
    .then(res => res.data[0].id)
    .then(id =>{
            let img = document.createElement('img');
            img.src = "https://media.giphy.com/media/"+id+"/giphy.gif";
            img.style.position = "absolute";
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.zIndex = 0;
            document.querySelectorAll("section.sugerencia div.img")[3].appendChild(img);
    })
    .catch(console.error);
    // Obtener títulos
    fetch("https://api.giphy.com/v1/gifs/search?q="+sug4+"&api_key=p2qSK25QMBISYURSDjGYHQUzTn1gSLYD&limit=1")
    .then(res => res.json())
    .then(res => res.data[0].title)
    .then(titulo =>{
            let indice = titulo.search("GIF");
            texto = titulo.slice(0,indice);
            document.querySelectorAll("section.sugerencia div.gif div.barraTitulo")[3].innerHTML = texto+'<img src="img/button3.svg" alt="Botón eliminar" width="16" height="16">';
    })
    .catch(console.error);
    // ------------------------------------------------------------------
}
let input;
// Buscador de gifs
async function buscarGifs(){
    if (document.querySelector("input").value.length > 0) { 
        input = document.querySelector("input").value;
    }
    guardar();
    document.querySelector(".tendencias").scrollIntoView({
        behavior: "smooth"
    })

    document.querySelector('.tendencias .barraDivision').innerText = "Resultado de búsqueda: "+input;
    
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
            document.querySelectorAll(".tendencias div.img")[i].appendChild(img);
            i++;
        });
    })
    .catch(console.error);
}
document.querySelector("input").addEventListener("keyup", e => {
    if (e.key === "Enter"){
        buscarGifs();
    }
})