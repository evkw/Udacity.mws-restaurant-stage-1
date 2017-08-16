self.addEventListener('install', function(event) {
  // Perform install steps
});var CACHE_NAME = 'restaurant-cache';
var urlsToCache = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/css/*.css',
  '/js/*.js',
  '/img/*.jpg'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});