const CACHE_NAME = 'fastpoint-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/index.css',
  '/images/taxi-icon-192.png',
  '/images/taxi-icon-512.png'
];

// Install
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request)).catch(() => caches.match('/index.html'))
  );
});
