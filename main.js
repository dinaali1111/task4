let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;
const slides = document.querySelector('.slides');
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");

let isPlaying = false;
let interval;

function updateSlider() {
    const slideWidth = images[0].clientWidth;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlider();
});

playButton.addEventListener("click", () => {
    if (!isPlaying) {
        isPlaying = true;
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateSlider();
        }, 2000);
    }
});

stopButton.addEventListener("click", () => {
    isPlaying = false;
    clearInterval(interval);
});

