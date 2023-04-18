
// Obtener elementos del DOM
const librosDisponibles = document.getElementById('librosDisponibles');
const carritoCompras = document.getElementById('carritoCompras');

// Obtener lista de libros del localStorage o crear una nueva si no existe
let listaLibros = JSON.parse(localStorage.getItem('libros')) || [];

// Función para actualizar el localStorage con la lista de libros
function actualizarLocalStorage() {
    localStorage.setItem('libros', JSON.stringify(listaLibros));
}

// Función para mostrar los libros en la lista de libros disponibles
function mostrarLibrosDisponibles() {
    librosDisponibles.innerHTML = '';
    for (const libro of listaLibros) {
        const li = document.createElement('li');
        li.textContent = `${libro.nombre} - $${libro.precio}`;
        librosDisponibles.appendChild(li);
    }
}

// Función para mostrar los libros en el carrito de compras
function mostrarCarritoCompras() {
    carritoCompras.innerHTML = '';
    for (const libro of listaLibros) {
        const li = document.createElement('li');
        li.textContent = `${libro.nombre} - $${libro.precio}`;
        carritoCompras.appendChild(li);
    }
}

// Event listener para detectar clics en libros disponibles
librosDisponibles.addEventListener('click', (event) => {
    const li = event.target;
    const libroId = li.getAttribute('data-id');
    const libroNombre = li.getAttribute('data-nombre');
    const libroPrecio = li.getAttribute('data-precio');
    const libro = { id: libroId, nombre: libroNombre, precio: libroPrecio };

    // Agregar libro al carrito de compras y actualizar el localStorage
    listaLibros.push(libro);
    actualizarLocalStorage();

    // Mostrar los libros en el carrito de compras
    mostrarCarritoCompras();
});

// Event listener para detectar clics en libros en el carrito de compras
carritoCompras.addEventListener('click', (event) => {
    const li = event.target;
    const libroId = li.getAttribute('data-id');

    // Remover libro del carrito de compras y actualizar el localStorage
    listaLibros = listaLibros.filter(libro => libro.id !== libroId);
    actualizarLocalStorage();

    // Mostrar los libros en el carrito de compr
