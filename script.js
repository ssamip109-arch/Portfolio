// ============ NAVBAR SCROLL EFFECT ============
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============ HAMBURGER MENU ============
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

function toggleNav() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

function closeNav() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
}

// Close nav on click outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
        closeNav();
    }
});

// ============ SCROLL REVEAL (Intersection Observer) ============
const revealElements = document.querySelectorAll('.reveal');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

revealElements.forEach(el => observer.observe(el));

// ============ CONTACT FORM HANDLER ============
function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-primary');
    btn.textContent = '✓ Message Sent!';
    btn.style.background = '#b8895c';
    setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        e.target.reset();
    }, 2500);
}

// ============ SMOOTH SCROLL FOR OLDER BROWSERS ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});