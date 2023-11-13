// Header nav buttons

function scrollToJustAbove(element, margin) {
    let dims = element.getBoundingClientRect();
    window.scrollTo(window.scrollX, dims.top - margin);
}

document
    .getElementsByClassName("nav-about-btn")[0]
    .addEventListener("click", function () {
        scrollToJustAbove(document.querySelector(".about-me"), 0);
    });

document
    .getElementsByClassName("nav-projects-btn")[0]
    .addEventListener("click", function () {
        scrollToJustAbove(document.querySelector(".projects"), 60);
    });
