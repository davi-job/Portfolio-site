document.addEventListener("DOMContentLoaded", function () {
    // Header nav buttons
    document
        .getElementsByClassName("nav-projects-btn")[0]
        .addEventListener("click", function () {
            scrollToJustAbove(document.querySelector(".projects"), 60);
        });

    document
        .getElementsByClassName("nav-about-btn")[0]
        .addEventListener("click", function () {
            scrollToJustAbove(document.querySelector(".about-me"));
        });

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
