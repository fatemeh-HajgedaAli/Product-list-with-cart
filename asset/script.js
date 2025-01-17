let $ = document;
let cart = []; // سبد خرید.

document.addEventListener('DOMContentLoaded', function () {
    const cartBtn = $.querySelectorAll('.cartBtn'); // دکمه‌های افزودن به سبد خرید
    const cartCount = $.querySelector('.cartCount'); // نمایش تعداد آیتم‌ها در سبد خرید
    const cartItemsList = $.querySelector('.cartItem'); // لیست آیتم‌های سبد خرید
    const totalAmount = $.querySelector('.totalAmount'); // نمایش مبلغ کل
    const confirmBtn = $.querySelector('#selectBtn'); // دکمه Confirm

    cartBtn.forEach(function(button) {
        button.addEventListener('click', function() {
            toggleCart(button);
        });
    });

    function toggleCart(button) {
        const foodId = button.dataset.id;
        const foodName = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        const isInCart = cart.some((item) => item.id === foodId);
        const cartaddRemove = button.parentElement.querySelector('.cartaddRemove');

        if (isInCart) {
            // حذف آیتم از سبد خرید
            cart = cart.filter((item) => item.id !== foodId);
            cartaddRemove.style.display = 'none';
            
        } else {
            // افزودن آیتم به سبد خرید
            cartaddRemove.style.display = 'block';
            cart.push({ id: foodId, name: foodName, price, quantity: 1 });
        }

        updateCartCount();
        updateCartList();
        toggleConfirmButton();
    }
//update Cart.
    function updateCartCount() {
        if (cartCount) {
            cartCount.textContent = `(${cart.length})`;
        }
    }

function updateCartList() {
    cartItemsList.innerHTML = '';
    let total = 0;
    //add item to the cart.
 cart.forEach(item => {
            total += item.price * item.quantity;
            const listItem = $.createElement('li');
            listItem.innerHTML = `
                ${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}
                <button class="removeItem" data-id="${item.id}"><i class="bi bi-trash-fill"></i></button>`;
            cartItemsList.appendChild(listItem);
        });
const cardText=$.querySelector('.cardText')
cardText.style.display='none'
const cakeImageCard=$.querySelector('.cakeImageCard')
cakeImageCard.style.display='none'
        // به‌روزرسانی جمع کل
totalAmount.textContent = `$${total.toFixed(2)}`;
totalAmount.style.display='block'
        // اضافه کردن رویداد حذف برای دکمه‌های ❌
    $.querySelectorAll('.removeItem').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = button.dataset.id;
                cart = cart.filter(item => item.id !== itemId);
                updateCartList();
                updateCartCount();
            });
        });
    };
    // confirm to show our modaul button.
    function toggleConfirmButton() {
        if (cart.length > 0) {
            confirmBtn.style.display = 'block';
        } else {
            confirmBtn.style.display = 'none';
        }
        confirmBtn.addEventListener('click',function(){
const modaulPart=$.querySelector('.modaulPart')
modaulPart.style.display='block'

        }) ;
    }

    // افزایش تعداد آیتم‌ها
    addCart.forEach(button => {
        button.addEventListener('click', function() {
            const foodId = button.parentElement.parentElement.querySelector('.cartBtn').dataset.id;
            const item = cart.find(item => item.id === foodId);

            if (item) {
                item.quantity++;
                updateCartList();
            }
        });
    });

    // کاهش تعداد آیتم‌ها
    removeCart.forEach(button => {
        button.addEventListener('click', function() {
            const foodId = button.parentElement.parentElement.querySelector('.cartBtn').dataset.id;
            const item = cart.find(item => item.id === foodId);
            if (item && item.quantity > 1) {
                item.quantity--;
                updateCartList();
            } else if (item && item.quantity === 1) {
                cart = cart.filter(cartItem => cartItem.id !== foodId);
                button.parentElement.style.display = 'none';
                updateCartList();
                updateCartCount();
            }
        });
    });
});

//this part is for adding and removing buttion with +|- .
const addCart = $.querySelectorAll('.addCart'); 
const removeCart = $.querySelectorAll('.removeCart');
//+ button .
addCart.forEach((button) => {
button.addEventListener('click', function() {
const countNumber = button.parentElement.querySelector('.count');
let count = parseInt(countNumber.textContent);
count++;
countNumber.textContent = count;
});});
// - button .
removeCart.forEach((button) => {
        button.addEventListener('click', function() {
            const countNumber = button.parentElement.querySelector('.count');
            let count = parseInt(countNumber.textContent);
            if (count > 0) {
                count--;
                countNumber.textContent = count;
            }
        });
    });
