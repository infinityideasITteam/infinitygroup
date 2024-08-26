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

// JavaScript to control scrolling effect
document.addEventListener('DOMContentLoaded', function() {
    const leftSide = document.getElementById('leftSide');
    const rightSide = document.getElementById('rightSide');
    const leftList = leftSide.querySelector('.scroll-list');
    const rightList = rightSide.querySelector('.scroll-list');

    let leftAnimation, rightAnimation;

    const pauseAnimations = () => {
        leftList.style.animationPlayState = 'paused';
        rightList.style.animationPlayState = 'paused';
    };

    const resumeAnimations = () => {
        leftList.style.animationPlayState = 'running';
        rightList.style.animationPlayState = 'running';
    };

    leftSide.addEventListener('mouseenter', function() {
        pauseAnimations();
        rightList.style.animationPlayState = 'running'; // Ensure right side continues
    });

    leftSide.addEventListener('mouseleave', function() {
        resumeAnimations();
    });

    rightSide.addEventListener('mouseenter', function() {
        pauseAnimations();
        leftList.style.animationPlayState = 'running'; // Ensure left side continues
    });

    rightSide.addEventListener('mouseleave', function() {
        resumeAnimations();
    });

    // Handle touch events for mobile devices
    leftSide.addEventListener('touchstart', function() {
        pauseAnimations();
        rightList.style.animationPlayState = 'running'; // Ensure right side continues
    });

    leftSide.addEventListener('touchend', function() {
        resumeAnimations();
    });

    rightSide.addEventListener('touchstart', function() {
        pauseAnimations();
        leftList.style.animationPlayState = 'running'; // Ensure left side continues
    });

    rightSide.addEventListener('touchend', function() {
        resumeAnimations();
    });
});