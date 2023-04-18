// Creador y Buscador de libros a travez de un navegador Web.

// Lista de libros iniciales disponible
let books = [
    {
        title: "world of warcraft: el ascenso de la horda",
        author: "christie golden"
    },
    {
       title: "los hombres que no aman a las mujeres",
       author: "stieg larsson"
    },
    {
        title: "el señor de los anillos",
        author: "J.R.R. Tolkien"
    }
];

// Obtener elementos del DOM
const booksEnable = document.getElementById('booksEnable');
const cart = document.getElementById('cart');

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
    }

    // Adiciono el libro y luego push al final de la cola del array books
    let newBook = new Book(newTitle,newAuthor)
    books.push(newBook);
}

// Función para solicitar el nombre del libro y la busqueda
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
}