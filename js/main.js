// variables globales
let books = [
  {
    id: 1,
    title: "El Principito",
    author: "Antoine de Saint",
    publisher: "Salamandra",
    price: 26.25,
  },
  {
    id: 2,
    title: "El señor de los anillos",
    author: "Tolkien",
    publisher: "Planeta",
    price: 17.95,
  },
  {
    id: 3,
    title: "Don quijote de la mancha",
    author: "M. Cervantes",
    publisher: "Lengua viva",
    price: 12.54,
  },
  {
    id: 4,
    title: "Entrevista con el vampiro",
    author: "Anne Rice",
    publisher: "Penguin Random",
    price: 82.8,
  },
];
let elementsCar = [];

// Obtener elementos del DOM
let carButton = document.getElementById("carButton");
let searchField = document.getElementById("name_field");
let itemsCarShop = document.getElementById("itemsCarShop");
let amountCar = document.getElementById("amountCar");
let finishProcess = document.getElementById("finishProcess");

// Eventos
searchField.addEventListener("input", searchResults);
finishProcess.addEventListener("click", buyProcess);

// Render
renderBooks(books);


if (localStorage.getItem("elementsCar")) {
  elementsCar = JSON.parse(localStorage.getItem("elementsCar"));
  shopCar(elementsCar);
};


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
                <div class='nes-btn book'>${books.author}</div>
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
    let itemSearch = books.find(book => book.id === Number(e.target.id));
    elementsCar.push(itemSearch);
    localStorage.setItem("elementsCar", JSON.stringify(elementsCar));
    renderCar(elementsCar);
};

// Función para el render de los items en el carro de compras
function renderCar (itemsCar) {
    itemsCarShop.innerHTML = "";
    itemsCar.forEach(books => {
        itemsCarShop.innerHTML += `<li>${books.title} <strong>Precio: </strong>$ ${books.price}</li>`;
    });
};

// Funcion para la busqueda y resultado de libros
function searchResults(e) {
    let booksFilter = books.filter(book => book.title.includes((searchField.value).toLowerCase()));
    renderBooks(booksFilter);
};

// Función para finalizar la compra
function buyProcess () {
    localStorage.removeItem("elementsCar");
    elementsCar = [];
    renderCar(elementsCar);
};