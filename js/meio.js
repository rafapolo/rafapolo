function initMeio() {
  jQuery('#graph-canvas').springy({
    stiffness: 30,
    repulsion: 120000,
    damping: 0.1,
    graph: graph,
    selected: function(node) {
      if (node.data.site) window.open(node.data.site);
    }
  });
}
