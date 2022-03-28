
/* VARIABLES */
let arrMesasDispAden = [];
const botonReservaAdentro = document.querySelector(".botonResAden");
const mesasDispAden = document.querySelector(".mesasDispAden");


let arrMesasDispAfu = [];
const botonReservaAfuera = document.querySelector(".botonResAfu");
const mesasDispAfu = document.querySelector(".mesasDispAfu");

const h1 = document.querySelector('.nombreH1');
let arrayPersonasLocalStorage = JSON.parse(localStorage.getItem("arrayPersonas")) || [];
let nombrePersona = arrayPersonasLocalStorage.pop();




/* EVENTOS */
document-addEventListener("DOMContentLoaded", ()=>{
    agregarNombrePed();
    mostrarMesasDisponiblesAden();
    mostrarMesasDisponiblesAfu();
})


botonReservaAdentro.addEventListener("click", function(){
    localStorageMesasAdentro();
})



botonReservaAfuera.addEventListener("click", function(){
    localStorageMesasAfuera()
})




/* MESAS DE ADENTRO */

function localStorageMesasAdentro (){

    let arrayMesas = JSON.parse(localStorage.getItem('arrayMesasDispAdentro')) || [1, 2, 3, 4, 5, 6];

    arrayMesas.pop();
    
    mesasDispAden.innerHTML = "Contamos con " + arrayMesas.length + " mesas disponibles";

    arrMesasDispAden = arrayMesas;

    let arrayMesasJSON = JSON.stringify(arrayMesas);

    localStorage.setItem('arrayMesasDispAdentro', arrayMesasJSON);

    if(arrayMesas.length == [""]){
        mesasDispAden.innerHTML = "No contamos con mesas disponibles en este sector"
    }
}


function mostrarMesasDisponiblesAden(){
    let arrayMesas = JSON.parse(localStorage.getItem('arrayMesasDispAdentro')) || [1, 2, 3, 4, 5, 6];
    mesasDispAden.innerHTML = "Contamos con " + arrayMesas.length + " mesas disponibles";
}


/* MESAS DE AFUERA */
function localStorageMesasAfuera (){

    let arrayMesas = JSON.parse(localStorage.getItem('arrayMesasDispAfuera')) || [1, 2, 3, 4, 5, 6, 7, 8];

    arrayMesas.pop();
    
    mesasDispAfu.innerHTML = "Contamos con " + arrayMesas.length + " mesas disponibles";

    arrMesasDispAfu = arrayMesas;

    let arrayMesasJSON = JSON.stringify(arrayMesas);

    localStorage.setItem('arrayMesasDispAfuera', arrayMesasJSON);

    if(arrayMesas.length == [""]){
        mesasDispAden.innerHTML = "No contamos con mesas disponibles en este sector"
    }
}

function mostrarMesasDisponiblesAfu(){
    let arrayMesas = JSON.parse(localStorage.getItem('arrayMesasDispAfuera')) || [1, 2, 3, 4, 5, 6, 7, 8];
    mesasDispAfu.innerHTML = "Contamos con " + arrayMesas.length + " mesas disponibles";
}


function agregarNombrePed(){
    h1.innerHTML =`Hola! <b style="color:rgb(255, 185, 0);-webkit-text-stroke: 1px black;">${nombrePersona}</b> donde vas a querer solicitar la mesa?` ;
    
}