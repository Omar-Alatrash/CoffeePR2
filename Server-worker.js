const urlsToCache = [
    '/',
    'index.html',
    'manifest.json',
    'coffee.png',
    'coffee2.png',
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('devcoffee-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/style.css',
        '/js/app.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
