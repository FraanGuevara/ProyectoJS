let n;
let i = 1;
const arrayPersonas = [];
const boton = document.querySelector(".boton");

boton.addEventListener("click", function(){
    arrayPersonas.push(n = prompt("Por favor, ingrese su nombre"))
    if(n === ""){
    alert("No ingresaste un nombre valido")
    } else if(i <=5){
    alert(`Hola ${n} tu mesa es la N° ${i++}`)
    }else{
        alert("Mil disculpas, no tenemos mesas disponibles")
    };
}
)

console.log(arrayPersonas)