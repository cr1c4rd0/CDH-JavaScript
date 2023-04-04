// Creador yu Buscador de libros a travez de un navegador Web.

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

function newBook () {
    // Solicito información para agragar nuevo libro
    let newTitle = prompt("Ingrese el nombre del libro: ");
    let newAuthor = prompt("Ingrese el nombre del autor: ");

    // Creo el objeto del libro para agregar
    let addBook = {
        title: newTitle,
        author: newAuthor
    };

    // Adiciono el libro usando el metodo push para ponerlo al final de la cola del array books
    books.push(addBook);
}

// Función para solicitar el nombre del libro y la busqueda
function searchBooks () {
    let searchTittle = prompt("Ingrese el titulo del ligro que busca: ");
    let results = [];

    //recorrido del vector books
    for (let i = 0; i < books.length; i++) {
        let book = books[i];

        // unificar la escritura en caso de que utilicen mayusculas y minisculas
        if (
            book.title.toLowerCase().includes(searchTittle.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTittle.toLowerCase())
        ) {
            results.push(book);
        }
    }

    // Mostrar resultados del libro
    if (results.length > 0) {
        let message = "Libros encontrados:\n\n";
        for (let i = 0; i < results.length; i++) {
            message += results[i].title + " - " + results[i].author + "\n";
        }
        alert(message);
    } else {
        alert("Este libro no se encuentra disponible.");
    }
};

