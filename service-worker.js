const CACHE_NAME = "osaka-2026-v10";
const APP_SHELL = [
  "./",
  "./index.html",
  "./css/styles.css?v=10",
  "./js/app.js?v=10",
  "./data/trip.js?v=10",
  "./manifest.json?v=10",
  "./images/travel-cover.jpg",
  "./images/travel-cover-mobile.jpg",
  "./images/day-01-flight-fukuoka.jpg",
  "./images/day-02-fukuoka-open-day.jpg",
  "./images/day-03-baseball.jpg",
  "./images/day-04-shinkansen-osaka.jpg",
  "./images/day-05-osaka-shopping.jpg",
  "./images/day-06-summer-sonic.jpg",
  "./images/day-07-osaka-rest.jpg",
  "./images/day-08-summer-sonic.jpg",
  "./images/day-09-kobe-return.jpg",
  "./images/icon-192.png",
  "./images/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match("./index.html")));
    return;
  }

  event.respondWith(fetch(event.request).then(response => {
    if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()));
    return response;
  }).catch(() => caches.match(event.request)));
});
