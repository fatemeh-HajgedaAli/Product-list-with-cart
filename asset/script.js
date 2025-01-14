let $=document
//make arry for save items :
let cart = []; // Array to hold the items added to the cart.
let cartBtn = $.querySelectorAll('.cartBtn'); // Select all buttons related to the cart functionality.
let buyItem=$.querySelector('.buyItem');
/*
cartBtn.forEach((button)=>

button.addEventListener('click',function(button){
const foodId=button.dataset.id;
const foodName=foodName.dataset.name;
const foodPrice=price.dataset.price;

const isInCart = cart.some((item) => item.name === foodName); // Check if the item is already in the cart.
const cartaddRemove = button.nextElementSibling; // Select the next sibling element (e.g., for showing/hiding add/remove options).

if (isInCart) {
    // If the item is already in the cart, remove it.
    cart = cart.filter((item) => item.name !== foodName);
    cartaddRemove.style.display = 'none'; // Hide the add/remove button.
} else {
    // If the item is not in the cart, add it.
    cartaddRemove.style.display = 'block'; // Show the add/remove button.
    cart.push({ id:foodId , price:foodPrice, name:foodName }); // Add the item to the cart array.
}

updateCartCount(); // Update the cart count displayed on the page.
}

// Function to update the cart item count displayed in the UI.

function updateCartCount() {
const itemNumber = $.querySelector('.itemNumber'); // Select the element showing the cart item count.
if (cart.length === 0) {
    // If the cart is empty, display (0).
    itemNumber.innerHTML = `(0)`;
} else {
    // Otherwise, display the current number of items in the cart.
    itemNumber.innerHTML = `(${cart.length})`;
}
}))*/

// Loop through all cart buttons and add an event listener to handle clicks.

cartBtn.forEach(function(button) {
    let count = 0; // Initialize count for each button.
    button.addEventListener('click', function() {
        toggleCart(button); // Call the function to handle cart management when the button is clicked.
    });
});

// Function to add or remove items from the cart.

function toggleCart(button) {
    const foodId = button.dataset.id; // Get the ID of the selected food item.
    const foodName = button.dataset.name; // Get the name of the selected food item.

    console.log(foodId)
    const isInCart = cart.some((item) => item.name === foodName); // Check if the item is already in the cart.
    const cartaddRemove = button.nextElementSibling; // Select the next sibling element (e.g., for showing/hiding add/remove options).

    if (isInCart) {
        // If the item is already in the cart, remove it.
        cart = cart.filter((item) => item.name !== foodName);
        cartaddRemove.style.display = 'none'; // Hide the add/remove button.
    } else {
        // If the item is not in the cart, add it.
        cartaddRemove.style.display = 'block'; // Show the add/remove button.
        cart.push({ id: foodId, name: foodName }); // Add the item to the cart array.
    }

    updateCartCount(); // Update the cart count displayed on the page.
}

// Function to update the cart item count displayed in the UI.
function updateCartCount() {
    const itemNumber = $.querySelector('.itemNumber'); // Select the element showing the cart item count.
    if (cart.length === 0) {
        // If the cart is empty, display (0).
        itemNumber.innerHTML = `(0)`;
    } else {
        // Otherwise, display the current number of items in the cart.
        itemNumber.innerHTML = `(${cart.length})`;
    }
}


// Select all buttons for adding and removing individual food items.
const addCart = $.querySelectorAll('.addCart'); 
const removeCart = $.querySelectorAll('.removeCart'); 
let count = 0; // Initialize the count for food item selection.
// Add functionality for "Add" buttons.
addCart.forEach((button) => { 
    button.addEventListener('click', function() {
        const countNumber = button.parentElement.querySelector('.count'); // Find the count element for this specific button's parent.
        count++; // Increment the count for the food item.
        if (count > 0) {
            countNumber.textContent = count; // Update the count displayed for this item.
        }  
    });
});
// Add functionality for "Remove" buttons.
removeCart.forEach((button) => {
    button.addEventListener('click', function() {
        const countNumber = button.parentElement.querySelector('.count'); // Find the count element for this specific button's parent.
        if (count > 0) {
            count--; // Decrement the count for the food item.
            if (countNumber) {
                countNumber.textContent = count; // Update the count displayed for this item.
            }
        }
    });
});
