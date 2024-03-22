const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    slide();
});

nextButton.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slideCount;
    slide();
});

const slide = () => {
    const imageWidth = slider.clientWidth;
    const slideOffset = -slideIndex * imageWidth;
    slider.style.transform = `translateX(${slideOffset}px)`;
}

window.addEventListener('load', () => {
    slide();
});

var modal = document.querySelector(".modal");
var modal2 = document.querySelector(".modal2");
var modal3 = document.querySelector(".modal3"); // Добавлено
var trigger = document.querySelectorAll(".trigger");
var trigger2 = document.querySelectorAll(".trigger2");
var trigger3 = document.querySelectorAll(".trigger3"); // Добавлено
var closeButton = document.querySelector(".close-button");
var closeButton2 = document.querySelector(".close-button2");
var closeButton3 = document.querySelector(".close-button3"); // Добавлено
var body = document.querySelector("body");

function toggleModal(item) {
    item.classList.toggle("show-modal");
    if (item.classList.contains("show-modal")) {
        body.classList.add("modal-open");
    } else {
        body.classList.remove("modal-open");
    }
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal(modal);
    }
    if (event.target === modal2) {
        toggleModal(modal2);
    }
    if (event.target === modal3) { // Добавлено
        toggleModal(modal3);
    }
}

trigger.forEach(function(element) {
    element.addEventListener("click", function() {
        toggleModal(modal);
    });
});

trigger2.forEach(function(element) {
    element.addEventListener("click", function() {
        toggleModal(modal2);
    });
});

trigger3.forEach(function(element) { // Добавлено
    element.addEventListener("click", function() {
        toggleModal(modal3);
    });
});

closeButton.addEventListener("click", function() {
    if (modal.classList.contains("show-modal")) {
        toggleModal(modal);
    }
});

closeButton2.addEventListener("click", function() {
    if (modal2.classList.contains("show-modal")) {
        toggleModal(modal2);
    }
});

closeButton3.addEventListener("click", function() { // Добавлено
    if (modal3.classList.contains("show-modal")) {
        toggleModal(modal3);
    }
});

window.addEventListener("click", windowOnClick);