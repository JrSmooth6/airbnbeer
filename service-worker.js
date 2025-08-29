const CACHE_NAME = 'airbnbeer-v1';
const urlsToCache = [
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  '/12f1a851-236a-4877-90d3-1cb71684b1e6.png',
  '/img/hk.jpg',
  '/img/LOGO128.ico',
  '/img/LOGO256.ico'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('Échec du cache :', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request).then((networkResponse) => {
          if (event.request.url.endsWith('.html') || event.request.url.endsWith('.css') || event.request.url.endsWith('.js')) {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          }
          return networkResponse;
        });
      })
  );
});