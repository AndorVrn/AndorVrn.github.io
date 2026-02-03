const CACHE_NAME = 'rays-pwa-cache-v2';
const MAIN_PAGE = '/rays/colreg/page72899613.html'; // ГЛАВНАЯ страница

// Файлы для предварительного кэширования
const FILES_TO_CACHE = [
  '/rays/colreg/page72899613.html',
  '/rays/colreg/manifest.json',

  '/rays/colreg/images/tildafavicon.ico',
  '/rays/colreg/images/tild3931-6338-4463-b131-653361363932__-__resize__20x__xorx3140.jpg',
  '/rays/colreg/images/tild3931-6338-4463-b131-653361363932__-__resize__504x__xorx3140.jpg',
  '/rays/colreg/images/tild3931-6338-4463-b131-653361363932__xorx3140.jpg',
  '/rays/colreg/images/tild3235-3934-4763-b038-633937323137__apple-touch-icon.png',
  '/rays/colreg/images/tild3563-3763-4063-b633-373764376661__web-app-manifest-192.png',
  '/rays/colreg/images/tild3831-3862-4134-b331-613339326363__-__empty_____2025-07-21_17-50-.png',
  '/rays/colreg/images/tild3831-3862-4134-b331-613339326363_____2025-07-21_17-50-.png',
  '/rays/colreg/images/tild3832-3234-4261-b465-303439616330__-__resize__20x__question_mark_2svg.png',
  '/rays/colreg/images/tild3832-3234-4261-b465-303439616330__question_mark_2svg.png',
  '/rays/colreg/images/tild6536-3931-4737-b935-643138343761__web-app-manifest-192.png',
  '/rays/colreg/images/tild6632-3464-4361-a637-363231366431__web-app-manifest-192.png',
  '/rays/colreg/images/tildacopy.png',
  '/rays/colreg/images/tildacopy_black.png',
  '/rays/colreg/images/tild3637-3639-4365-a333-613264326161__favicon.svg',
  '/rays/colreg/images/tild3836-3733-4133-b431-346465373061__rhomb.svg',
  '/rays/colreg/images/tild3034-6331-4534-b762-306632623762__-__resize__20x__12.webp',
  '/rays/colreg/images/tild3034-6331-4534-b762-306632623762__12.webp',
  '/rays/colreg/images/tild3064-6162-4735-a639-363061616665__-__resize__20x__15.webp',
  '/rays/colreg/images/tild3064-6162-4735-a639-363061616665__15.webp',
  '/rays/colreg/images/tild3333-3232-4431-b530-623837373236__-__resize__20x__8.webp',
  '/rays/colreg/images/tild3333-3232-4431-b530-623837373236__8.webp',
  '/rays/colreg/images/tild3464-6461-4463-b665-356331363965__-__resize__20x__9.webp',
  '/rays/colreg/images/tild3464-6461-4463-b665-356331363965__9.webp',
  '/rays/colreg/images/tild3538-3934-4338-b939-346335613162__-__resize__20x__18.webp',
  '/rays/colreg/images/tild3538-3934-4338-b939-346335613162__18.webp',
  '/rays/colreg/images/tild3637-6330-4338-a239-376266643833__-__resize__20x__16.webp',
  '/rays/colreg/images/tild3637-6330-4338-a239-376266643833__16.webp',
  '/rays/colreg/images/tild3936-3739-4738-a330-663066366537__-__resize__20x__19.webp',
  '/rays/colreg/images/tild3936-3739-4738-a330-663066366537__19.webp',
  '/rays/colreg/images/tild6161-6432-4632-b831-346635376238__-__resize__20x__6.webp',
  '/rays/colreg/images/tild6161-6432-4632-b831-346635376238__6.webp',
  '/rays/colreg/images/tild6336-6563-4131-a638-306338656331__-__resize__20x__17.webp',
  '/rays/colreg/images/tild6336-6563-4131-a638-306338656331__17.webp',
  '/rays/colreg/images/tild6362-3566-4139-b439-366431616530__-__resize__20x__14.webp',
  '/rays/colreg/images/tild6362-3566-4139-b439-366431616530__14.webp',
  '/rays/colreg/images/tild6432-3530-4438-a234-623363656632__-__resize__20x__10.webp',
  '/rays/colreg/images/tild6432-3530-4438-a234-623363656632__10.webp',
  '/rays/colreg/images/tild6437-3932-4137-a465-323535376332__-__resize__20x__13.webp',
  '/rays/colreg/images/tild6437-3932-4137-a465-323535376332__13.webp',
  '/rays/colreg/images/tild6439-3563-4633-b562-366462623130__-__resize__20x__5.webp',
  '/rays/colreg/images/tild6439-3563-4633-b562-366462623130__5.webp',
  '/rays/colreg/images/tild6662-3363-4833-b465-373233383761__-__resize__20x__7.webp',
  '/rays/colreg/images/tild6662-3363-4833-b465-373233383761__7.webp',
  
  '/rays/colreg/fonts/TildaSans-Black.eot',
  '/rays/colreg/fonts/TildaSans-Black.woff',
  '/rays/colreg/fonts/TildaSans-Black.woff2',
  '/rays/colreg/fonts/TildaSans-Bold.eot',
  '/rays/colreg/fonts/TildaSans-Bold.woff',
  '/rays/colreg/fonts/TildaSans-Bold.woff2',
  '/rays/colreg/fonts/TildaSans-Extrabold.eot',
  '/rays/colreg/fonts/TildaSans-Extrabold.woff',
  '/rays/colreg/fonts/TildaSans-Extrabold.woff2',
  '/rays/colreg/fonts/TildaSans-Light.eot',
  '/rays/colreg/fonts/TildaSans-Light.woff',
  '/rays/colreg/fonts/TildaSans-Light.woff2',
  '/rays/colreg/fonts/TildaSans-Medium.eot',
  '/rays/colreg/fonts/TildaSans-Medium.woff',
  '/rays/colreg/fonts/TildaSans-Medium.woff2',
  '/rays/colreg/fonts/TildaSans-Regular.eot',
  '/rays/colreg/fonts/TildaSans-Regular.woff',
  '/rays/colreg/fonts/TildaSans-Regular.woff2',
  '/rays/colreg/fonts/TildaSans-Semibold.eot',
  '/rays/colreg/fonts/TildaSans-Semibold.woff',
  '/rays/colreg/fonts/TildaSans-Semibold.woff2',
  
  '/rays/colreg/css/fonts-tildasans.css',
  '/rays/colreg/css/tilda-animation-2.0.min.css',
  '/rays/colreg/css/tilda-blocks-page72899613.min.css',
  '/rays/colreg/css/tilda-cover-1.0.min.css',
  '/rays/colreg/css/tilda-grid-3.0.min.css',
  '/rays/colreg/css/tilda-popup-1.1.min.css',
  
  '/rays/colreg/js/hammer.min.js',
  '/rays/colreg/js/lazyload-1.3.min.export.js',
  '/rays/colreg/js/tilda-animation-2.0.min.js',
  '/rays/colreg/js/tilda-animation-sbs-1.0.min.js',
  '/rays/colreg/js/tilda-blocks-page72899613.min.js',
  '/rays/colreg/js/tilda-cover-1.0.min.js',
  '/rays/colreg/js/tilda-events-1.0.min.js',
  '/rays/colreg/js/tilda-fallback-1.0.min.js',
  '/rays/colreg/js/tilda-menu-1.0.min.js',
  '/rays/colreg/js/tilda-menusub-1.0.min.js',
  '/rays/colreg/js/tilda-polyfill-1.0.min.js',
  '/rays/colreg/js/tilda-popup-1.0.min.js',
  '/rays/colreg/js/tilda-scripts-3.0.min.js',
  '/rays/colreg/js/tilda-skiplink-1.0.min.js',
  '/rays/colreg/js/tilda-stat-1.0.min.js',
  '/rays/colreg/js/tilda-zero-1.1.min.js',
  '/rays/colreg/js/tilda-zero-scale-1.0.min.js',
  
  '/rays/colreg/404.html' // Страница для оффлайн-режима
];

const normalizeUrlWithoutQueryParams = (urlStr) => {
  try {
    const urlObj = new URL(urlStr);
    urlObj.search = ''; // Setting the search property to an empty string removes all query params
    // urlObj.hash = ''; // Optionally, you can also strip the hash
    return urlObj.toString();
  } catch (error) {
    // Handle invalid URLs, e.g., if urlStr is not a valid URL format
    console.error("Invalid URL:", error);
    return urlStr; // Or return an error indication
  }
};

// 1. УСТАНОВКА - кэшируем файлы
self.addEventListener('install', event => {
   console.log('[SW] Установка v2...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Кэш v2 открыт, добавляем файлы:', FILES_TO_CACHE);
        
		// Кэшируем с нормализованными URL
        const normalizedUrls = FILES_TO_CACHE.map(url => {
          const fullUrl = new URL(url, self.location.origin).href;
          return normalizeUrlWithoutQueryParams(fullUrl);
        });
		
		const promises = normalizedUrls.map(url => 
          cache.add(url).catch(err => {
            console.error(`[SW] Ошибка кэширования v2 ${url}:`, err);
            return null;
          })
        );
		
        return Promise.all(promises);
      })
      .then(() => {
        console.log('[SW] Установка завершена');
        return self.skipWaiting();
      })
      .catch(err => {
        console.error('[SW] Критическая ошибка установки:', err);
      })
  );
});

// 2. АКТИВАЦИЯ - чистим старый кэш
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
			console.log('[SW] Удаляем старый кэш:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => {
		console.log('[SW] Активация завершена');
		self.clients.claim()
	})
  );
});

// 3. ОБРАБОТКА ЗАПРОСОВ
self.addEventListener('fetch', event => {
  // Пропускаем POST-запросы и другие не-GET
  if (event.request.method !== 'GET') return;
  
  // Только для запросов в нашу папку
  if (!event.request.url.includes('/rays/colreg/')) {
    return; // Пропускаем запросы вне нашей папки
  }
  
  const requestUrl = new URL(event.request.url);
  
  // Если запрос корневой страницы - отдаём page72899613.html
  if (requestUrl.pathname === '/rays/colreg/' || 
      requestUrl.pathname === '/rays/colreg') {
    event.respondWith(caches.match(MAIN_PAGE));
    return;
  }
  
  // Для HTML страниц
  if (event.request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          // Если сеть работает - кэшируем и отдаём
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
			  const cacheKey = normalizeUrlWithoutQueryParams(event.request.url);
              cache.put(cacheKey, responseClone);
			});
          return networkResponse;
        })
		.catch(error => {
          console.log('[SW] Сеть недоступна, ищу в кэше');
          const cacheKey = normalizeUrlWithoutQueryParams(event.request.url);
          return caches.match(cacheKey)
            .then(cachedResponse => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // Fallback на главную страницу
              return caches.match(MAIN_PAGE);
            });
        })
    );
    return;
  }
  
  event.respondWith(
    (async () => {
      const cacheKey = normalizeUrlWithoutQueryParams(event.request.url);
      
      // Пытаемся найти в кэше
      const cachedResponse = await caches.match(cacheKey);
      
      if (cachedResponse) {
        // В фоне обновляем кэш
        event.waitUntil(
          (async () => {
            try {
              const networkResponse = await fetch(event.request);
              if (networkResponse.ok) {
                const responseClone = networkResponse.clone();
                const cache = await caches.open(CACHE_NAME);
                await cache.put(cacheKey, responseClone);
              }
            } catch (error) {
              // Сеть недоступна - оставляем старый кэш
            }
          })()
        );
        
        return cachedResponse;
      }
      
      // Не нашли в кэше - загружаем из сети
      try {
        const networkResponse = await fetch(event.request);
        
        // Кэшируем успешные ответы (status 200-299)
        if (networkResponse.ok) {
          const responseClone = networkResponse.clone();
          const cache = await caches.open(CACHE_NAME);
          await cache.put(cacheKey, responseClone);
        }
        
        return networkResponse;
      } catch (error) {
        // Fallback для разных типов файлов
        const contentType = event.request.headers.get('accept') || '';
        
        if (contentType.includes('image')) {
          // Fallback изображение (1x1 прозрачный PNG)
          const fallbackImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
          return fetch(fallbackImage);
        }
        
        return new Response('Resource unavailable offline', {
          status: 503,
          statusText: 'Service Unavailable Offline'
        });
      }
    })()
  );
});