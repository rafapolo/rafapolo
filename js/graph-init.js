function initMeio() {
    initSpringy(document.getElementById('graph-canvas'), {
        stiffness: 5,
        repulsion: 119500,
        damping: 0.1,
        graph: graph,
        nodeSelected: function(node) {
            if (node.data.site) window.open(node.data.site);
        }
    });
}
