// Mobile menu functionality
const mobileMenuButton = document.querySelector('button[aria-label="Toggle menu"]');
const mobileMenu = document.querySelector('.fixed.inset-0.bg-white\\/95');
let isMenuOpen = false;

mobileMenuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('translate-x-full');
    mobileMenuButton.classList.toggle('hamburger-open');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.fixed.inset-0.bg-white\\/95 a').forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.classList.add('translate-x-full');
        mobileMenuButton.classList.remove('hamburger-open');
    });
});

// Scroll animations using Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements that should animate on scroll
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Form handling
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show toast notification
    toast.classList.add('toast-show');
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('toast-show');
    }, 3000);
    
    // Reset form
    contactForm.reset();
});

// UI/UX Showcase carousel
let currentSlide = 0;
const slides = document.querySelectorAll('#uiux .w-full.flex-shrink-0');
const totalSlides = slides.length;

function showSlide(index) {
    const container = document.querySelector('#uiux .flex');
    container.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-rotate slides every 8 seconds
let slideInterval = setInterval(nextSlide, 8000);

// Pause auto-rotation on hover
const carousel = document.querySelector('#uiux .relative');
carousel.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

carousel.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 8000);
});

// Navigation buttons for UI/UX showcase
document.querySelector('#uiux button:first-of-type').addEventListener('click', prevSlide);
document.querySelector('#uiux button:last-of-type').addEventListener('click', nextSlide);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function updateActiveLink() {
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('text-primary');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('text-primary');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Add loading animation to images
document.querySelectorAll('img').forEach(img => {
    img.classList.add('image-loading');
    img.addEventListener('load', () => {
        img.classList.remove('image-loading');
    });
});

// Handle form input animations
document.querySelectorAll('.relative input, .relative textarea').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
    
    // Check initial state
    if (input.value) {
        input.parentElement.classList.add('focused');
    }
}); 