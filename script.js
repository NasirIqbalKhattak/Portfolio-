// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

// Typing effect
const text = " I'm Nasir Iqbal, I am a student of I.C.S and a Web developer";
let i = 0;
function typeEffect() {
  const target = document.querySelector(".animate-text");
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Slider Logic
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}
function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// Show first slide initially
showSlide(slideIndex);
