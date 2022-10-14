const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
    slide.addEventListener ("click" , () => {
        ClearActiveClasses();
        slide.classList.add("active")
    })
}
function ClearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    } )
}