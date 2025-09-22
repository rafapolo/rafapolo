// Rescue theme toggle functionality

document.addEventListener('DOMContentLoaded', function() {
    // Toggle functionality for rescue theme elements
    const toggles = document.querySelectorAll('[data-toggle]');

    toggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('data-toggle'));
            if (target) {
                target.style.display = target.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});