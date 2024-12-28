const frames = {
    small: [
        { size: "4 × 4 Inches", price: 199, offer: 199, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "4 × 6 Inches", price: 279, offer: 229, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "5 × 7 Inches", price: 299, offer: 259, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "6 × 8 Inches", price: 349, offer: 299, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
    ],
    medium: [
        { size: "8 × 8 Inches", price: 349, offer: 349, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "8 × 10 Inches", price: 399, offer: 399, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "10 × 12 Inches", price: 599, offer: 499, colors: ["Elegant Black 🖤", "Timeless White 🤍"] },
        { size: "12 × 15 Inches", price: 699, offer: 649, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
    ],
    large: [
        { size: "16 × 20 Inches", price: 999, offer: 899, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "18 × 24 Inches", price: 1299, offer: 1099, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "20 × 24 Inches", price: 1399, offer: 1299, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "20 × 30 Inches", price: 2799, offer: 2499, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "18 × 12 Inches", price: 1899, offer: 1699, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
    ],
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
    const framesContainer = document.getElementById(`${category}-frames`);
    framesContainer.appendChild(frameDiv);
}

Object.entries(frames).forEach(([category, frameList]) => {
    frameList.forEach((frame) => createFrameElement(frame, category));
});

function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const cartCountElement = document.getElementById("cart-count");
    cartItems.innerHTML = "";
    let totalPrice = 0;
    cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
            ${item.size} - ₹${item.price}
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(itemDiv);
        totalPrice += item.price;
    });
    totalPriceElement.textContent = `Total: ₹${totalPrice}`;
    cartCountElement.textContent = cart.length;
}

window.addToCart = function (size, price, image) {
    cart.push({ size, price, image });
    updateCartDisplay();
};

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

window.sendToWhatsapp = function () {
    const frameList = cart.map(item => `${item.size} - ₹${item.price}`).join("\n");
    const message = `Hey Snapzone, I wish to order these frames:\n${frameList}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/7708554879?text=${encodedMessage}`, "_blank");
};

document.addEventListener("DOMContentLoaded", () => {
    updateCartDisplay();
});
