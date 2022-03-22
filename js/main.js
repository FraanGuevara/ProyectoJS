

/* VARIABLES */

const reservaMesa = document.getElementById("reservaMesa");
const tragoBarra = document.getElementById("tragoBarra");
const comidaLlevar = document.getElementById("comidaLlevar");


/* EVENTOS */

reservaMesa.addEventListener("click", function(){
solicitarNombre(redireccionarReserva);
})

tragoBarra.addEventListener("click", function(){
    solicitarNombre(redireccionarBarra);
})

comidaLlevar.addEventListener("click", function(){
    solicitarNombre(redireccionarComida);
})





/* FUNCIONES */

/* Funciones para redireccionar a paginas HTML */

function redireccionarReserva(){
    setTimeout(()=>{location.href="../pages/reserva.html";}, 2000);
    }

function redireccionarBarra(){
    setTimeout(()=>{location.href="../pages/barra.html";}, 2000);
    } 

function redireccionarComida(){
    setTimeout(()=>{location.href="../pages/comidaParaLlevar.html";}, 2000);
    } 


/* Funcion para solicitar nombre */
let solicitarNombre = (async (callback) => { 
    const { value: text } = await Swal.fire({
        color: 'white',
        input: 'text',
        inputLabel: 'Por favor, ingrese su nombre',
        inputPlaceholder: 'Escribe tu nombre aqui...',
        inputAttributes: {
        'aria-label': 'Type your message here'
        },
        showCancelButton: true,
        confirmButtonColor:'rgb(255, 185, 0)',
        background: ' #000000',
        backdrop: 'rgba(50,100,132,0.4)',
        inputValidator: (value) => {
            if (!value) {
                return 'Tu nombre no es valido'
            }
        }    
    })
    if (text) {
        Swal.fire({
            title:`Bienvenid@  ${text}`,
            background: '#000000', color: 'white',
            confirmButtonColor:'rgb(255, 185, 0)',
            backdrop: 'rgba(50,100,132,0.4)',})
        guardarPersonas(text)
        callback()
    }
    })

/* Funcion agregar a personas al arr */

function guardarPersonas(text){
    let arrayPersonas = JSON.parse(localStorage.getItem("arrayPersonas")) || [];
    arrayPersonas.push(text);
    // convierto mi array a JSON
    let arrayPersonasJSON = JSON.stringify(arrayPersonas);
    // guardo mi arr de personas en formato JSON en local storage
    localStorage.setItem("arrayPersonas", arrayPersonasJSON); 
    
}



