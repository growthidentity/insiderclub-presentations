let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('totalSlides').textContent = totalSlides;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    document.getElementById('currentSlide').textContent = currentSlide + 1;

    // Update presenter photos from localStorage
    updateAllPresenterPhotos();

    // Apply localization to the new slide
    if (window.MarketLocalization) {
        window.MarketLocalization.applyFullLocalization();
    }

    // Update calculator if exists
    if (typeof window.updateCalculator === 'function') {
        window.updateCalculator();
    }
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(n) {
    showSlide(n);
}

// Update all presenter photos from localStorage
function updateAllPresenterPhotos() {
    const savedPhoto = localStorage.getItem('presenterPhoto');
    if (savedPhoto) {
        document.querySelectorAll('.presenter-photo').forEach(img => {
            img.src = savedPhoto;
        });
    }
}

// Update photos on load
window.addEventListener('load', updateAllPresenterPhotos);

// Apply localization on load
window.addEventListener('load', function() {
    if (window.MarketLocalization) {
        window.MarketLocalization.applyFullLocalization();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        return;
    }

    if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevSlide();
    }
});

// Touch navigation
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const deltaX = touchEndX - touchStartX;
    const deltaY = Math.abs(touchEndY - touchStartY);

    // Skip if on setup slide
    if (currentSlide === 0) return;

    // Skip if tapped on interactive element
    if (e.target.closest('button, a, input, select, textarea, .market-option, [onclick]')) return;

    // Horizontal swipe detection
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > deltaY) {
        if (deltaX < 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    } else if (Math.abs(deltaX) < 30 && deltaY < 30) {
        // Tap - go next
        nextSlide();
    }
});
