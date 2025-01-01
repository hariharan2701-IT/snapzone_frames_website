document.addEventListener("DOMContentLoaded", () => {
    // Show the pop-up when the page loads
    const popup = document.getElementById("popup-message");
    const closePopupButton = document.getElementById("close-popup");

    // Display the pop-up
    popup.style.display = "flex";

    // Close the pop-up and close the page
    closePopupButton.addEventListener("click", () => {
        popup.style.display = "none";

        // Attempt to close the window (only works if the page was opened via JavaScript)
        window.close();

        // Alternatively, redirect to a blank page if window.close() is not supported
        // window.location.href = "about:blank"; // Uncomment this line if you want a redirect instead of closing
    });

    // The rest of your previous code goes here
    const smallFrames = document.getElementById("small-frames");
    const mediumFrames = document.getElementById("medium-frames");
    const largeFrames = document.getElementById("large-frames");

    const frameImages = {
        "4 × 4 Inches": "images/4x4.png", 
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
            <p>Price: ₹${frame.price}</p>
            <button class="order-now-btn">
                <i class="bi bi-cart"></i> Order Now
            </button>
        `;
        if (category === "small") smallFrames.appendChild(frameDiv);
        if (category === "medium") mediumFrames.appendChild(frameDiv);
        if (category === "large") largeFrames.appendChild(frameDiv);
    }

    Object.entries(frames).forEach(([category, frameList]) => {
        frameList.forEach((frame) => createFrameElement(frame, category));
    });
});
