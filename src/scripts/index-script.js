// Header nav buttons

function scrollToJustAbove(element, margin = 0) {
    let dims = element.getBoundingClientRect();
    window.scrollTo(window.scrollX, dims.top - margin);
}

document
    .getElementsByClassName("nav-about-btn")[0]
    .addEventListener("click", function () {
        scrollToJustAbove(document.querySelector(".about-me"));
    });

document
    .getElementsByClassName("nav-projects-btn")[0]
    .addEventListener("click", function () {
        scrollToJustAbove(document.querySelector(".projects"), 60);
    });

// If .hero-video has loaded and is playing, add class to hidden to body-cover and set html overflow-y to auto

let heroVideo = document.querySelector(".hero-video");
let bodyCover = document.querySelector(".body-cover");
const techStackListItems = document.querySelectorAll(".tech-stack-list-item");

heroVideo.addEventListener("loadedmetadata", function () {
    heroVideo.addEventListener("play", function () {
        bodyCover.classList.add("hidden");
        document.documentElement.style.overflowY = "auto";
        techStackListItems.forEach((item) => {
            item.classList.add("animated");
        });
    });
});
