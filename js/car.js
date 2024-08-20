const productos = [
    { id: 1, nombre: "Producto 1", precio: 10.00 },
    { id: 2, nombre: "Producto 2", precio: 15.00 },
    { id: 3, nombre: "Producto 3", precio: 20.00 }
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
            <span class="product-name">${item.nombre}</span>
            <span class="product-price">$${item.precio.toFixed(2)}</span>
            <input type="number" class="product-quantity" value="${item.cantidad}" min="1" onchange="actualizarCantidad(${item.id}, this.value)">
            <span class="product-subtotal">$${(item.precio * item.cantidad).toFixed(2)}</span>
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
    const envio = subtotal > 0 ? 5 : 0;
    const total = subtotal + envio;

    document.getElementById('total-products').textContent = totalProductos;
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${envio.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
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

// Función para simular agregar productos (para pruebas)
function simularAgregarProducto(id) {
    agregarAlCarrito(id);
}

// Agregar botones de productos para simular una tienda
// Agregar botones de productos para simular una tienda
const tienda = document.createElement('div');
tienda.innerHTML = `
    <h2>Productos Disponibles</h2>
    ${productos.map(p => `<button onclick="simularAgregarProducto(${p.id})">${p.nombre} - $${p.precio.toFixed(2)}</button>`).join('')}
`;
document.querySelector('.container').insertBefore(tienda, document.querySelector('.cart'));


