// ===================================
// SMOOTH SCROLL NAVIGATION
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// ===================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.product-card, .category-card, .feature-item, .info-card, .about-text, .about-image'
    );

    elementsToAnimate.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});

// ===================================
// PARALLAX EFFECT ON HERO
// ===================================
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
    });
}

// ===================================
// PRODUCT CARD HOVER EFFECTS
// ===================================
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// CATEGORY CARD INTERACTIONS
// ===================================
const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05) rotate(1deg)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ===================================
// CONTACT FORM HANDLING
// ===================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Show success message (you can replace this with actual form submission)
        alert('Thank you for your message! We will get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

// ===================================
// NEWSLETTER FORM HANDLING
// ===================================
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = newsletterForm.querySelector('input[type="email"]').value;

        // Show success message
        alert(`Thank you for subscribing! We'll send updates to ${email}`);

        // Reset form
        newsletterForm.reset();
    });
}

// ===================================
// PRODUCT BUTTON INTERACTIONS
// ===================================
const productButtons = document.querySelectorAll('.product-btn');

productButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        const productName = this.closest('.product-card').querySelector('.product-name').textContent;
        alert(`Product Details: ${productName}\n\nThis would typically open a detailed product page or add to cart.`);
    });
});

// ===================================
// CATEGORY BUTTON INTERACTIONS
// ===================================
const categoryButtons = document.querySelectorAll('.category-btn');

categoryButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        const categoryName = this.closest('.category-card').querySelector('.category-name').textContent;
        alert(`Browsing: ${categoryName}\n\nThis would typically navigate to a filtered product listing page.`);
    });
});

// ===================================
// SMOOTH REVEAL ON SCROLL
// ===================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// ===================================
// CURSOR GLOW EFFECT (OPTIONAL PREMIUM TOUCH)
// ===================================
const createCursorGlow = () => {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        display: none;
    `;
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
        glow.style.display = 'block';
        glow.style.left = e.clientX - 10 + 'px';
        glow.style.top = e.clientY - 10 + 'px';
    });

    document.addEventListener('mouseleave', () => {
        glow.style.display = 'none';
    });
};

// Uncomment to enable cursor glow effect
// createCursorGlow();

// ===================================
// DYNAMIC YEAR IN FOOTER
// ===================================
const updateFooterYear = () => {
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
    }
};

updateFooterYear();

// ===================================
// LOADING ANIMATION
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Trigger initial reveal
    revealOnScroll();
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(() => {
    revealOnScroll();
}));

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
    }
});

// Focus management for mobile menu
mobileToggle.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        const firstLink = navMenu.querySelector('.nav-link');
        if (firstLink) firstLink.focus();
    }
});

console.log('🥃 Tankers Liquor Store - Premium Experience Loaded');
