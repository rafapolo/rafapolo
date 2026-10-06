(function () {
    var VIEW_KEY = "portfolio-view";
    var header = document.getElementById("header");
    var portfolio = document.getElementById("portfolio");
    var cards = Array.prototype.slice.call(
        document.querySelectorAll(".card:not([data-static])"),
    );
    var filterBtns = Array.prototype.slice.call(
        document.querySelectorAll(".filter-btn"),
    );
    var viewBtns = Array.prototype.slice.call(
        document.querySelectorAll(".view-btn"),
    );
    var activeFilter = "all";
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    cards.forEach(function (card, i) {
        card.style.viewTransitionName = "card-" + i;
    });

    if (
        window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
        !reducedMotion.matches
    ) {
        var lantern = document.createElement("div");
        lantern.id = "lantern";
        lantern.setAttribute("aria-hidden", "true");
        document.body.appendChild(lantern);
        var LIGHT_RADIUS = 320;
        var lit = Array.prototype.slice.call(
            document.querySelectorAll(
                ".intro-panel, .card-bio, .card-graph, #portfolio .card, #since, #footer-email",
            ),
        );
        var mx = 0;
        var my = 0;
        var active = false;
        var queued = false;

        function castShadows() {
            lit.forEach(function (el) {
                var r = el.getBoundingClientRect();
                var dx = Math.max(r.left - mx, 0, mx - r.right);
                var dy = Math.max(r.top - my, 0, my - r.bottom);
                var strength = active
                    ? 1 - Math.sqrt(dx * dx + dy * dy) / LIGHT_RADIUS
                    : 0;
                if (strength <= 0 || r.width === 0) {
                    if (el.classList.contains("lit")) el.classList.remove("lit");
                    return;
                }
                var vx = r.left + r.width / 2 - mx;
                var vy = r.top + r.height / 2 - my;
                var len = Math.sqrt(vx * vx + vy * vy) || 1;
                var reach = 3 + 7 * strength;
                el.style.setProperty("--sx", ((vx / len) * reach).toFixed(1) + "px");
                el.style.setProperty("--sy", ((vy / len) * reach).toFixed(1) + "px");
                el.style.setProperty("--so", (0.2 * strength).toFixed(2));
                el.classList.add("lit");
            });
        }

        function frame() {
            queued = false;
            lantern.style.setProperty("--mx", mx + "px");
            lantern.style.setProperty("--my", my + "px");
            lantern.classList.toggle("on", active);
            castShadows();
        }

        function schedule() {
            if (queued) return;
            queued = true;
            requestAnimationFrame(frame);
        }

        window.addEventListener(
            "pointermove",
            function (e) {
                mx = e.clientX;
                my = e.clientY;
                active = true;
                schedule();
            },
            { passive: true },
        );
        window.addEventListener(
            "scroll",
            function () {
                if (active) schedule();
            },
            { passive: true },
        );
        document.addEventListener("mouseout", function (e) {
            if (e.relatedTarget) return;
            active = false;
            schedule();
        });
    }

    window.addEventListener(
        "scroll",
        function () {
            header.classList.toggle("scrolled", window.scrollY > 10);
        },
        { passive: true },
    );

    function updateCount() {
        document.getElementById("card-count").textContent = cards.filter(
            function (c) {
                return !c.classList.contains("hidden");
            },
        ).length;
    }
    updateCount();

    cards.forEach(function (card) {
        var info = card.querySelector(".info");
        (card.dataset.tags || "")
            .trim()
            .split(" ")
            .filter(Boolean)
            .forEach(function (tag) {
                var pill = document.createElement("span");
                pill.className = "card-tag";
                pill.textContent = tag;
                info.appendChild(pill);
            });
    });

    function setView(view) {
        portfolio.classList.toggle("view-grid", view === "grid");
        viewBtns.forEach(function (b) {
            var on = b.dataset.view === view;
            b.classList.toggle("active", on);
            b.setAttribute("aria-pressed", on ? "true" : "false");
        });
    }

    var saved = "grid";
    try {
        saved = localStorage.getItem(VIEW_KEY) || "grid";
    } catch (e) {}
    setView(saved === "list" ? "list" : "grid");

    viewBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            setView(btn.dataset.view);
            try {
                localStorage.setItem(VIEW_KEY, btn.dataset.view);
            } catch (e) {}
        });
    });

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var filter = btn.dataset.filter;
            if (filter === activeFilter) return;
            activeFilter = filter;
            filterBtns.forEach(function (b) {
                var on = b === btn;
                b.classList.toggle("active", on);
                b.setAttribute("aria-pressed", on ? "true" : "false");
            });

            var toHide = [];
            var toShow = [];
            cards.forEach(function (card) {
                var tags = (card.dataset.tags || "").split(" ");
                var match = filter === "all" || tags.indexOf(filter) > -1;
                var hidden = card.classList.contains("hidden");
                if (!match && !hidden) toHide.push(card);
                else if (match && hidden) toShow.push(card);
            });

            function apply() {
                toHide.forEach(function (card) {
                    card.classList.add("hidden");
                });
                toShow.forEach(function (card) {
                    card.classList.remove("hidden");
                });
                updateCount();
            }

            if (document.startViewTransition && !reducedMotion.matches) {
                document.startViewTransition(apply);
                return;
            }

            toHide.forEach(function (card) {
                card.classList.add("fading");
            });

            setTimeout(function () {
                toHide.forEach(function (card) {
                    card.classList.remove("fading");
                });
                toShow.forEach(function (card) {
                    card.classList.add("fading");
                });
                apply();
                requestAnimationFrame(function () {
                    requestAnimationFrame(function () {
                        toShow.forEach(function (card) {
                            card.classList.remove("fading");
                        });
                    });
                });
            }, 220);
        });
    });

    function flashCard(match) {
        var flashed = false;
        function flash() {
            if (flashed) return;
            flashed = true;
            match.classList.add("card-flash");
            match.addEventListener("animationend", function handler() {
                match.classList.remove("card-flash");
                match.removeEventListener("animationend", handler);
            });
        }
        window.addEventListener("scrollend", flash, { once: true });
        setTimeout(flash, 900);
    }

    function initGraph() {
        var linkable = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        initSpringy(document.getElementById("graph-canvas"), {
            stiffness: 5,
            repulsion: 119500,
            damping: 0.1,
            graph: graph,
            nodeSelected: linkable && function (node) {
                if (!node.data.id) return;
                var match = document.querySelector(
                    '.card[data-id="' + node.data.id + '"]',
                );
                if (!match) return;
                var wasHidden = match.classList.contains("hidden");
                if (wasHidden) {
                    var allBtn = document.querySelector(
                        '.filter-btn[data-filter="all"]',
                    );
                    if (allBtn) allBtn.click();
                }
                setTimeout(
                    function () {
                        match.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                        });
                        flashCard(match);
                    },
                    wasHidden ? 460 : 0,
                );
            },
        });
    }

    var bio = document.querySelector(".card-bio .info");
    var bioText = bio && bio.querySelector(".bio-text");
    var bioLink = bio && bio.querySelector(".bio-cv-link");
    var bioFixed = window.matchMedia("(min-width: 1021px)");

    function bioFits(font, size) {
        bioText.style.fontSize = font + "px";
        bioText.style.setProperty("--d", size + "px");
        return bioText.scrollHeight <= size + 1;
    }

    function fitBio() {
        if (!bioText) return;
        bioText.style.fontSize = "";
        bioText.style.removeProperty("--d");
        var style = getComputedStyle(bio);
        var roomW =
            bio.clientWidth -
            parseFloat(style.paddingLeft) -
            parseFloat(style.paddingRight);
        var roomH = bioFixed.matches
            ? bio.clientHeight -
              parseFloat(style.paddingTop) -
              parseFloat(style.paddingBottom)
            : Infinity;
        var room = Math.floor(Math.min(roomW, roomH));
        var font = 20;
        var size = room;
        if (bioFits(font, room)) {
            var lo = 0;
            var hi = room;
            while (hi - lo > 1) {
                var mid = (lo + hi) / 2;
                if (bioFits(font, mid)) hi = mid;
                else lo = mid;
            }
            size = Math.ceil(hi);
        } else {
            var small = 10;
            var big = 20;
            while (big - small > 0.25) {
                var f = (small + big) / 2;
                if (bioFits(f, room)) small = f;
                else big = f;
            }
            font = small;
        }
        bioFits(font, size);
    }

    var bioTimer;
    window.addEventListener("resize", function () {
        clearTimeout(bioTimer);
        bioTimer = setTimeout(fitBio, 120);
    });

    var fontReady =
        document.fonts && document.fonts.load
            ? document.fonts.load("13px Monda")
            : Promise.resolve();
    fontReady.then(initGraph, initGraph);
    var bioFont =
        document.fonts && document.fonts.load
            ? document.fonts.load("16px Monda")
            : Promise.resolve();
    bioFont.then(fitBio, fitBio);
})();
