// Números · service worker: funciona sin internet.
// Página: primero la red (para recibir mejoras), si no hay internet usa la copia guardada.
// Íconos, fuentes y librerías: primero la copia guardada.
const CACHE = 'numeros-v2';
const BASICOS = ['./', './index.html', './manifest.json', './respaldo.js', './icon-192.png', './icon-512.png', './icon-180.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASICOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const esPagina = req.mode === 'navigate' || req.url.endsWith('/index.html');
  if (esPagina) {
    e.respondWith(
      fetch(req).then(res => {
        const copia = res.clone();
        caches.open(CACHE).then(c => c.put('./index.html', copia));
        return res;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }
  e.respondWith(
    caches.match(req).then(guardado => guardado || fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) {
        const copia = res.clone();
        caches.open(CACHE).then(c => c.put(req, copia));
      }
      return res;
    }))
  );
});
