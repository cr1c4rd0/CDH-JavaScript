// Lista de libros iniciales disponible
let books = [
    {
        id: 1,
        title: "los hombres que no amaban a las mujeres",
        author: "stieg larsson",
        publisher: "Ediciones Destino",
        price: 26.25
    },
    {
        id: 2,
        title: "el señor de los anillos: La comunidad del anillo",
        author: "J.R.R. Tolkien",
        publisher: "Planeta Publishing",
        price: 17.95
    },
    {
        id: 3,
        title: "don quijote de la mancha",
        author: "miguel de cervantes",
        publisher: "Lengua viva",
        price: 12.54
    },
    {
        id: 4,
        title: "entrevista con el vampiro",
        author: "Anne Rice",
        publisher: "Penguin Random House Audio",
        price: 82.80
    }
];
let elementsCar = [];
let valueAmount = 0;

// Obtener elementos del DOM
let carButton = document.getElementById("carButton");
let searchField = document.getElementById("name_field");
let itemsCarShop = document.getElementById("itemsCarShop");
let amountCar = document.getElementById("amountCar");

// Eventos
searchField.addEventListener("input", searchResults);

// Render
renderBooks(books);

// Función para el render de los libros
function renderBooks (books) {
    let listBooks = document.getElementById("listBooks");
    listBooks.innerHTML = "";
    // Pintar card de libros
    books.forEach(books => {
        let containerBooks = document.createElement("div");
        containerBooks.className = 'nes-container is-rounded';
        containerBooks.innerHTML += `<button type='button' class='nes-btn is-warning boton-cart' id=${books.id}>Agregar a carrito</button>
                <div class='nes-btn book'>${books.title}</div>
                <div class='nes-btn book'>Author: ${books.author}</div>
                <div class='nes-btn book'>Publisher: ${books.publisher}</div>
                <div class='nes-btn is-success'>Precio: $${books.price}</div>
            </div>`;
            listBooks.appendChild(containerBooks);
            let itemCar = document.getElementById(books.id);
            itemCar.addEventListener("click", shopCar);
});  
};

// Funcion para agregar un item al carrito 
function shopCar (e) {
    console.log(e.target.id);
    let itemSearch = books.find(book => book.id === Number(e.target.id));
    elementsCar.push(itemSearch);
    valueAmount++;
    renderCar(elementsCar);
};

// Función para el render de los items en el carro de compras
function renderCar (itemsCar) {
    itemsCarShop.innerHTML = "";
    itemsCar.forEach(books => {
        itemsCarShop.innerHTML += `<li>${books.title} <strong>Precio: </strong>$ ${books.price}</li>`;
    });
    amountCar.innerHTML = "";
    amountCar.innerHTML += valueAmount;
};

// Funcion para la busqueda y resultado de libros
function searchResults(e) {
    let booksFilter = books.filter(book => book.title.includes((searchField.value).toLowerCase()));
    renderBooks(booksFilter);
};