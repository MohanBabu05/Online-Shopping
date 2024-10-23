document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productItem = event.target.closest('.product-item');
            const productId = productItem.getAttribute('data-id');
            const productName = productItem.querySelector('h3').innerText;
            const productPrice = productItem.querySelector('p').innerText;

            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1
            };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            const existingProduct = cart.find(item => item.id === productId);
            if (existingProduct) {
                existingProduct.quantity++; // Increment quantity if product already exists
            } else {
                cart.push(product);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.href = 'cart.html'; // Redirect to cart page
        });
    });
});