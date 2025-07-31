const CACHE_NAME = 'rays-mppss-v1';
const OFFLINE_URL = 'https://skippers.ru/bossoms_chest/colreg72'; // Главная страница (или кастомная оффлайн-страница)

// Файлы для кэширования (URL должны быть абсолютными!)
const urlsToCache = [
  '/',
  'https://static.tildacdn.com/css/tilda-grid-3.0.min.css',
  'https://static.tildacdn.com/ws/project13630205/tilda-blocks-page72684849.min.css?t=1753270449',
  'https://static.tildacdn.com/css/tilda-animation-2.0.min.css',
  'https://static.tildacdn.com/css/tilda-cover-1.0.min.css',
  'https://static.tildacdn.com/css/tilda-menusub-1.0.min.css',
  'https://static.tildacdn.com/css/tilda-popup-1.1.min.css',
  'https://static.tildacdn.com/css/fonts-tildasans.css',
  'https://static.tildacdn.com/js/tilda-stat-1.0.min.js',
  'https://neo.tildacdn.com/js/tilda-fallback-1.0.min.js',
  'https://static.tildacdn.com/js/tilda-polyfill-1.0.min.js',
  'https://static.tildacdn.com/js/tilda-scripts-3.0.min.js',
  'https://static.tildacdn.com/ws/project13630205/tilda-blocks-page72684849.min.js?t=1753270449',
  'https://static.tildacdn.com/js/tilda-lazyload-1.0.min.js',
  'https://static.tildacdn.com/js/tilda-animation-2.0.min.js',
  'https://static.tildacdn.com/js/tilda-cover-1.0.min.js',
  'https://static.tildacdn.com/js/tilda-menusub-1.0.min.js',
  'https://static.tildacdn.com/js/tilda-menu-1.0.min.js',
  'https://static.tildacdn.com/js/tilda-zero-1.1.min.js',
  'https://static.tildacdn.com/js/hammer.min.js',
  'https://static.tildacdn.com/js/tilda-popup-1.0.min.js',
  'https://static.tildacdn.com/js/tilda-animation-sbs-1.0.min.js',
  'https://static.tildacdn.com/js/tilda-zero-scale-1.0.min.js',
  'https://static.tildacdn.com/js/tilda-skiplink-1.0.min.js',
  'https://static.tildacdn.com/js/tilda-events-1.0.min.js',
  'https://static.tildacdn.com/js/tilda-events-1.0.min.js',
  'https://static.tildacdn.com/tild6539-3333-4535-b965-313932636336/favicon.ico',
  'https://static.tildacdn.com/tild3963-3966-4465-a335-366464356162/favicon.ico',
  'https://static.tildacdn.com/tild3935-6638-4166-b438-643766333938/favicon.svg',
  'https://static.tildacdn.com/tild3563-3763-4063-b633-373764376661/web-app-manifest-192.png'
];

// Установка SW и кэширование
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Перехват запросов
self.addEventListener('fetch', event => {
  // Для навигационных запросов (переход по страницам)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(OFFLINE_URL))
    );
  } else {
    // Для остальных ресурсов (CSS, JS, изображения)
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
  }
});