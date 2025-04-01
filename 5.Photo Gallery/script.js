const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeButton = document.querySelector('.close-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let images = []; // Array to store image URLs
let currentImageIndex = 0;

// Function to load images into the gallery
function loadImages() {
    // Replace with your actual image URLs
    const imageUrls = [
        'images/download (1).png',
        'images/download (2).png',
        'images/download (3).png',
        'images/download (4).png',
    ];

    images = imageUrls;

    imageUrls.forEach((imageUrl, index) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Image ${index + 1}`; // Corrected template literal
        img.addEventListener('click', () => openLightbox(index)); // Pass the index
        gallery.appendChild(img);
    });
}

// Function to open the lightbox
function openLightbox(index) {
    currentImageIndex = index;
    lightboxImage.src = images[currentImageIndex];
    lightbox.classList.add('active');
    updateNavigationButtons();
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
}

// Function to go to the previous image
function showPreviousImage() {
    currentImageIndex--;
    lightboxImage.src = images[currentImageIndex];
    updateNavigationButtons();
}

// Function to go to the next image
function showNextImage() {
    currentImageIndex++;
    lightboxImage.src = images[currentImageIndex];
    updateNavigationButtons();
}

// Function to update the state of the navigation buttons
function updateNavigationButtons() {
    prevButton.disabled = currentImageIndex === 0;
    nextButton.disabled = currentImageIndex === images.length - 1;
}

// Event listeners
closeButton.addEventListener('click', closeLightbox);
prevButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);

// Load the images when the page loads
window.addEventListener('load', loadImages);
