function initMeio() {
  var $canvas = jQuery("#graph-canvas");
  $canvas.springy({
    stiffness: 5,
    repulsion: 119500,
    damping: 0.1,
    graph: graph,
    selected: function (node) {
      if (node.data.site) window.open(node.data.site);
    },
  });
}
