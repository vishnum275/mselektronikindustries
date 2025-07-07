'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "11b1b1df79deb070d15fd39bd1f2cc6c",
"assets/AssetManifest.bin.json": "1414765dce253dda54dd6c55041bb583",
"assets/AssetManifest.json": "c2fe62efc3c14be867b13c26b4fb6940",
"assets/assets/banner/AGRICULTURE%2520AUTOMATION%2520(1).png": "e8276123a8d56524993f298de929561a",
"assets/assets/banner/AGRICULTURE%2520AUTOMATION%2520(2).png": "baff450ed1885f617370d5ee46bb4101",
"assets/assets/banner/ARTIFICAL%2520INTELLIGENCE.png": "9a4333e4dcc7c693616dca7586bdf06d",
"assets/assets/banner/AUTOMOTIVE%2520ELECTRONICS%2520(1).png": "8b3d9fc1a19ddf454172fec6981a1293",
"assets/assets/banner/AUTOMOTIVE%2520ELECTRONICS%2520(2).png": "1851560d001a6de8743694563eb9dff9",
"assets/assets/banner/CONSUMER%2520ELECTRONICS.png": "a415737e062342e40341d504dda6b9e6",
"assets/assets/banner/ELECTRONIC%2520MANUFACTURING%2520SERVICES%2520(1).png": "d2ad4911051801d3ec6aecea0dbed984",
"assets/assets/banner/ELECTRONIC%2520MANUFACTURING%2520SERVICES%2520(2).png": "dd2ecfabf16842ca3cafe7d885185dc4",
"assets/assets/banner/ELECTRONIC%2520MANUFACTURING%2520SERVICES%2520(3).png": "b924b4b1f8f202c1d98b42efc56fd662",
"assets/assets/banner/HOME%2520SCREEN.png": "de5f0cabf0d0a93c33d6477477da1ccc",
"assets/assets/banner/IOT%2520SMART%2520CONTROL%2520SYSTEM.png": "497af48f83a4284c78757ae3e3277aa4",
"assets/assets/banner/MEDICAL%2520ELECTRONICS%2520(1).png": "b587928a5f5e5eddf2dde2f3dbb0e61f",
"assets/assets/banner/MEDICAL%2520ELECTRONICS%2520(2).png": "718afb450f4dd3b14ab5cd3a8b5be484",
"assets/assets/banner/ROBOTICS%2520&%2520INDUSTRIAL%2520AUTOMATION.png": "3453e57186979a87da783950b7d835a4",
"assets/assets/banner/TELECOMMUNICATION%2520SYSTEM.png": "d5e5f28ebbe5e2f78c0840f267ef7a4e",
"assets/assets/banner/TEXTILE%2520AUTOMATION.png": "10a6f080cf02c8291d5918a71acc7787",
"assets/assets/cam/1.JPG": "52a5f03a531efaa99b35e822051b8a21",
"assets/assets/cam/2.JPG": "0ed980e5dce2183e7c69d37c7eef76d9",
"assets/assets/cam/3.JPG": "fc8d2d8de79d712d2a352ea917be63c1",
"assets/assets/cam/4.JPG": "03d217309475189f053b9e20702a65e9",
"assets/assets/cam/5.JPG": "6e3ce8c26b33dfc760469ce93de04b8d",
"assets/assets/cam/6.JPG": "a68ab664b23857b8454d0e653b6f76bc",
"assets/assets/cam/7.JPG": "4d91079e453e71826461b3426ca764cd",
"assets/assets/cam/8.JPG": "1a09fc6eb3f885dacb7346babd269f7a",
"assets/assets/cam/9.JPG": "6c23e2bba41c1b515417816a7beea008",
"assets/assets/logo_300.png": "7ac88220571fceb722507f81c1fcc9ac",
"assets/assets/only_logo_250.png": "6b88f28bc75d2925acc77d1cee178856",
"assets/assets/others/e1.png": "8bb4c00499932345cb743145d0c04b33",
"assets/assets/others/e2.jpg": "689ac75875439d3159571fb4fd7bfe35",
"assets/assets/others/e3.jpg": "53374b0572a2ea7a9f8396e31d2150cb",
"assets/assets/others/e4.jpg": "bdd22afc40af037207eee7828e83708c",
"assets/assets/others/e5.jpg": "ba7a3bb1c62cf2cd455e7aa79a3e944d",
"assets/assets/others/homebar.png": "fd5fedc82098a8a80fc02c8921b7f2dd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f6baf8ebe5ac1d8afd9855cb3084b164",
"assets/NOTICES": "66df09dc3374c2628b7e5b94d7adffa1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d98c87c9deb2031ea46b16a27e4e02e3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cee2b778ce29e2a3ae2ce9b605ae8523",
"/": "cee2b778ce29e2a3ae2ce9b605ae8523",
"main.dart.js": "8557fdf0d0d47f3c9ccffd7041487723",
"manifest.json": "39f5bf66789f717c13011d0798bd9ee8",
"version.json": "e250e13c2174c37acbed210447de4d06"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
