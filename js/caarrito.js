


document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalProductsEl = document.getElementById('total-products');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
    const shippingCost = 5.00;

    function updateCart() {
        let totalProducts = 0;
        let subtotal = 0.00;

        cartItems.forEach(item => {
            const quantityInput = item.querySelector('.product-quantity');
            const priceEl = item.querySelector('.product-price');
            const subtotalEl = item.querySelector('.product-subtotal');

            const quantity = parseInt(quantityInput.value);
            const price = parseFloat(priceEl.textContent.replace('$', ''));
            const itemSubtotal = quantity * price;

            subtotalEl.textContent = `$${itemSubtotal.toFixed(2)}`;
            totalProducts += quantity;
            subtotal += itemSubtotal;
        });

        totalProductsEl.textContent = totalProducts;
        subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        totalEl.textContent = `$${(subtotal + shippingCost).toFixed(2)}`;
    }

    cartItems.forEach(item => {
        const quantityInput = item.querySelector('.product-quantity');
        quantityInput.addEventListener('input', updateCart);
    });

    updateCart();
});

