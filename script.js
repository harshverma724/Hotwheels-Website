// 1. COMPLETE CAR DATABASE
const carDatabase = {

    "hw-ferrari-team": {
        name: "Hot Wheels PREMIUM | TEAM TRANSPORT | Ferrari 250 GTO",
        series: "Hot Wheels PREMIUM | TEAM TRANSPORT | Ferrari 250 GTO / Fiat 642 RN2 Bartoletti | FLF56",
        price: 2599,
        mrp: 3599,
        img: "assets/car-photos/Team Transport Ferrari/WhatsApp Image 2026-01-21 at 3.26.13 PM.jpeg",
        images: [
            "assets/car-photos/Team Transport Ferrari/WhatsApp Image 2026-01-21 at 3.26.13 PM.jpeg",
            "assets/car-photos/Team Transport Ferrari/WhatsApp Image 2026-01-21 at 3.26.13 PM (3).jpeg",
            "assets/car-photos/Team Transport Ferrari/WhatsApp Image 2026-01-21 at 3.26.13 PM (1).jpeg",
            "assets/car-photos/Team Transport Ferrari/WhatsApp Image 2026-01-21 at 3.26.12 PM.jpeg"
        ],
        desc: "This premium Team Transport set is a historic tribute to Scuderia Ferrari's golden era. It features the legendary Fiat 642 RN2 Bartoletti transporter, the famous hauler used by the Ferrari factory team in the 1960s. It carries the iconic Ferrari 250 GTO (Race #22), finished in classic Rosso Corsa with authentic sponsor decals.",
        status: "available"
    },

    "mb-PORSCHE 911 TARGA": {
        name: "Matchbox POWER GRABS | 2026 MAINLINE | Porsche 911 Targa 4 | 49/125",
        series: "Matchbox POWER GRABS | 2026 MAINLINE | Porsche 911 Targa 4 | 49/125",
        price: 329,
        mrp: 599,
        img: "assets/car-photos/Matchbox/IMG_1941.JPG.jpeg",
        images: [
            "assets/car-photos/Matchbox/IMG_1941.JPG.jpeg",
            "assets/car-photos/Matchbox/IMG_1931.JPG.jpeg",
            "assets/car-photos/Matchbox/IMG_1934.JPG.jpeg",
            "assets/car-photos/Matchbox/IMG_1933.JPG.jpeg",
            "assets/car-photos/Matchbox/IMG_1935.JPG.jpeg",
            "assets/car-photos/Matchbox/IMG_1936.JPG.jpeg"         
        ],
        desc: "This Porsche 911 Targa 4 is a sleek addition from the 2026 Matchbox Mainline. Finished in a vibrant green, it highlights the Targa’s iconic open-top silhouette and 'glasshouse' rear window. The 'Power Grabs' box art features a dynamic street scene, emphasizing the car's daily-driver supercar status. ",
    },

    "mb-Land Rover Defender 90": {
        name: "Matchbox POWER GRABS | 2026 MAINLINE | 2020 Land Rover Defender 90 | 46/125",
        series: "Matchbox POWER GRABS | 2026 MAINLINE | 2020 Land Rover Defender 90 | 46/125",
        price: 329,
        mrp: 599,
        img: "assets/car-photos/Matchbox/IMG_1950.JPG.jpeg",
        images: [
            "assets/car-photos/Matchbox/IMG_1950.JPG.jpeg",
            "assets/car-photos/Matchbox/IMG_1943.JPG.jpeg",
            "assets/car-photos/Matchbox/IMG_1944.JPG.jpeg",
            "assets/car-photos/Matchbox/IMG_1945.JPG.jpeg",
            "assets/car-photos/Matchbox/IMG_1946.JPG.jpeg",         
        ],
        desc: "The 2020 Land Rover Defender 90 captures the rugged modernization of the British off-road icon. Featured here in a deep metallic maroon (red), this casting sports the shorter 2-door wheelbase ('90') and detailed headlight tampos. It is packaged in the collector-friendly 'Power Grabs' box, perfect for keeping the vehicle mint without card damage.",
        status: "available"
    },

    "mb-PORSCHE 911 TARGA-Land Rover Defender 90": {
        name: "Matchbox POWER GRABS | 2025 MAINLINE | Euro Adventure Combo: Porsche 911 Targa & Defender 90 | 46 & 49/125",
        series: "Matchbox POWER GRABS | 2025 MAINLINE | Euro Adventure Combo: Porsche 911 Targa & Defender 90 | 46 & 49/125",
        price: 599,
        mrp: 1199,
        img: "assets/car-photos/Matchbox/IMG_1952.JPG.jpeg",
        images: [
            "assets/car-photos/Matchbox/IMG_1952.JPG.jpeg",
            "assets/car-photos/Matchbox/IMG_1931.JPG.jpeg",
            "assets/car-photos/Matchbox/IMG_1943.JPG.jpeg",
            "assets/car-photos/Matchbox/IMG_1936.JPG.jpeg",
            "assets/car-photos/Matchbox/IMG_1944.JPG.jpeg",
            "assets/car-photos/Matchbox/IMG_1935.JPG.jpeg",
            "assets/car-photos/Matchbox/IMG_1946.JPG.jpeg",
        ],
        desc: "The 'Euro Adventure' Duo combines the best of on-road luxury and off-road capability. This Matchbox Power Grabs set features the sleek Porsche 911 Targa in vibrant green, capturing the essence of open-top German engineering, paired with the rugged 2020 Land Rover Defender 90 in metallic maroon for ultimate British utility. Both come in collector-friendly boxes, making this a perfect mix of speed and durability for any collection.",
        status: "available"
    },


    "hw-pantone": {
        name: "Hot Wheels SILVER SERIES | PANTONE",
        series: "Hot Wheels SILVER SERIES | PANTONE | Complete Set | 1-6/6 | 2026",
        price: 2099,
        mrp: 2699,
        img: "assets/car-photos/Hot-Wheels-Pantone.jpg",
        desc: "The Hot Wheels 2026 Pantone Silver Series is a unique, design-forward collection that bridges the worlds of automotive culture and graphic design.",
        status: "available"
    },

    "tokyo-drift": {
        name: "Fast And Furious TOKYO DRIFT",
        series: "Hot Wheels SILVER SERIES | 1970 Monte Carlo | 3/5",
        price: 1699,
        mrp: 3398,
        img: "assets/car-photos/Tokyo Drift.jpeg",
        desc: "The 1970 Monte Carlo captures the raw, gritty American muscle from the opening scene of Tokyo Drift. Finished in screen-accurate primer beige, this casting replicates Sean Boswell's first ride.",
        status: "sold"
    },
    "nissan-350z": {
        name: "Hot Wheels NISSAN 350Z CUSTOM",
        series: "Hot Wheels SILVER SERIES | Nissan 350Z Custom | 1/5",
        price: 429,
        mrp: 599,
        img: "assets/car-photos/NISSAN 350Z CUSTOM PERSONNALISE.jpeg",
        desc: "Driven by the 'Drift King' in Tokyo Drift, this Nissan 350Z Custom features the iconic VeilSide Version 3 widebody kit, high rear wing, and detailed dark finish.",
        status: "sold"
    },
    "hw-spiderman": {
        name: "Hot Wheels SILVER SERIES | MARVEL SPIDER-MAN",
        series: "Hot Wheels SILVER SERIES | MARVEL SPIDER-MAN | Complete Set | 1-6/6 | 2026",
        price: 1495,
        mrp: 2599,
        img: "assets/car-photos/Spiderman/WhatsApp Image 2026-01-21 at 3.26.16 PM.jpeg",
        images: [
            "assets/car-photos/Spiderman/WhatsApp Image 2026-01-21 at 3.26.16 PM.jpeg",
            "assets/car-photos/Spiderman/WhatsApp Image 2026-01-21 at 3.26.16 PM (1).jpeg",
            "assets/car-photos/Spiderman/WhatsApp Image 2026-01-21 at 3.26.15 PM.jpeg",
            "assets/car-photos/Spiderman/WhatsApp Image 2026-01-21 at 3.26.15 PM (2).jpeg",
            "assets/car-photos/Spiderman/WhatsApp Image 2026-01-21 at 3.26.16 PM (2).jpeg",
            "assets/car-photos/Spiderman/WhatsApp Image 2026-01-21 at 3.26.15 PM (1).jpeg",
        ],
        desc: "Swing into action with the Marvel Spider-Man Silver Series, a collection of five character-themed vehicles featuring exclusive comic-style card art.",
        status: "sold"
    },
    "mazda-rx7": {
        name: "Hot Wheels Mazda RX-7",
        series: "Hot Wheels HW J-IMPORTS | 2026 MAINLINE | 2/10",
        price: 279,
        mrp: 399,
        img: "assets/car-photos/Mazda RX7.jpeg",
        desc: "Part of the 2026 HW J-Imports series, this Metalflake Purple Mazda RX-7 sports a vibrant 'Spring' livery with unique rabbit graphics.",
        status: "sold"
    },
    "ford-rs200-sth": {
        name: "Hot Wheels Ford RS200 Super Treasure Hunt",
        series: "Hot Wheels SUPER TREASURE HUNT | HW PEAK PURSUIT",
        price: 2999,
        mrp: 4999,
        img: "assets/car-photos/FordRS200 Super.jpg",
        desc: "Iconic Gulf Racing livery with Spectraflame powder blue paint and classic orange stripes. Equipped with Real Riders rubber tires.",
        status: "sold"
    },
    "ford-rs200-main": {
        name: "Hot Wheels Ford RS200",
        series: "Hot Wheels HW PEAK PURSUIT | 2025 MAINLINE | 9/10",
        price: 279,
        mrp: 349,
        img: "assets/car-photos/Ford RS200.jpeg",
        desc: "The Hot Wheels Ford RS200 in 'Gulf Blue' is a standout release from the 2025 Peak Pursuit series.",
        status: "available"
    },
    "ferrari-sf90": {
        name: "Ferrari SF90 Stradale",
        series: "Hot Wheels HW EXOTICS | Ferrari SF90 Stradale | 1/5",
        price: 399,
        mrp: 599,
        img: "assets/car-photos/Ferrari sf90 grey.jpg",
        desc: "This casting faithfully replicates Ferrari's first series-production Plug-in Hybrid Electric Vehicle (PHEV).",
        status: "sold"
    },
    "bugatti-bolide": {
        name: "Hot Wheels Bugatti Bolide",
        series: "Hot Wheels HW EXOTICS | Bugatti Bolide | 3/10",
        price: 649,
        mrp: 999,
        img: "assets/car-photos/Bugatti Bolide.jpg",
        desc: "Capturing the ultimate W16 track-only hypercar, this Bugatti Bolide features radical aerodynamics.",
        status: "sold"
    },
    "mclaren-f1": {
        name: "Hot Wheels McLaren F1",
        series: "Hot Wheels HW: THE '90s | McLaren F1 | 9/10",
        price: 449,
        mrp: 699,
        img: "assets/car-photos/Mclaren F1.jpg",
        desc: "Finished in Grand Prix Red, this casting honors the ultimate 1990s hypercar with its iconic central driving position.",
        status: "sold"
    },
    "ferrari-daytona": {
        name: "Bburago FERRARI DAYTONA SP3",
        series: "Bburago FERRARI | RACE & PLAY | Icona Series",
        price: 599,
        mrp: 799,
        img: "assets/car-photos/Bburago FERRARI DAYTONA SP3.jpg",
        desc: "The Bburago Ferrari Daytona SP3 captures the breathtaking design of Ferrari's ultra-exclusive Icona series.",
        status: "available"
    },
    "koenigsegg-ccxr": {
        name: "Hot Wheels PREMIUM Koenigsegg CCXR",
        series: "Hot Wheels PREMIUM | Fast & Furious | 3/5",
        price: 799,
        mrp: 1199,
        img: "assets/car-photos/Koenigsegg CCXR.jpg",
        desc: "The Koenigsegg CCXR brings the multi-million dollar exotic flair from Fast Five to your collection.",
        status: "available"
    },
    "vw-bumblebee": {
        name: "Hot Wheels Volkswagen Beetle (Bumblebee)",
        series: "Hot Wheels HW SCREEN TIME | TRANSFORMERS",
        price: 289,
        mrp: 399,
        img: "assets/car-photos/Bumble Bee.jpg",
        desc: "The Volkswagen Beetle 'Bumblebee' brings the beloved Autobot scout to the 1:64 scale world.",
        status: "available"
    }
};

// 2. PAGE LOAD LOGIC (Centralized)
window.onload = function() {
    loadCart(); // Load cart first to update main page buttons

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

    // --- Price & Discount Logic ---
    let priceHTML = `₹${car.price.toLocaleString('en-IN')}`;
    
    if (car.mrp && car.mrp > car.price) {
        const discount = Math.round(((car.mrp - car.price) / car.mrp) * 100);
        
        priceHTML = `
            <div style="display:flex; flex-direction:column; align-items:flex-start;">
                <span style="color: #000000; font-weight:bold; font-size: 2rem;">₹${car.price.toLocaleString('en-IN')}</span>
                <span style="font-size: 1rem; text-decoration: line-through; color: #7f8c8d;">₹${car.mrp.toLocaleString('en-IN')}</span>
            </div>
        `;
        
        const imgBox = document.querySelector('.product-image-box');
        const oldBadge = imgBox.querySelector('.discount-badge');
        if(oldBadge) oldBadge.remove();

        const badge = document.createElement('span');
        badge.className = 'discount-badge';
        badge.innerText = `-${discount}%`;
        badge.style.top = "10px";
        badge.style.right = "10px";
        imgBox.style.position = "relative";
        imgBox.appendChild(badge);
    }

    // --- Fill Data ---
    const titleEl = document.getElementById('product-title');
    if (titleEl) {
        titleEl.innerText = car.name;
        document.getElementById('product-series').innerText = car.series;
        document.getElementById('product-price').innerHTML = priceHTML;
        document.getElementById('product-desc').innerText = car.desc;
        
        // --- Gallery Logic ---
        const mainImg = document.getElementById('main-product-img');
        const thumbContainer = document.getElementById('thumbnail-container');
        
        if (car.images && car.images.length > 0) {
            mainImg.src = car.images[0];
            thumbContainer.innerHTML = ''; 

            car.images.forEach((imgSrc, index) => {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                thumb.className = 'thumbnail';
                if (index === 0) thumb.classList.add('active');
                
                thumb.onclick = function() {
                    mainImg.src = imgSrc;
                    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                };
                thumbContainer.appendChild(thumb);
            });
        } else {
            mainImg.src = car.img;
            thumbContainer.innerHTML = '';
        }

        // --- Button Logic (Using ID) ---
        const buyBtn = document.getElementById('product-buy-btn');
        if (buyBtn) {
            buyBtn.onclick = null;
            
            if (car.status === 'sold') {
                buyBtn.innerText = "Sold Out";
                buyBtn.classList.add('disabled');
                buyBtn.onclick = function() { alert('This item is sold out!'); };
            } else {
                buyBtn.innerText = "Add to Cart";
                buyBtn.classList.remove('disabled');
                buyBtn.onclick = function() {
                    handleCartClick('product-buy-btn', id); // Pass ID only
                };
            }

            const existingItem = cart.find(item => item.id === id); // Check by ID
            if (existingItem) {
                updateButtonCounter('product-buy-btn', id);
            }
        }
    }
}

// --- CART STATE & FUNCTIONS ---
let cart = [];

function handleCartClick(btnId, id) {
    const car = carDatabase[id];
    if (!car) return;

    if (car.status === 'sold') {
        alert("This item is currently sold out!");
        return;
    }
    // We look up details from DB, so we don't need to pass them in HTML
    addToCart(id, btnId);
}

function addToCart(id, btnId) {
    const car = carDatabase[id];
    // Check by ID (Fixes duplicates)
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ 
            id: id, 
            name: car.name, 
            price: car.price, 
            quantity: 1, 
            btnId: btnId // We keep this, but loadCart will effectively ignore it for main page updates
        });
    }

    // Update buttons immediately
    // 1. Update the button that was just clicked
    updateButtonCounter(btnId, id);
    
    // 2. Try to update the Main Page button counterpart (if we are on product page)
    const mainPageBtnId = 'btn-' + id;
    if (document.getElementById(mainPageBtnId)) {
        updateButtonCounter(mainPageBtnId, id);
    }

    updateCartUI();
    saveCart(); 
    
    const drawer = document.getElementById('cart-drawer');
    if (drawer && !drawer.classList.contains('open')) {
        drawer.classList.add('open');
    }
}

function updateButtonCounter(btnId, id) {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    const item = cart.find(i => i.id === id); // Find by ID
    
    if (item && item.quantity > 0) {
        btn.innerHTML = `
            <span onclick="changeQty('${id}', -1, event)" style="padding: 0 15px; cursor: pointer; font-size: 1.2rem;">−</span>
            ${item.quantity}
            <span onclick="changeQty('${id}', 1, event)" style="padding: 0 15px; cursor: pointer; font-size: 1.2rem;">+</span>
        `;
    } else {
        btn.innerHTML = "Add to Cart";
    }
}

function changeQty(id, delta, event) {
    event.stopPropagation();
    const itemIndex = cart.findIndex(i => i.id === id); // Find by ID
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity += delta;

        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
            
            // RESET LOGIC: Explicitly reset both possible buttons
            const mainPageBtnId = 'btn-' + id;
            const mainBtn = document.getElementById(mainPageBtnId);
            if(mainBtn) mainBtn.innerHTML = "Add to Cart";
            
            const productBtn = document.getElementById('product-buy-btn');
            if(productBtn) productBtn.innerHTML = "Add to Cart";

        } else {
            // Update whichever button is visible
            const mainPageBtnId = 'btn-' + id;
            if (document.getElementById(mainPageBtnId)) updateButtonCounter(mainPageBtnId, id);
            if (document.getElementById('product-buy-btn')) updateButtonCounter('product-buy-btn', id);
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
    const id = item.id; // Get ID before removing
    
    cart.splice(index, 1);
    
    // RESET LOGIC: Reset both possible buttons
    const mainPageBtnId = 'btn-' + id;
    const mainBtn = document.getElementById(mainPageBtnId);
    if(mainBtn) mainBtn.innerHTML = "Add to Cart";
    
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

function saveCart() {
    localStorage.setItem('myGarageCart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('myGarageCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
        
        // RE-SYNC LOGIC:
        // Always try to find and update the Main Page Button for every item in the cart
        cart.forEach(item => {
            const mainPageBtnId = 'btn-' + item.id;
            const btnElement = document.getElementById(mainPageBtnId);
            
            if (btnElement) {
                updateButtonCounter(mainPageBtnId, item.id);
            }
        });
    }
}

// ... existing helper functions (filterCars, openLightbox, closeLightbox) ...
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