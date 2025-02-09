document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("header nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Remove the active class from all links
            navLinks.forEach(link => link.classList.remove("active"));
            // Add the active class to the clicked link
            link.classList.add("active");
        });
    });
});
