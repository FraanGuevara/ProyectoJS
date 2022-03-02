
/* VARIABLES */
const arrMesasDispAden = [1, 2, 3, 4, 5];
const arrMesasDispAfu = [1, 2, 3, 4, 5];


const botonReservaAdentro = document.querySelector(".botonResAden");
const botonReservaAfuera = document.querySelector(".botonResAfu");
const mesasDispAden = document.querySelector(".mesasDispAden");
const mesasDispAfu = document.querySelector(".mesasDispAfu")





/* EVENTOS */

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
    if(arrMesasDispSector.length == [""]){
        setTimeout(()=>{
            location.href="../index.html";
        },5000)
    }
}