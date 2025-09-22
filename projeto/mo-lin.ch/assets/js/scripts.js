// Modern MO LIN Website Scripts
// ES6+ JavaScript with enhanced functionality

class MOLINWebsite {
    constructor() {
        this.init();
    }

    init() {
        console.log('🎨 MO LIN website loaded');
        this.initNavigation();
        this.initImages();
        this.initScrollBehavior();
        this.initLazyLoading();
        this.initAccessibility();
    }

    // Enhanced mobile navigation
    initNavigation() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');

        if (mobileToggle && sidebar && overlay) {
            mobileToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleMobileMenu(sidebar, overlay);
            });

            overlay.addEventListener('click', () => {
                this.closeMobileMenu(sidebar, overlay);
            });

            // Close on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && sidebar.classList.contains('open')) {
                    this.closeMobileMenu(sidebar, overlay);
                }
            });
        }

        // Dropdown menus
        this.initDropdowns();
    }

    toggleMobileMenu(sidebar, overlay) {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('open');
        document.body.classList.toggle('menu-open');
    }

    closeMobileMenu(sidebar, overlay) {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
        document.body.classList.remove('menu-open');
    }

    initDropdowns() {
        const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');

        dropdownItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            link?.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    item.classList.toggle('open');
                }
            });
        });
    }

    // Enhanced image handling with lazy loading
    initImages() {
        const images = document.querySelectorAll('img');

        images.forEach(img => {
            // Add alt text if missing
            if (!img.getAttribute('alt')) {
                img.setAttribute('alt', '');
            }

            // Add loading="lazy" for performance
            if (!img.getAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }

            // Error handling
            img.addEventListener('error', () => {
                console.warn('Image failed to load:', img.src);
                img.style.opacity = '0.5';
            });
        });
    }

    // Smooth scroll behavior
    initScrollBehavior() {
        const scrollTopBtn = document.querySelector('.scroll-top');

        if (scrollTopBtn) {
            // Show/hide scroll to top button
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset > 300;
                scrollTopBtn.classList.toggle('visible', scrolled);
            });

            // Smooth scroll to top
            scrollTopBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Modern lazy loading implementation
    initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.add('loaded');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Enhanced accessibility features
    initAccessibility() {
        // Focus management for mobile menu
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const sidebar = document.querySelector('.sidebar');

        if (mobileToggle && sidebar) {
            mobileToggle.addEventListener('click', () => {
                setTimeout(() => {
                    if (sidebar.classList.contains('open')) {
                        const firstLink = sidebar.querySelector('.nav-link');
                        firstLink?.focus();
                    }
                }, 100);
            });
        }

        // Skip to content functionality
        const skipLink = document.querySelector('.skip-link');
        if (skipLink) {
            skipLink.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector('#content') || document.querySelector('main');
                if (target) {
                    target.focus();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new MOLINWebsite();
});

// Export for potential module use
window.MOLINWebsite = MOLINWebsite;