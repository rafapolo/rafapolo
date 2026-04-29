function initMeio() {
    initSpringy(document.getElementById('graph-canvas'), {
        stiffness: 5,
        repulsion: 119500,
        damping: 0.1,
        graph: graph,
        nodeSelected: function(node) {
            if (!node.data.site) return;
            var match = null;
            document.querySelectorAll('.card:not([data-static])').forEach(function(card) {
                if (!match && card.href === node.data.site) match = card;
            });
            if (!match) return;
            if (match.classList.contains('hidden')) {
                var allBtn = document.querySelector('.filter-btn[data-filter="all"]');
                if (allBtn) allBtn.click();
            }
            setTimeout(function() {
                match.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, match.classList.contains('hidden') ? 200 : 0);
        }
    });
}
