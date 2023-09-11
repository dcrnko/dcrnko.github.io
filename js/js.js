// Get the button element
const goToTopButton = document.getElementById("goToTopBtn");

// Function to check the scroll position and toggle the button's visibility
function checkScroll() {
    if (window.pageYOffset > 5) {
        goToTopButton.style.display = "block";
    } else {
        goToTopButton.style.display = "none";
    }
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Optional smooth scrolling behavior
    });
}

// Add a scroll event listener to check when to show/hide the button
window.addEventListener("scroll", checkScroll);

// Add a click event listener to the button to scroll to the top
goToTopButton.addEventListener("click", scrollToTop);

