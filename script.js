const burger = document.querySelector(".icon-burger");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.querySelector("body");
const closeBtn = document.querySelector(".icon-x");
//const sectionsInner = document.querySelectorAll(".section-inner");



burger.addEventListener("click", () => {
    mobileNav.classList.add("show");
    body.classList.add("mobile-nav-open");
    body.style.top = `-${window.scrollY}px`;
    closeBtn.classList.add("show");
    burger.classList.remove("show");
    // sectionsInner.forEach((section) => {
    //     section.style.marginRight = "calc(5% + 16px)";
    // });
    // sectionsInner.forEach((section) => {
    //     section.style.width = "calc(90% - 16px)";
    // });
    
});

closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("show");
    body.classList.remove("mobile-nav-open");
    closeBtn.classList.remove("show");
    burger.classList.add("show");
    // sectionsInner.forEach((section) => {
    //     section.style.marginRight = "";
    // });
    // sectionsInner.forEach((section) => {
    //     section.style.width = "";
    // });
    
});


