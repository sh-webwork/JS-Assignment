document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    
    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', event => {
            const product = event.target.closest('.product');
            const productName = product.querySelector('h2').textContent;
            const productPrice = product.querySelector('.price').textContent;
            const productDescription = product.querySelector('.description').textContent;
            const productImgSrc = product.querySelector('img').src;
            
            const productInCart = cart.find(item => item.name === productName);
            if (productInCart) {
                productInCart.quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, description: productDescription, imgSrc: productImgSrc, quantity: 1 });
            }
            updateCart();
        });
    });
    
    function updateCart() {
        const cartLink = document.querySelector('.cart a');
        const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartLink.textContent = `Cart (${totalQuantity})`;
    }
});
