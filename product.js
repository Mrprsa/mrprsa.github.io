let productName = 'anything';
let product = 0;
let cart = 0;
// Function to add a product
function addToCart() {
    product += 1;
    console.log(`Product added to cart. Total items in cart: ${product}`);
    cart = product;
    return cart;
}

// Function to show cart information

function showCart() {
    console.log(`Total items in cart: ${cart}`);
}