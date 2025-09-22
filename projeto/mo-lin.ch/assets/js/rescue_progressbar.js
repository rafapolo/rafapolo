// Rescue theme progress bar functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize progress bars
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(function(bar) {
        const percent = bar.getAttribute('data-percent') || 0;
        bar.style.width = percent + '%';
    });
});