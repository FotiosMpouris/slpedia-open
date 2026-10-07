/* SLP'edia directory page: loads data.json, groups entries onto four shelves,
   and handles search, shelf filters and topic filters. MIT License. */
(function () {
  "use strict";

  var SUGGEST_URL = "mailto:editor@slpedia.world?subject=Suggestion%20for%20SLP%27edia";
  var SHELVES = [
    { key: "tools", label: "Tools", note: "AAC apps and devices you can pick up and use." },
    { key: "technology", label: "Technology", note: "New tech for communication and the studies testing it." },
    { key: "research", label: "Research", note: "Studies, reviews and the researchers behind them." },
    { key: "guides", label: "Guides and groups", note: "Approaches, national programs, communities and voices to follow." }
  ];
  var TOPICS = [
    { key: "people", label: "People" },
    { key: "autism", label: "Autism & kids" },
    { key: "broader", label: "Broader SLP" }
  ];
  var ICONS = {
    tools: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="3"/><path d="M10 17h4"/></svg>',
    technology: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="2.2"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)"/></svg>',
    research: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5C6.5 4 9.5 4 12 5.5v14c-2.5-1.5-5.5-1.5-8 0z"/><path d="M20 5.5C17.5 4 14.5 4 12 5.5v14c2.5-1.5 5.5-1.5 8 0z"/></svg>',
    guides: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.5 3.5 5.5 3.5 8.5s-1 6-3.5 8.5c-2.5-2.5-3.5-5.5-3.5-8.5s1-6 3.5-8.5z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4-4"/></svg>'
  };
  var STAR = "50.0,2.0 56.2,18.6 68.4,5.7 67.8,23.4 83.9,16.1 76.6,32.2 94.3,31.6 81.4,43.8 98.0,50.0 81.4,56.2 94.3,68.4 76.6,67.8 83.9,83.9 67.8,76.6 68.4,94.3 56.2,81.4 50.0,98.0 43.8,81.4 31.6,94.3 32.2,76.6 16.1,83.9 23.4,67.8 5.7,68.4 18.6,56.2 2.0,50.0 18.6,43.8 5.7,31.6 23.4,32.2 16.1,16.1 32.2,23.4 31.6,5.7 43.8,18.6";
  var NEW_COUNT = 3; /* the newest entries (highest ids) get a "New" badge */

  var state = { cat: "all", topic: null, q: "", open: {} };
  var CARDS = [], NEW_IDS = {};

  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function shelfOf(c) {
    var k = c.filterKeys || [];
    if (k.indexOf("tools") > -1) return "tools";
    if (k.indexOf("technology") > -1) return "technology";
    if (k.indexOf("research") > -1) return "research";
    return "guides";
  }
  function matches(c) {
    if (state.topic && (c.filterKeys || []).indexOf(state.topic) === -1) return false;
    if (!state.q) return true;
    var hay = [c.title, c.titleOriginal, c.summary, c.people, c.region].concat(c.filters || [])
      .filter(Boolean).join(" ").toLowerCase();
    return state.q.split(/\s+/).every(function (w) { return hay.indexOf(w) > -1; });
  }
  function byShelf() {
    var out = {};
    SHELVES.forEach(function (s) { out[s.key] = []; });
    CARDS.forEach(function (c) { if (matches(c)) out[shelfOf(c)].push(c); });
    return out;
  }
  function total(key) {
    return key === "all" ? CARDS.length : CARDS.filter(function (c) { return shelfOf(c) === key; }).length;
  }
  /* static decorations */
  $("star-pts").setAttribute("points", STAR);
  $("sicon").innerHTML = ICONS.search;

  var SHOW = window.innerWidth < 600 ? 3 : 5;

  function filtered() { return state.cat !== "all" || !!state.topic; }
  function sync() {
    var clr = $("clear"); if (clr) clr.hidden = !filtered();
    $("shelf-select").dataset.shelf = state.cat;
    $("topic-select").dataset.on = state.topic ? "1" : "";
    document.querySelectorAll(".cat").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.key === state.cat)); });
    document.querySelectorAll(".topic").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.key === state.topic)); });
    $("shelf-select").value = state.cat;
    $("topic-select").value = state.topic || "";
  }

  /* Simple card: title and one line of summary. The whole card is the link. */
  function card(c, i) {
    var a = el("a", "card");
    a.href = c.url; a.target = "_blank"; a.rel = "noopener noreferrer";
    a.style.animationDelay = (i * 40) + "ms";
    if (NEW_IDS[c.id]) a.appendChild(el("span", "new", "New"));
    a.appendChild(el("h3", null, c.title));
    var sum = el("p", "sum", c.summary || ""); a.title = c.summary || "";
    a.appendChild(sum);
    a.appendChild(el("span", "sr-only", " (opens in a new tab)"));
    return a;
  }

  function shelf(s, items, solo) {
    var box = el("section", "shelf shelf-" + s.key);
    box.setAttribute("aria-label", s.label);
    box.style.setProperty("--shelf-bg", "var(--c-" + s.key + ")");
    var h = el("div", "shelf-h");
    var ic = el("span", "ic"); ic.innerHTML = ICONS[s.key]; h.appendChild(ic);
    var tx = el("div"); tx.appendChild(el("h2", "disp", s.label)); tx.appendChild(el("p", null, s.note)); h.appendChild(tx);
    var cnt = el("span", "cnt", String(items.length)); cnt.setAttribute("aria-label", items.length + " entries"); h.appendChild(cnt);
    box.appendChild(h);
    var list = el("div", "list");
    var open = state.q || state.topic || solo || state.open[s.key];
    var shown = open ? items : items.slice(0, s.key === "guides" ? 6 : SHOW);
    shown.forEach(function (c, i) { list.appendChild(card(c, i)); });
    if (!items.length) {
      var e = el("div", "empty");
      e.appendChild(document.createTextNode("Nothing on this shelf matches yet. "));
      var sl = el("a", null, "Email us a suggestion"); sl.href = SUGGEST_URL;
      sl.style.textDecoration = "underline"; sl.style.fontWeight = "700";
      e.appendChild(sl); e.appendChild(document.createTextNode("."));
      list.appendChild(e);
    }
    box.appendChild(list);
    if (!open && items.length > shown.length) {
      var m = el("button", "more", "Show all " + items.length + " on this shelf"); m.type = "button";
      m.addEventListener("click", function () { state.open[s.key] = true; render(); });
      box.appendChild(m);
    }
    return box;
  }

  function render() {
    var g = byShelf();
    var wrap = $("shelves"), gd = $("guides");
    wrap.innerHTML = ""; gd.innerHTML = "";
    if (state.cat === "all") {
      wrap.className = "shelves";
      SHELVES.slice(0, 3).forEach(function (s) { wrap.appendChild(shelf(s, g[s.key], false)); });
      gd.appendChild(shelf(SHELVES[3], g.guides, false));
    } else {
      wrap.className = "shelves solo";
      var s = SHELVES.filter(function (x) { return x.key === state.cat; })[0];
      wrap.appendChild(shelf(s, g[s.key], true));
    }
    var n = 0; Object.keys(g).forEach(function (k) { n += g[k].length; });
    if (state.cat !== "all") {
      var shown = g[state.cat].length;
      $("status").textContent = shown + (shown === 1 ? " entry" : " entries") + " on this shelf";
    } else {
      $("status").textContent = n === CARDS.length
        ? CARDS.length + " entries on " + SHELVES.length + " shelves"
        : n + " of " + CARDS.length + " entries match";
    }
    if (n) {
      $("status").textContent += (window.matchMedia("(hover: none)").matches ? ". Tap" : ". Click") + " any card to open it.";
    }
  }

  function setup(data) {
    CARDS = (data.cards || []).slice().sort(function (a, b) { return b.id - a.id; });
    CARDS.slice(0, NEW_COUNT).forEach(function (c) { NEW_IDS[c.id] = true; });

    var cats = $("cats");
    [{ key: "all", label: "All shelves" }].concat(SHELVES).forEach(function (c) {
      var b = el("button", "cat cat-" + c.key); b.type = "button"; b.dataset.key = c.key;
      if (c.key !== "all") { var dot = el("span", "dot"); dot.setAttribute("aria-hidden", "true"); b.appendChild(dot); }
      b.appendChild(document.createTextNode(c.label));
      b.setAttribute("aria-pressed", String(c.key === state.cat));
      b.addEventListener("click", function () {
        state.cat = (state.cat === c.key && c.key !== "all") ? "all" : c.key;
        sync(); render();
      });
      cats.appendChild(b);
    });
    var topics = $("topics");
    TOPICS.forEach(function (t) {
      var b = el("button", "topic", t.label); b.type = "button"; b.dataset.key = t.key;
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", function () { state.topic = state.topic === t.key ? null : t.key; sync(); render(); });
      topics.appendChild(b);
    });
    /* phones get two plain dropdowns instead of rows of buttons (CSS picks which one shows) */
    var ss = $("shelf-select"), ts = $("topic-select");
    [{ key: "all", label: "All shelves" }].concat(SHELVES).forEach(function (c) {
      var o = el("option", null, c.label + " (" + total(c.key) + ")"); o.value = c.key; ss.appendChild(o);
    });
    TOPICS.forEach(function (t) { var o = el("option", null, t.label); o.value = t.key; ts.appendChild(o); });
    ss.addEventListener("change", function () { state.cat = ss.value; sync(); render(); });
    ts.addEventListener("change", function () { state.topic = ts.value || null; sync(); render(); });
    $("clear").addEventListener("click", function () { state.cat = "all"; state.topic = null; sync(); render(); });
    sync();

    $("q").addEventListener("input", function (e) { state.q = e.target.value.trim().toLowerCase(); render(); });

    if (data.lastChecked) {
      var d = new Date(data.lastChecked + "T12:00:00");
      var nice = isNaN(d) ? data.lastChecked : d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
      $("checked").textContent = "Sources last checked " + nice + ".";
    }
    render();
  }

  fetch("./data.json")
    .then(function (res) { if (!res.ok) throw new Error(res.status); return res.json(); })
    .then(setup)
    .catch(function () {
      $("shelves").innerHTML = '<p class="load-error">The directory could not load. Please refresh the page.</p>';
    });
})();
