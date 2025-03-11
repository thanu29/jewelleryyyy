document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Sticky navigation effect
    const nav = document.querySelector("nav.nav-sticky");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.style.background = "#000";
            nav.style.transition = "background 0.3s";
        } else {
            nav.style.background = "#222";
        }
    });

    // Lazy loading images
    const lazyImages = document.querySelectorAll("img");
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });

    // Mobile menu toggle
    const menuToggle = document.createElement("button");
    menuToggle.innerText = "☰";
    menuToggle.style.position = "fixed";
    menuToggle.style.top = "10px";
    menuToggle.style.right = "10px";
    menuToggle.style.background = "#fcbe32";
    menuToggle.style.color = "#000";
    menuToggle.style.padding = "10px";
    menuToggle.style.border = "none";
    menuToggle.style.cursor = "pointer";
    document.body.appendChild(menuToggle);

    const navMenu = document.querySelector("nav ul");
    menuToggle.addEventListener("click", function () {
        navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
    });
});
