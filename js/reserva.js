
/* VARIABLES */
const arrMesasDispAden = [1, 2, 3, 4, 5];
const botonReservaAdentro = document.querySelector(".botonResAden");
const mesasDispAden = document.querySelector(".mesasDispAden");


const arrMesasDispAfu = [1, 2, 3, 4, 5];
const botonReservaAfuera = document.querySelector(".botonResAfu");
const mesasDispAfu = document.querySelector(".mesasDispAfu");

const h1 = document.querySelector('.nombreH1');
let arrayPersonasLocalStorage = JSON.parse(localStorage.getItem("arrayPersonas")) || [];
let nombrePersona = arrayPersonasLocalStorage.pop();




/* EVENTOS */
document-addEventListener("DOMContentLoaded", ()=>{
    agregarNombrePed()
})


botonReservaAdentro.addEventListener("click", function(){
    arrMesasDispAden.pop();
    mesasVisibles(mesasDispAden, arrMesasDispAden)
})



botonReservaAfuera.addEventListener("click", function(){
    arrMesasDispAfu.pop();
    mesasVisibles(mesasDispAfu, arrMesasDispAfu)
})



/* FUNCIONES */

/* Para que muestre la cantidad de mesas disponibles */
mesasVisibles(mesasDispAden, arrMesasDispAden);
mesasVisibles(mesasDispAfu, arrMesasDispAfu);


/* Funcion para que vaya mostrando la reduccion de mesas disponibles */
function mesasVisibles(sectorMesas, arrMesasDispSector){
    sectorMesas.innerHTML = "Contamos con " + arrMesasDispSector.length + " mesas disponibles";

    /* If para cuando no haya mas mesas que sea redirigido hacia la pagina inicial */
    /* if(arrMesasDispSector.length == [""]){
        setTimeout(()=>{
            location.href="../index.html";
        },5000)
    } */
}

function agregarNombrePed(){
    h1.innerHTML =`Hola! <b style="color:rgb(255, 185, 0);-webkit-text-stroke: 1px black;">${nombrePersona}</b> donde vas a querer solicitar la mesa?` ;
    
}