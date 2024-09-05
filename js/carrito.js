// Lista de productos con categorías e imágenes
const productos = [
    // Hombre
    { id: 1, nombre: 'Camisa Deportiva Hombre', precio: 50000, cantidad: 0, categoria: 'hombre', img: 'fotos/hombre1.jpg' },
    { id: 2, nombre: 'Pantalones de Entrenamiento', precio: 75000, cantidad: 0, categoria: 'hombre', img: 'fotos/hombre2.jpg' },
    { id: 3, nombre: 'Zapatillas Deportivas', precio: 120000, cantidad: 0, categoria: 'hombre', img: 'fotos/hombre3.jpg' },
    // Mujer
    { id: 4, nombre: 'Vestido Casual Mujer', precio: 65000, cantidad: 0, categoria: 'mujer', img: 'fotos/mujer1.jpg' },
    { id: 5, nombre: 'Blusa Elegante', precio: 55000, cantidad: 0, categoria: 'mujer', img: 'fotos/mujer2.jpg' },
    { id: 6, nombre: 'Zapatos de Tacón', precio: 90000, cantidad: 0, categoria: 'mujer', img: 'fotos/mujer3.jpg' },
    // Niño
    { id: 7, nombre: 'Camisa Infantil', precio: 30000, cantidad: 0, categoria: 'niño', img: 'fotos/niño1.jpg' },
    { id: 8, nombre: 'Pantalones Cortos', precio: 35000, cantidad: 0, categoria: 'niño', img: 'fotos/niño2.jpg' },
    { id: 9, nombre: 'Zapatillas Deportivas Niño', precio: 80000, cantidad: 0, categoria: 'niño', img: 'fotos/niño3.jpg' },
    // Agrega más productos según sea necesario
];

let carrito = [];

// Función para agregar producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const itemEnCarrito = carrito.find(item => item.id === id);

    if (itemEnCarrito) {
        itemEnCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();
}

// Función para remover producto del carrito
function removerDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

// Función para actualizar la cantidad de un producto
function actualizarCantidad(id, cantidad) {
    const item = carrito.find(item => item.id === id);
    if (item) {
        item.cantidad = parseInt(cantidad);
        if (item.cantidad <= 0) {
            removerDelCarrito(id);
        }
    }
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const carritoItems = document.getElementById('cart-items');
    carritoItems.innerHTML = '';

    carrito.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span class="product-name">
                <img src="${item.img}" alt="${item.nombre}">
                ${item.nombre}
            </span>
            <span class="product-price">$${(item.precio / 100).toFixed(2)}</span>
            <input type="number" class="product-quantity" value="${item.cantidad}" min="1" onchange="actualizarCantidad(${item.id}, this.value)">
            <span class="product-subtotal">$${((item.precio * item.cantidad) / 100).toFixed(2)}</span>
            <button class="remove-item" onclick="removerDelCarrito(${item.id})">Eliminar</button>
        `;
        carritoItems.appendChild(itemElement);
    });

    actualizarResumen();
}

// Función para actualizar el resumen del carrito
function actualizarResumen() {
    const totalProductos = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    const subtotal = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    const envio = subtotal > 0 ? 5000 : 0; // Envío de $50.00 si hay productos
    const total = subtotal + envio;

    document.getElementById('total-products').textContent = totalProductos;
    document.getElementById('subtotal').textContent = `$${(subtotal / 100).toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${(envio / 100).toFixed(2)}`;
    document.getElementById('total').textContent = `$${(total / 100).toFixed(2)}`;
}

// Event listener para el método de pago
document.getElementById('payment-method').addEventListener('change', function() {
    const creditCardInfo = document.getElementById('credit-card-info');
    creditCardInfo.style.display = this.value === 'credit-card' ? 'block' : 'none';
});

// Event listener para el formulario de envío
document.getElementById('shipping-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (carrito.length === 0) {
        alert('Su carrito está vacío. Agregue productos antes de realizar la compra.');
        return;
    }
    // Aquí iría la lógica para procesar el pago y el envío
    alert('¡Gracias por su compra! Su pedido ha sido procesado.');
    carrito = [];
    actualizarCarrito();
});

// Inicializar carrito
actualizarCarrito();

// Función para mostrar productos según la categoría seleccionada
function mostrarProductos(categoria) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    const productosFiltrados = productos.filter(p => p.categoria === categoria);

    productosFiltrados.forEach(producto => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${(producto.precio / 100).toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        productGrid.appendChild(productElement);
    });
}

// Event listeners para las pestañas
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase 'active' de todas las pestañas
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar clase 'active' a la pestaña clicada
        button.classList.add('active');
        // Mostrar productos de la categoría seleccionada
        const categoria = button.getAttribute('data-category');
        mostrarProductos(categoria);
    });
});

// Mostrar productos de la primera categoría por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos('hombre');
});
