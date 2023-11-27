document.addEventListener("DOMContentLoaded", function () {
    /////////////////////////////////////////////////////////////////////////////////////
    // Header nav & mobile nav buttons scroll functionality
    /////////////////////////////////////////////////////////////////////////////////////

    // Header nav buttons
    const projectsBtns = document.getElementsByClassName("nav-projects-btn");
    const aboutBtns = document.getElementsByClassName("nav-about-btn");

    for (let i = 0; i < projectsBtns.length; i++) {
        projectsBtns[i].addEventListener("click", function () {
            scrollToJustAbove(document.querySelector(".projects"), 60); // scroll to projects section - 60px margin
        });
    }

    for (let i = 0; i < aboutBtns.length; i++) {
        aboutBtns[i].addEventListener("click", function () {
            scrollToJustAbove(document.querySelector(".about-me")); // scroll to about me section - no margin
        });
    }

    // Scroll to element function
    // margin is the number of pixels above the element to scroll to, defaults to 0

    function scrollToJustAbove(element, margin = 0) {
        let dims = element.getBoundingClientRect();
        window.scrollTo(window.scrollX, dims.top - margin);
    }

    /////////////////////////////////////////////////////////////////////////////////////
    // All the logic that makes page cover disapear and tech stack animations start on hero video load
    /////////////////////////////////////////////////////////////////////////////////////

    let heroVideo = document.querySelector(".hero-video");
    let bodyCover = document.querySelector(".body-cover");
    const techStackListItems = document.querySelectorAll(
        ".tech-stack-list-item"
    );

    function runOnPageLoad() {
        bodyCover.classList.add("hidden"); // hide page cover
        document.documentElement.style.overflowY = "auto"; // enable scrolling
        techStackListItems.forEach((item) => {
            item.classList.add("animated"); // add animation class to each tech stack list item
        });
    }

    heroVideo.addEventListener("loadedmetadata", function () {
        heroVideo.addEventListener("play", runOnPageLoad); // run on page load when hero video starts playing
    });

    window.addEventListener("load", runOnPageLoad);

    /////////////////////////////////////////////////////////////////////////////////////
    // Mobile nav menu functionality ////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////

    const hamburgerInput = document.querySelector(".hamburger input");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileListLinks = document.querySelectorAll(".mobile-list-link");
    const mobileListBtns = document.querySelectorAll(".mobile-list-btn");

    hamburgerInput.checked = false;

    hamburgerInput.addEventListener("change", function () {
        // open mobile menu when hamburger is checked
        if (this.checked) {
            mobileMenu.classList.add("open");
        } else {
            mobileMenu.classList.remove("open");
        }
    });

    mobileListLinks.forEach(function (link) {
        // close mobile menu when link is clicked
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("open");
            hamburgerInput.checked = false;
        });
    });

    mobileListBtns.forEach(function (btn) {
        // close mobile menu when button is clicked
        btn.addEventListener("click", function () {
            mobileMenu.classList.remove("open");
            hamburgerInput.checked = false;
        });
    });
});
