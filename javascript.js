function night(){
    let root = document.documentElement;
    // ---colorFondo------------------------------------------------------------------
    let colorFondoActual = root.style.getPropertyValue('--colorFondo');
    let colorFondo1 = "#FEF4FD";
    let colorFondo2 = "#110938";
    if(colorFondoActual !== colorFondo2){
        root.style.setProperty('--colorFondo',colorFondo2);        
    }else{
        root.style.setProperty('--colorFondo',colorFondo1);
    }
    // ---colorBarraSecundario------------------------------------------------------------------
    let colorBarraSecundarioActual = root.style.getPropertyValue('--colorBarraSecundario');
    let colorBarraSecundario1 = "#F7C9F3";
    let colorBarraSecundario2 = "#EE3EFE";
    if(colorBarraSecundarioActual !== colorBarraSecundario2){
        root.style.setProperty('--colorBarraSecundario',colorBarraSecundario2);        
    }else{
        root.style.setProperty('--colorBarraSecundario',colorBarraSecundario1);
    }
    // ---colorBarraPrimario------------------------------------------------------------------
    let colorBarraPrimarioActual = root.style.getPropertyValue('--colorBarraPrimario');
    let colorBarraPrimario1 = "#4180F6";
    let colorBarraPrimario2 = "#2E32FB";
    if(colorBarraPrimarioActual !== colorBarraPrimario2){
        root.style.setProperty('--colorBarraPrimario',colorBarraPrimario2);        
    }else{
        root.style.setProperty('--colorBarraPrimario',colorBarraPrimario1);
    }
    // ---colorBoton1------------------------------------------------------------------
    let colorBoton1Actual = root.style.getPropertyValue('--colorBoton1');
    let colorBoton11 = "#F7C9F3";
    let colorBoton12 = "#EE3EFE";
    if(colorBoton1Actual !== colorBoton12){
        root.style.setProperty('--colorBoton1',colorBoton12);        
    }else{
        root.style.setProperty('--colorBoton1',colorBoton11);
    }
    // ---colorBoton1Borde1------------------------------------------------------------------
    let colorBoton1Borde1Actual = root.style.getPropertyValue('--colorBoton1Borde1');
    let colorBoton1Borde11 = "#997D97";
    let colorBoton1Borde12 = "#A72CB3";
    if(colorBoton1Borde1Actual !== colorBoton1Borde12){
        root.style.setProperty('--colorBoton1Borde1',colorBoton1Borde12);        
    }else{
        root.style.setProperty('--colorBoton1Borde1',colorBoton1Borde11);
    }
    // ---colorVentanaBorde1------------------------------------------------------------------
    let colorVentanaBorde1Actual = root.style.getPropertyValue('--colorVentanaBorde1');
    let colorVentanaBorde11 = "#B4B4B4";
    let colorVentanaBorde12 = "#8F8F8F";
    if(colorVentanaBorde1Actual !== colorVentanaBorde12){
        root.style.setProperty('--colorVentanaBorde1',colorVentanaBorde12);        
    }else{
        root.style.setProperty('--colorVentanaBorde1',colorVentanaBorde11);
    }
    // ---colorBoton2Borde1------------------------------------------------------------------
    let colorBoton2Borde1FondoActual = root.style.getPropertyValue('--colorBoton2Borde1');
    let colorBoton2Borde1Fondo1 = "#284F99";
    let colorBoton2Borde1Fondo2 = "#2124B3";
    if(colorBoton2Borde1FondoActual !== colorBoton2Borde1Fondo2){
        root.style.setProperty('--colorBoton2Borde1',colorBoton2Borde1Fondo2);        
    }else{
        root.style.setProperty('--colorBoton2Borde1',colorBoton2Borde1Fondo1);
    }
    // ---colorBoton2Fondo------------------------------------------------------------------
    let colorBoton2FondoActual = root.style.getPropertyValue('--colorBoton2Fondo');
    let colorBoton2Fondo1 = "#4180F6";
    let colorBoton2Fondo2 = "#2E32FB";
    if(colorBoton2FondoActual !== colorBoton2Fondo2){
        root.style.setProperty('--colorBoton2Fondo',colorBoton2Fondo2);        
    }else{
        root.style.setProperty('--colorBoton2Fondo',colorBoton2Fondo1);
    }
    // ---colorDivisionBorde------------------------------------------------------------------
    let colorDivisionBordeActual = root.style.getPropertyValue('--colorDivisionBorde');
    let colorDivisionBorde1 = "#E6BBE2";
    let colorDivisionBorde2 = "#2E32FB";
    if(colorDivisionBordeActual !== colorDivisionBorde2){
        root.style.setProperty('--colorDivisionBorde',colorDivisionBorde2);        
    }else{
        root.style.setProperty('--colorDivisionBorde',colorDivisionBorde1);
    }
    // ---colorDivisionBorde2------------------------------------------------------------------
    let colorDivisionBorde2Actual = root.style.getPropertyValue('--colorDivisionBorde2');
    let colorDivisionBorde21 = "#80687D";
    let colorDivisionBorde22 = "#110038";
    if(colorDivisionBorde2Actual !== colorDivisionBorde22){
        root.style.setProperty('--colorDivisionBorde2',colorDivisionBorde22);        
    }else{
        root.style.setProperty('--colorDivisionBorde2',colorDivisionBorde21);
    }
    // ---colorGifBorde1------------------------------------------------------------------
    let colorGifBorde1Actual = root.style.getPropertyValue('--colorGifBorde1');
    let colorGifBorde11 = "#B4B4B4";
    let colorGifBorde12 = "#5C5C5C";
    if(colorGifBorde1Actual !== colorGifBorde12){
        root.style.setProperty('--colorGifBorde1',colorGifBorde12);        
    }else{
        root.style.setProperty('--colorGifBorde1',colorGifBorde11);
    }
    // ---colorTexto------------------------------------------------------------------
    let colorTextoActual = root.style.getPropertyValue('--colorTexto');
    let colorTexto1 = "#110038";
    let colorTexto2 = "#FFFFFF";
    if(colorTextoActual !== colorTexto2){
        root.style.setProperty('--colorTexto',colorTexto2);        
    }else{
        root.style.setProperty('--colorTexto',colorTexto1);
    }
    // ---colorTextoBoton------------------------------------------------------------------
    let colorTextoBotonActual = root.style.getPropertyValue('--colorTextoBoton');
    let colorTextoBoton1 = "#B4B4B4";
    let colorTextoBoton2 = "#8F8F8F";
    if(colorTextoBotonActual !== colorTextoBoton2){
        root.style.setProperty('--colorTextoBoton',colorTextoBoton2);        
    }else{
        root.style.setProperty('--colorTextoBoton',colorTextoBoton1);
    }
    // ---fondoVentana------------------------------------------------------------------
    let fondoVentanaActual = root.style.getPropertyValue('--fondoVentana');
    let fondoVentana1 = "#E6E6E6";
    let fondoVentana2 = "#B4B4B4";
    if(fondoVentanaActual !== fondoVentana2){
        root.style.setProperty('--fondoVentana',fondoVentana2);        
    }else{
        root.style.setProperty('--fondoVentana',fondoVentana1);
    }
    
    // ---Imágenes------------------------------------------------------------------
    let imgLogoActual = document.getElementById("logo").getAttribute("src");
    let imgLogo1 = "gifOS_UI 3/assets/gifOF_logo.png";
    let imgLogo2 = "gifOS_UI 3/assets/gifOF_logo_dark.png";
    if(imgLogoActual === imgLogo1){
        document.getElementById("logo").src = imgLogo2;
    }else{
        document.getElementById("logo").src = imgLogo1;
    }

    let imgListaActual = document.getElementById("lista").style.filter;
    let imgLista1 = "invert(0)";
    let imgLista2 = "invert(1)";
    if(imgListaActual !== imgLista2){
        document.getElementById("lista").style.setProperty('filter',imgLista2);        
    }else{
        document.getElementById("lista").style.setProperty('filter',imgLista1);
    }

    let imgLupaActual = document.getElementById("lupa").style.filter;
    let imgLupaa1 = "contrast(1)";
    let imgLupaa2 = "contrast(0.3)";
    if(imgLupaActual !== imgLupaa2){
        document.getElementById("lupa").style.setProperty('filter',imgLupaa2);        
    }else{
        document.getElementById("lupa").style.setProperty('filter',imgLupaa1);
    }
}
function comprobar(){
    let input = document.forms.buscador.buscar.value;
    if(input.length > 0){
        document.getElementById("sugerenciasBuscador").style.setProperty('visibility',"visible");
        document.getElementById("buscador").style.setProperty('background-color',"var(--colorBoton1)");
        document.getElementById("lupa").style.setProperty('filter',"contrast(0) brightness(0)");
        document.getElementById("texto").style.setProperty('color',"var(--colorTexto)");

        function buscar() {
            document.getElementById("sugerenciasBuscador").style.removeProperty('visibility');
            input = 0;
        }
    }else{
        document.getElementById("sugerenciasBuscador").style.setProperty('visibility',"hidden");
        document.getElementById("buscador").style.setProperty('background-color',"var(--fondoVentana)");
        document.getElementById("lupa").style.setProperty('filter',"none");
        document.getElementById("texto").style.removeProperty('color');
    }
}
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