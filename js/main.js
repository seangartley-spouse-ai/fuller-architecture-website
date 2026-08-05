/* ==========================================================
   FULLER ARCHITECTURE — site behavior
   Reads project data from data/projects.js (global PROJECTS)
   ========================================================== */
(function () {
  "use strict";

  var CATEGORY_ORDER = ["Religious", "Financial", "Civic", "Education", "Commercial", "Veterinary", "Healthcare", "Planning"];

  /* Client-approved projects currently available in the site library. Keep
     these first while the remaining approved project assets are collected. */
  var CURATED_SLUG_ORDER = [
    "riveroaks",
    "yadumc",
    "ccc",
    "twincitybible",
    "mt-tabor-umc",
    "mebane-education",
    "ark-veterinary",
    "bright-vet",
    "country-vet",
    "five-points",
    "happy-tails",
    "island-pet",
    "lewisville-animal",
    "midway-animal",
    "mttaboranimal",
    "northwest-animal",
    "sage-pet",
    "sandy-paws",
    "verdigris-pet",
    "wakefield-veterinary",
    "cardinal-urgent-care",
    "dragonfly-house",
    "mtairydental",
    "pinnacle-urgent-care",
    "summiteye",
    "triad-ocular-facial",
    "davie-county-park",
    "eblib",
    "iredell-courthouse",
    "iredell-jennings-park",
    "mocksville-park",
    "troutmanlib",
    "ycac",
    "junkers-event-center"
  ];

  /* Only publish the projects on the client's approved list. Legacy project
     records remain in the data file so they can be restored without re-entry. */
  var DISPLAY_PROJECTS = CURATED_SLUG_ORDER.map(function (slug) {
    return PROJECTS.find(function (project) { return project.slug === slug; });
  }).filter(Boolean);

  /* Escape data-file values before inserting into HTML. The data files are
     hand-edited (see README), so treat their contents as untrusted text. */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  /* Only allow http(s) links from data files. */
  function safeUrl(u) {
    return /^https?:\/\//i.test(String(u || "")) ? u : "#";
  }
  var HERO_IMAGES = [
    "images/featured/riveroaks/image-01.jpg",
    "images/yadkinvilleumc/main2.jpg",
    "images/ccc/db1.jpg",
    "images/featured/twin-city/image-01.jpeg",
    "images/featured/mt-tabor-umc/image-01.jpg",
    "images/featured/ark-veterinary/image-01.jpeg",
    "images/featured/bright-vet/image-01.jpg",
    "images/featured/verdigris-pet/image-01.jpg",
    "images/featured/triad-ocular-facial/image-02.jpg",
    "images/featured/davie-county-park/image-01.jpg",
    "images/featured/mebane-education/image-04.jpeg",
    "images/featured/mt-airy-dental/image-01.jpeg",
    "images/featured/mt-tabor-animal/image-01.jpeg",
    "images/featured/east-bend-library/image-01.jpg",
    "images/featured/ycac/image-01.jpg"
  ];

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
  var projectResults = document.getElementById("projectResults");
  var showMoreButton = document.getElementById("showMoreProjects");
  var activeFilter = "All";
  var visibleCount = 12;

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
  function curatedIndex(project) {
    var index = CURATED_SLUG_ORDER.indexOf(project.slug);
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
  }

  function clientFirst(projects) {
    return projects.slice().sort(function (a, b) {
      return curatedIndex(a) - curatedIndex(b);
    });
  }

  var allMixed = (function () {
    var buckets = shuffle(CATEGORY_ORDER).map(function (cat) {
      return shuffle(DISPLAY_PROJECTS.filter(function (p) { return p.category === cat; }));
    }).filter(function (b) { return b.length; });
    var mixed = [];
    var round = 0;
    while (mixed.length < DISPLAY_PROJECTS.length) {
      buckets.forEach(function (b) {
        if (b[round]) mixed.push(b[round]);
      });
      round++;
    }
    return clientFirst(mixed);
  })();

  function projectCount(cat) {
    if (cat === "All") return DISPLAY_PROJECTS.length;
    return DISPLAY_PROJECTS.filter(function (p) { return p.category === cat; }).length;
  }

  ["All"].concat(CATEGORY_ORDER).forEach(function (cat) {
    var count = projectCount(cat);
    if (cat !== "All" && count === 0) return;
    var b = document.createElement("button");
    b.className = "filter-btn" + (cat === "All" ? " active" : "");
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", cat === "All" ? "true" : "false");
    b.innerHTML = cat + ' <span class="filter-count">' + count + "</span>";
    b.addEventListener("click", function () {
      activeFilter = cat;
      visibleCount = cat === "All" ? 12 : DISPLAY_PROJECTS.length;
      filterBar.querySelectorAll(".filter-btn").forEach(function (x) {
        x.classList.remove("active");
        x.setAttribute("aria-selected", "false");
      });
      b.classList.add("active");
      b.setAttribute("aria-selected", "true");
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
      : clientFirst(DISPLAY_PROJECTS.filter(function (p) { return p.category === activeFilter; }));
    if (!list.length) {
      grid.innerHTML = '<p class="grid-empty">No projects in this category yet.</p>';
      return;
    }
    var visible = list.slice(0, visibleCount);
    visible.forEach(function (p, idx) {
      if (!p.images || !p.images.length) return;
      var card = document.createElement("article");
      card.className = "project-card";
      card.style.animationDelay = Math.min(idx * 40, 400) + "ms";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", "View project: " + p.title);
      card.innerHTML =
        '<div class="card-media">' +
        '<img src="' + esc(imgPath(p, p.images[0])) + '" alt="' + esc(p.title) + '" loading="lazy">' +
        '<span class="card-cat">' + esc(p.category) + "</span>" +
        "</div>" +
        '<div class="card-body">' +
        '<h3 class="card-title">' + esc(p.title) + "</h3>" +
        (p.location ? '<p class="card-loc">' + esc(p.location) + "</p>" : "") +
        '<span class="card-view">View Project</span>' +
        "</div>";
      function open() { openModal(p); }
      card.addEventListener("click", open);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
      grid.appendChild(card);
    });
    projectResults.textContent = "Showing " + visible.length + " of " + list.length + " projects";
    showMoreButton.parentElement.hidden = visible.length >= list.length;
  }
  showMoreButton.addEventListener("click", function () {
    visibleCount += 12;
    renderGrid();
  });
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
  var modalPanel = modal.querySelector(".modal-panel");

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
    modalDesc.textContent = p.description.replace(/\s*\(Description drafted for client review\.\)\s*$/, "");
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
    if (e.key === "Tab") {
      var focusable = modalPanel.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  /* ---------- In the News ---------- */
  var newsGrid = document.getElementById("newsGrid");
  if (newsGrid && typeof NEWS !== "undefined") {
    NEWS.forEach(function (item) {
      var card = document.createElement("article");
      card.className = "news-card";
      card.innerHTML =
        '<div class="news-meta"><span class="news-source">' + esc(item.source) + "</span>" +
        '<span class="news-date">' + esc(item.date) + "</span></div>" +
        '<h3 class="news-title">' + esc(item.title) + "</h3>" +
        (item.quote ? '<blockquote class="news-quote">&ldquo;' + esc(item.quote) + "&rdquo;</blockquote>" : "") +
        '<p class="news-summary">' + esc(item.summary) + "</p>" +
        '<a class="news-link" href="' + esc(safeUrl(item.url)) + '" target="_blank" rel="noopener">Read the Article</a>';
      newsGrid.appendChild(card);
    });
  }

  /* ---------- Contact form ---------- */
  var formStatus = document.getElementById("formStatus");
  var contactForm = document.getElementById("contactForm");
  /* Pre-launch: form is disarmed via data-disabled so no submissions (and no
     FormSubmit activation email) can be triggered before the site goes live. */
  if (contactForm && contactForm.getAttribute("data-disabled") === "true") {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      formStatus.textContent = "The message form will be activated when the new site launches — until then, please reach us by phone or email above.";
      formStatus.classList.remove("success");
    });
  }
  if (formStatus && window.location.search.indexOf("sent=1") !== -1) {
    formStatus.textContent = "Thank you! Your message has been sent — we'll be in touch soon.";
    formStatus.classList.add("success");
    if (contactForm) contactForm.reset();
    // Clean the query string so a refresh doesn't repeat the message
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", window.location.pathname + "#contact");
    }
  }

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
