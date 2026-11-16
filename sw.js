// Service worker mínimo: permite instalar la aplicación.
// Los datos sin conexión los gestiona Firestore en el propio navegador.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
