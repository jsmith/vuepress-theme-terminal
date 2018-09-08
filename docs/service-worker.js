/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "276361f6ae73720539aeeeeafa029183"
  },
  {
    "url": "assets/css/0.styles.bf37f6ba.css",
    "revision": "3cd539354a92487a748cde07457d1b7d"
  },
  {
    "url": "assets/js/2.2727b81b.js",
    "revision": "215264ba1bfb634d6c1931f67facece6"
  },
  {
    "url": "assets/js/3.d7f94699.js",
    "revision": "80cc818427caf16f94780f6475087909"
  },
  {
    "url": "assets/js/4.f8735233.js",
    "revision": "ba5034e6c3ef5dd55b3fc7eacd3424b0"
  },
  {
    "url": "assets/js/5.0ab3b937.js",
    "revision": "e916b298837681dc2bb3aead544da22d"
  },
  {
    "url": "assets/js/app.6dc8b95f.js",
    "revision": "02588ed0a7093ed115f566a71e055b81"
  },
  {
    "url": "index.html",
    "revision": "9fe180023b0032699eed91dc19bd7b95"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
