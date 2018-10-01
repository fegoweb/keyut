self.addEventListener('install', function(event) {
  // Perform install steps
  var CACHE_NAME = 'keyut';
  var urlsToCache = [
    '/',
    '/about.html',
    '/dansieplace.html',
    '/form.html',
    '/northcreekestates.html',
    '/northpine.html',
    '/parkview.html',
    '/css/style.css',
    '/js/footer.js',
    '/js/nav.js',
    '/js/init.js',
    '/js/materialize.js',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://code.jquery.com/jquery-3.2.1.min.js'
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
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  });
});
