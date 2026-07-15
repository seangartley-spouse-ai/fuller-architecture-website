/* ==========================================================
   FULLER ARCHITECTURE — site behavior
   Reads project data from data/projects.js (global PROJECTS)
   ========================================================== */
(function () {
  "use strict";

  var CATEGORY_ORDER = ["Religious", "Financial", "Civic", "Education", "Commercial", "Planning"];
  var HERO_IMAGES = [];
  for (var i = 1; i <= 11; i++) HERO_IMAGES.push("images/rotator/rotate" + i + ".jpg");

  /* ---------- Header scroll state ---------- */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  navToggle.addEventListener("click", function () {
    var open = header.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  mainNav.addEventListener("click", function (e) {
    if (e.target.matches("a")) {
      header.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Active nav link on scroll ---------- */
  var sections = ["home", "portfolio", "about", "clients", "news", "contact"];
  var navLinks = mainNav.querySelectorAll(".nav-link");
  function setActiveLink() {
    var current = sections[0];
    sections.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) current = id;
    });
    navLinks.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }
  window.addEventListener("scroll", setActiveLink, { passive: true });

  /* ---------- Hero slideshow ---------- */
  var slidesWrap = document.getElementById("heroSlides");
  var slideEls = HERO_IMAGES.map(function (src, idx) {
    var d = document.createElement("div");
    d.className = "hero-slide" + (idx === 0 ? " active" : "");
    d.style.backgroundImage = "url('" + src + "')";
    slidesWrap.appendChild(d);
    return d;
  });
  var slideIdx = 0;
  setInterval(function () {
    slideEls[slideIdx].classList.remove("active");
    slideIdx = (slideIdx + 1) % slideEls.length;
    slideEls[slideIdx].classList.add("active");
  }, 6000);

  /* ---------- Portfolio: filters ---------- */
  var filterBar = document.getElementById("filterBar");
  var grid = document.getElementById("projectGrid");
  var activeFilter = "All";

  /* "All" view: randomized mix of categories, reshuffled on each page load.
     Projects are shuffled within their category, then dealt round-robin
     across categories so every row shows a variety of project types. */
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }
  var allMixed = (function () {
    var buckets = shuffle(CATEGORY_ORDER).map(function (cat) {
      return shuffle(PROJECTS.filter(function (p) { return p.category === cat; }));
    }).filter(function (b) { return b.length; });
    var mixed = [];
    var round = 0;
    while (mixed.length < PROJECTS.length) {
      buckets.forEach(function (b) {
        if (b[round]) mixed.push(b[round]);
      });
      round++;
    }
    return mixed;
  })();

  function projectCount(cat) {
    if (cat === "All") return PROJECTS.length;
    return PROJECTS.filter(function (p) { return p.category === cat; }).length;
  }

  ["All"].concat(CATEGORY_ORDER).forEach(function (cat) {
    var count = projectCount(cat);
    if (cat !== "All" && count === 0) return;
    var b = document.createElement("button");
    b.className = "filter-btn" + (cat === "All" ? " active" : "");
    b.setAttribute("role", "tab");
    b.innerHTML = cat + ' <span class="filter-count">' + count + "</span>";
    b.addEventListener("click", function () {
      activeFilter = cat;
      filterBar.querySelectorAll(".filter-btn").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active");
      renderGrid();
    });
    filterBar.appendChild(b);
  });

  /* ---------- Portfolio: grid ---------- */
  function imgPath(p, file) { return "images/" + p.folder + "/" + file; }

  function renderGrid() {
    grid.innerHTML = "";
    var list = activeFilter === "All"
      ? allMixed
      : PROJECTS.filter(function (p) { return p.category === activeFilter; });
    if (!list.length) {
      grid.innerHTML = '<p class="grid-empty">No projects in this category yet.</p>';
      return;
    }
    list.forEach(function (p, idx) {
      if (!p.images || !p.images.length) return;
      var card = document.createElement("article");
      card.className = "project-card";
      card.style.animationDelay = Math.min(idx * 40, 400) + "ms";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", "View project: " + p.title);
      card.innerHTML =
        '<div class="card-media">' +
        '<img src="' + imgPath(p, p.images[0]) + '" alt="' + p.title.replace(/"/g, "&quot;") + '" loading="lazy">' +
        '<span class="card-cat">' + p.category + "</span>" +
        "</div>" +
        '<div class="card-body">' +
        '<h3 class="card-title">' + p.title + "</h3>" +
        (p.location ? '<p class="card-loc">' + p.location + "</p>" : "") +
        '<span class="card-view">View Project</span>' +
        "</div>";
      function open() { openModal(p); }
      card.addEventListener("click", open);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
      grid.appendChild(card);
    });
  }
  renderGrid();

  /* ---------- Project modal ---------- */
  var modal = document.getElementById("projectModal");
  var modalImage = document.getElementById("modalImage");
  var modalThumbs = document.getElementById("modalThumbs");
  var modalTitle = document.getElementById("modalTitle");
  var modalLocation = document.getElementById("modalLocation");
  var modalCategory = document.getElementById("modalCategory");
  var modalDesc = document.getElementById("modalDesc");
  var current = null;
  var currentIdx = 0;
  var lastFocus = null;

  function showImage(idx) {
    if (!current) return;
    currentIdx = (idx + current.images.length) % current.images.length;
    modalImage.src = imgPath(current, current.images[currentIdx]);
    modalImage.alt = current.title + " — photo " + (currentIdx + 1) + " of " + current.images.length;
    modalThumbs.querySelectorAll("img").forEach(function (t, i) {
      t.classList.toggle("active", i === currentIdx);
    });
  }

  function openModal(p) {
    current = p;
    lastFocus = document.activeElement;
    modalTitle.textContent = p.title;
    modalLocation.textContent = p.location || "";
    modalCategory.textContent = p.category;
    modalDesc.textContent = p.description;
    modalThumbs.innerHTML = "";
    p.images.forEach(function (file, i) {
      var t = document.createElement("img");
      t.src = imgPath(p, file);
      t.alt = "";
      t.addEventListener("click", function () { showImage(i); });
      modalThumbs.appendChild(t);
    });
    showImage(0);
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    document.querySelector(".modal-close").focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    current = null;
    if (lastFocus) lastFocus.focus();
  }

  modal.addEventListener("click", function (e) {
    if (e.target.hasAttribute("data-close")) closeModal();
  });
  document.getElementById("galleryPrev").addEventListener("click", function () { showImage(currentIdx - 1); });
  document.getElementById("galleryNext").addEventListener("click", function () { showImage(currentIdx + 1); });
  document.addEventListener("keydown", function (e) {
    if (modal.hidden) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") showImage(currentIdx - 1);
    if (e.key === "ArrowRight") showImage(currentIdx + 1);
  });

  /* ---------- In the News ---------- */
  var newsGrid = document.getElementById("newsGrid");
  if (newsGrid && typeof NEWS !== "undefined") {
    NEWS.forEach(function (item) {
      var card = document.createElement("article");
      card.className = "news-card";
      card.innerHTML =
        '<div class="news-meta"><span class="news-source">' + item.source + "</span>" +
        '<span class="news-date">' + item.date + "</span></div>" +
        '<h3 class="news-title">' + item.title + "</h3>" +
        (item.quote ? '<blockquote class="news-quote">&ldquo;' + item.quote + "&rdquo;</blockquote>" : "") +
        '<p class="news-summary">' + item.summary + "</p>" +
        '<a class="news-link" href="' + item.url + '" target="_blank" rel="noopener">Read the Article</a>';
      newsGrid.appendChild(card);
    });
  }

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
