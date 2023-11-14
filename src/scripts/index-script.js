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
