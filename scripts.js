document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    const smallFrames = document.getElementById("small-frames");
    const mediumFrames = document.getElementById("medium-frames");
    const largeFrames = document.getElementById("large-frames");

    const frameImages = {
        "4 × 4 Inches": "images/4x4.png", // Replace with actual image paths
        "4 × 6 Inches": "images/4x6.png",
        "5 × 7 Inches": "images/5x7.png",
        "6 × 8 Inches": "images/6x8.png",
        "8 × 8 Inches": "images/8x8.png",
        "8 × 10 Inches": "images/8x10.png",
        "10 × 12 Inches": "images/10x12.png",
        "12 × 15 Inches": "images/12x15.png",
        "16 × 20 Inches": "images/16x20.png",
        "18 × 24 Inches": "images/18x24.png",
        "20 × 24 Inches": "images/20x24.png",
        "20 × 30 Inches": "images/20x30.jpg",
        "18 × 12 Inches": "images/18x12.png",
    };

    function createFrameElement(frame, category) {
        const frameDiv = document.createElement("div");
        frameDiv.className = "frame";
        frameDiv.innerHTML = `
            <img src="${frameImages[frame.size]}" alt="${frame.size} frame">
            <h3>${frame.size}</h3>
            <p>Colors: ${frame.colors.join(" | ")}</p>
            <p>Normal Price: ₹${frame.price}</p>
            <p class="offer">Special Offer: ₹${frame.offer}</p>
            <button class="order-now-btn" onclick="addToCart('${frame.size}', ${frame.offer}, '${frameImages[frame.size]}')">
                <i class="bi bi-cart"></i> Add to Cart
            </button>
        `;
        if (category === "small") smallFrames.appendChild(frameDiv);
        if (category === "medium") mediumFrames.appendChild(frameDiv);
        if (category === "large") largeFrames.appendChild(frameDiv);
    }

    Object.entries(frames).forEach(([category, frameList]) => {
        frameList.forEach((frame) => createFrameElement(frame, category));
    });

    window.addToCart = function (size, price, image) {
        cart.push({ size, price, image });
        updateCartDisplay();
        alert(`${size} frame added to cart.`);
    };

    function updateCartDisplay() {
        cartItems.innerHTML = "";
        let totalPrice = 0;
        cart.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.size}" class="cart-item-image">
                ${item.size} - ₹${item.price}
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItems.appendChild(itemDiv);
            totalPrice += item.price;
        });
        totalPriceElement.textContent = `Total: ₹${totalPrice}`;
    }

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        updateCartDisplay();
    };

    window.clearCart = function () {
        cart.length = 0;
        updateCartDisplay();
        alert("Cart cleared!");
    };

    window.openCart = function () {
        document.getElementById("cart-modal").style.display = "flex";
    };

    window.closeCart = function () {
        document.getElementById("cart-modal").style.display = "none";
    };
});
