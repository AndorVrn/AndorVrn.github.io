const CACHE_NAME = 'rays-pwa-cache-v1';

// Файлы для предварительного кэширования
const FILES_TO_CACHE = [
  '/',
  '/page72899613.html',
  '/manifest.json',

  '/images/tildafavicon.ico'
  '/images/tild3931-6338-4463-b131-653361363932__-__resize__20x__xorx3140.jpg'
  '/images/tild3931-6338-4463-b131-653361363932__-__resize__504x__xorx3140.jpg'
  '/images/tild3931-6338-4463-b131-653361363932__xorx3140.jpg'
  '/images/tild3235-3934-4763-b038-633937323137__apple-touch-icon.png'
  '/images/tild3563-3763-4063-b633-373764376661__web-app-manifest-192.png'
  '/images/tild3831-3862-4134-b331-613339326363__-__empty_____2025-07-21_17-50-.png'
  '/images/tild3831-3862-4134-b331-613339326363_____2025-07-21_17-50-.png'
  '/images/tild3832-3234-4261-b465-303439616330__-__resize__20x__question_mark_2svg.png'
  '/images/tild3832-3234-4261-b465-303439616330__question_mark_2svg.png'
  '/images/tild6536-3931-4737-b935-643138343761__web-app-manifest-192.png'
  '/images/tild6632-3464-4361-a637-363231366431__web-app-manifest-192.png'
  '/images/tildacopy.png'
  '/images/tildacopy_black.png'
  '/images/tild3637-3639-4365-a333-613264326161__favicon.svg'
  '/images/tild3836-3733-4133-b431-346465373061__rhomb.svg'
  '/images/tild3034-6331-4534-b762-306632623762__-__resize__20x__12.webp'
  '/images/tild3034-6331-4534-b762-306632623762__12.webp'
  '/images/tild3064-6162-4735-a639-363061616665__-__resize__20x__15.webp'
  '/images/tild3064-6162-4735-a639-363061616665__15.webp'
  '/images/tild3333-3232-4431-b530-623837373236__-__resize__20x__8.webp'
  '/images/tild3333-3232-4431-b530-623837373236__8.webp'
  '/images/tild3464-6461-4463-b665-356331363965__-__resize__20x__9.webp'
  '/images/tild3464-6461-4463-b665-356331363965__9.webp'
  '/images/tild3538-3934-4338-b939-346335613162__-__resize__20x__18.webp'
  '/images/tild3538-3934-4338-b939-346335613162__18.webp'
  '/images/tild3637-6330-4338-a239-376266643833__-__resize__20x__16.webp'
  '/images/tild3637-6330-4338-a239-376266643833__16.webp'
  '/images/tild3936-3739-4738-a330-663066366537__-__resize__20x__19.webp'
  '/images/tild3936-3739-4738-a330-663066366537__19.webp'
  '/images/tild6161-6432-4632-b831-346635376238__-__resize__20x__6.webp'
  '/images/tild6161-6432-4632-b831-346635376238__6.webp'
  '/images/tild6336-6563-4131-a638-306338656331__-__resize__20x__17.webp'
  '/images/tild6336-6563-4131-a638-306338656331__17.webp'
  '/images/tild6362-3566-4139-b439-366431616530__-__resize__20x__14.webp'
  '/images/tild6362-3566-4139-b439-366431616530__14.webp'
  '/images/tild6432-3530-4438-a234-623363656632__-__resize__20x__10.webp'
  '/images/tild6432-3530-4438-a234-623363656632__10.webp'
  '/images/tild6437-3932-4137-a465-323535376332__-__resize__20x__13.webp'
  '/images/tild6437-3932-4137-a465-323535376332__13.webp'
  '/images/tild6439-3563-4633-b562-366462623130__-__resize__20x__5.webp'
  '/images/tild6439-3563-4633-b562-366462623130__5.webp'
  '/images/tild6662-3363-4833-b465-373233383761__-__resize__20x__7.webp'
  '/images/tild6662-3363-4833-b465-373233383761__7.webp'
  
  '/css/fonts-tildasans.css',
  '/css/tilda-animation-2.0.min.css',
  '/css/tilda-blocks-page72899613.min.css',
  '/css/tilda-cover-1.0.min.css',
  '/css/tilda-grid-3.0.min.css',
  '/css/tilda-popup-1.1.min.css',
  
  '/js/hammer.min.js'
  '/js/lazyload-1.3.min.export.js'
  '/js/tilda-animation-2.0.min.js'
  '/js/tilda-animation-sbs-1.0.min.js'
  '/js/tilda-blocks-page72899613.min.js'
  '/js/tilda-cover-1.0.min.js'
  '/js/tilda-events-1.0.min.js'
  '/js/tilda-menu-1.0.min.js'
  '/js/tilda-menusub-1.0.min.js'
  '/js/tilda-polyfill-1.0.min.js'
  '/js/tilda-popup-1.0.min.js'
  '/js/tilda-scripts-3.0.min.js'
  '/js/tilda-skiplink-1.0.min.js'
  '/js/tilda-stat-1.0.min.js'
  '/js/tilda-zero-1.1.min.js'
  '/js/tilda-zero-scale-1.0.min.js'
  
  '/404.html' // Страница для оффлайн-режима
];

// 1. УСТАНОВКА - кэшируем файлы
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// 2. АКТИВАЦИЯ - чистим старый кэш
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. ОБРАБОТКА ЗАПРОСОВ
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Если есть в кэше - отдаём из кэша
        if (response) {
          return response;
        }
        
        // Если нет - загружаем из сети
        return fetch(event.request);
      })
  );
});
