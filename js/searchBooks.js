// Lista de libros iniciales disponible
let books = [
    {
        title: "World of Warcraft: Jaina valiente, Mareas de guerra",
        author: "christie golden",
        publisher: "Panini España. S.A",
        price: 38.36
    },
    {
        title: "Los hombres que no amaban a las mujeres",
        author: "stieg larsson",
        publisher: "Ediciones Destino",
        price: 26.25
    },
    {
        title: "el señor de los anillos: La comunidad del anillo",
        author: "J.R.R. Tolkien",
        publisher: "Planeta Publishing",
        price: 17.95
    },
    {
        title: "Don Quijote de la Mancha",
        author: "miguel de cervantes",
        publisher: "Lengua viva",
        price: 12.54
    },
    {
        title: "Entrevista con el vampiro",
        author: "Anne Rice",
        publisher: "Penguin Random House Audio",
        price: 82.80
    }
];

// Obtener elemento del DOM
let listBooks = document.getElementById("listBooks");

// Pintar card de libros
books.forEach(books => {
    listBooks.innerHTML += `<div class='nes-container is-rounded grupo' id='bookProperties'>
            <button type='button' class='nes-btn is-warning boton-cart'>Agregar a carrito</button>
            <div class='nes-btn book'>${books.title}</div>
            <div class='nes-btn book'>Author: ${books.author}</div>
            <div class='nes-btn book'>Publisher: ${books.publisher}</div>
            <div class='nes-btn is-success nombre-libro'>Precio: $${books.price}</div>
        </div>`
});

// función para agregar nuevos libros
function newBook () {
    // Solicito información para agragar nuevo libro
    let newTitle = prompt("Ingrese el nombre del libro: ");
    let newAuthor = prompt("Ingrese el nombre del autor: ");

    // Creo la clase Book para agregar
    class Book {
        constructor(newTitle, newAuthor) {
            this.title = newTitle;
            this.author = newAuthor;
        }
    };

    // Adiciono el libro y luego push al final de la cola del array books
    let newBook = new Book(newTitle,newAuthor);
    books.push(newBook);
};

// Función realizar busqueda de un libro
function searchBooks () {
    let searchBook = prompt("Nombre del libro a buscar: ").toLowerCase();

    // Buscar en el arreglo books
    let searchedBook = books.find(function(book){
        return book.title.toLowerCase() === searchBook;
    });

    // Verificando si se encuentra el libro
    if (searchedBook) {
        alert ("Libro encontrado: " + searchedBook.title + "\nAutor: " + searchedBook.author);
    } else {
        alert("Este libro no se encuentra disponible.");
    }
};