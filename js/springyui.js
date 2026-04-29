/**
Copyright (c) 2010 Dennis Hotson

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
*/

function initSpringy(canvas, params) {
  var graph = params.graph || new Graph();

  var stiffness = params.stiffness || 350.0;
  var repulsion = params.repulsion || 350.0;
  var damping = params.damping || 50;
  var nodeSelected = params.nodeSelected || null;

  var ctx = canvas.getContext("2d");
  var accentColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--accent")
    .trim();

  var layout = new Layout.ForceDirected(graph, stiffness, repulsion, damping);

  var currentBB = layout.getBoundingBox();
  var targetBB = { bottomleft: new Vector(-2, -2), topright: new Vector(2, 2) };

  Layout.requestAnimationFrame(function adjust() {
    targetBB = layout.getBoundingBox();
    currentBB = {
      bottomleft: currentBB.bottomleft.add(
        targetBB.bottomleft.subtract(currentBB.bottomleft).divide(10),
      ),
      topright: currentBB.topright.add(
        targetBB.topright.subtract(currentBB.topright).divide(10),
      ),
    };
    Layout.requestAnimationFrame(adjust);
  });

  var toScreen = function (p) {
    var size = currentBB.topright.subtract(currentBB.bottomleft);
    var sx = p.subtract(currentBB.bottomleft).divide(size.x).x * canvas.width;
    var sy = p.subtract(currentBB.bottomleft).divide(size.y).y * canvas.height;
    return new Vector(sx, sy);
  };

  var fromScreen = function (s) {
    var size = currentBB.topright.subtract(currentBB.bottomleft);
    var px = (s.x / canvas.width) * size.x + currentBB.bottomleft.x;
    var py = (s.y / canvas.height) * size.y + currentBB.bottomleft.y;
    return new Vector(px, py);
  };

  var selected = null;
  var nearest = null;
  var highlightedNetwork = [];

  canvas.addEventListener("mousedown", function (e) {
    var rect = canvas.getBoundingClientRect();
    var scaleX = canvas.width / rect.width;
    var scaleY = canvas.height / rect.height;
    var p = fromScreen({
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    });
    selected = nearest = layout.nearest(p);

    if (selected.node !== null && nodeSelected) {
      nodeSelected(selected.node);
    }

    renderer.start();
  });

  canvas.addEventListener("mousemove", function (e) {
    var rect = canvas.getBoundingClientRect();
    var scaleX = canvas.width / rect.width;
    var scaleY = canvas.height / rect.height;
    var p = fromScreen({
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    });
    nearest = layout.nearest(p);
    canvas.style.cursor =
      nearest && nearest.node && nearest.node.data.site ? "pointer" : "default";
    renderer.start();
  });

  canvas.addEventListener(
    "touchstart",
    function (e) {
      e.preventDefault();
      var touch = e.touches[0];
      var rect = canvas.getBoundingClientRect();
      var scaleX = canvas.width / rect.width;
      var scaleY = canvas.height / rect.height;
      var p = fromScreen({
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY,
      });
      selected = nearest = layout.nearest(p);
      if (selected.node !== null && nodeSelected) {
        nodeSelected(selected.node);
      }
      renderer.start();
    },
    { passive: false },
  );

  canvas.addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault();
      var touch = e.touches[0];
      var rect = canvas.getBoundingClientRect();
      var scaleX = canvas.width / rect.width;
      var scaleY = canvas.height / rect.height;
      var p = fromScreen({
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY,
      });
      nearest = layout.nearest(p);
      renderer.start();
    },
    { passive: false },
  );

  Node.prototype.getWidth = function () {
    var text = this.data.label !== undefined ? this.data.label : this.id;
    ctx.save();
    ctx.font = "13px 'Monda'";
    var width = ctx.measureText(text).width + 8;
    ctx.restore();
    return width;
  };

  Node.prototype.getHeight = function () {
    return 16;
  };

  var renderer = new Renderer(
    layout,
    function clear() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
    function drawEdge(edge, p1, p2) {
      var x1 = toScreen(p1).x;
      var y1 = toScreen(p1).y;
      var x2 = toScreen(p2).x;
      var y2 = toScreen(p2).y;

      var direction = new Vector(x2 - x1, y2 - y1);
      var normal = direction.normal().normalise();

      var from = graph.getEdges(edge.source, edge.target);
      var to = graph.getEdges(edge.target, edge.source);

      var total = from.length + to.length;

      var n = 0;
      for (var i = 0; i < from.length; i++) {
        if (from[i].id === edge.id) {
          n = i;
        }
      }

      var spacing = 10.0;
      var offset = normal.multiply(
        -((total - 1) * spacing) / 2.0 + n * spacing,
      );

      var s1 = toScreen(p1).add(offset);
      var s2 = toScreen(p2).add(offset);

      var boxWidth = edge.target.getWidth();
      var boxHeight = edge.target.getHeight();

      var intersection = intersect_line_box(
        s1,
        s2,
        { x: x2 - boxWidth / 2.0, y: y2 - boxHeight / 2.0 },
        boxWidth,
        16,
      );
      if (!intersection) {
        intersection = s2;
      }

      var stroke = edge.data.color !== undefined ? edge.data.color : "#FFD700";
      if (
        highlightedNetwork.length > 0 &&
        highlightedNetwork.indexOf(edge.source.id) !== -1 &&
        highlightedNetwork.indexOf(edge.target.id) !== -1
      ) {
        stroke = "#FFD700";
      }

      var weight = edge.data.weight !== undefined ? edge.data.weight : 0.2;
      ctx.lineWidth = weight;
      var arrowWidth = ctx.lineWidth;
      var arrowLength = 8;

      var directional = false;

      var lineEnd = directional
        ? intersection.subtract(
            direction.normalise().multiply(arrowLength * 0.5),
          )
        : s2;

      ctx.strokeStyle = stroke;
      ctx.beginPath();
      ctx.moveTo(s1.x, s1.y);
      ctx.lineTo(lineEnd.x, lineEnd.y);
      ctx.stroke();

      if (directional) {
        ctx.save();
        ctx.fillStyle = stroke;
        ctx.translate(intersection.x, intersection.y);
        ctx.rotate(Math.atan2(y2 - y1, x2 - x1));
        ctx.beginPath();
        ctx.moveTo(-arrowLength, arrowWidth);
        ctx.lineTo(0, 0);
        ctx.lineTo(-arrowLength, -arrowWidth);
        ctx.lineTo(-arrowLength * 0.8, 0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    },
    function drawNode(node, p) {
      var s = toScreen(p);
      ctx.save();
      var boxWidth = node.getWidth();

      var inNetwork = highlightedNetwork.indexOf(node.id) !== -1;
      var isHovered =
        nearest !== null &&
        nearest.node !== null &&
        nearest.node.id === node.id &&
        nearest.node.data.site != null;

      if (inNetwork || isHovered) {
        ctx.fillStyle = inNetwork ? "#FFD700" : accentColor;
        ctx.fillRect(s.x - boxWidth / 2, s.y + 2, boxWidth, 16);
      }

      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.font = "13px 'Monda'";
      ctx.fillStyle = inNetwork ? "#f3f1eb" : isHovered ? "#111" : "white";

      var text = node.data.label !== undefined ? node.data.label : node.id;
      ctx.fillText(text, s.x, s.y + 4);
      ctx.fillText("°", s.x - 3, s.y - 8);

      ctx.restore();
    },
  );

  renderer.start();

  function intersect_line_line(p1, p2, p3, p4) {
    var denom = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);
    if (denom === 0) {
      return false;
    }

    var ua =
      ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denom;
    var ub =
      ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denom;

    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
      return false;
    }

    return new Vector(p1.x + ua * (p2.x - p1.x), p1.y + ua * (p2.y - p1.y));
  }

  function intersect_line_box(p1, p2, p3, w, h) {
    var tl = { x: p3.x, y: p3.y };
    var tr = { x: p3.x + w, y: p3.y };
    var bl = { x: p3.x, y: p3.y + h };
    var br = { x: p3.x + w, y: p3.y + h };

    var result;
    if ((result = intersect_line_line(p1, p2, tl, tr))) {
      return result;
    }
    if ((result = intersect_line_line(p1, p2, tr, br))) {
      return result;
    }
    if ((result = intersect_line_line(p1, p2, br, bl))) {
      return result;
    }
    if ((result = intersect_line_line(p1, p2, bl, tl))) {
      return result;
    }

    return false;
  }
}
