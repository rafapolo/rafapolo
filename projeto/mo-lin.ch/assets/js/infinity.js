// Infinite scroll functionality

(function() {
    document.addEventListener('DOMContentLoaded', function() {
        // Check if infinite scroll settings exist
        if (typeof infiniteScroll !== 'undefined') {
            console.log('Infinite scroll initialized with settings:', infiniteScroll);

            // Basic infinite scroll implementation
            let loading = false;

            window.addEventListener('scroll', function() {
                if (loading) return;

                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;

                if (scrollTop + windowHeight >= documentHeight - 1000) {
                    loading = true;
                    console.log('Loading more content...');

                    // Simulate loading delay
                    setTimeout(function() {
                        loading = false;
                    }, 1000);
                }
            });
        }
    });
})();