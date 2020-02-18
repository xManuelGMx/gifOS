// Presentar los gifs buscados por el usuario
(async function(){
    let input = localStorage.getItem("Input");
    // Redireccionar página
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
})()