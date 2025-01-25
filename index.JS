// Select all elements you want to scroll horizontally
const scrollElements = document.querySelectorAll('#max1, #max2, #max3');

// Set a multiplier for scroll speed
const scrollSpeed = 2; // Increase or decrease this value to adjust the speed

// Loop through each element and add the scroll behavior
scrollElements.forEach((element) => {
  element.addEventListener('wheel', (event) => {
    event.preventDefault();
    // Smoothly scroll horizontally
    element.scrollLeft += event.deltaY * scrollSpeed;
  });
});