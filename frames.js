const frames = {
    small: [
        { size: "4 × 4 Inches", price: 199, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "4 × 6 Inches", price: 279, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "5 × 7 Inches", price: 299, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "6 × 8 Inches", price: 349, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
    ],
    medium: [
        { size: "8 × 8 Inches", price: 349, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "8 × 10 Inches", price: 399, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "10 × 12 Inches", price: 599, colors: ["Elegant Black 🖤", "Timeless White 🤍 "] },
        { size: "12 × 15 Inches", price: 699, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
    ],
    large: [
        { size: "16 × 20 Inches", price: 999, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "18 × 24 Inches", price: 1299, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "20 × 24 Inches", price: 1399, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "20 × 30 Inches", price: 2799, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
        { size: "18 × 12 Inches", price: 1899, colors: ["Sleek Black 🖤", "Classic White 🤍"] },
    ],
};

function createFrameElement(frame, category) {
    const frameDiv = document.createElement("div");
    frameDiv.className = "frame";
    frameDiv.innerHTML = `
        <img src="${frameImages[frame.size]}" alt="${frame.size} frame">
        <h3>${frame.size}</h3>
        <p>Colors: ${frame.colors.join(" | ")}</p>
        <p>Price: ₹${frame.price}</p>
        <button class="order-now-btn">
            <i class="bi bi-cart"></i> Order Now
        </button>
    `;
    const framesContainer = document.getElementById(`${category}-frames`);
    framesContainer.appendChild(frameDiv);
}

Object.entries(frames).forEach(([category, frameList]) => {
    frameList.forEach((frame) => createFrameElement(frame, category));
});
