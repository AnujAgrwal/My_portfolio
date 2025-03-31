
// Create Back to Top button dynamically
document.addEventListener("DOMContentLoaded", function () {
    let backToTopBtn = document.createElement("button");
    backToTopBtn.innerText = "↑ Back to Top";
    backToTopBtn.id = "backToTop";
    document.body.appendChild(backToTopBtn);

    // Style the button
    backToTopBtn.style.position = "fixed";
    backToTopBtn.style.bottom = "20px";
    backToTopBtn.style.right = "20px";
    backToTopBtn.style.padding = "10px 20px";
    backToTopBtn.style.background = "#6e45e2";
    backToTopBtn.style.color = "white";
    backToTopBtn.style.border = "none";
    backToTopBtn.style.borderRadius = "5px";
    backToTopBtn.style.cursor = "pointer";
    backToTopBtn.style.display = "none";
    backToTopBtn.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.2)";
    backToTopBtn.style.transition = "opacity 0.3s";

    // Show/hide button on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Scroll to top smoothly
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
