window.onload = function() {
    // Scroll the page by 20px down
    window.scrollBy(0, 60);
};


document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // Check if the user is on the home screen
    if (window.location.pathname === "/home.html") {
        body.classList.add("no-scroll");
    } else {
        body.classList.remove("no-scroll");
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const imageSections = document.querySelectorAll(".image-section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("content-visible");
                    observer.unobserve(entry.target); // Stop observing after animation is triggered
                }
            });
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    imageSections.forEach(section => observer.observe(section));
});
