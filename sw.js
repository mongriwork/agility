// 오프라인 저장 — 판 7e5425ca · 먼저 인터넷에서 새것을 받고, 안 되면 저장해 둔 것으로(대회장 인터넷이 약해도 코스는 열린다)
const V = 'agility-7e5425ca', SHELL = ["./", "index.html", "courses.js", "news.js", "ares_open.js", "install.js", "manifest.json", "icon-192.png", "apple-touch-icon.png", "art/dog_I.png", "art/dog_L.png", "art/dog_M.png", "art/dog_S.png", "art/hurdle3d.jpg", "art/hurdle3d.js", "art/hurdle_top.png", "art/hurdle_top_b.png", "art/kinder_logo.jpg", "art/tube.png", "art/wing_l.png", "art/wing_r.png"];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  e.respondWith(fetch(r).then(res => { if (res.ok && (r.url.startsWith(self.location.origin) || r.url.includes('cdnjs.cloudflare.com'))) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); } return res; })
    .catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || caches.match('index.html'))));
});
