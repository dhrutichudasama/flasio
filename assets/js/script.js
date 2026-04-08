function initApp() {
// Currency Dropdown
const currencyDropdown = document.querySelector('.currency-dropdown');
if (currencyDropdown) {
    const currencyMenu = currencyDropdown.querySelector('.dropdown-menu');
    const currencyText = document.querySelector('.currency-text');
    const currencyItems = currencyDropdown.querySelectorAll('.dropdown-item');

    currencyDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
        currencyMenu.classList.toggle('active');
        const languageMenu = document.querySelector('.language-dropdown .dropdown-menu');
        if(languageMenu) languageMenu.classList.remove('active');
    });

    currencyItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const selectedCurrency = this.dataset.currency;
            currencyText.textContent = selectedCurrency;
            currencyMenu.classList.remove('active');
        });
    });
}

// Language Dropdown
const languageDropdown = document.querySelector('.language-dropdown');
if (languageDropdown) {
    const languageMenu = languageDropdown.querySelector('.dropdown-menu');
    const languageText = document.querySelector('.language-text');
    const languageItems = languageDropdown.querySelectorAll('.dropdown-item');

    languageDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
        languageMenu.classList.toggle('active');
        const currencyMenu = document.querySelector('.currency-dropdown .dropdown-menu');
        if(currencyMenu) currencyMenu.classList.remove('active');
    });

    languageItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const selectedLanguage = this.dataset.language;
            languageText.textContent = selectedLanguage;
            languageMenu.classList.remove('active');
        });
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', function() {
    const currencyMenu = document.querySelector('.currency-dropdown .dropdown-menu');
    const languageMenu = document.querySelector('.language-dropdown .dropdown-menu');
    if(currencyMenu) currencyMenu.classList.remove('active');
    if(languageMenu) languageMenu.classList.remove('active');
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
        openSidebarBtn.addEventListener('touchstart', openSidebar, {passive: false});
    }
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', closeSidebar);
    }
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

// tab effect
let titles = ["📢 Come back!", "⚡ Don't forget this..."];
let index = 0;
let interval;

document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        interval = setInterval(() => {
            document.title = titles[index % titles.length];
            index++;
        }, 500);
    } else {
        clearInterval(interval);
        document.title = "Flasio";
    }
});

// sign in section 
const userBtn = document.getElementById("user-btn");
const modal = document.getElementById("user-modal");
const closeBtn = document.getElementById("close-modal");

userBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

// Infinite Scroll for Featured Products Slider
    const productsSlider = document.querySelector('.products-slider');
    if (productsSlider) {
        // Clone elements for infinite scrolling effect
        const products = Array.from(productsSlider.children);

        // --- NEW: Circular Hover Image Swap Logic ---
        products.forEach((product, i) => {
            const productImgContainer = product.querySelector('.product-img');
            const primaryImg = productImgContainer.querySelector('img');
            
            // Add class to primary image
            primaryImg.classList.add('primary-img');

            // Get the next product (looping)
            const nextProduct = products[(i + 2) % products.length];
            const nextImgSrc = nextProduct.querySelector('img').src;

            // Create and add the hover image
            const hoverImg = document.createElement('img');
            hoverImg.src = nextImgSrc;
            hoverImg.classList.add('hover-img');
            productImgContainer.appendChild(hoverImg);
        });
        // --------------------------------------------

        products.forEach(product => {
            const clone = product.cloneNode(true);
            productsSlider.appendChild(clone);
        });

        productsSlider.addEventListener('scroll', () => {
            const halfScrollWidth = productsSlider.scrollWidth / 2;
            
            // If we've scrolled exactly to the end of the original set, loop back transparently
            if (productsSlider.scrollLeft >= halfScrollWidth - 1) {
                productsSlider.style.scrollBehavior = 'auto';
                productsSlider.scrollLeft -= halfScrollWidth;
                
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        productsSlider.style.scrollBehavior = '';
                    });
                });
            }
        });
    }

// second slider (Responsive Infinite Image Slider)
const wrapper = document.querySelector('.slider-wrapper');
const container = document.querySelector(".slider .container");
const originalImages = document.querySelectorAll(".slider .image");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

if (wrapper && container && originalImages.length > 0) {
    let inx = 1;
    let isTransitioning = false;
    
    // clone first and last for infinite loop
    const firstClone = originalImages[0].cloneNode(true);
    const lastClone = originalImages[originalImages.length - 1].cloneNode(true);
    
    firstClone.classList.add('clone');
    lastClone.classList.add('clone');
    
    container.appendChild(firstClone);
    container.insertBefore(lastClone, container.firstChild);
    
    const allImages = document.querySelectorAll(".slider .image");
    
    function updateSlider(animate = true) {
        if (!animate) {
            container.style.transition = 'none';
        } else {
            container.style.transition = 'transform 0.5s ease-in-out';
        }
        
        allImages.forEach((img, index) => {
            img.classList.remove('active');
            if (index === inx) {
                img.classList.add('active');
            }
        });
        
        const wrapperWidth = wrapper.clientWidth;
        // Use offsetWidth to get the layout width without transform scaling
        const itemLayoutWidth = allImages[0].offsetWidth; 
        
        // Gap is 20px based on CSS
        const gap = 20; 
        
        // Total offset to the left edge of the current item
        const offsetLeft = inx * (itemLayoutWidth + gap);
        
        // Offset to center the item in the wrapper
        const centerOffset = (wrapperWidth - itemLayoutWidth) / 2;
        
        const translateValue = centerOffset - offsetLeft;
        container.style.transform = `translateX(${translateValue}px)`;
    }
    
    // Initial setup
    // Small timeout to ensure CSS has calculated the flex layout widths
    setTimeout(() => {
        updateSlider(false);
    }, 50);
    
    // Recalculate on window resize
    window.addEventListener('resize', () => {
        updateSlider(false);
    });
    
    next.addEventListener("click", () => {
        if (isTransitioning) return;
        isTransitioning = true;
        
        inx++;
        updateSlider(true);
        
        setTimeout(() => {
            if (inx >= allImages.length - 1) {
                inx = 1;
                updateSlider(false);
            }
            isTransitioning = false;
        }, 500); // 500ms matches CSS transition
    });
    
    prev.addEventListener("click", () => {
        if (isTransitioning) return;
        isTransitioning = true;
        
        inx--;
        updateSlider(true);
        
        setTimeout(() => {
            if (inx <= 0) {
                inx = allImages.length - 2;
                updateSlider(false);
            }
            isTransitioning = false;
        }, 500); 
    });
}
// back to top button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// footer
// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll(".footer-header").forEach(header => {
//         header.addEventListener("click", () => {
//             header.parentElement.classList.toggle("active");
//         });
//     });
// });
} // End initApp

// hotspot
const hotspots = document.querySelectorAll(".hotspot");

    hotspots.forEach(hotspot => {
        hotspot.addEventListener("click", function (e) {
            e.stopPropagation();

            // Close all other popups
            hotspots.forEach(h => {
                if (h !== hotspot) h.classList.remove("active");
            });

            // Toggle current
            hotspot.classList.toggle("active");
        });
    });

    // Click outside → close all
    document.addEventListener("click", () => {
        hotspots.forEach(h => h.classList.remove("active"));
    });

document.addEventListener('componentsLoaded', initApp);

// Fallback in case components are omitted or already loaded
if (document.readyState === 'complete' || (document.getElementById('header') && document.getElementById('header').innerHTML.trim() !== '')) {
    initApp();
}

// cart Section
const cartWrapper = document.querySelector('.cart-wrapper');

if (cartWrapper) {

    let timeout;

    cartWrapper.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            cartWrapper.classList.remove('active');
        }, 200);
    });

    cartWrapper.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        cartWrapper.classList.add('active'); // 🔥 ye missing tha
    });

}