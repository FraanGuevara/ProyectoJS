/* VARIABLES */

const reservaMesa = document.getElementById("reservaMesa");
const tragoBarra = document.getElementById("tragoBarra");
const comidaLlevar = document.getElementById("comidaLlevar");
let inputSweetAlert = document.querySelectorAll(".swal2-file")



/* EVENTOS */

reservaMesa.addEventListener("click", function(){
    redireccionarReserva();
})

tragoBarra.addEventListener("click", function(){
    redireccionarBarra();
})

comidaLlevar.addEventListener("click", function(){
    redireccionarComida();
})





/* FUNCIONES */

/* Funciones para redireccionar a paginas HTML */
/* Se usa async porque tengo que esperar a que se termine de ejecutar el solicitarNombre y luego redirigir */
async function redireccionarReserva(){
    await solicitarNombre();
    setTimeout(()=>{location.href="../pages/reserva.html";}, 1500)
    guardarPersonas();
    }

async function redireccionarBarra(){
    await solicitarNombre();
    setTimeout(()=>{location.href="../pages/barra.html";}, 1500)
    guardarPersonas();
    } 

async function redireccionarComida(){
    await solicitarNombre();
    setTimeout(()=>{location.href="../pages/comidaParaLlevar.html";}, 1500)
    guardarPersonas();
    } 


/* Funcion para solicitar nombre */
let solicitarNombre = (async () => { 
    const { value: text } = await Swal.fire({
        input: 'text',
        inputLabel: 'Por favor, ingrese su nombre',
        inputPlaceholder: 'Escribe tu nombre aqui...',
        inputAttributes: {
        'aria-label': 'Type your message here'
        },
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'Tu nombre no es valido'
            }
        }    
    })
    if (text) {
        Swal.fire(`Bienvenid@  ${text}`)
    }
    })

/* Funcion agregar a personas al arr */

function guardarPersonas(){
    let arrayPersonas = JSON.parse(localStorage.getItem("arrayPersonas")) || [];
    arrayPersonas.push(inputSweetAlert);
    // convierto mi array a JSON
    let arrayPersonasJSON = JSON.stringify(arrayPersonas);
    // guardo mi arr de personas en formato JSON en local storage
    localStorage.setItem("arrayPersonas", arrayPersonasJSON); 
}

/* CONSULTARRR */






// let noValido = [String, null, NaN, "", " "];
// let noValidoItems = noValido.forEach(item => console.log(item));




/* const boton = document.querySelector(".boton"); */
/* Boton username */
// let userName = document.getElementById("nombrePersona").value;






/* Evento en el boton "Entrar al bar" */
// boton.addEventListener("click", function(){
//     userName.value = n;
//     arrayPersonas.push(n);
//     if(n === null || n === Number || n === "" || n === " "){
//     alert("No ingresaste un nombre valido")
//     } else if(i <=3){
//         Swal.fire(
//             `Bienvenid@ ${n} a Cafe San Juan`,
//             'Haz click en el OK para confirmar tu entrada y seleccionar una mesa',
//             'success')
//             /* setTimeout ("redireccionar()", 5000); */
//             i++
//     }else{
//         Swal.fire({
//             icon: 'warning',
//             title: 'Oh no!',
//             text: 'Mil disculpas no nos quedan mesas disponibles',
//             footer: '<a href="">Quiero ir pidiendo algo para tomar</a>'})
//             location.href()
//     };
//     console.log(arrayPersonas)
// }
// )

