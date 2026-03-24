// Currency Dropdown
const currencyDropdown = document.querySelector('.currency-dropdown');
const currencyMenu = currencyDropdown.querySelector('.dropdown-menu');
const currencyText = document.querySelector('.currency-text');
const currencyItems = currencyDropdown.querySelectorAll('.dropdown-item');

currencyDropdown.addEventListener('click', function(e) {
    e.stopPropagation();
    currencyMenu.classList.toggle('active');
    languageMenu.classList.remove('active');
});

currencyItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();
        const selectedCurrency = this.dataset.currency;
        currencyText.textContent = selectedCurrency;
        currencyMenu.classList.remove('active');
    });
});

// Language Dropdown
const languageDropdown = document.querySelector('.language-dropdown');
const languageMenu = languageDropdown.querySelector('.dropdown-menu');
const languageText = document.querySelector('.language-text');
const languageItems = languageDropdown.querySelectorAll('.dropdown-item');

languageDropdown.addEventListener('click', function(e) {
    e.stopPropagation();
    languageMenu.classList.toggle('active');
    currencyMenu.classList.remove('active');
});

languageItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();
        const selectedLanguage = this.dataset.language;
        languageText.textContent = selectedLanguage;
        languageMenu.classList.remove('active');
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function() {
    currencyMenu.classList.remove('active');
    languageMenu.classList.remove('active');
});

// Banner Slider
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
const slideIntervalTime = 5000;
let slideInterval;

function initSlider() {
    if(slides.length === 0) return;
    
    // Initial active states are set in HTML
    startSlideInterval();
}

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
    resetInterval();
}

function prevSlide() {
    showSlide(currentSlide - 1);
    resetInterval();
}

function resetInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
}

function startSlideInterval() {
    slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, slideIntervalTime);
}

if(prevBtn) prevBtn.addEventListener('click', () => {
    prevSlide();
});

if(nextBtn) nextBtn.addEventListener('click', () => {
    nextSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        resetInterval();
    });
});

initSlider();

// Search Modal
const searchBtn = document.getElementById('search-btn');
const searchBtnMobile = document.getElementById('search-btn-mobile');
const searchModal = document.getElementById('search-modal');
const closeSearch = document.getElementById('close-search');
const searchOverlay = document.getElementById('search-overlay');
const searchInput = document.getElementById('search-input');

function openSearchModal(e) {
    if (e) e.preventDefault();
    searchModal.classList.add('active');
    setTimeout(() => {
        searchInput.focus();
    }, 400); // wait for transition
}

function closeSearchModal() {
    searchModal.classList.remove('active');
}

if (searchBtn) {
    searchBtn.addEventListener('click', openSearchModal);
}
if (searchBtnMobile) {
    searchBtnMobile.addEventListener('click', openSearchModal);
}

if (closeSearch) {
    closeSearch.addEventListener('click', closeSearchModal);
}

if (searchOverlay) {
    searchOverlay.addEventListener('click', closeSearchModal);
}

// Header Scroll Animation
const mainSiteHeader = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    // Topbar is 40px, we use a simple threshold
    if (window.scrollY > 40) {
        mainSiteHeader.classList.add('scrolled');
    } else {
        mainSiteHeader.classList.remove('scrolled');
    }
});

// Mobile Sidebar
document.addEventListener("DOMContentLoaded", function() {
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const openSidebarBtn = document.getElementById('open-sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    function openSidebar(e) {
        if(e) e.preventDefault();
        if(mobileSidebar) mobileSidebar.classList.add('active');
        if(sidebarOverlay) sidebarOverlay.classList.add('active');
    }

    function closeSidebar() {
        if(mobileSidebar) mobileSidebar.classList.remove('active');
        if(sidebarOverlay) sidebarOverlay.classList.remove('active');
    }

    if (openSidebarBtn) {
        openSidebarBtn.addEventListener('click', openSidebar);
    }
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', closeSidebar);
    }
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
});