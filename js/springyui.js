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
  var fontSize = params.fontSize || 13;
  var k = fontSize / 13;
  var font = fontSize + "px 'Monda'";

  var ctx = canvas.getContext("2d");
  var view = { w: canvas.width, h: canvas.height };
  var accentColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--accent")
    .trim();

  var layout = new Layout.ForceDirected(graph, stiffness, repulsion, damping);

  var currentBB = layout.getBoundingBox();
  var targetBB = { bottomleft: new Vector(-2, -2), topright: new Vector(2, 2) };

  var adjusting = false;
  function adjust() {
    targetBB = layout.getBoundingBox();
    var dBL = targetBB.bottomleft.subtract(currentBB.bottomleft);
    var dTR = targetBB.topright.subtract(currentBB.topright);
    currentBB = {
      bottomleft: currentBB.bottomleft.add(dBL.divide(10)),
      topright: currentBB.topright.add(dTR.divide(10)),
    };
    if (dBL.magnitude() + dTR.magnitude() < 0.001) {
      adjusting = false;
      return;
    }
    // the layout stops on a deadline, before this easing catches up with the final bounding box
    renderer.start();
    Layout.requestAnimationFrame(adjust);
  }
  function kickAdjust() {
    if (adjusting) return;
    adjusting = true;
    Layout.requestAnimationFrame(adjust);
  }
  kickAdjust();

  var margin = 20;
  var pad = { left: 0, right: 0, top: margin + 8, bottom: margin + 18 };
  function fitPadding() {
    var size = currentBB.topright.subtract(currentBB.bottomleft);
    var W = view.w;
    var nodes = [];
    layout.eachNode(function (node, point) {
      nodes.push({
        t: (point.p.x - currentBB.bottomleft.x) / size.x,
        half: node.getWidth() / 2 + margin,
      });
    });
    var left = 0, right = 0;
    for (var k = 0; k < 4; k++) {
      var span = W - left - right;
      var minX = Infinity, maxX = -Infinity;
      nodes.forEach(function (n) {
        var x = left + n.t * span;
        minX = Math.min(minX, x - n.half);
        maxX = Math.max(maxX, x + n.half);
      });
      left = Math.max(0, left - minX);
      right = Math.max(0, right + maxX - W);
    }
    pad.left = Math.min(left, W * 0.3);
    pad.right = Math.min(right, W * 0.3);
  }

  var labelHeight = 28 * k;
  var labelGap = 6 * k;
  layout.collide = function () {
    var bb = layout.getBoundingBox();
    var size = bb.topright.subtract(bb.bottomleft);
    var ux = size.x / Math.max(1, view.w - pad.left - pad.right);
    var uy = size.y / Math.max(1, view.h - pad.top - pad.bottom);
    var items = [];
    layout.eachNode(function (node, point) {
      items.push({ point: point, half: (node.getWidth() + labelGap) / 2 });
    });
    var overlapping = false;
    for (var i = 0; i < items.length; i++) {
      for (var j = i + 1; j < items.length; j++) {
        var a = items[i].point, b = items[j].point;
        var reach = items[i].half + items[j].half;
        var dx = (b.p.x - a.p.x) / ux;
        var dy = (b.p.y - a.p.y) / uy;
        var ox = reach - Math.abs(dx);
        var oy = labelHeight - Math.abs(dy);
        if (ox <= 0 || oy <= 0) continue;
        overlapping = true;
        var nx = dx / reach || (Math.random() - 0.5) * 0.01;
        var ny = dy / labelHeight;
        var len = Math.sqrt(nx * nx + ny * ny);
        var push = 0.5 * Math.min(ox, oy);
        var mx = (nx / len) * push * ux;
        var my = (ny / len) * push * uy;
        a.p = new Vector(a.p.x - mx, a.p.y - my);
        b.p = new Vector(b.p.x + mx, b.p.y + my);
      }
    }
    return overlapping;
  };

  var frameBL, frameSize, frameW, frameH;
  function frameTransform() {
    frameBL = currentBB.bottomleft;
    frameSize = currentBB.topright.subtract(frameBL);
    frameW = view.w - pad.left - pad.right;
    frameH = view.h - pad.top - pad.bottom;
  }
  function screenX(p) {
    return pad.left + ((p.x - frameBL.x) / frameSize.x) * frameW;
  }
  function screenY(p) {
    return pad.top + ((p.y - frameBL.y) / frameSize.y) * frameH;
  }

  var fromScreen = function (s) {
    var size = currentBB.topright.subtract(currentBB.bottomleft);
    var px = ((s.x - pad.left) / (view.w - pad.left - pad.right)) * size.x + currentBB.bottomleft.x;
    var py = ((s.y - pad.top) / (view.h - pad.top - pad.bottom)) * size.y + currentBB.bottomleft.y;
    return new Vector(px, py);
  };

  var selected = null;
  var nearest = null;
  var highlightedNetwork = [];

  canvas.addEventListener("mousedown", function (e) {
    var rect = canvas.getBoundingClientRect();
    var scaleX = view.w / rect.width;
    var scaleY = view.h / rect.height;
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
    var scaleX = view.w / rect.width;
    var scaleY = view.h / rect.height;
    var p = fromScreen({
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    });
    nearest = layout.nearest(p);
    canvas.style.cursor =
      nearest && nearest.node && nearest.node.data.id ? "pointer" : "default";
    renderer.start();
  });

  if (nodeSelected) canvas.addEventListener(
    "touchstart",
    function (e) {
      e.preventDefault();
      var touch = e.touches[0];
      var rect = canvas.getBoundingClientRect();
      var scaleX = view.w / rect.width;
      var scaleY = view.h / rect.height;
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

  if (nodeSelected) canvas.addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault();
      var touch = e.touches[0];
      var rect = canvas.getBoundingClientRect();
      var scaleX = view.w / rect.width;
      var scaleY = view.h / rect.height;
      var p = fromScreen({
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY,
      });
      nearest = layout.nearest(p);
      renderer.start();
    },
    { passive: false },
  );

  var fontEpoch = 0;
  if (document.fonts && document.fonts.addEventListener) {
    document.fonts.addEventListener("loadingdone", function () {
      fontEpoch++;
    });
  }

  function labelOf(node) {
    return node.data.label !== undefined ? node.data.label : node.id;
  }

  Node.prototype.getWidth = function () {
    if (this._wFont === font && this._wEpoch === fontEpoch) return this._w;
    ctx.save();
    ctx.font = font;
    this._w = ctx.measureText(labelOf(this)).width + 8 * k;
    ctx.restore();
    this._wFont = font;
    this._wEpoch = fontEpoch;
    return this._w;
  };

  Node.prototype.getHeight = function () {
    return 16 * k;
  };

  var edgeStroke, edgeWidth, nodesStarted;
  var renderer = new Renderer(
    layout,
    function clear() {
      kickAdjust();
      fitPadding();
      frameTransform();
      ctx.clearRect(0, 0, view.w, view.h);
      ctx.globalAlpha = 0.7;
      edgeStroke = edgeWidth = null;
      nodesStarted = false;
    },
    function drawEdge(edge, p1, p2) {
      var x1 = screenX(p1);
      var y1 = screenY(p1);
      var x2 = screenX(p2);
      var y2 = screenY(p2);

      var from = graph.getEdges(edge.source, edge.target);
      var to = graph.getEdges(edge.target, edge.source);

      var total = from.length + to.length;

      var s1x = x1, s1y = y1, s2x = x2, s2y = y2;
      if (total > 1) {
        var n = 0;
        for (var i = 0; i < from.length; i++) {
          if (from[i].id === edge.id) {
            n = i;
          }
        }

        var spacing = 10.0;
        var offset = new Vector(x2 - x1, y2 - y1)
          .normal()
          .normalise()
          .multiply(-((total - 1) * spacing) / 2.0 + n * spacing);
        s1x += offset.x;
        s1y += offset.y;
        s2x += offset.x;
        s2y += offset.y;
      }

      var stroke = edge.data.color !== undefined ? edge.data.color : "#FFD700";
      if (
        highlightedNetwork.length > 0 &&
        highlightedNetwork.indexOf(edge.source.id) !== -1 &&
        highlightedNetwork.indexOf(edge.target.id) !== -1
      ) {
        stroke = "#FFD700";
      }

      var weight = edge.data.weight !== undefined ? edge.data.weight : 0.3;
      if (weight !== edgeWidth) {
        ctx.lineWidth = edgeWidth = weight;
      }
      if (stroke !== edgeStroke) {
        ctx.strokeStyle = edgeStroke = stroke;
      }

      var directional = false;

      var lineEndX = s2x, lineEndY = s2y;
      if (directional) {
        var arrowWidth = weight;
        var arrowLength = 8;
        var boxWidth = edge.target.getWidth();
        var boxHeight = edge.target.getHeight();
        var s1 = new Vector(s1x, s1y);
        var s2 = new Vector(s2x, s2y);
        var intersection =
          intersect_line_box(
            s1,
            s2,
            { x: x2 - boxWidth / 2.0, y: y2 - boxHeight / 2.0 },
            boxWidth,
            16,
          ) || s2;
        var lineEnd = intersection.subtract(
          new Vector(x2 - x1, y2 - y1).normalise().multiply(arrowLength * 0.5),
        );
        lineEndX = lineEnd.x;
        lineEndY = lineEnd.y;
      }

      ctx.beginPath();
      ctx.moveTo(s1x, s1y);
      ctx.lineTo(lineEndX, lineEndY);
      ctx.stroke();

      if (directional) {
        ctx.save();
        ctx.globalAlpha = 1;
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
      if (!nodesStarted) {
        nodesStarted = true;
        ctx.globalAlpha = 1;
        ctx.textAlign = "center";
        // "top" sits lower in WebKit than in Blink, pushing the label out of its box on iOS
        ctx.textBaseline = "middle";
        ctx.font = font;
        ctx.strokeStyle = "white";
        ctx.lineWidth = 1;
      }
      var sx = screenX(p);
      var sy = screenY(p);
      var boxWidth = node.getWidth();

      var inNetwork = highlightedNetwork.length > 0 && highlightedNetwork.indexOf(node.id) !== -1;
      var isNearest = nearest !== null && nearest.node !== null && nearest.node.id === node.id;
      var isHovered = isNearest && nearest.node.data.id != null;

      var text = labelOf(node);
      if (node._catText !== text) {
        node._catText = text;
        node._isCat = /^\[.*\]$/.test(text);
      }
      var isCategory = node._isCat;

      if (inNetwork || isHovered || isCategory) {
        ctx.fillStyle = (inNetwork && isCategory) ? "#d7d4cb" : inNetwork ? "#FFD700" : isCategory ? accentColor : "#d7d4cb";
        ctx.fillRect(sx - boxWidth / 2, sy + 2 * k, boxWidth, 16 * k);
      }

      ctx.fillStyle = inNetwork ? "#111" : isHovered ? "#111" : isCategory ? "#111" : "white";

      ctx.fillText(text, sx, sy + 10 * k);

      ctx.beginPath();
      ctx.arc(sx, sy - 1 * k, 2 * k, 0, 2 * Math.PI);
      ctx.stroke();
    },
  );

  function fitCanvas() {
    var rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    var dpr = window.devicePixelRatio || 1;
    view.w = Math.round(rect.width);
    view.h = Math.round(rect.height);
    canvas.width = Math.round(view.w * dpr);
    canvas.height = Math.round(view.h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  fitCanvas();
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      fitCanvas();
      renderer.start();
    }, 120);
  });

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
