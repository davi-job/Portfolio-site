document.addEventListener("DOMContentLoaded", function () {
    // Header nav buttons
    const projectsBtns = document.getElementsByClassName("nav-projects-btn");
    const aboutBtns = document.getElementsByClassName("nav-about-btn");

    for (let i = 0; i < projectsBtns.length; i++) {
        projectsBtns[i].addEventListener("click", function () {
            scrollToJustAbove(document.querySelector(".projects"), 60);
        });
    }

    for (let i = 0; i < aboutBtns.length; i++) {
        aboutBtns[i].addEventListener("click", function () {
            scrollToJustAbove(document.querySelector(".about-me"));
        });
    }

    function scrollToJustAbove(element, margin = 0) {
        let dims = element.getBoundingClientRect();
        window.scrollTo(window.scrollX, dims.top - margin);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let heroVideo = document.querySelector(".hero-video");
    let bodyCover = document.querySelector(".body-cover");
    const techStackListItems = document.querySelectorAll(
        ".tech-stack-list-item"
    );

    function runOnPageLoad() {
        bodyCover.classList.add("hidden");
        document.documentElement.style.overflowY = "auto";
        techStackListItems.forEach((item) => {
            item.classList.add("animated");
        });
    }

    heroVideo.addEventListener("loadedmetadata", function () {
        heroVideo.addEventListener("play", runOnPageLoad);
    });

    window.addEventListener("load", runOnPageLoad);
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerInput = document.querySelector(".hamburger input");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileListLinks = document.querySelectorAll(".mobile-list-link");
    const mobileListBtns = document.querySelectorAll(".mobile-list-btn");

    hamburgerInput.checked = false;

    hamburgerInput.addEventListener("change", function () {
        if (this.checked) {
            mobileMenu.classList.add("open");
        } else {
            mobileMenu.classList.remove("open");
        }
    });

    mobileListLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("open");
            hamburgerInput.checked = false;
        });
    });

    mobileListBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            mobileMenu.classList.remove("open");
            hamburgerInput.checked = false;
        });
    });
});
