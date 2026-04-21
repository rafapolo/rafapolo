// Called by the SPA when the About section is first shown.
// Avoids the original full-page intro animation (background flash, menu hide)
// so it works cleanly as a toggle inside index.html.
function initMeio() {
  jQuery('#graph-canvas').springy({
    stiffness: 50,
    repulsion: 100000,
    damping: 0.1,
    graph: graph,
    selected: function(node) {
      if (node.data.site) window.open(node.data.site);
    }
  });
}
