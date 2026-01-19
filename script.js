// 1. COMPLETE CAR DATABASE
const carDatabase = {
    "tokyo-drift": {
        name: "Fast And Furious TOKYO DRIFT",
        series: "Hot Wheels SILVER SERIES | 1970 Monte Carlo | 3/5",
        price: 1699,
        img: "assets/car-photos/Tokyo Drift.jpeg",
        desc: "The 1970 Monte Carlo captures the raw, gritty American muscle from the opening scene of Tokyo Drift. Finished in screen-accurate primer beige, this casting replicates Sean Boswell's first ride.",
        status: "available"
    },
    "nissan-350z": {
        name: "Hot Wheels NISSAN 350Z CUSTOM",
        series: "Hot Wheels SILVER SERIES | Nissan 350Z Custom | 1/5",
        price: 429,
        img: "assets/car-photos/NISSAN 350Z CUSTOM PERSONNALISE.jpeg",
        desc: "Driven by the 'Drift King' in Tokyo Drift, this Nissan 350Z Custom features the iconic VeilSide Version 3 widebody kit, high rear wing, and detailed dark finish.",
        status: "available"
    },
    "mazda-rx7": {
        name: "Hot Wheels Mazda RX-7",
        series: "Hot Wheels HW J-IMPORTS | 2026 MAINLINE | 2/10",
        price: 279,
        img: "assets/car-photos/Mazda RX7.jpeg",
        desc: "Part of the 2026 HW J-Imports series, this Metalflake Purple Mazda RX-7 sports a vibrant 'Spring' livery with unique rabbit graphics.",
        status: "available"
    },
    "ford-rs200-sth": {
        name: "Hot Wheels Ford RS200 Super Treasure Hunt",
        series: "Hot Wheels SUPER TREASURE HUNT | HW PEAK PURSUIT",
        price: 2999,
        img: "assets/car-photos/FordRS200 Super.jpg",
        desc: "Iconic Gulf Racing livery with Spectraflame powder blue paint and classic orange stripes. Equipped with Real Riders rubber tires.",
        status: "sold"
    },
    "ford-rs200-main": {
        name: "Hot Wheels Ford RS200",
        series: "Hot Wheels HW PEAK PURSUIT | 2025 MAINLINE | 9/10",
        price: 279,
        img: "assets/car-photos/Ford RS200.jpeg",
        desc: "The Hot Wheels Ford RS200 in 'Gulf Blue' is a standout release from the 2025 Peak Pursuit series.",
        status: "available"
    },
    "ferrari-sf90": {
        name: "Ferrari SF90 Stradale",
        series: "Hot Wheels HW EXOTICS | Ferrari SF90 Stradale | 1/5",
        price: 399,
        img: "assets/car-photos/Ferrari sf90 grey.jpg",
        desc: "This casting faithfully replicates Ferrari's first series-production Plug-in Hybrid Electric Vehicle (PHEV).",
        status: "sold"
    },
    "bugatti-bolide": {
        name: "Hot Wheels Bugatti Bolide",
        series: "Hot Wheels HW EXOTICS | Bugatti Bolide | 3/10",
        price: 649,
        img: "assets/car-photos/Bugatti Bolide.jpg",
        desc: "Capturing the ultimate W16 track-only hypercar, this Bugatti Bolide features radical aerodynamics.",
        status: "sold"
    },
    "mclaren-f1": {
        name: "Hot Wheels McLaren F1",
        series: "Hot Wheels HW: THE '90s | McLaren F1 | 9/10",
        price: 449,
        img: "assets/car-photos/Mclaren F1.jpg",
        desc: "Finished in Grand Prix Red, this casting honors the ultimate 1990s hypercar with its iconic central driving position.",
        status: "sold"
    },
    "ferrari-daytona": {
        name: "Bburago FERRARI DAYTONA SP3",
        series: "Bburago FERRARI | RACE & PLAY | Icona Series",
        price: 599,
        img: "assets/car-photos/Bburago FERRARI DAYTONA SP3.jpg",
        desc: "The Bburago Ferrari Daytona SP3 captures the breathtaking design of Ferrari's ultra-exclusive Icona series.",
        status: "available"
    },
    "koenigsegg-ccxr": {
        name: "Hot Wheels PREMIUM Koenigsegg CCXR",
        series: "Hot Wheels PREMIUM | Fast & Furious | 3/5",
        price: 799,
        img: "assets/car-photos/Koenigsegg CCXR.jpg",
        desc: "The Koenigsegg CCXR brings the multi-million dollar exotic flair from Fast Five to your collection.",
        status: "available"
    },
    "vw-bumblebee": {
        name: "Hot Wheels Volkswagen Beetle (Bumblebee)",
        series: "Hot Wheels HW SCREEN TIME | TRANSFORMERS",
        price: 289,
        img: "assets/car-photos/Bumble Bee.jpg",
        desc: "The Volkswagen Beetle 'Bumblebee' brings the beloved Autobot scout to the 1:64 scale world.",
        status: "available"
    }
};

// 2. PAGE LOAD LOGIC (Centralized)
window.onload = function() {
    // A. Always load the cart first
    loadCart();

    // B. If we are on product.html, load the car details
    const params = new URLSearchParams(window.location.search);
    const carId = params.get('id');
    if (carId) {
        loadProductPage(carId);
    }
};

// 3. PRODUCT PAGE RENDER
function loadProductPage(id) {
    const car = carDatabase[id];
    if (!car) return;

    // Fill Data
    const titleEl = document.getElementById('product-title');
    if (titleEl) {
        titleEl.innerText = car.name;
        document.getElementById('product-series').innerText = car.series;
        document.getElementById('product-price').innerText = "₹" + car.price.toLocaleString('en-IN');
        document.getElementById('product-desc').innerText = car.desc;
        document.getElementById('main-product-img').src = car.img;

        // Button Logic
        const buyBtn = document.getElementById('product-buy-btn');
        if (buyBtn) {
            buyBtn.onclick = null; // Reset
            
            if (car.status === 'sold') {
                buyBtn.innerText = "Sold Out";
                buyBtn.classList.add('disabled');
                buyBtn.onclick = function() { alert('This item is sold out!'); };
            } else {
                buyBtn.onclick = function() {
                    handleCartClick('product-buy-btn', car.name, car.price, car.status);
                };
            }

            // Sync: Check if THIS SPECIFIC CAR is in the cart
            const existingItem = cart.find(item => item.name === car.name);
            if (existingItem) {
                updateButtonCounter('product-buy-btn', car.name);
            }
        }
    }
}

// --- CART STATE ---
let cart = [];

function handleCartClick(btnId, name, price, status) {
    if (status === 'sold') {
        alert("This item is currently sold out!");
        return;
    }
    addToCart(name, price, btnId);
}

function addToCart(name, price, btnId) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1, btnId: btnId });
    }

    updateButtonCounter(btnId, name);
    updateCartUI();
    saveCart(); 
    
    // Open drawer
    const drawer = document.getElementById('cart-drawer');
    if (drawer && !drawer.classList.contains('open')) {
        drawer.classList.add('open');
    }
}

function updateButtonCounter(btnId, name) {
    const btn = document.getElementById(btnId);
    // If button doesn't exist (e.g. we are on product page looking for index button), stop.
    if (!btn) return;

    const item = cart.find(i => i.name === name);
    
    if (item && item.quantity > 0) {
        btn.innerHTML = `
            <span onclick="changeQty('${name}', -1, event)" style="padding: 0 15px; cursor: pointer; font-size: 1.2rem;">−</span>
            ${item.quantity}
            <span onclick="changeQty('${name}', 1, event)" style="padding: 0 15px; cursor: pointer; font-size: 1.2rem;">+</span>
        `;
    } else {
        btn.innerHTML = "Add to Cart";
    }
}

function changeQty(name, delta, event) {
    event.stopPropagation();
    const itemIndex = cart.findIndex(i => i.name === name);
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity += delta;
        const btnId = cart[itemIndex].btnId;

        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
            
            // Try Reset Main Page Button
            const btn = document.getElementById(btnId);
            if(btn) btn.innerHTML = "Add to Cart";
            
            // Try Reset Product Page Button
            const productBtn = document.getElementById('product-buy-btn');
            if(productBtn) productBtn.innerHTML = "Add to Cart";
        } else {
            // Update whichever button is currently visible
            if (btnId) updateButtonCounter(btnId, name);
            updateButtonCounter('product-buy-btn', name);
        }
        updateCartUI();
        saveCart();
    }
}

function updateCartUI() {
    const cartItemsList = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    if (!cartItemsList) return; 

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

    if(cartCount) cartCount.innerText = totalItems;
    if(cartTotal) cartTotal.innerText = "₹" + total.toLocaleString('en-IN');
}

function removeFromCart(index) {
    const item = cart[index];
    const btnId = item.btnId;
    
    cart.splice(index, 1);
    
    // Reset buttons
    const btn = document.getElementById(btnId);
    if(btn) btn.innerHTML = "Add to Cart";
    const productBtn = document.getElementById('product-buy-btn');
    if(productBtn) productBtn.innerHTML = "Add to Cart";

    updateCartUI();
    saveCart();
}

function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    if(drawer) drawer.classList.toggle('open');
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "🔥 *New Order from The Diecast Network* 🔥%0A%0A";
    message += "I am interested in buying the following:%0A";
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} (Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toLocaleString('en-IN')}%0A`;
    });
    
    const finalTotal = document.getElementById('cart-total').innerText;
    message += `%0A*Total Amount: ${finalTotal}*%0A%0APlease let me know if these are available!`;

    window.open(`https://wa.me/+916367982717?text=${message}`, '_blank');
}

// --- LOCAL STORAGE ---
function saveCart() {
    localStorage.setItem('myGarageCart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('myGarageCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
        
        // Update buttons logic
        cart.forEach(item => {
            // FIX: Only update buttons if they are NOT the shared product page button.
            // The product page button will be handled by loadProductPage() separately.
            if (item.btnId && item.btnId !== 'product-buy-btn') {
                updateButtonCounter(item.btnId, item.name);
            }
        });
    }
}

// --- HELPER FUNCTIONS ---
function filterCars() {
    const searchInput = document.getElementById('carSearch');
    if(!searchInput) return;
    const searchTerm = searchInput.value.toLowerCase();
    const cards = document.getElementsByClassName('car-card');

    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].querySelector('h3').innerText.toLowerCase();
        const details = cards[i].querySelector('h4') ? cards[i].querySelector('h4').innerText.toLowerCase() : "";
        if (title.includes(searchTerm) || details.includes(searchTerm)) {
            cards[i].style.display = "flex"; 
        } else {
            cards[i].style.display = "none";
        }
    }
}

function openLightbox(imgElement) {
    const lightbox = document.getElementById("image-lightbox");
    const zoomedImg = document.getElementById("zoomed-img");
    const captionText = document.getElementById("lightbox-caption");
    
    // Check if we are inside a card (Main Page) or on Product Page
    const card = imgElement.closest('.car-card');
    let title = "";
    
    if (card) {
        title = card.querySelector('h3').innerText;
    } else {
        const productTitle = document.getElementById('product-title');
        title = productTitle ? productTitle.innerText : "";
    }

    lightbox.style.display = "block";
    zoomedImg.src = imgElement.src;
    captionText.innerHTML = title;
}

function closeLightbox() {
    document.getElementById("image-lightbox").style.display = "none";
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") closeLightbox();
});
