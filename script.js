let cartCount = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        alert("Product added to cart! 🛒\nTotal items: " + cartCount);
    });
});