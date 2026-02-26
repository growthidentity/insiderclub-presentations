// ===== Navbar scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Mobile menu =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
    });
});

// ===== Scroll animations =====
const animElements = document.querySelectorAll('[data-anim]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('in-view');
            }, i * 60);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

animElements.forEach(el => observer.observe(el));

// ===== Smooth scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== Form handling =====
const form = document.getElementById('joinForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const original = btn.textContent;
        btn.textContent = 'Aitäh! Võtame ühendust! 🎉';
        btn.style.pointerEvents = 'none';
        setTimeout(() => {
            btn.textContent = original;
            btn.style.pointerEvents = '';
            form.reset();
        }, 3000);
    });
}

// ===== Hide scroll hint after scrolling =====
const scrollHint = document.getElementById('scrollHint');
if (scrollHint) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollHint.style.opacity = '0';
        } else {
            scrollHint.style.opacity = '1';
        }
    }, { passive: true });
}

// ===== Lightbox =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    // Force reflow so transition plays
    lightbox.offsetHeight;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Click on any .zoomable image → open lightbox
document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', (e) => {
        e.stopPropagation();
        openLightbox(img.src, img.alt);
    });
});

// Close: click X button
lightboxClose.addEventListener('click', closeLightbox);

// Close: click backdrop (anywhere outside image)
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Close: press Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});
