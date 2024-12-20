// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get all the "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.product button');

    // Add click event listener to each button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h3').innerText;
            alert(`${productName} has been added to your cart!`);
        });
    });
});