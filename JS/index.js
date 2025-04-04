document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let isDragging = false;
    let startX, currentRotation = 0;
    let velocity = 0;
    let animationFrame;

    function animateMomentum() {
        if (Math.abs(velocity) > 0.1) {
            currentRotation += velocity;
            velocity *= 0.95; // Friction to slow it down smoothly
            slider.style.transform = `perspective(800px) rotateX(-16deg) rotateY(${currentRotation}deg)`;
            animationFrame = requestAnimationFrame(animateMomentum);
        } else {
            cancelAnimationFrame(animationFrame);
        }
    }

    slider.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        velocity = 0;
        cancelAnimationFrame(animationFrame); // Stop any previous momentum
        slider.style.cursor = "grabbing";
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        slider.style.cursor = "grab";
        animateMomentum(); // Start inertia effect
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let deltaX = e.clientX - startX;
        velocity = deltaX * 1; // Adjust inertia strength
        currentRotation += deltaX * 0.2;
        slider.style.transform = `perspective(800px) rotateX(-16deg) rotateY(${currentRotation}deg)`;
        startX = e.clientX;
    });

    // Prevent dragging images
    document.querySelectorAll(".slider img").forEach((img) => {
        img.setAttribute("draggable", false);
    });

    // Prevent selecting text/images while dragging
    document.addEventListener("dragstart", (event) => event.preventDefault());
});
