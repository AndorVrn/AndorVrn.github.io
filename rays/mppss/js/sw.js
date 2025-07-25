const CACHE_NAME = 'rays-pwa-cache-v1';

const urlsToCache = [
  '/',
  '/page72899613.html',
  '/images/tild3235-3934-4763-b038-633937323137__apple-touch-icon.png'
];

// Установка и кэширование ресурсов
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Перехват запросов и отдача из кэша
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});