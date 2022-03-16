/* VARIABLES */
const cards = document.getElementById('cardsComida');
const items = document.getElementById('items');
const footer = document.getElementById('footer');
const templateCard = document.getElementById('template-card').content ;
const templateCarrito = document.getElementById('template-carrito').content ;
const templateFooter = document.getElementById('template-footer').content ;
const fragment = document.createDocumentFragment();
const h1 = document.querySelector('.nombreH1');
let carrito= {};
let arrayPersonasLocalStorage = JSON.parse(localStorage.getItem("arrayPersonas")) || [];
console.log(arrayPersonasLocalStorage)
let nombrePersona = arrayPersonasLocalStorage.pop();
console.log(nombrePersona)



/* EVENTOS */

/* Para que lea todo el JSON antes de ejecutar el DOM */
document-addEventListener("DOMContentLoaded", ()=>{
    fetchData();
    agregarNombrePed();
    /* Si hay algo en el carrito no se borra al recargar */
    if (localStorage.getItem('carrito')){
        carrito= JSON.parse(localStorage.getItem('carrito'));
    pintarCarrito();
    }
})


cards.addEventListener('click', e =>{
    addCarrito(e);
})

items.addEventListener('click', e =>{
    btnAccion(e);
})



/* FUNCIONES */

/* Funcion para que se consuma el json con los productos de la barra cuando cargue el DOM*/
const fetchData = async () => {
    try {
        const res = await fetch('../js/productos-comida.json');
        const data = await res.json();
        pintarCards(data);
    } catch (error) {
        console.log(error);
    }
}

/* Funcion para pintar las cards con los datos del JSON */
const pintarCards = data =>{
    data.forEach(producto =>{
        templateCard.querySelector('h5').textContent =  producto.title;
        templateCard.querySelector('p').textContent = producto.precio;
        templateCard.querySelector('img').setAttribute('src', producto.img);
        templateCard.querySelector('.btn-dark').dataset.id = producto.id;


        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    
    cards.appendChild(fragment);
}


/* Funcion para detectar el boton de la card */

const addCarrito = e =>{
    if(e.target.classList.contains('btn-dark')){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation();
}

const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1

    }

    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1;
    }

    carrito[producto.id] = {...producto};
    
    pintarCarrito();
}


const pintarCarrito = () => {
    items.innerHTML = '';
    Object.values(carrito).forEach(producto =>{
        templateCarrito.querySelector('th').textContent= producto.id;
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title;
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad;
        templateCarrito.querySelector('.btn-outline-success').dataset.id = producto.id;
        templateCarrito.querySelector('.btn-outline-danger').dataset.id = producto.id;
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio;

        const clone = templateCarrito.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment)

    pintarFooter();

    /* Pasamos el JSON para que se puedan leer los objetos que se guardaron en local storage */
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

const pintarFooter = () =>{
    footer.innerHTML= '';
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `
        return;
    }

    const nCantidad = Object.values(carrito).reduce((acc, {cantidad})=> acc + cantidad,0)

    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio})=> acc + cantidad * precio,0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad;
    templateFooter.querySelector('span').textContent = nPrecio;

    const clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);
    footer.appendChild(fragment);

    const btnVaciar = document.getElementById('vaciar-carrito');
    btnVaciar.addEventListener('click', ()=>{
        carrito = {};
        pintarCarrito();
    })
}

const btnAccion = e =>{
    if(e.target.classList.contains('btn-outline-success')){
        const producto = carrito[e.target.dataset.id];
        producto.cantidad++;
        carrito[e.target.dataset.id] = { ...producto };
        pintarCarrito();
    }

    if(e.target.classList.contains('btn-outline-danger')){
        const producto = carrito[e.target.dataset.id];
        producto.cantidad--;
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.id];
        }
        pintarCarrito();
    }

    e.stopPropagation();
}

function agregarNombrePed(){
    h1.innerHTML =`Hola! <b style="color:yellow;">${nombrePersona}</b> haz tu pedido para llevar!` ;
    console.log(nombrePersona)
}

