// Foundation framework functionality - minimal implementation

(function() {
    // Basic top-bar functionality for mobile
    document.addEventListener('DOMContentLoaded', function() {
        const topBars = document.querySelectorAll('[data-topbar]');

        topBars.forEach(function(topBar) {
            const toggle = topBar.querySelector('.toggle-topbar');
            const section = topBar.querySelector('.top-bar-section');

            if (toggle && section) {
                toggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    section.classList.toggle('expanded');
                });
            }
        });

        // Dropdown functionality
        const dropdowns = document.querySelectorAll('.has-dropdown');
        dropdowns.forEach(function(dropdown) {
            const link = dropdown.querySelector('> a');
            const submenu = dropdown.querySelector('.dropdown');

            if (link && submenu) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                });
            }
        });
    });
})();