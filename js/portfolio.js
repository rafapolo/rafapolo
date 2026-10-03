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
        var mx = 0;
        var my = 0;
        var queued = false;
        window.addEventListener(
            "pointermove",
            function (e) {
                mx = e.clientX;
                my = e.clientY;
                if (queued) return;
                queued = true;
                requestAnimationFrame(function () {
                    queued = false;
                    lantern.style.setProperty("--mx", mx + "px");
                    lantern.style.setProperty("--my", my + "px");
                    lantern.classList.add("on");
                });
            },
            { passive: true },
        );
        document.addEventListener("mouseout", function (e) {
            if (!e.relatedTarget) lantern.classList.remove("on");
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
        initSpringy(document.getElementById("graph-canvas"), {
            stiffness: 5,
            repulsion: 119500,
            damping: 0.1,
            graph: graph,
            nodeSelected: function (node) {
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

    var fontReady =
        document.fonts && document.fonts.load
            ? document.fonts.load("13px Monda")
            : Promise.resolve();
    fontReady.then(initGraph, initGraph);
})();
