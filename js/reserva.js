
/* VARIABLES */
const arrMesasDispAden = [1, 2, 3, 4, 5];
const arrMesasDispAfu = [1, 2, 3, 4, 5];
const h1 = document.querySelector('.nombreH1');
const botonReservaAdentro = document.querySelector(".botonResAden");
const botonReservaAfuera = document.querySelector(".botonResAfu");
const mesasDispAden = document.querySelector(".mesasDispAden");
const mesasDispAfu = document.querySelector(".mesasDispAfu")
let arrayPersonasLocalStorage = JSON.parse(localStorage.getItem("arrayPersonas")) || [];
let nombrePersona = arrayPersonasLocalStorage.pop();





/* EVENTOS */
document-addEventListener("DOMContentLoaded", ()=>{
    agregarNombrePed();
    /* Si hay algo en el carrito no se borra al recargar */
    /* if (localStorage.getItem('carrito')){
        carrito= JSON.parse(localStorage.getItem('carrito'));
    pintarCarrito();
    } */
})

botonReservaAdentro.addEventListener("click", function(){
    arrMesasDispAden.pop();
    mesasVisibles(mesasDispAden, arrMesasDispAden, botonReservaAdentro);
    
})



botonReservaAfuera.addEventListener("click", function(){
    arrMesasDispAfu.pop();
    mesasVisibles(mesasDispAfu, arrMesasDispAfu, botonReservaAfuera)
})



/* FUNCIONES */

/* Para que muestre la cantidad de mesas disponibles */
mesasVisibles(mesasDispAden, arrMesasDispAden);
mesasVisibles(mesasDispAfu, arrMesasDispAfu);


/* Funcion para que vaya mostrando la reduccion de mesas disponibles */
function mesasVisibles(sectorMesas, arrMesasDispSector, botonReserva){
    sectorMesas.innerHTML = "Contamos con " + arrMesasDispSector.length + " mesas disponibles";
    
    /* If para cuando no haya mas mesas que sea redirigido hacia la pagina inicial */

    if(arrMesasDispSector.length == [""]){
        console.log("estamos aca");
        
        if(botonReserva.addEventListener("click", noHayMesasDisponibles)){}
        // setTimeout(()=>{
        //     location.href="../index.html";
        // },3000);
    }
}
/* Funcion para notificar que no hay mas mesas en x sector */
const noHayMesasDisponibles = ()=>{alert("No contamos con mas mesas disponibles en este sector")};


/* Funcion para pintar Nombre */
function agregarNombrePed(){
    h1.innerHTML =`Hola! <b style="color:yellow;">${nombrePersona}</b> selecciona para reservar una mesa` ;
    
}