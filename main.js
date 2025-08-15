let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;
const slides = document.querySelector('.slides');
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");
const caption = document.getElementById("caption");
const thumbnailContainer = document.getElementById("thumbnail-container");

let isPlaying = false;
let interval;

// --- Create Thumbnails ---
images.forEach((img, index) => {
    const thumb = document.createElement('img');
    thumb.src = img.src;
    thumb.alt = `Thumbnail ${index + 1}`;
    thumb.classList.add('thumbnail');
    if (index === 0) {
        thumb.classList.add('active');
    }
    thumb.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
    thumbnailContainer.appendChild(thumb);
});

const thumbnails = document.querySelectorAll('.thumbnail');

function updateSlider() {
    const slideWidth = slides.clientWidth;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    
    // Update caption
    caption.textContent = images[currentIndex].alt;

    // Update active thumbnail
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentIndex);
    });
}

window.addEventListener('resize', updateSlider);

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlider();
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

playButton.addEventListener("click", () => {
    if (!isPlaying) {
        isPlaying = true;
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
        interval = setInterval(nextSlide, 2000);
    } else {
        isPlaying = false;
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        clearInterval(interval);
    }
});

stopButton.addEventListener("click", () => {
    isPlaying = false;
    playButton.innerHTML = '<i class="fas fa-play"></i>';
    clearInterval(interval);
    currentIndex = 0;
    updateSlider();
});

// Initialize slider
updateSlider();

