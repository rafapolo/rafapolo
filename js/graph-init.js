function initMeio() {
    initSpringy(document.getElementById('graph-canvas'), {
        stiffness: 5,
        repulsion: 119500,
        damping: 0.1,
        graph: graph,
        nodeSelected: function(node) {
            if (!node.data.id) return;
            var match = document.querySelector('.card[data-id="' + node.data.id + '"]');
            if (!match) return;
            if (match.classList.contains('hidden')) {
                var allBtn = document.querySelector('.filter-btn[data-filter="all"]');
                if (allBtn) allBtn.click();
            }
            setTimeout(function() {
                match.scrollIntoView({ behavior: 'smooth', block: 'center' });
                match.classList.add('card-flash');
                setTimeout(function() {
                    match.classList.remove('card-flash');
                }, 500);
            }, match.classList.contains('hidden') ? 200 : 0);
        }
    });
}
