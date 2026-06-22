
// ================================
// MOBILE MENU
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if(navLinks.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    }else{
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }

});

// Close menu when clicking a link

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});

// ================================
// ACTIVE NAVIGATION
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if(
            link.getAttribute("href") ===
            `#${current}`
        ){
            link.classList.add("active-link");
        }

    });

});

// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements = document.querySelectorAll(
    ".card, .skill-card, .project-card, .timeline-item"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){

            element.classList.add("show");

        }

    });

};

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// ================================
// SCROLL TO TOP BUTTON
// ================================

const topButton = document.createElement("button");

topButton.innerHTML =
'<i class="fas fa-arrow-up"></i>';

topButton.id = "scrollTopBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topButton.classList.add("visible");

    }else{

        topButton.classList.remove("visible");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ================================
// CURRENT YEAR IN FOOTER
// ================================

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()} Sneha Sebastian. All Rights Reserved.`;

}

// ================================
// PAGE LOADED EFFECT
// ================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


const password = "sneha123";

const adminBtn = document.getElementById("adminBtn");
const saveBtn = document.getElementById("saveBtn");

let adminMode = false;

// Load saved content
window.addEventListener("DOMContentLoaded", () => {

    document
    .querySelectorAll(".editable")
    .forEach(item => {

        const saved =
        localStorage.getItem(item.id);

        if(saved){
            item.innerHTML = saved;
        }

    });

});

// Admin Login
adminBtn.addEventListener("click", () => {

    const entered =
    prompt("Enter Admin Password");

    if(entered === password){

        adminMode = true;

        document
        .querySelectorAll(".editable")
        .forEach(item => {

            item.contentEditable = true;
            item.classList.add("editing");

        });

        saveBtn.style.display = "block";

        alert("Edit Mode Enabled");

    }else{

        alert("Wrong Password");

    }

});

// Save Changes
saveBtn.addEventListener("click", () => {

    document
    .querySelectorAll(".editable")
    .forEach(item => {

        localStorage.setItem(
            item.id,
            item.innerHTML
        );

    });

    alert("Changes Saved");

});