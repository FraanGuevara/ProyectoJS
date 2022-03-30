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


/* -------------------------------------------------------------- */


/* EVENTOS */

document - addEventListener("DOMContentLoaded", () => {
    agregarNombrePed();
    mostrarMesasDisponiblesAden();
    mostrarMesasDisponiblesAfu();
})

/* Evento mesas adentro */
botonReservaAdentro.addEventListener("click", function () {
    let array = JSON.parse(localStorage.getItem('arrayMesasDispAdentro')) || [1, 2, 3, 4, 5, 6];
    if(array.length > 0){
        seleccionMesa('adentro', localStorageMesasAdentro, redireccionarAIndex);
    }else{
        noHayMesasDisponibles ();
    }
})


/* Eventos mesas afuera */
botonReservaAfuera.addEventListener("click", function () {
    let arrayAfuera = JSON.parse(localStorage.getItem('arrayMesasDispAfuera'))  || [1, 2, 3, 4, 5, 6, 7, 8];
    if(arrayAfuera.length > 0){
        seleccionMesa('afuera', localStorageMesasAfuera, redireccionarAIndex);
    }else{
        noHayMesasDisponibles ();
    }
})


/* -------------------------------------------------------------- */

/* funciones MESAS DE ADENTRO */

function localStorageMesasAdentro() {

    let arrayMesas = JSON.parse(localStorage.getItem('arrayMesasDispAdentro')) || [1, 2, 3, 4, 5, 6];

    arrayMesas.pop();

    mesasDispAden.innerHTML = "Contamos con " + arrayMesas.length + " mesas disponibles";

    arrMesasDispAden = arrayMesas;

    let arrayMesasJSON = JSON.stringify(arrayMesas);

    localStorage.setItem('arrayMesasDispAdentro', arrayMesasJSON);

    if (arrayMesas.length == [""]) {
        mesasDispAden.innerHTML = "No contamos con mesas disponibles en este sector"
    }
}

function mostrarMesasDisponiblesAden() {
    let arrayMesas = JSON.parse(localStorage.getItem('arrayMesasDispAdentro')) || [1, 2, 3, 4, 5, 6];
    mesasDispAden.innerHTML = "Contamos con " + arrayMesas.length + " mesas disponibles";
}


/* funciones MESAS DE AFUERA */
function localStorageMesasAfuera() {

    let arrayMesasAfuera = JSON.parse(localStorage.getItem('arrayMesasDispAfuera')) || [1, 2, 3, 4, 5, 6, 7, 8];

    arrayMesasAfuera.pop();

    mesasDispAfu.innerHTML = "Contamos con " + arrayMesasAfuera.length + " mesas disponibles";

    arrMesasDispAfu = arrayMesasAfuera;

    let arrayMesasJSON = JSON.stringify(arrayMesasAfuera);

    localStorage.setItem('arrayMesasDispAfuera', arrayMesasJSON);

    if (arrayMesasAfuera.length == [""]) {
        mesasDispAfu.innerHTML = "No contamos con mesas disponibles en este sector"
    }
}

function mostrarMesasDisponiblesAfu() {
    let arrayMesas = JSON.parse(localStorage.getItem('arrayMesasDispAfuera')) || [1, 2, 3, 4, 5, 6, 7, 8];
    mesasDispAfu.innerHTML = "Contamos con " + arrayMesas.length + " mesas disponibles";
}


/* Funcion para poner nombre al pedido */
function agregarNombrePed() {
    h1.innerHTML = `Hola! <b style="color:rgb(255, 185, 0);-webkit-text-stroke: 1px black;">${nombrePersona}</b> donde vas a querer solicitar la mesa?`;

}

/* Funcion para el alert de seleccion de mesa */
function seleccionMesa(text, callback, fn) {
    Swal.fire({
        color: 'white',
        title: `Desea seleccionar una mesa ${text} del bar`,
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#198754',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo continuar',
        background: ' hsla(202, 71%, 27%, 1)',
        backdrop: 'rgba(50,100,132,0.4)',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
            title:'Gracias!',
            text:` haz seleccionado una mesa ${text} seras redirigido en unos segundos`,
            icon:'success',
            backdrop: 'rgba(50,100,132,0.4)',
            background: 'hsla(202, 71%, 27%, 1)', color: 'white',
            confirmButtonColor: '#198754'})
            callback();
            fn();
        }
    })
}

/* Funcion alert cuando no hay mas mesas disponible en determinado sector */
function noHayMesasDisponibles (){
    Swal.fire({
        color: 'white',
        backdrop: 'rgba(50,100,132,0.4)',
        background: 'hsla(202, 71%, 27%, 1)',
        confirmButtonColor: '#198754',
        confirmButtonColor:'rgb(255, 185, 0)',
        icon: 'error',
        title: 'Lo sentimos..',
        text: 'No hay mesas disponibles en este sector',
        footer: '<a style="color:rgb(255, 185, 0); text-decoration:none;"href="../pages/barra.html"><b>Quieres ir pidiendo algo para tomar?<b/></a>',
    })
}

/* Funcion para redireccionar cuando haya elegido la mesa */
function redireccionarAIndex(){
    setTimeout(()=>{location.href="../index.html";}, 4000);
    } 