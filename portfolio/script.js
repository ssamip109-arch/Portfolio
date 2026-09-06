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

// ============ DESIGN IMAGE VIEWER ============
const designImages = [
    { src: 'projects/assets/HomePage.png', title: 'Boxchampy Homepage' },
    { src: 'projects/assets/About Page.png', title: 'Boxchampy About Page' },
    { src: 'projects/assets/Conatct Page.png', title: 'Boxchampy Contact Page' },
    { src: 'projects/assets/Location Page.png', title: 'Boxchampy Location Page' }
];

const imageViewer = document.getElementById('imageViewer');
const imageViewerImage = document.getElementById('imageViewerImage');
const imageViewerCaption = document.getElementById('imageViewerCaption');
let activeDesignIndex = 0;

function showDesignImage(index) {
    activeDesignIndex = (index + designImages.length) % designImages.length;
    const designImage = designImages[activeDesignIndex];
    imageViewerImage.src = designImage.src;
    imageViewerImage.alt = designImage.title;
    imageViewerCaption.textContent = `${designImage.title} (${activeDesignIndex + 1} of ${designImages.length})`;
}

function openDesignViewer(index) {
    showDesignImage(index);
    imageViewer.hidden = false;
    document.body.classList.add('viewer-open');
}

function closeDesignViewer() {
    imageViewer.hidden = true;
    document.body.classList.remove('viewer-open');
}

document.querySelectorAll('.design-viewer-trigger').forEach(trigger => {
    trigger.addEventListener('click', event => {
        event.preventDefault();
        openDesignViewer(Number(trigger.dataset.designIndex));
    });
});

document.querySelector('.image-viewer-close').addEventListener('click', closeDesignViewer);
document.querySelector('.image-viewer-prev').addEventListener('click', () => showDesignImage(activeDesignIndex - 1));
document.querySelector('.image-viewer-next').addEventListener('click', () => showDesignImage(activeDesignIndex + 1));

imageViewer.addEventListener('click', event => {
    if (event.target === imageViewer) {
        closeDesignViewer();
    }
});

document.addEventListener('keydown', event => {
    if (imageViewer.hidden) {
        return;
    }

    if (event.key === 'Escape') {
        closeDesignViewer();
    } else if (event.key === 'ArrowLeft') {
        showDesignImage(activeDesignIndex - 1);
    } else if (event.key === 'ArrowRight') {
        showDesignImage(activeDesignIndex + 1);
    }
});