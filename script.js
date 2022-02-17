// SWEETALERT2

// let noValido = [String, null, NaN, "", " "];
// let noValidoItems = noValido.forEach(item => console.log(item));


let n;
let i = 1;
const arrayPersonas = [];
const boton = document.querySelector(".boton");

boton.addEventListener("click", function(){
    arrayPersonas.push(n = prompt("Por favor, ingrese su nombre"))
    if(n === null || n === Number || n === "" || n === " "){
    alert("No ingresaste un nombre valido")
    } else if(i <=3){
        Swal.fire(
            `Bienvenid@ ${n} a Cafe San Juan`,
            'Haz click en el OK para confirmar tu entrada y seleccionar una mesa',
            'success')
            i++
    }else{
        Swal.fire({
            icon: 'warning',
            title: 'Oh no!',
            text: 'Mil disculpas no nos quedan mesas disponibles',
            footer: '<a href="">Quiero ir pidiendo algo para tomar</a>'})
    };
    console.log(arrayPersonas)
}
)

