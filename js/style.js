document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const carousel = document.getElementById("carouselExampleCaptions");

    window.onscroll = function() {
        const scrollPosition = window.scrollY;
        const carouselHeight = carousel.offsetHeight;

        if (scrollPosition > carouselHeight) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    };
});

// client logo toggles
//client1
function toggleText(imgElement) {
    imgElement.classList.toggle('clicked');
}
//client2
function toggletext2(imgElement) {
    imgElement.classList.toggle('clicked');
}
//client3
function toggletext3(imgElement) {
    imgElement.classList.toggle('clicked');
}
//client4
function toggletext4(imgElement) {
    imgElement.classList.toggle('clicked');
}
//client5
function toggletext5(imgElement) {
    imgElement.classList.toggle('clicked');
}
//client6
function toggletext6(imgElement) {
    imgElement.classList.toggle('clicked');
}