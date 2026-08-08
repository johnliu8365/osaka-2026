(() => {
  "use strict";

  const trip = window.TRIP_DATA;
  if (!trip) throw new Error("Trip data was not loaded.");

  const categories = {
    move: { icon: "↗", label: "移動" }, stay: { icon: "⌂", label: "住宿" },
    food: { icon: "🍽", label: "吃" }, sight: { icon: "◉", label: "景點" },
    shopping: { icon: "◻", label: "購物" }, music: { icon: "♫", label: "活動" },
    baseball: { icon: "⚾", label: "棒球" }, coffee: { icon: "☕", label: "咖啡" },
    toy: { icon: "◆", label: "玩具" }, sports: { icon: "◇", label: "運動" }
  };

  const state = { dayIndex: getInitialDayIndex(), city: "All", category: "all" };
  const fallbackCover = "./images/travel-cover-mobile.jpg";
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function dayCover(day) {
    return `url('${new URL(day.coverImage || fallbackCover, document.baseURI).href}')`;
  }

  function cityName(key) {
    return trip.cityNames?.[key] || { name: key, roman: String(key).toUpperCase() };
  }

  function cityLockup(key, className = "city-lockup") {
    const city = cityName(key);
    return `<span class="${className}"><strong>${escapeHTML(city.name)}</strong><small>${escapeHTML(city.roman)}</small></span>`;
  }

  function escapeHTML(value = "") {
    return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
  }

  function getInitialDayIndex() {
    const queryDay = Number(new URLSearchParams(location.search).get("day"));
    if (queryDay >= 1 && queryDay <= trip.days.length) return queryDay - 1;
    const today = new Date();
    const local = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    const exact = trip.days.findIndex(day => day.date === local);
    if (exact >= 0) return exact;
    if (local < trip.startDate) return 0;
    return trip.days.length - 1;
  }

  function formatDate(date, options = { month: "short", day: "numeric" }) {
    return new Intl.DateTimeFormat("en-US", options).format(new Date(`${date}T12:00:00`));
  }

  function minutes(time) {
    const match = String(time).match(/^(\d{1,2}):(\d{2})$/);
    if (!match) return null;
    const hours = Number(match[1]);
    const mins = Number(match[2]);
    return hours * 60 + mins;
  }

  function eventMoment(day) {
    const now = new Date();
    const localDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    const isActualToday = localDate === day.date;
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    if (!isActualToday) return { nowIndex: -1, nextIndex: 0 };
    const nowIndex = day.events.findIndex(event => {
      const start = minutes(event.startTime);
      const end = minutes(event.endTime);
      return start !== null && start <= currentMinutes && (end === null ? 24 * 60 : end) >= currentMinutes;
    });
    const nextIndex = day.events.findIndex(event => {
      const start = minutes(event.startTime);
      return start !== null && start > currentMinutes;
    });
    return { nowIndex, nextIndex };
  }

  function renderToday() {
    const day = trip.days[state.dayIndex];
    const moment = eventMoment(day);
    const nowEvent = moment.nowIndex >= 0 ? day.events[moment.nowIndex] : null;
    const nextEvent = day.events[moment.nextIndex >= 0 ? moment.nextIndex : Math.max(day.events.length - 1, 0)];
    const nowCopy = nowEvent || { startTime: "—", title: state.dayIndex === 0 ? "旅程即將開始" : "自由時間", location: cityName(day.city).name };

    $("#today-content").innerHTML = `
      <div class="hero" style="--hero-image:${dayCover(day)}; --cover-position:${day.coverPosition}">
        <div class="hero-copy">
          <span class="day-kicker">DAY ${day.dayNumber}</span>
          <h1 id="today-heading">${escapeHTML(day.title)}</h1>
          <p class="hero-subtitle">${escapeHTML(day.titleEn || "")}</p>
          <p class="hero-date">${escapeHTML(day.weekday)} · ${formatDate(day.date, { month: "short", day: "numeric" })}</p>
          <div class="hero-route">${cityLockup(day.city, "hero-city")}</div>
        </div>
      </div>
      <div class="now-next-wrap">
        <div class="now-next-grid">
          ${momentCard("NOW", nowCopy, "now")}
          ${momentCard("NEXT", nextEvent, "next")}
        </div>
      </div>
      <section class="timeline-section" aria-labelledby="timeline-heading">
        <div class="section-row"><h2 id="timeline-heading">Today’s route</h2><span>${day.events.length} STOPS</span></div>
        <div class="timeline">
          ${day.events.map((event, index) => eventCard(event, index, moment)).join("")}
        </div>
      </section>`;

    $$("[data-event-id]", $("#today-content")).forEach(button => button.addEventListener("click", () => openEvent(button.dataset.eventId)));
    $("#trip-progress").textContent = `DAY ${day.dayNumber} / ${trip.days.length}`;
  }

  function momentCard(label, event, variant) {
    if (!event) return `<article class="moment-card ${variant}"><p class="moment-label">${label}</p><h2>行程結束</h2></article>`;
    return `<article class="moment-card ${variant}">
      <p class="moment-label">${label}</p>
      <p class="moment-time">${escapeHTML(event.startTime)}</p>
      <h2>${escapeHTML(event.title)}</h2>
      <p>${escapeHTML(event.location || "")}</p>
    </article>`;
  }

  function eventCard(event, index, moment) {
    let status = "";
    let className = "";
    if (index === moment.nowIndex) { status = "NOW"; className = "is-now"; }
    else if (index === moment.nextIndex) { status = "NEXT"; className = "is-next"; }
    else if (moment.nowIndex >= 0 && index < moment.nowIndex) className = "is-past";
    const category = categories[event.category] || { icon: "•", label: event.category };
    return `<article class="timeline-event ${className}">
      <time class="timeline-time">${escapeHTML(event.startTime)}</time><span class="timeline-dot" aria-hidden="true"></span>
      <button class="event-button" type="button" data-event-id="${escapeHTML(event.id)}" aria-label="查看 ${escapeHTML(event.title)} 詳情">
        <div class="event-topline"><span class="category-tag">${category.icon} ${category.label}</span>${status ? `<span class="status-tag">${status}</span>` : ""}</div>
        <h3>${escapeHTML(event.title)}</h3><p>${escapeHTML(event.location || event.description)}</p>
      </button>
    </article>`;
  }

  function renderTrip() {
    $("#day-index").innerHTML = trip.days.map(day => `
      <button class="day-card" type="button" data-day-index="${day.dayNumber - 1}" style="--hero-image:${dayCover(day)}; --cover-position:${day.coverPosition}">
        <span class="day-card-number">DAY ${day.dayNumber}<b>${formatDate(day.date).toUpperCase()}</b></span>
        <div><h2>${escapeHTML(day.title)}</h2><span class="day-card-subtitle">${escapeHTML(day.titleEn || "")}</span><p>${escapeHTML(day.weekday)} · ${escapeHTML(cityName(day.city).name)} ${escapeHTML(cityName(day.city).roman)} · ${day.events.length} stops</p></div>
      </button>`).join("");
    $$("[data-day-index]", $("#day-index")).forEach(button => button.addEventListener("click", () => {
      state.dayIndex = Number(button.dataset.dayIndex);
      renderToday();
      switchView("today");
    }));
  }

  function renderExplore() {
    const cities = ["All", ...trip.cities];
    const categoryKeys = ["all", "sight", "food", "coffee", "shopping", "toy", "sports"];
    $("#city-filters").innerHTML = cities.map(city => city === "All"
      ? filterButton("全部", city, state.city === city, "city")
      : cityFilterButton(city, state.city === city)).join("");
    $("#category-filters").innerHTML = categoryKeys.map(key => filterButton(key === "all" ? "All types" : `${categories[key].icon} ${categories[key].label}`, key, state.category === key, "category")).join("");
    updatePlaces();
    $$("[data-filter-city]").forEach(button => button.addEventListener("click", () => { state.city = button.dataset.filterCity; renderExplore(); }));
    $$("[data-filter-category]").forEach(button => button.addEventListener("click", () => { state.category = button.dataset.filterCategory; renderExplore(); }));
  }

  function filterButton(label, value, active, type) {
    return `<button type="button" class="filter-button ${active ? "is-active" : ""}" data-filter-${type}="${escapeHTML(value)}" aria-pressed="${active}">${escapeHTML(label)}</button>`;
  }

  function cityFilterButton(city, active) {
    const label = cityName(city);
    return `<button type="button" class="filter-button city-filter ${active ? "is-active" : ""}" data-filter-city="${escapeHTML(city)}" aria-pressed="${active}"><span>${escapeHTML(label.name)}</span><small>${escapeHTML(label.roman)}</small></button>`;
  }

  function updatePlaces() {
    const places = trip.places.filter(place => (state.city === "All" || place.city === state.city) && (state.category === "all" || place.category === state.category));
    $("#place-count").textContent = `${places.length} SAVED PLACES`;
    $("#place-list").innerHTML = places.length ? places.map(place => {
      const category = categories[place.category];
      const content = `<span class="place-icon" aria-hidden="true">${category.icon}</span><div><h2>${escapeHTML(place.name)}</h2><p>${escapeHTML(place.nameJa)} · ${escapeHTML(place.area)}<br>${escapeHTML(place.note)}</p></div><span class="place-status">${escapeHTML(place.status)}</span>`;
      return place.mapsUrl ? `<a class="place-card" href="${escapeHTML(place.mapsUrl)}" target="_blank" rel="noreferrer" aria-label="在 Google Maps 開啟 ${escapeHTML(place.name)}">${content}</a>` : `<article class="place-card">${content}</article>`;
    }).join("") : `<p class="empty-state">這個篩選組合還沒有地點。</p>`;
  }

  function renderInfo() {
    $("#info-content").innerHTML = `
      ${infoBlock("Flights", `${trip.flights.length} FLIGHTS`, trip.flights.map(flightCard).join(""))}
      ${infoBlock("Hotels", "2 STAYS", trip.hotels.map(hotelCard).join(""))}
      ${infoBlock("Important notes", "READ BEFORE LEAVING", `<div class="note-card"><ol class="note-list">${trip.notes.map(note => `<li>${escapeHTML(note)}</li>`).join("")}</ol></div>`)}
      ${infoBlock("Useful links", "ONLINE ONLY", `<div class="note-card">${trip.usefulLinks.map(link => `<a class="useful-link" href="${escapeHTML(link.url)}" target="_blank" rel="noreferrer">${escapeHTML(link.label)}</a>`).join("")}</div>`)}
    `;
  }

  function infoBlock(title, meta, content) {
    return `<section class="info-block"><div class="info-block-header"><h2>${escapeHTML(title)}</h2><span>${escapeHTML(meta)}</span></div>${content}</section>`;
  }

  function flightCard(flight) {
    return `<article class="flight-card">
      <div class="flight-route"><span>${escapeHTML(flight.route.split(" → ")[0])}</span><i aria-hidden="true"></i><span>${escapeHTML(flight.route.split(" → ")[1])}</span></div>
      <div class="flight-times"><div><strong>${escapeHTML(flight.departure)}</strong>${cityLockup(flight.from, "flight-city")}</div><div><strong>${escapeHTML(flight.arrival)}</strong>${cityLockup(flight.to, "flight-city")}</div></div>
      <div class="flight-meta"><span>${formatDate(flight.date, { weekday: "short", month: "short", day: "numeric" })}<br>${escapeHTML(flight.flightNumber)}</span><span>Terminal<br><strong>${escapeHTML(flight.terminal || "待確認")}</strong></span></div>
      ${flight.note ? `<p class="flight-note">${escapeHTML(flight.note)}</p>` : ""}
    </article>`;
  }

  function hotelCard(hotel) {
    return `<article class="hotel-card"><div class="hotel-card-top"><div>${cityLockup(hotel.city, "hotel-city")}<h3>${escapeHTML(hotel.name)}</h3><span class="hotel-name-en">${escapeHTML(hotel.nameEn || "")}</span><p>${escapeHTML(hotel.address)}</p></div></div><div class="hotel-dates"><span>${escapeHTML(hotel.stay)}</span><span>IN ${escapeHTML(hotel.checkIn)} · OUT ${escapeHTML(hotel.checkOut)}</span></div><p>${escapeHTML(hotel.note)}</p><div class="quick-actions"><a class="quick-action" href="${escapeHTML(hotel.mapsUrl)}" target="_blank" rel="noreferrer">↗ Google Maps</a></div></article>`;
  }

  function findEvent(id) {
    for (const day of trip.days) {
      const event = day.events.find(item => item.id === id);
      if (event) return { day, event };
    }
    return null;
  }

  function openEvent(id) {
    const match = findEvent(id);
    if (!match) return;
    const { day, event } = match;
    const category = categories[event.category] || { icon: "•", label: event.category };
    const actions = [
      event.mapsUrl && `<a class="quick-action" href="${escapeHTML(event.mapsUrl)}" target="_blank" rel="noreferrer">↗ Google Maps</a>`,
      event.websiteUrl && `<a class="quick-action" href="${escapeHTML(event.websiteUrl)}" target="_blank" rel="noreferrer">↗ Official site</a>`
    ].filter(Boolean).join("");
    const routeParts = (event.transport || "現場確認").split(" → ");
    $("#event-detail").innerHTML = `
      <div class="detail-hero" style="--hero-image:${dayCover(day)}; --cover-position:${day.coverPosition}"><div><span class="category-tag" style="color:white">${category.icon} ${category.label}</span><h1 id="event-dialog-title">${escapeHTML(event.title)}</h1><p>${escapeHTML(event.titleJa || "")} · ${escapeHTML(event.location || "")}</p></div></div>
      <div class="detail-body"><p class="detail-lede">${escapeHTML(event.description || "")}</p>
        <section class="detail-section"><h2>Basic</h2><div class="detail-grid"><div class="detail-cell"><span>DATE</span><strong>${formatDate(day.date, { weekday: "long", month: "short", day: "numeric" })}</strong></div><div class="detail-cell"><span>TIME</span><strong>${escapeHTML(event.startTime)} — ${escapeHTML(event.endTime || "")}</strong></div><div class="detail-cell"><span>AREA</span>${cityLockup(event.area || day.city, "detail-city")}</div><div class="detail-cell"><span>LOCATION</span><strong>${escapeHTML(event.location || "—")}</strong></div></div></section>
        <section class="detail-section"><h2>Getting there</h2><ol class="route-flow">${routeParts.map(part => `<li>${escapeHTML(part)}</li>`).join("")}</ol></section>
        ${event.notes ? `<section class="detail-section"><h2>Keep in mind</h2><div class="note-callout">${escapeHTML(event.notes)}</div></section>` : ""}
        ${actions ? `<div class="quick-actions">${actions}</div>` : ""}
      </div>`;
    const dialog = $("#event-dialog");
    dialog.showModal();
  }

  function switchView(target, updateHash = true) {
    $$(".view").forEach(view => { const active = view.dataset.view === target; view.hidden = !active; view.classList.toggle("is-active", active); });
    $$(".nav-item").forEach(button => { const active = button.dataset.target === target; button.classList.toggle("is-active", active); if (active) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current"); });
    if (updateHash) history.replaceState(null, "", `#${target}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function updateNetworkStatus() {
    const status = $("#network-status");
    const offline = !navigator.onLine;
    status.classList.toggle("is-offline", offline);
    status.innerHTML = `<i></i> ${offline ? "OFFLINE" : "OFFLINE READY"}`;
    if (offline) showToast("已離線，主要行程仍可閱讀");
  }

  let toastTimer;
  function showToast(message) {
    const toast = $("#toast"); toast.textContent = message; toast.classList.add("is-visible");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
  }

  function init() {
    renderToday(); renderTrip(); renderExplore(); renderInfo();
    $$(".nav-item").forEach(button => button.addEventListener("click", () => switchView(button.dataset.target)));
    $$("[data-close-dialog]").forEach(button => button.addEventListener("click", () => $("#event-dialog").close()));
    $("#event-dialog").addEventListener("click", event => { if (event.target === event.currentTarget) event.currentTarget.close(); });
    window.addEventListener("online", updateNetworkStatus); window.addEventListener("offline", updateNetworkStatus); updateNetworkStatus();
    const hash = location.hash.slice(1); if (["today", "trip", "explore", "info"].includes(hash)) switchView(hash, false);
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./service-worker.js", { updateViaCache: "none" })
        .then(registration => registration.update())
        .catch(() => showToast("離線安裝稍後再試"));
    }
  }

  init();
})();
