// --- Cart State ---
let cart = [];

/**
 * Filters car cards based on the text entered in the search bar.
 */
function filterCars() {
    const searchTerm = document.getElementById('carSearch').value.toLowerCase();
    const cards = document.getElementsByClassName('car-card');

    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].querySelector('h3').innerText.toLowerCase();
        // Also check h4 for better searching
        const details = cards[i].querySelector('h4') ? cards[i].querySelector('h4').innerText.toLowerCase() : "";
        
        if (title.includes(searchTerm) || details.includes(searchTerm)) {
            cards[i].style.display = "flex"; 
        } else {
            cards[i].style.display = "none";
        }
    }
}

/**
 * Opens and closes the cart drawer
 */
function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    drawer.classList.toggle('open');
}

/**
 * Handles the main button click. 
 * Checks if available and then proceeds to add.
 */
function handleCartClick(btnId, name, price, status) {
    if (status === 'sold') {
        alert("This item is currently sold out!");
        return;
    }
    addToCart(name, price, btnId);
}

/**
 * Adds a car to the cart array with quantity logic
 */
function addToCart(name, price, btnId) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1, btnId: btnId });
    }

    updateButtonCounter(btnId, name);
    updateCartUI();
    
    // Automatically open drawer on first add
    const drawer = document.getElementById('cart-drawer');
    if (!drawer.classList.contains('open')) {
        drawer.classList.add('open');
    }
}

/**
 * Updates the button on the car card to show "- Qty +"
 */
function updateButtonCounter(btnId, name) {
    const btn = document.getElementById(btnId);
    const item = cart.find(i => i.name === name);
    
    if (item && item.quantity > 0) {
        btn.innerHTML = `
            <span onclick="changeQty('${name}', -1, event)" style="padding: 0 10px; cursor: pointer;">−</span>
            ${item.quantity}
            <span onclick="changeQty('${name}', 1, event)" style="padding: 0 10px; cursor: pointer;">+</span>
        `;
    } else {
        btn.innerHTML = "Add to Cart";
    }
}

/**
 * Handles plus/minus clicks on the button counter
 */
function changeQty(name, delta, event) {
    event.stopPropagation(); // Prevents the main button click from firing
    const itemIndex = cart.findIndex(i => i.name === name);
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity += delta;
        const btnId = cart[itemIndex].btnId;

        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
            if(btnId) document.getElementById(btnId).innerHTML = "Add to Cart";
        } else {
            updateButtonCounter(btnId, name);
        }
        updateCartUI();
    }
}

/**
 * Refreshes the cart drawer UI
 */
function updateCartUI() {
    const cartItemsList = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    cartItemsList.innerHTML = '';
    let total = 0;
    let totalItems = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        totalItems += item.quantity;

        cartItemsList.innerHTML += `
            <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 8px;">
                <div style="text-align: left;">
                    <div style="font-weight: bold; font-size: 0.9rem;">${item.name} (x${item.quantity})</div>
                    <div style="color: #e67e22; font-size: 0.85rem; font-weight: bold;">₹${itemTotal.toLocaleString('en-IN')}</div>
                </div>
                <button onclick="removeFromCart(${index})" style="background: none; border: none; cursor: pointer; color: #e74c3c; font-size: 1.1rem;">✕</button>
            </div>
        `;
    });

    cartCount.innerText = totalItems;
    cartTotal.innerText = "₹" + total.toLocaleString('en-IN');
}

/**
 * Removes item completely from cart and resets card button
 */
function removeFromCart(index) {
    const btnId = cart[index].btnId;
    cart.splice(index, 1);
    if(btnId) document.getElementById(btnId).innerHTML = "Add to Cart";
    updateCartUI();
}

/**
 * Sends the order with quantities to WhatsApp
 */
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "🔥 *New Order from The Diecase Network* 🔥%0A%0A";
    message += "I am interested in buying the following:%0A";
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} (Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toLocaleString('en-IN')}%0A`;
    });
    
    const finalTotal = document.getElementById('cart-total').innerText;
    message += `%0A*Total Amount: ${finalTotal}*%0A%0APlease let me know if these are available!`;

    window.open(`https://wa.me/+916367982717?text=${message}`, '_blank');
}
