// Mobile Navbar Toggle
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Ripple Effect for Buttons
document.querySelectorAll(".btn, button").forEach(btn => {
    btn.addEventListener("click", function(e){
        const circle = document.createElement("span");
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        circle.classList.add("ripple");
        this.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
    });
});

// Sound Effect on Click
const sound = new Audio("click.mp3");

document.querySelectorAll("[data-sound]").forEach(el => {
    el.addEventListener("click", () => {
        sound.currentTime = 0;
        sound.play();
    });
});

// Dark/Light Mode Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Smooth Scroll using GSAP
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if(target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: target,
                ease: "power2.out"
            });
        }
    });
});

// Scroll Reveal Animation
const animatedElements = document.querySelectorAll(".slide-left, .slide-right, .slide-bottom");

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    animatedElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Run once on load
